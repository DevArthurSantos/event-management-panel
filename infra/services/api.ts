import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://ThiagoLifters.github.io/api_test/api',
});