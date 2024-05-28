const API_KEY = 'AIzaSyCMNC5X_yLfK74J3nb7y32PYyJvJb3NQbc';
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

export const fetchBooks = async (query = 'harry potter') => {
  const response = await fetch(`${BASE_URL}?q=${query}&key=${API_KEY}`);
  const data = await response.json();
  return data;
};

export const fetchBookDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}?key=${API_KEY}`);
  const data = await response.json();
  return data;
};
