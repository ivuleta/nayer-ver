import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4000/user'});

export const fetchUsers = () => API.get(url);
export const login = (userData) => API.post('/login', userData);
export const signUp = (userData) => API.post('/signup', userData);
