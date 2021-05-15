import React, { ReactNode } from "react";
import "./button.css";

type customProps = {
  color?: string;
  children: ReactNode;
};

export type buttonPropsType = customProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ color, children, ...rest }: buttonPropsType) => {
  return (
    <button className="x3qty-button" {...rest}>
      {children}
    </button>
  );
};

export default Button;
