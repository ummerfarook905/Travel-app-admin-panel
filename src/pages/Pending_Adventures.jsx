// src/pages/Pending_Adventures.jsx
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Table from "../components/Table";
import { approveAdventure, rejectAdventure } from "../redux/adventuresSlice";

const Pending_Adventures = () => {
  // Get pending adventures from Redux store
  const pending = useSelector(state => state.adventures.pending);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const headers = [
    { key: 'name', label: 'Name' },
    { key: 'id', label: 'ID' },
    { key: 'joined', label: 'Joined on' },
    { key: 'updated', label: 'Updated On' },
    { key: 'location', label: 'Location' }
  ];
  
  const handleApprove = (adventure) => {
    dispatch(approveAdventure({ id: adventure.id }));
    navigate('/verified-adventures', { 
      state: { 
        message: `Adventure ${adventure.id} approved successfully!`
      } 
    });
  };

  const handleReject = (adventure) => {
    dispatch(rejectAdventure({ id: adventure.id }));
    alert(`Adventure ${adventure.id} rejected!`);
  };

  const handleViewDetails = (adventure) => {
    const urlId = adventure.id.replace('#', '');
    navigate(`/pending-adventures/${urlId}`, { 
      state: { adventure } 
    });
  };

  const actions = [
    {
      label: 'Approve',
      variant: 'success',
      handler: handleApprove
    },
    {
      label: 'Reject',
      variant: 'danger',
      handler: handleReject
    },
    {
      label: 'View Details',
      handler: handleViewDetails
    }
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <Table 
        headers={headers}
        rows={pending}
        actions={actions}
        nameAsLink={true}
        onNameClick={handleViewDetails}
      />
    </div>
  );
};

export default Pending_Adventures;