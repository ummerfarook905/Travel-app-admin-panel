import React, { useEffect } from "react";

const Toast = ({ message, onclose, type="success" }) => {
  useEffect(() => {
    const timer = setTimeout(onclose, 3000);
    return () => clearTimeout(timer);
  }, [onclose]);

  return (
     <div className="fixed top-20 right-4 transform z-50 animate-fade-in">
      <div
        className={clsx(
          "px-3 py-2 rounded-lg shadow-xl flex items-center gap-2 transition-all duration-300",
          {
            "bg-green-600 text-white": type === "success",
            "bg-red-600 text-white animate-shake": type === "error",
          }
        )}
      >
        <svg
          className={clsx(
            "w-5 h-5 flex-shrink-0",
            {
              "text-white animate-bounce": type === "success",
              "text-white": type === "error",
            }
          )}
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
        <span className="text-sm">{message}</span>
      </div>
    </div>
  );
};
export default Toast;

 