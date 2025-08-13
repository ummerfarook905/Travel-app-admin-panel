
// const Profile = () => {
//   return (
//     <div>
//        <h1>Admin Profile Page </h1>
//     </div>
//   );
// };

// export default Profile;











// import React from "react";

// export default function ProfilePage() {
//   return (
//     <div className="min-h-screen bg-[#F3F4FF] p-6">
//       <h2 className="text-2xl font-bold text-green-900 mb-4">My Profile</h2>

//       <div className="bg-white rounded-xl shadow-md p-6 max-w-2xl">
//         <h3 className="text-xl font-semibold mb-2">Admin Profile Page</h3>

//         <div className="space-y-3">
//           <div>
//             <label className="block text-sm font-medium text-gray-600">Name</label>
//             <p className="text-gray-800">Admin</p>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-600">Email</label>
//             <p className="text-gray-800">admin@example.com</p>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-600">Role</label>
//             <p className="text-gray-800">Administrator</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }








import React, { useState } from "react";
import Button from "../components/Button";

export default function ProfilePage() {
  const initialData = {
    name: "Admin",
    email: "admin@example.com",
    role: "Administrator",
  };

  const [formData, setFormData] = useState(initialData);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCancel = () => {
    setFormData(initialData);
    setIsEditing(false);
  };

  const handleSave = () => {
    console.log("Form Data (local):", formData);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-[#F3F4FF] p-6">
      

      <div className="bg-white rounded-xl shadow-md p-6 max-w-2xl space-y-6">
        {!isEditing ? (
          <>
            <div className="space-y-2">
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="text-lg font-medium">{formData.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-lg font-medium">{formData.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Role</p>
                <p className="text-lg font-medium">{formData.role}</p>
              </div>
            </div>

            <div className="flex justify-end" >
              <Button
                onClick={() => setIsEditing(true)}
                variant="primary"
              >
                Edit Profile
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-1 border border-gray-300 rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-1 border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-4">
              <button
                onClick={handleCancel}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <Button
                onClick={handleSave}
                variant="primary"
              >
                Save
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
