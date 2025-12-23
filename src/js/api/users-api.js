import axios from 'axios';

export async function getUser() {
  const res = await axios.get(`http://localhost:3000/users`);
  return res.data;
}

export async function setUser(user) {
  const res = await axios.post(`http://localhost:3000/users`, user);
  return res.data;
}

export async function updateUser(user, id) {
  const res = await axios.patch(`http://localhost:3000/users/${id}`, user);
  return res.data;
}

export async function deleteUser(id) {
  const res = await axios.delete(`http://localhost:3000/users/${id}`);
  return res.data;
}

export async function getUserbyIds(id) {
  const res = await axios.get(`http://localhost:3000/users/${id}`);
  return res.data;
}
