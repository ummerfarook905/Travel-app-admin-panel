import { use } from "react"
import React, { useEffect } from "react";

const Toast =({message, onclose})=>{
    useEffect(()=>{
        const timer =setTimeout(onclose,3000);
        return ()=> clearTimeout(timer);
    },[onclose]);


    return(
        <div className="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded-md shadow-lg">
            {message}
        </div>
    )
}
export default Toast;