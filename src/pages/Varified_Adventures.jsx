// src/pages/Verified_Adventures.js
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import Table from "../components/Table";
import { useEffect } from "react";
import { 

  deleteAdventure 
} from "../redux/adventuresSlice";

const Verified_Adventures = () => {
  // Get verified adventures from Redux store
  const verified = useSelector(state => state.adventures.verified);
  const dispatch = useDispatch();
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
  ];

  const handleViewDetails = (adventure) => {
    const urlId = adventure.id.replace('#', '');
    navigate(`/verified-adventures/${urlId}`, { 
      state: { adventure } 
    });
  };

  

  const handleDelete = (adventure) => {
    if (window.confirm(`Are you sure you want to delete ${adventure.name}?`)) {
      dispatch(deleteAdventure({ id: adventure.id }));
    }
  };
  const handleEdit = (adventure) => {
    const urlId = adventure.id.replace('#', '');
    navigate(`/edit-adventure/${urlId}`, {
      state: { adventure }
    });
  };
  
  const actions = [
    {
      label: 'View Details',
      handler: handleViewDetails
    },
  
    {
      label: 'Delete',
      variant: 'danger',
      handler: handleDelete
    },
    {
      label: 'Edit',
      variant: 'primary',
      handler: handleEdit
    },
    
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      
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

export default Verified_Adventures;