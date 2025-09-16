import api from '../api/axios.config.js';

export const productService = {
  fetchProducts: () => api.get(`/products.json`),
};