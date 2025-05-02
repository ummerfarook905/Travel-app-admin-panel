const ActionButtons = ({ onReject, onApprove }) => (
    <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t border-gray-200">
      <button 
        onClick={onReject}
        className="px-6 py-2 border border-red-500 text-red-500 rounded-full hover:bg-red-50 transition-colors"
      >
        Reject
      </button>
      <button 
        onClick={onApprove}
        className="px-6 py-2 bg-[#00493E] text-white rounded-full hover:bg-[#00382f] transition-colors"
      >
        Approve
      </button>
    </div>
  );
  
  export default ActionButtons;