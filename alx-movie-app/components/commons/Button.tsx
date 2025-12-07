import React from "react";

interface ButtonProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title, action }) => {
  return (
    <button>
      Button
    </button>
  );
};

export default Button;
