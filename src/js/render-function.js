export function createTemplateBook(book) {
  return `<li class="book-card" data-id="${book.id}">
  <img
    class="book-card__img"
    src="${book.image}"
    alt="Обкладинка книги Harry Potter"
    loading="lazy"
  />


  <div class="book-card__body">
    <div class="book-card__top">
      <div>
        <h3 class="book-card__title">${book.title}</h3>
        <p class="book-card__author">${book.author}</p>
      </div>
      <div class="book-card__price">${book.price}</div>
    </div>


    <p class="book-card__desc">
      ${book.description}
    </p>


    <ul class="book-card__meta">
      <li><span>Рік:</span> ${book.year}</li>
      <li><span>Сторінок:</span> ${book.price}</li>
      <li><span>Жанр:</span> ${book.genre}</li>
    </ul>


    <button class="book-card__btn" type="button" data-id="${book.id}">Видалити</button>
  </div>
</li>
`;
}

export function createTemplateBooks(books) {
  return books.map(createTemplateBook).join('');
}
//!================================================

export function createTemplateUser(user) {
  return `<li data-id="${user.id}">
  <h2>${user.randomName}</h2>
<span>${user.age}</span>
<span>${user.balance}</span>
<button>+</button>
<button>-</button>
  </li>`;
}

export function createTemplateUsers(users) {
  return users.map(createTemplateUser).join('');
}
