import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface FormFieldProps {
  label: string;
  type: 'text' | 'number' | 'select';
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  options?: Option[];
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  type,
  id,
  value,
  onChange,
  options
}) => {
  const baseClassName = "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500";

  return (
    <div>
      <label htmlFor={id} className="block text-gray-700 mb-2">
        {label}
      </label>
      {type === 'select' && options ? (
        <select
          id={id}
          value={value}
          onChange={onChange}
          className={baseClassName}
          required
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          className={baseClassName}
          required
        />
      )}
    </div>
  );
}