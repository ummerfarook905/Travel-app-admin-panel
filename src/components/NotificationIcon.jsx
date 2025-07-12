import { FiBell } from 'react-icons/fi';
import { useSelector } from 'react-redux';

const NotificationIcon = ({ onClick }) => {
  const notifications = useSelector((state) => state.header.notifications);
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <button
      onClick={onClick}
      className="p-2 rounded-full hover:bg-gray-100 relative cursor-pointer"
    >
      <FiBell className="text-gray-600 text-xl" />
      {unreadCount > 0 && (
        <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
      )}
    </button>
  );
};

export default NotificationIcon;
