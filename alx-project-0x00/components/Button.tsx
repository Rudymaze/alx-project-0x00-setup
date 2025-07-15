import React from "react";

interface ButtonProps {
  title: string;
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-lg" | "rounded-full";
}

const sizeClasses = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({ title, size, shape }) => {
  const classes = `bg-blue-500 text-white font-semibold ${sizeClasses[size]} ${shape} hover:bg-blue-600 transition-colors duration-300`;

  return <button className={classes}>{title}</button>;
};

export default Button;
