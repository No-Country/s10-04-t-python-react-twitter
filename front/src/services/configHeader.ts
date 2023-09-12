import axios from 'axios';


const authCredentials = {
  username: 'admin@gmail.com',
  password: 'admin',
};

// Create an Axios instance with default headers
export const axiosWithAuth = axios.create({
  baseURL: 'http://ec2-15-229-1-136.sa-east-1.compute.amazonaws.com/tweets/api/',
  auth: authCredentials, 
});