import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchBooks } from '../api';

function Search() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    const data = await fetchBooks(query);
    setBooks(data.items);
  };

  return (
    <div>
      <h2>Search Books</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title, author, genre"
        />
        <button type="submit">Search</button>
      </form>
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

export default Search;
