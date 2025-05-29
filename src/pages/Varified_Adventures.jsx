// src/pages/Verified_Adventures.js
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import Table from "../components/Table";
import { useState, useMemo, useEffect } from "react";
import { deleteAdventure } from "../redux/adventuresSlice";
import SearchBar from "../components/SearchBar";

const Verified_Adventures = () => {
  // Get verified adventures from Redux store
  const verified = useSelector(state => state.adventures.verified);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

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
  ];

  const handleViewDetails = (adventure) => {
    const urlId = adventure.id.replace('#', '');
    navigate(`/verified-adventures/${urlId}`, { 
      state: { adventure } 
    });
    return null; // No toast for view action
  };

  const handleDelete = (adventure) => {
    dispatch(deleteAdventure({ id: adventure.id }));
    return `Adventure ${adventure.name} deleted successfully!`;
  };

  const handleEdit = (adventure) => {
    const urlId = adventure.id.replace('#', '');
    navigate(`/edit-adventure/${urlId}`, {
      state: { adventure }
    });
    return null; // No toast for edit action
  };
  
  const actions = [
    {
      label: 'View Details',
      handler: handleViewDetails,
      requireConfirmation: false
    },
    {
      label: 'Edit',
      variant: 'primary',
      handler: handleEdit,
      requireConfirmation: false
    },
    {
      label: 'Delete',
      variant: 'danger',
      requireConfirmation: true,
      confirmationMessage: `Are you sure you want to delete this adventure? This action cannot be undone.`,
      confirmationVariant: 'danger',
      handler: handleDelete
    }
  ];
  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return verified.filter(adventure =>
      adventure.name.toLowerCase().includes(q) ||
      adventure.id.toLowerCase().includes(q) ||
      (adventure.location && adventure.location.toLowerCase().includes(q))
    );
  }, [verified, searchQuery]);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {location.state?.message && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {location.state.message}
        </div>
      )}
       <div className="mb-4 flex">
        <SearchBar onSearch={setSearchQuery} />
      </div>
      <Table 
        headers={headers}
        rows={filtered}
        actions={actions}
        nameAsLink={true}
        onNameClick={handleViewDetails}
      />
    </div>
  );
};

export default Verified_Adventures;