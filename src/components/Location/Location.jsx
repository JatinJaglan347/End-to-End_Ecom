import React, { useState, useEffect } from 'react';
import { Mainnavbar } from '../Navbar/Mainnavbar';



const Location = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://ip-api.com/json')
      .then(response => response.json())
      .then(data => {
        setLocation(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching location data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (!location) {
    return <div className="text-center mt-10">Failed to load location data.</div>;
  }

  const imageUrl = `https://flagsapi.com/${location.countryCode}/flat/64.png`;

  return (
    <div>
        
      <MainNavbar 
        imageUrl={imageUrl} 
        country={location.country} 
        countryCode={location.countryCode} 
      />
    </div>
  );
};
export default Location;
