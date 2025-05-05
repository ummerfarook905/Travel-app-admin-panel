// src/pages/Pending_Adventures.js
import { useAdventures } from "../context/AdventuresContext";
import { useNavigate } from "react-router-dom";
import Table from "../components/Table";

const Pending_Adventures = () => {
  const { pending, dispatch } = useAdventures();
  const navigate = useNavigate();
  
  const headers = [
    { key: 'name', label: 'Name' },
    { key: 'id', label: 'ID' },
    { key: 'joined', label: 'Joined on' },
    { key: 'updated', label: 'Updated On' },
    { key: 'location', label: 'Location' }
  ];
  
  const handleApprove = (adventure) => {
    dispatch({ type: 'APPROVE', payload: adventure });
    navigate('/verified-adventures', { 
      state: { 
        message: `Adventure ${adventure.id} approved successfully!`
      } 
    });
  };

  const handleReject = (adventure) => {
    dispatch({ type: 'REJECT', payload: adventure });
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