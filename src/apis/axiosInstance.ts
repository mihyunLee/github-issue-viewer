import axios from 'axios';
import { BASE_URL } from '../constants';

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-GitHub-Api-Version': '2022-11-28',
  },
});

instance.interceptors.request.use((config) => {
  if (!config.headers.Authorization) {
    config.headers.Authorization = `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`;
  }
  return config;
});
