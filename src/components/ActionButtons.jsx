const ActionButtons = ({ onReject, onApprove }) => (
    <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4 ">
      <button 
        onClick={onReject}
        className="px-6 py-2 border border-[#00493E] text-[#00493E] rounded-full  transition-colors cursor-pointer"
      >
        Reject
      </button>
      <button 
        onClick={onApprove}
        className="px-6 py-2 bg-[#00493E] text-white rounded-full hover:bg-[#00382f] transition-colors cursor-pointer"
      >
        Approve
      </button>
    </div>
  );
  
  export default ActionButtons;