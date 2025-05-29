import React, { useEffect } from "react";

const Toast = ({ message, onclose }) => {
  useEffect(() => {
    const timer = setTimeout(onclose, 3000);
    return () => clearTimeout(timer);
  }, [onclose]);

  return (
    <div className="fixed top-20 right-4 transform -translate-x-1/2 z-50 animate-fade-in">
      <div className="bg-green-600 text-white px-2 py-1 rounded-lg shadow-xl flex items-center">
          <svg 
          className="w-5 h-5 mr-2 flex-shrink-0" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 13l4 4L19 7" 
          />
        </svg>
        <span className="font-small">{message}</span>
      </div>
    </div>
  );
};
export default Toast;

 