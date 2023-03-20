import axios from 'axios';

const envBaseUrl = import.meta.env.VITE_REACT_EDN_POINT;

export const axiosClient = axios.create({
  baseURL: envBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 2000,
});
