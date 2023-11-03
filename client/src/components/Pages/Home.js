import React, { useEffect, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { fetchTouristSpots } from '../services/api';

function Home() {
    const navigate = useNavigate();
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    const fetchSpots = async () => {
      try {
        const response = await fetchTouristSpots();
        setSpots(response.data);
      } catch (error) {
        console.error('Error fetching spots:', error);
      }
    };

    fetchSpots();
  }, []);
  const handleLogout = () => {
    // Remove the token from local storage (implement your own logic)
    localStorage.removeItem('token');
    // Redirect to the login page
    navigate("/login");
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Explore Tourist Spots</h1>
        <button
          onClick={handleLogout}
          className="px-3 py-1 rounded-md text-white bg-red-500 hover:bg-red-600 transition duration-300"
        >
          Logout
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {spots.map((spot) => (
        <Link to={`/spot/${spot.name}`} className="text-blue-500 hover:underline">
          <div
            key={spot.name}
            className="border border-gray-200 rounded-md p-4 hover:shadow-lg transition duration-300 cursor-pointer"
          >
              {spot.name}
          </div>
        </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
