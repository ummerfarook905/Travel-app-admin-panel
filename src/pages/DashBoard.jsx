// src/pages/dashboard.jsx
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <button
            onClick={logout}
            className="bg-[#00493E] text-white px-4 py-2 rounded hover:bg-[#006B56] transition-colors"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">
              Welcome Admin{user?.email && `, ${user.email}`}!
            </h2>
            <p className="text-gray-600">
              You have successfully accessed the admin dashboard.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;