import { FaUserCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

const ProfileIcon = ({ onClick, showName = true }) => {
  return (
    <div 
      onClick={onClick}
      className="flex items-center space-x-2 cursor-pointer"
    >
      <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-gray-200 flex items-center justify-center">
        <FaUserCircle className="text-gray-600 text-xl md:text-2xl" />
      </div>
      {showName && <span className="hidden md:inline text-gray-700 font-medium">Admin</span>}
    </div>
  );
};

ProfileIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  showName: PropTypes.bool
};

export default ProfileIcon;