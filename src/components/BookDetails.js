import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBookDetails } from '../api';

function BookDetails({ user }) {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState('');

  useEffect(() => {
    fetchBookDetails(id).then(data => setBook(data));

    const storedReviews = JSON.parse(localStorage.getItem('reviews')) || {};
    setReviews(storedReviews[id] || []);
  }, [id]);

  const handleAddReview = () => {
    if (!user) {
      alert('Please login to leave a review');
      return;
    }

    const newReview = {
      user: user,
      text: reviewText,
      date: new Date().toISOString()
    };

    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);

    const storedReviews = JSON.parse(localStorage.getItem('reviews')) || {};
    storedReviews[id] = updatedReviews;
    localStorage.setItem('reviews', JSON.stringify(storedReviews));

    setReviewText('');
  };

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h2>{book.volumeInfo.title}</h2>
      <img 
        src={book.volumeInfo.imageLinks?.thumbnail} 
        alt={`${book.volumeInfo.title} cover`} 
        style={{ width: '200px', height: '300px', objectFit: 'cover' }}
      />
      <p>{book.volumeInfo.description}</p>
      <p><strong>Authors:</strong> {book.volumeInfo.authors?.join(', ')}</p>
      <p><strong>Published Date:</strong> {book.volumeInfo.publishedDate}</p>

      <h3>Reviews</h3>
      {reviews.map((review, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <p><strong>{review.user}</strong> ({new Date(review.date).toLocaleString()}):</p>
          <p>{review.text}</p>
        </div>
      ))}

      <h3>Add a Review</h3>
      <textarea
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        placeholder="Write your review here"
        rows="4"
        style={{ width: '100%' }}
      />
      <button onClick={handleAddReview}>Submit Review</button>
    </div>
  );
}

export default BookDetails;
