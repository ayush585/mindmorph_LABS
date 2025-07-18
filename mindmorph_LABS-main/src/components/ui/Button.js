import React from 'react';

const Button = ({ children, variant, ...props }) => {
  return (
    <button className={`btn ${variant}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
