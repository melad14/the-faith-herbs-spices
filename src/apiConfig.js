import axios from 'axios';

// Prevent browser/server caching for GET requests
axios.interceptors.request.use((config) => {
  if (config.method === 'get') {
    config.params = {
      ...config.params,
      _: new Date().getTime()
    };
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// We use relative paths so they work on any domain they are deployed to.
// Our frontend code includes local fallbacks for development runs on localhost:3000.
export const API_URL = '/admin/api.php';
export const CONTACT_URL = '/admin/contact.php';
export const UPLOADS_URL = '/admin/';
