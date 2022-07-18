import axios from 'axios';


const api = axios.create({
  // GG Url serveur distant
  // baseURL: 'http://54.37.154.200:3001/api/v1/',
  // GG Url serveur local
  baseURL: 'http://localhost:3001/api/v1/',
});

export default api;
