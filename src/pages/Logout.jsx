import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ConfirmationDialog from "../components/ConfirmationDialog";
import { useAuth } from "../context/AuthContext";

const Logout = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [showDialog, setShowDialog] = useState(true);
  const [loggingOut, setLoggingOut] = useState(false);

  const handleConfirm = () => {
    setLoggingOut(true);

    setTimeout(() => {
      logout(); // <- Calls context logout which updates isAuthenticated to false
      navigate("/login", { replace: true });
    }, 1200);
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <>
      {showDialog && !loggingOut && (
        <ConfirmationDialog
          message="You will be logged out and redirected to the login page."
          onCancel={handleCancel}
          onConfirm={handleConfirm}
          variant="danger"
        />
      )}

      {loggingOut && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 w-full max-w-sm text-center animate-fadeIn">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Logging out...
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Redirecting you to the login page.
            </p>
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-red-600 animate-pulse w-full"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Logout;
