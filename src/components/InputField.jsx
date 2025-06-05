// components/InputField.jsx
import React from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const InputField = ({
  label,
  type,
  name,
  register,
  error,
  icon,
  showPasswordToggle,
  onTogglePassword,
  showPassword,
}) => (
  <div className="mb-4">
    <label className="block text-gray-600 mb-1">{label}</label>
    <div className={`flex items-center border rounded px-2 ${
      error ? 'border-red-500' : 'border-gray-300'
    }`}>
      <span className={`${error ? 'text-red-500' : 'text-gray-400'}`}>{icon}</span>
      <input
        type={type}
        placeholder={`Enter ${label.toLowerCase()}`}
        {...register(name)}
        className="w-full py-2 focus:outline-none ml-2"
      />
      {showPasswordToggle && (
        <button
          type="button"
          onClick={onTogglePassword}
          className="text-gray-500 hover:text-gray-600"
        >
       <span  className='cursor-pointer'>{showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</span> 
        </button>
      )}
    </div>
    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
  </div>
);

export default InputField;