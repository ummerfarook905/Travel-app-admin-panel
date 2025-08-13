

// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useEffect, useState, useMemo } from "react";
// import {
//   deleteHotel,
//   fetchHotelsAsync,
//   deleteHotelAsync,
// } from "../redux/hotelsSlice";
// import Table from "../components/Table";
// import SearchInput from "../components/SearchInput";

// const Verified_Hotels = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { verified, status, error } = useSelector((state) => state.hotels);

//   const [searchQuery, setSearchQuery] = useState("");

//   // ✅ Fetch hotels on component mount
//   useEffect(() => {
//     dispatch(fetchHotelsAsync());
//   }, [dispatch]);

//   // ✅ Clear message after timeout
//   useEffect(() => {
//     if (location.state?.message) {
//       const timer = setTimeout(() => {
//         navigate(location.pathname, { replace: true, state: {} });
//       }, 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [location, navigate]);

//   const headers = [
//     { key: "name", label: "Hotel Name" },
//     { key: "id", label: "ID" },
//     { key: "joined", label: "Joined On" },
//     { key: "updated", label: "Updated On" },
//     { key: "location", label: "Location" },
//     { key: "rooms", label: "Rooms" },
//   ];

//   const handleViewDetails = (hotel) => {
//     const urlId = hotel.id.replace("#", "");
//     navigate(`/verified-hotels/${urlId}`, { state: { hotel } });
//   };

//   const handleDelete = (hotel) => {
//     dispatch(deleteHotelAsync({ id: hotel.id }));
//     return `Hotel "${hotel.name}" deleted successfully!`;
//   };

//   const handleEdit = (hotel) => {
//     const urlId = hotel.id.replace("#", "");
//     navigate(`/edit-hotel/${urlId}`, { state: { hotel } });
//   };

//   const actions = [
//     {
//       label: "View Details",
//       handler: handleViewDetails,
//       requireConfirmation: false,
//     },
//     {
//       label: "Edit",
//       variant: "primary",
//       handler: handleEdit,
//       requireConfirmation: false,
//     },
//     {
//       label: "Delete",
//       variant: "danger",
//       handler: handleDelete,
//       requireConfirmation: true,
//       confirmationMessage:
//         "Are you sure you want to delete this hotel? This action cannot be undone.",
//       confirmationVariant: "danger",
//     },
//   ];

//   const filteredHotels = useMemo(() => {
//     const q = searchQuery.toLowerCase();
//     return verified.filter(
//       (hotel) =>
//         hotel.name.toLowerCase().includes(q) ||
//         hotel.id.toLowerCase().includes(q) ||
//         (hotel.location && hotel.location.toLowerCase().includes(q))
//     );
//   }, [verified, searchQuery]);

//   // ✅ Show loading or error state
//   if (status === "loading") {
//     return <div className="p-8 text-center">Loading hotels...</div>;
//   }

//   if (status === "failed") {
//     return (
//       <div className="p-8 text-red-600 text-center">
//         Error fetching hotels: {error}
//       </div>
//     );
//   }

//   return (
//     <div className="p-8 max-w-7xl mx-auto">
//       <div className="mb-4 flex">
//         <SearchInput
//           onSearch={setSearchQuery}
//           placeholder="Search hotels by name, ID, or location..."
//         />
//       </div>

//       {location.state?.message && (
//         <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
//           {location.state.message}
//         </div>
//       )}

//       <Table
//         headers={headers}
//         renderedData={filteredHotels}
//         actions={actions}
//         nameAsLink={true}
//         onNameClick={handleViewDetails}
//         pagination={{
//           enabled: true,
//           itemsPerPage: 2,
//           position: "top",
//         }}
//       />
//     </div>
//   );
// };

// export default Verified_Hotels;























import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import {
  deleteHotel,
  fetchHotelsAsync,
  deleteHotelAsync,
} from "../redux/hotelsSlice";
import Table from "../components/Table";
import SearchInput from "../components/SearchInput";

const Verified_Hotels = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { verified, status, error } = useSelector((state) => state.hotels);

  const [searchQuery, setSearchQuery] = useState("");

  // ✅ Fetch hotels on component mount
  useEffect(() => {
    dispatch(fetchHotelsAsync());
  }, [dispatch]);

  // ✅ Clear message after timeout
  useEffect(() => {
    if (location.state?.message) {
      const timer = setTimeout(() => {
        navigate(location.pathname, { replace: true, state: {} });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [location, navigate]);

  const headers = [
    { key: "name", label: "Hotel Name" },
    { key: "id", label: "ID" },
    { key: "joined", label: "Joined On" },
    { key: "updated", label: "Updated On" },
    { key: "location", label: "Location" },
    { key: "rooms", label: "Rooms" },
  ];

  const handleViewDetails = (hotel) => {
    const urlId = hotel.id.replace("#", "");
    navigate(`/verified-hotels/${urlId}`, { state: { hotel } });
  };

  const handleDelete = (hotel) => {
    dispatch(deleteHotelAsync({ id: hotel.id }));
   return `Hotel "${hotel.name}" deleted successfully!`;

  };

  const handleEdit = (hotel) => {
    const urlId = hotel.id.replace("#", "");
    navigate(`/edit-hotel/${urlId}`, { state: { hotel } });
  };

  const actions = [
    {
      label: "View Details",
      handler: handleViewDetails,
      requireConfirmation: false,
    },
    {
      label: "Edit",
      variant: "primary",
      handler: handleEdit,
      requireConfirmation: false,
    },
    {
      label: "Delete",
      variant: "danger",
      handler: handleDelete,
      requireConfirmation: true,
      confirmationMessage:
        "Are you sure you want to delete this hotel? This action cannot be undone.",
      confirmationVariant: "danger",
    },
  ];

  const filteredHotels = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return verified.filter(
      (hotel) =>
        hotel.name.toLowerCase().includes(q) ||
        hotel.id.toLowerCase().includes(q) ||
        (hotel.location && hotel.location.toLowerCase().includes(q))
    );
  }, [verified, searchQuery]);

  // ✅ Show loading or error state
  if (status === "loading") {
    return <div className="p-8 text-center">Loading hotels...</div>;
  }

  if (status === "failed") {
    return (
      <div className="p-8 text-red-600 text-center">
        Error fetching hotels: {error}
      </div>
    );
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-4 flex">
        <SearchInput
          onSearch={setSearchQuery}
          placeholder="Search hotels by name, ID, or location..."
        />
      </div>

      {location.state?.message && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {location.state.message}
        </div>
      )}

      <Table
        headers={headers}
        renderedData={filteredHotels}
        actions={actions}
        nameAsLink={true}
        onNameClick={handleViewDetails}
        pagination={{
          enabled: true,
          itemsPerPage: 2,
          position: "top",
        }}
      />
    </div>
  );
};

export default Verified_Hotels;