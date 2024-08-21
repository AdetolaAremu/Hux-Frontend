import React from "react";

interface TextInputProps {
  label?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  placeholder?: string;
  error?: string | number;
  icon?: React.ReactNode;
  inputWidth?: string;
  extraClass?: string;
  type?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  name,
  placeholder = "",
  error = "",
  icon = null,
  inputWidth = "w-full",
  extraClass = "",
  type = "text",
}) => {
  return (
    <div className="relative">
      <div className="relative">
        <input
          type={type}
          className={`block ${inputWidth} ${extraClass} className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
        />
        {icon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
      </div>
      {error && <div className="text-red-600 text-sm">{error}</div>}
    </div>
  );
};

export default TextInput;
