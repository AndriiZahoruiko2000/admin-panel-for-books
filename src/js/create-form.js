import { createBook } from './api/book-api';
import { refs } from './refs';
import { createTemplateBook } from './render-function';
console.log(refs.createForm);

refs.createForm.addEventListener('submit', async e => {
  e.preventDefault();

  const formData = new FormData(refs.createForm);

  const bookData = {
    author: formData.get('author'),
    title: formData.get('title'),
    pages: +formData.get('pages'),
    year: +formData.get('year'),
    description: formData.get('description'),
    genre: formData.get('genre'),
    image: formData.get('image'),
    price: +formData.get('price'),
  };

  setLoader('createLoader', 'remove');

  const response = await createBook(bookData);
  const markup = createTemplateBook(response);
  refs.bookList.insertAdjacentHTML('beforeend', markup);

  setLoader('createLoader', 'add');

  e.target.reset();
});
