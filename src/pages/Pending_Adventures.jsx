// src/pages/Pending_Adventures.jsx
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Table from "../components/Table";
import { useState, useMemo } from "react";
import { approveAdventure, rejectAdventure } from "../redux/adventuresSlice";
import SearchInput from "../components/SearchInput";
const Pending_Adventures = () => {
  const pending = useSelector(state => state.adventures.pending);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [searchQuery, setSearchQuery] = useState('');

  const headers = [
    { key: 'name', label: 'Name' },
    { key: 'id', label: 'ID' },
    { key: 'joined', label: 'Joined on' },
    { key: 'updated', label: 'Updated On' },
    { key: 'location', label: 'Location' }
  ];
const handleApprove = (adventure) => {
  dispatch(approveAdventure({ id: adventure.id }));
  return `Adventure ${adventure.id} approved successfully!`;
};

 const handleReject = (adventure) => {
  dispatch(rejectAdventure({ id: adventure.id }));
  return `Adventure ${adventure.id} rejected!`; // This will be shown in Toast
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
    requireConfirmation: true,
    confirmationMessage: 'Are you sure you want to approve this adventure?',
    confirmationVariant: 'success', // This will make the dialog green
    handler: handleApprove
  },
  {
    label: 'Reject',
    variant: 'danger',
    requireConfirmation: true,
    // No confirmationVariant needed - will default to red
    confirmationMessage: 'Are you sure you want to reject this adventure?',
    handler: handleReject
  },
  {
    label: 'View Details',
    handler: handleViewDetails
  }
];
  // 🔍 Filter pending adventures based on searchQuery
  const filteredRows = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return pending.filter(item =>
      item.name.toLowerCase().includes(q) ||
      item.id.toLowerCase().includes(q) ||
      item.location.toLowerCase().includes(q)
    );
  }, [pending, searchQuery]);



  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-4 flex">
  <SearchInput onSearch={setSearchQuery} placeholder="Search adventures..." />      </div>
      <Table 
        headers={headers}
        renderedData={filteredRows}
        actions={actions}
        nameAsLink={true}
        onNameClick={handleViewDetails}
        
           pagination={{
    enabled: true,
    itemsPerPage: 2,
    position: 'top', // or 'bottom'
  }}
      />
    </div>
  );
};

export default Pending_Adventures;