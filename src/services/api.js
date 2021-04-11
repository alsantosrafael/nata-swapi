import axios from 'axios';

const api = axios.create({
  baseUrl: 'https://swapi.dev/api'
});

export default api;
