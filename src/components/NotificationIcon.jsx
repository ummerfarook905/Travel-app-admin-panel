import { FiBell } from 'react-icons/fi';
import PropTypes from 'prop-types';

const NotificationIcon = ({ count, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="p-2 rounded-full hover:bg-gray-100 relative cursor-pointer"
    >
      <FiBell className="text-gray-600 text-xl" />
      {count > 0 && (
        <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
      )}
    </button>
  );
};

NotificationIcon.propTypes = {
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default NotificationIcon;