import axios from 'axios';

export const authAxios = axios.create({
  baseURL: 'http://43.203.244.152:8080',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
