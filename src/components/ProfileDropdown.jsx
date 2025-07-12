import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ConfirmationDialog from '../components/ConfirmationDialog';
import { useDispatch } from 'react-redux';
import { closeAllDropdowns } from '../redux/headerSlice';

const ProfileDropdown = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();
  const dispatch = useDispatch();
  const dropdownRef = useRef();

  const handleSignOutClick = (e) => {
    e.stopPropagation(); // prevent closing dropdown
    setShowConfirm(true);
  };

  const handleConfirm = () => {
    setShowConfirm(false);
    logout();
    navigate("/login", { replace: true });
  };

  const handleCancel = () => {
    setShowConfirm(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowConfirm(false);
        dispatch(closeAllDropdowns());
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 border border-gray-200"
    >
      <div className="py-1">
        <a
          href="/profile"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          onClick={() => dispatch(closeAllDropdowns())}
        >
          Your Profile
        </a>
        <a
          href="/settings"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          onClick={() => dispatch(closeAllDropdowns())}
        >
          Settings
        </a>
        <button
          className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
          onClick={handleSignOutClick}
        >
          Sign Out
        </button>
      </div>
      {showConfirm && (
        <ConfirmationDialog
          message="Are you sure you want to sign out?"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default ProfileDropdown;