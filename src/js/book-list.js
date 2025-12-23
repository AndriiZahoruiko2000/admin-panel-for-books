import { deleteBook, getBook } from './api/book-api';
import { refs } from './refs';
import { createTemplateBooks } from './render-function';

document.addEventListener('DOMContentLoaded', async () => {
  const response = await getBook();
  const markup = createTemplateBooks(response);
  refs.bookList.innerHTML = markup;
});

refs.bookList.addEventListener('click', async e => {
  if (e.target.nodeName !== 'BUTTON') return;

  const bookIds = e.target.dataset.id;

  const response = await deleteBook(bookIds);

  const liElem = e.target.closest('li');
  liElem.remove();
});

refs.bookList.addEventListener('click', async e => {
  if (e.target.nodeName === e.currentTarget) return;
  const liElem = e.target.closest('li');
  const id = liElem.dataset.id;
  refs.updateForm.elements.id.value = id;
});

refs.bookList.addEventListener('click', async e => {
  if (e.target.nodeName === e.currentTarget) return;
  const liElem = e.target.closest('li');
  const id = liElem.dataset.id;
  refs.resetForm.elements.id.value = id;
});
