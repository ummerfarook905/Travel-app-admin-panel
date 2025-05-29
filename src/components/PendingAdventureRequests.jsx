import React from 'react';
import { useSelector } from 'react-redux';
import PendingRequestCard from '../components/PendingRequestCard';

const PendingAdventureRequests = () => {
  const pendingAdventures = useSelector(state => state.adventures.pending);

 
  const adventuresToShow = pendingAdventures.slice(0, 5);

  return (
    <PendingRequestCard
      title="Pending Requests for Adventures"
      items={adventuresToShow}
      getName={(item) => item.name}
      getLocation={(item) => item.location}
      getPrice={(item) => item.price}
      viewMoreLink="/pending-adventures"
    />
  );
};

export default PendingAdventureRequests;
