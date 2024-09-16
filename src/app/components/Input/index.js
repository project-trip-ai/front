'use client';
import React from 'react';

const Input = React.forwardRef(
  (
    {
      label,
      id,
      name,
      type = 'text',
      placeholder = '',
      required = false,
      focus = 'focus:border-indigo-500',
    },
    ref,
  ) => {
    return (
      <div>
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-medium text-gray-700 block mb-2">
            {label}
          </label>
        )}
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          ref={ref} // La ref est maintenant correctement passée à l'élément input
          className={`w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                   focus:outline-none ${focus} focus:ring-0`}
        />
      </div>
    );
  },
);

export default Input;
