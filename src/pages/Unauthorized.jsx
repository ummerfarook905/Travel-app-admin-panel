
const Unauthorized = () => {
    const { logout } = useAuth();
  
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          403 - Unauthorized Access
        </h1>
        <p className="text-gray-600 mb-4">
          You don't have permission to view this page
        </p>
        <button
          onClick={logout}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Return to Login
        </button>
      </div>
    );
  };
  
  export default Unauthorized;