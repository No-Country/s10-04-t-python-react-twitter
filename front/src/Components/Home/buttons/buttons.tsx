import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({ variant = "primary", children, ...props }: ButtonProps) {
  const variantClasses = {
    "primary": "bg-blue-500 text-white w-16 h-8 rounded-full",
    "secondary": "text-center"
  };

  const buttonClasses = `${variantClasses[variant]} `;
  
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}
