
import React from 'react';
import DestinationCard from './DestinationCard';

import { useDestinations } from '../context/DestinationsContext';

const DestinationGrid = () =>{
    const { destinations}=useDestinations();

    return(
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {destinations.map(dest => (
        <DestinationCard key={dest.id} name={dest.name} image={dest.image} />
      ))}
    </div>

    )
}
export default DestinationGrid;