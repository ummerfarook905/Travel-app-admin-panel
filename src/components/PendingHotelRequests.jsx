import React from 'react';
import { useSelector } from 'react-redux';
import PendingRequestCard from '../components/PendingRequestCard'; // adjust path

const PendingHotelRequests = () => {
  // Select the pending hotels from redux state
  const pendingHotels = useSelector(state => state.hotels.pending);

  // Slice the first 5 (or less) hotels
  const hotelsToShow = pendingHotels.slice(0, 5);

  return (
    <PendingRequestCard
      title="Pending Requests for Hotels"
      items={hotelsToShow}
      getName={item => item.name}
      getLocation={item => item.location}
      getPrice={item => item.price}
      viewMoreLink="/pending-hotels"  // Your route for full list
    />
  );
};

export default PendingHotelRequests;
