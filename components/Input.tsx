import React, { ChangeEvent, useState } from 'react';

interface InputProps {
  type: 'text' | 'currency' | 'number';
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className?: string;
  name?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  value,
  onChange,
  label,
  className = '',
  name = '',
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const getInputType = () => {
    switch (type) {
      case 'currency':
      case 'number':
        return 'number';
      default:
        return 'text';
    }
  };

  const getCurrencyMask = (value: string) => {
    const maskedValue = value.replace(/\D/g, '');
    return parseFloat(maskedValue).toLocaleString('en-US', {
      minimumFractionDigits: 2,
    });
  };

  const formattedValue =
    type === 'currency' ? getCurrencyMask(value as string) : value;

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="mb-4">
      <label
        className={`block mb-2 text-gray-700 ${
          isFocused || formattedValue ? 'hidden' : 'block'
        }`}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        type={getInputType()}
        value={formattedValue}
        onChange={onChange}
        className={`px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
          isFocused ? 'ring-2 ring-indigo-500' : ''
        } ${className}`}
        name={name}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default Input;
