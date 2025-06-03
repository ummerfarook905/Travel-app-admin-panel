import React, { useEffect } from "react";
import { CheckCircle, XCircle } from "lucide-react"; // or use SVGs manually

const Toast = ({ message, onclose, type = "success" }) => {
  useEffect(() => {
    const timer = setTimeout(onclose, 3000);
    return () => clearTimeout(timer);
  }, [onclose]);

  return (
    <div className="fixed top-6 right-6 z-50 animate-slide-fade-in-out">
      <div
        className={`flex items-center gap-3 px-5 py-3 rounded-xl shadow-lg text-white 
          ${type === "success" ? "bg-[#28a745]" : "bg-[#dc3545]"}`}
        style={{
          minWidth: "250px",
          maxWidth: "350px",
          fontWeight: 500,
          fontSize: "15px",
        }}
      >
        {type === "success" ? (
          <CheckCircle className="w-5 h-5 text-white animate-pop" />
        ) : (
          <XCircle className="w-5 h-5 text-white animate-shake" />
        )}
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Toast;
