import axios from 'axios';


const authCredentials = {
  username: 'admin@gmail.com',
  password: 'admin',
};

// Create an Axios instance with default headers
export const axiosWithAuth = axios.create({
  baseURL: 'http://15.229.1.136/tweets/api/',
  auth: authCredentials, 
});