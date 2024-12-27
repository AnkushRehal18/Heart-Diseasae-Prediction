import React from 'react';

const TextInput = ({ placeholder, ...props }) => {
  return <input type="text" placeholder={placeholder || 'Enter text'} {...props} />;
};

export default TextInput;
