import { Children } from "react";

const Button =({onclick,children,variant = "primary", className="",...props}) =>{

    const variants = {
        primary: "bg-[#00493E] text-white hover:bg-[#00382D]",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        danger: "bg-red-500 text-white hover:bg-red-600",
        outline: "border border-[#00493E] text-[#00493E] hover:bg-[#00493E] hover:text-white",
    };

    return(
        <button
            onClick={onclick}
            className={`px-4 py-2 rounded ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );                  
    }
    
export default Button;