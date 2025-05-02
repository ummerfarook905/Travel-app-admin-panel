import PropTypes from 'prop-types';

const ProfileDropdown = ({ onClose }) => {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 border border-gray-200">
      <div className="py-1">
        <a 
          href="/profile" 
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          onClick={onClose}
        >
          Your Profile
        </a>
        <a 
          href="/settings" 
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          onClick={onClose}
        >
          Settings
        </a>
        <a 
          href="/logout" 
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          onClick={onClose}
        >
          Sign out
        </a>
      </div>
    </div>
  );
};

ProfileDropdown.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default ProfileDropdown;