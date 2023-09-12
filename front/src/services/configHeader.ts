import axios from 'axios';


const usernameJSON = localStorage.getItem("username");
const passwordJSON = localStorage.getItem("password");

const authCredentials = {
  username: usernameJSON ? JSON.parse(usernameJSON) : null,
  password: passwordJSON ? JSON.parse(passwordJSON) : null,
};


// Create an Axios instance with default headers
export const axiosWithAuth = axios.create({
  baseURL: 'https://twitter-api-6tse.onrender.com/tweets/api/',
  auth: authCredentials, 
});