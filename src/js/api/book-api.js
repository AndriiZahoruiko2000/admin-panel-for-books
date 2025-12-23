import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export async function getBook() {
  const res = await axios.get('/book');
  return res.data;
}

export async function createBook(book) {
  const res = await axios.post('/book', book);
  return res.data;
}

export async function updateBook(book, id) {
  const res = await axios.patch(`/book/${id}`, book);
  return res.data;
}

export async function resetBook(book, id) {
  const res = await axios.put(`/book/${id}`, book);
  return res.data;
}

export async function deleteBook(id) {
  const res = await axios.delete(`/book/${id}`);
  return res.data;
}
