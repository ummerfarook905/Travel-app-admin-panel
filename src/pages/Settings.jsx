
// const Settings = () => {
//   return (
//     <div>
//        <h1>Settings Page</h1>
//     </div>
//   );
// };

// export default Settings;




// src/pages/Settings.jsx

// import React from "react";
// import { useSelector } from "react-redux";
// import { FiUser, FiLock, FiBell } from "react-icons/fi";

// export default function Settings() {
//   const user = useSelector((state) => state.user); // assuming you have a user slice

//   return (
//     <div className="min-h-screen bg-[#F3F4FF] p-6">
//       <h2 className="text-2xl font-bold mb-6">Settings</h2>

//       <div className="space-y-6">

//         {/* Profile Info Section */}
//         <div className="bg-white p-6 rounded-xl shadow-sm">
//           <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
//             <FiUser /> Profile Information
//           </h3>
//           <div>
//             <p><strong>Name:</strong> {user?.name || "Admin"}</p>
//             <p><strong>Email:</strong> {user?.email || "admin@example.com"}</p>
//             {/* Optionally add edit form here */}
//           </div>
//         </div>

//         {/* Change Password */}
//         <div className="bg-white p-6 rounded-xl shadow-sm">
//           <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
//             <FiLock /> Change Password
//           </h3>
//           <form className="space-y-4">
//             <input
//               type="password"
//               placeholder="Current Password"
//               className="w-full p-2 border rounded"
//             />
//             <input
//               type="password"
//               placeholder="New Password"
//               className="w-full p-2 border rounded"
//             />
//             <input
//               type="password"
//               placeholder="Confirm New Password"
//               className="w-full p-2 border rounded"
//             />
//             <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
//               Update Password
//             </button>
//           </form>
//         </div>

//         {/* Notification Settings (Optional) */}
//         <div className="bg-white p-6 rounded-xl shadow-sm">
//           <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
//             <FiBell /> Notifications
//           </h3>
//           <label className="flex items-center space-x-3">
//             <input type="checkbox" defaultChecked />
//             <span>Email me when a hotel is approved</span>
//           </label>
//         </div>

//       </div>
//     </div>
//   );
// }








// // src/pages/Settings.jsx

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { FiUser, FiBell, FiSettings } from "react-icons/fi";

// export default function Settings() {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-[#F3F4FF] p-6">


//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//         {/* Profile Settings Shortcut */}
//         <div
//           onClick={() => navigate("/profile")}
//           className="cursor-pointer bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
//         >
//           <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
//             <FiUser /> Profile Settings
//           </h3>
//           <p className="text-sm text-gray-600">
//             View or edit your profile information and change password.
//           </p>
//         </div>

//         {/* Notification Settings */}
//         <div className="bg-white p-6 rounded-xl shadow-sm">
//           <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
//             <FiBell /> Notification Preferences
//           </h3>
//           <label className="flex items-center space-x-3">
//             <input type="checkbox" defaultChecked className="accent-blue-600" />
//             <span>Notify me when a hotel or adventure is approved</span>
//           </label>
//         </div>

//         {/* App Preferences (Placeholder) */}
//         <div className="bg-white p-6 rounded-xl shadow-sm">
//           <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
//             <FiSettings /> App Preferences
//           </h3>
//           <p className="text-sm text-gray-600">
//             Customize app behavior and layout (coming soon).
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// }


// src/pages/Settings.jsx

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { FiUser, FiBell, FiSettings, FiLock } from "react-icons/fi";

// export default function Settings() {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-[#F3F4FF] p-6">

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//         {/* Profile Settings Shortcut */}
//         <div
//           onClick={() => navigate("/profile")}
//           className="cursor-pointer bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
//         >
//           <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
//             <FiUser /> Profile Settings
//           </h3>
//           <p className="text-sm text-gray-600">
//             View or edit your profile information.
//           </p>
//         </div>

//         {/* Change Password Shortcut */}
//         <div
//           onClick={() => navigate("/profile")} // can change to /change-password later
//           className="cursor-pointer bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
//         >
//           <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
//             <FiLock /> Change Password
//           </h3>
//           <p className="text-sm text-gray-600">
//             Update your password 
//           </p>
//         </div>

//         {/* Notification Settings */}
//         <div className="bg-white p-6 rounded-xl shadow-sm">
//           <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
//             <FiBell /> Notification Preferences
//           </h3>
//           <label className="flex items-center space-x-3">
//             <input type="checkbox" defaultChecked className="accent-blue-600" />
//             <span>Notify me when a hotel or adventure is approved</span>
//           </label>
//         </div>



//       </div>
//     </div>
//   );
// }










// src/pages/Settings.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser, FiBell, FiSettings, FiLock } from "react-icons/fi";
import Button from "../components/Button";
import { FiX } from "react-icons/fi";


export default function Settings() {
  const navigate = useNavigate();
  const [showChangePassword, setShowChangePassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#F3F4FF] p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Profile Settings Shortcut */}
        <div
          onClick={() => navigate("/profile")}
          className="cursor-pointer bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
        >
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
            <FiUser /> Profile Settings
          </h3>
          <p className="text-sm text-gray-600">
            View or edit your profile information.
          </p>
        </div>

        {/* Change Password Shortcut */}
        <div
          onClick={() => setShowChangePassword(!showChangePassword)}
          className="cursor-pointer bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
        >
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
            <FiLock /> Change Password
          </h3>
          <p className="text-sm text-gray-600">
            Update your password.
          </p>
        </div>

        {/* Notification Settings */}
        <div 
        onClick={()=>navigate('/settings/notifications')}
        className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
            <FiBell /> Notification Preferences
          </h3>
          <label className="flex items-center space-x-3">
            
            <span>Notify me when a hotel or adventure is approved</span>
          </label>

        </div>
      </div>

      {/* Change Password Form */}
      {showChangePassword && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/10">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md relative">
            {/* Close Button */}
            <button
              onClick={() => setShowChangePassword(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <FiX size={20} />
            </button>

            {/* Form */}
            <h3 className="text-lg font-semibold mb-4 text-center">Change Password</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Current Password</label>
                <input
                  type="password"
                  className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter current password"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">New Password</label>
                <input
                  type="password"
                  className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter new password"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Confirm New Password</label>
                <input
                  type="password"
                  className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Confirm new password"
                />
              </div>
              <div className="text-right">
                <Button type="submit" variant="primary">
                  Update Password
                </Button>
              </div>
              <div className="text-sm mt-2 text-right">
                <button
                  type="button"
                  onClick={() => navigate("/forgot-password")}
                  className="text-blue-600 hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
