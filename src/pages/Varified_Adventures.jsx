// src/pages/Varified_Adventures.js
import { useAdventures } from "../context/AdventuresContext";
import { useNavigate, useLocation } from "react-router-dom";
import Table from "../components/Table";
import { useEffect } from "react";

const Varified_Adventures = () => {
  const { verified, dispatch } = useAdventures();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.message) {
      const timer = setTimeout(() => {
        navigate(location.pathname, { replace: true, state: {} });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [location, navigate]);

  const headers = [
    { key: 'name', label: 'Name' },
    { key: 'id', label: 'ID' },
    { key: 'joined', label: 'Joined on' },
    { key: 'updated', label: 'Updated On' },
    { key: 'location', label: 'Location' },
    { key: 'status', label: 'Status' }
  ];

  const handleViewDetails = (adventure) => {
    const urlId = adventure.id.replace('#', '');
    navigate(`/verified-adventures/${urlId}`, { 
      state: { adventure } 
    });
  };

  const handleDeactivate = (adventure) => {
    dispatch({ type: 'DEACTIVATE', payload: adventure });
  };

  const handleActivate = (adventure) => {
    dispatch({ type: 'ACTIVATE', payload: adventure });
  };

  const handleDelete = (adventure) => {
    if (window.confirm(`Are you sure you want to delete ${adventure.name}?`)) {
      dispatch({ type: 'DELETE', payload: adventure });
    }
  };

  const actions = [
    {
      label: 'View Details',
      handler: handleViewDetails
    },
    {
      label: 'Deactivate',
      variant: 'warning',
      handler: handleDeactivate,
      showCondition: (adventure) => adventure.status === 'Active'
    },
    {
      label: 'Activate',
      variant: 'success',
      handler: handleActivate,
      showCondition: (adventure) => adventure.status !== 'Active'
    },
    {
      label: 'Delete',
      variant: 'danger',
      handler: handleDelete
    }
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Verified Adventures</h1>
      
      {location.state?.message && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {location.state.message}
        </div>
      )}
      
      <Table 
        headers={headers}
        rows={verified}
        actions={actions}
        nameAsLink={true}
        onNameClick={handleViewDetails}
      />
    </div>
  );
};

export default Varified_Adventures;