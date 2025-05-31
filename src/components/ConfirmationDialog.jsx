import React from "react";

const ConfirmationDialog = ({ message, onCancel, onConfirm, variant = "danger" }) => {
  // Determine colors based on variant
  const isSuccess = variant === "success";
  
  const iconBgClass = isSuccess 
    ? "bg-green-50 dark:bg-green-900/20" 
    : "bg-red-50 dark:bg-red-900/20";
  
  const iconColorClass = isSuccess 
    ? "text-green-500 dark:text-green-400" 
    : "text-red-500 dark:text-red-400";
  
  const confirmButtonClass = isSuccess
    ? "bg-green-500 hover:bg-green-600"
    : "bg-red-500 hover:bg-red-600";
  
  const iconPath = isSuccess
    ? "M5 13l4 4L19 7" // Checkmark path
    : "M12 9v2m0 4h.01M5.062 20h13.876c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 17c-.77 1.333.192 3 1.722 3z";

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 w-full max-w-md border border-gray-200 dark:border-gray-700 animate-scaleIn">
        <div className="flex flex-col space-y-4">
          {/* Icon - Now dynamic based on variant */}
          <div className="flex items-center justify-center">
            <div className={`p-3 ${iconBgClass} rounded-full`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-8 w-8 ${iconColorClass}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={iconPath}
                />
              </svg>
            </div>
          </div>

          {/* Message */}
          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-1">
              Are you sure?
            </h3>
            <p className="text-gray-500 dark:text-gray-400">{message}</p>
          </div>

          {/* Buttons - Confirm button now dynamic */}
          <div className="flex justify-center space-x-4 pt-2">
            <button
              onClick={onCancel}
              className="px-5 py-2.5 text-sm font-medium rounded-lg border border-gray-300 text-gray-700 dark:text-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className={`px-5 py-2.5 text-sm font-medium rounded-lg text-white shadow-sm cursor-pointer ${confirmButtonClass}`}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;