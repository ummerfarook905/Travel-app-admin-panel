const ConfirmationDialog = ({ message, onCancel, onConfirm }) => {
    return (
      <div className="fixed inset-0 bg-gray-100/50 backdrop-blur-sm z-50 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-sm mx-4">
          <div className="mb-5">
            <h3 className="text-base font-semibold text-gray-800">{message}</h3>
          </div>
          <div className="flex justify-end space-x-3">
            <button
              onClick={onCancel}
              className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-2 text-sm bg-red-500 text-white hover:bg-red-600 rounded-lg transition-colors"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    );
  };
  export default ConfirmationDialog;