import axios from 'axios';

const API = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`,
});

export const addShow = (showData) => API.post('/shows', showData);
export const fetchMovies = () => API.get('/movies'); // assuming a movies API exists
