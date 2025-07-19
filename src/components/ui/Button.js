import React from 'react';

const Button = ({ children, variant, ...props }) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'cyber':
        return 'bg-gradient-to-r from-neon-blue to-neon-purple text-white px-6 py-3 rounded-lg border border-neon-blue/50 hover:border-neon-blue transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,243,255,0.5)]';
      case 'cyber-outline':
        return 'border-2 border-neon-blue text-neon-blue px-6 py-3 rounded-lg hover:bg-neon-blue hover:text-black transition-all duration-300';
      default:
        return 'bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors';
    }
  };

  return (
    <button className={getVariantClasses()} {...props}>
      {children}
    </button>
  );
};

export default Button;
