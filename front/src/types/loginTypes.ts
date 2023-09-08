import { ReactNode } from "react";

export interface FormDataSignin {
  email: string;
  password: string;
}

export interface UserResponseSignin {
  id: string;
  token: string;
}

export interface FormDataSignUp {
  name: string;
  email: string;
  password: string;
}
export interface UserResponseSignUp {
  id: string;
  name: string;
  email: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}
