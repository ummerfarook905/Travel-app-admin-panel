import { useEffect, useState } from "react";

const useGeocode = (locationName) => {
  const [coordinates, setCoordinates] = useState(null);
console.log("Location:", location);
console.log("Coordinates:", coordinates);
  useEffect(() => {
    if (locationName) {
      const fetchCoords = async () => {
        
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
              locationName
            )}`,

            {
                headers: {
          'User-Agent': 'TravelApp/1.0 (vinishavijayakumar15@gmail.com)',
        },
            }
          );
          const data = await response.json();
          if (data.length > 0) {
            setCoordinates([
              parseFloat(data[0].lat),
              parseFloat(data[0].lon),
            ]);
          }
        } catch (error) {
          console.error("Error fetching coordinates:", error);
        }
      };

      fetchCoords();
    }
  }, [locationName]);

  return coordinates;
};

export default useGeocode;
