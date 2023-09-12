import axios from "axios";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await axios.post(
    "http://ec2-15-229-1-136.sa-east-1.compute.amazonaws.com/users/api/login",
    data,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://127.0.0.1:5173",
      },
    }
  );
  return response.data;
};
