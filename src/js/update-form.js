import { updateBook } from './api/book-api';
import { setLoader } from './helpers';
import { refs } from './refs';
import { createTemplateBook } from './render-function';

refs.updateForm.addEventListener('submit', async e => {
  e.preventDefault();

  const formData = new FormData(refs.updateForm);

  const bookData = {
    author: formData.get('author') || undefined,
    title: formData.get('title') || undefined,
    pages: +formData.get('pages') || undefined,
    year: +formData.get('year') || undefined,
    description: formData.get('description') || undefined,
    genre: formData.get('genre') || undefined,
    image: formData.get('image') || undefined,
    price: +formData.get('price') || undefined,
  };

  const id = formData.get('id');
  console.log(refs.loader);

  setLoader('updateLoader', 'remove');
  try {
    const response = await updateBook(bookData, id);
    const markup = createTemplateBook(response);

    const liElem = refs.bookList.querySelector(`li[data-id='${id}']`);
    liElem.outerHTML = markup;
  } catch {
    console.log('kapets');
  }

  setLoader('updateLoader', 'add');

  e.target.reset();
});
