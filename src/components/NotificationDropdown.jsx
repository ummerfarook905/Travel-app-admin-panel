import PropTypes from 'prop-types';

const NotificationDropdown = ({ notifications, onClose, onMarkAllAsRead }) => {
  return (
    <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg z-50 border border-gray-200">
      <div className="p-3 border-b border-gray-200">
        <h3 className="font-medium text-gray-800">Notifications</h3>
      </div>
      <div className="max-h-60 overflow-y-auto">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div key={notification.id} className="p-3 border-b border-gray-100 hover:bg-gray-50">
              <p className="text-sm text-gray-700">{notification.message}</p>
              <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
            </div>
          ))
        ) : (
          <div className="p-4 text-center text-gray-500">No new notifications</div>
        )}
      </div>
      <div className="p-2 border-t border-gray-200 text-center">
        <button 
          onClick={onMarkAllAsRead}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          Mark all as read
        </button>
      </div>
    </div>
  );
};

NotificationDropdown.propTypes = {
  notifications: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
  onMarkAllAsRead: PropTypes.func.isRequired
};

export default NotificationDropdown;