import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchBooks } from '../api';

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks().then(data => setBooks(data.items));
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {books.map(book => (
          <li key={book.id} style={{ margin: '20px 0', display: 'flex', alignItems: 'center' }}>
            <img 
              src={book.volumeInfo.imageLinks?.thumbnail} 
              alt={`${book.volumeInfo.title} cover`} 
              style={{ marginRight: '20px', width: '100px', height: '150px', objectFit: 'cover' }}
            />
            <div>
              <h3><Link to={`/book/${book.id}`}>{book.volumeInfo.title}</Link></h3>
              <p>{book.volumeInfo.authors?.join(', ')}</p>
              <p>{book.volumeInfo.publishedDate}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
