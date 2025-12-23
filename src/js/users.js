import {
  deleteUser,
  getUser,
  getUserbyIds,
  setUser,
  updateUser,
} from './api/users-api';
import { refs } from './refs';
import { createTemplateUser, createTemplateUsers } from './render-function';

document.addEventListener('DOMContentLoaded', async e => {
  const response = await getUser();
  const markup = createTemplateUsers(response);
  refs.usersList.innerHTML = markup;
});

//!================================================

refs.userCreateBtn.addEventListener('click', async e => {
  console.log('clicked');
  const user = randomUser();

  const response = await setUser(user);
  const markup = createTemplateUser(response);
  refs.usersList.insertAdjacentHTML('beforeend', markup);
});

//!================================================

refs.userDeleteBtn.addEventListener('click', async e => {
  const liIndex = Math.floor(
    (Math.random() * 100000) % refs.usersList.children.length
  );

  const randomLi = refs.usersList.children[liIndex];
  console.log(randomLi);

  const randomIds = randomLi.dataset.id;
  console.log(randomIds);

  const response = await deleteUser(randomIds);
  randomLi.remove();
});

//!================================================

refs.userUpdateBtn.addEventListener('click', async e => {
  const liIndex = Math.floor(
    (Math.random() * 100000) % refs.usersList.children.length
  );

  const randomLi = refs.usersList.children[liIndex];
  console.log(randomLi);

  const randomIds = randomLi.dataset.id;
  console.log(randomIds);

  const randomBalance = Math.round(Math.random() * 1000);

  const response = await updateUser({ balance: randomBalance }, randomIds);
  const markup = createTemplateUser(response);
  randomLi.outerHTML = markup;
});

refs.usersList.addEventListener('click', async e => {
  if (e.target.nodeName !== 'BUTTON') return;

  const li = e.target.closest('li');
  const id = li.dataset.id;

  if (e.target.textContent === '+') {
    const response = await getUserbyIds(id);
    const updatedBalance = response.balance + 100;
    const updatedResponse = await updateUser({ balance: updatedBalance }, id);
    const markup = createTemplateUser(updatedResponse);
    li.outerHTML = markup;
  } else {
    const response = await getUserbyIds(id);
    const updatedBalance = response.balance - 100;
    const updatedResponse = await updateUser({ balance: updatedBalance }, id);
    const markup = createTemplateUser(updatedResponse);
    li.outerHTML = markup;
  }
});

refs.addForm.addEventListener('submit', async e => {
  e.preventDefault();
  const formData = new FormData(refs.addForm);

  const inputValue = formData.get('number');

  for (let i = 0; i < inputValue; i += 1) {
    const user = randomUser();
    const response = setUser(user);
  }

  const newResponse = await getUser();
  const markup = createTemplateUsers(newResponse);
  refs.usersList.innerHTML = markup;
});

function randomUser() {
  const userNames = [
    'Andrii',
    'Volodymyr',
    'Alex',
    'Katya',
    'Ania',
    'Iryna',
    'sasha',
    'Oleh',
  ];
  const index = Math.round((Math.random() * 100000) % userNames.length);
  const user = {
    randomName: userNames[index],
    balance: Math.round(Math.random() * 1000),
    age: Math.round(Math.random() * 50 + 10),
  };
  return user;
}
