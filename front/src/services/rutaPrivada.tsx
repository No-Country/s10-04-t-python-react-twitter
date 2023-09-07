// src/services/authApi.ts
import axios from 'axios';


export interface LoginRequest {
    email: string;
    password: string;
  }
  
  export interface LoginResponse {
    token: string;
  }

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await axios.post("http://18.228.38.17/users/api/login", data, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://127.0.0.1:5173'
    },} );
  console.log(response.data)
  return response.data;
};
