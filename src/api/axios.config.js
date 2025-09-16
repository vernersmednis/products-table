import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL,
  timeout: 5000,
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    console.error('Error fetching data: ', error);
    // Handle errors here or throw them to be handled where the function is called
    return error;
  }
);

export default axiosInstance;