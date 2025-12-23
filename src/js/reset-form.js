import { resetBook } from './api/book-api';
import { refs } from './refs';
import { createTemplateBook } from './render-function';

refs.resetForm.addEventListener('submit', async e => {
  e.preventDefault();

  const formData = new FormData(refs.resetForm);

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

  const id = formData.get('id');
  console.log(id);

  const liElem = refs.bookList.querySelector(`li[data-id='${id}']`);

  setLoader('resetLoader', 'remove');

  const response = await resetBook(bookData, id);
  const markup = createTemplateBook(response);
  liElem.outerHTML = markup;

  setLoader('resetLoader', 'add');

  e.target.reset();
});
