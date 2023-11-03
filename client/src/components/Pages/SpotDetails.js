import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchSpotDetails, calculateCyclingTime } from '../services/api';

function SpotDetails() {
    const navigate = useNavigate();
  const { spotName } = useParams();
  const [spot, setSpot] = useState(null);
  const [userInput, setUserInput] = useState({ latitude: 0, longitude: 0, cyclingSpeed: 0, dailyCyclingHours: 0 });
  const [estimatedTime, setEstimatedTime] = useState(null);
  const [inputError, setInputError] = useState('');

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetchSpotDetails(spotName);
        if (response.status === 403) {
            alert("Token expired, Please Login again...")
            navigate("/login");
        }
        setSpot(response.data);
      } catch (error) {
        console.error('Error fetching spot details:', error);
      }
    };

    fetchDetails();
  }, [spotName]);

  const handleCalculate = async () => {
    try {
        if (!userInput.latitude || !userInput.longitude || !userInput.cyclingSpeed || !userInput.dailyCyclingHours) {
            setInputError('Please provide all required input values.');
            return;
        }
      const response = await calculateCyclingTime(
        userInput.latitude,
        userInput.longitude,
        spotName,
        userInput.dailyCyclingHours,
        userInput.cyclingSpeed
      );
      if (response.status === 403) {
        alert("Token expired, Please Login again...")
        navigate("/login");
    }
      setEstimatedTime(response.data.estimatedTime);
      setInputError('');
    } catch (error) {
      console.error('Error calculating cycling time:', error);
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserInput({
          ...userInput,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  return (
    <div className="p-4">
      {spot ? (
        <div>
          <h1 className="text-3xl font-bold mb-4">{spot.name}</h1>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-indigo-500 text-white">
                <tr>
                  <th className="py-2 px-4 text-left">Attribute</th>
                  <th className="py-2 px-4 text-left">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 font-semibold">Latitude</td>
                  <td className="py-2 px-4">{spot.latitude}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 font-semibold">Longitude</td>
                  <td className="py-2 px-4">{spot.longitude}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 font-semibold">Accessible by cycling</td>
                  <td className="py-2 px-4">{spot.accessible_by_cycling ? 'Yes' : 'No'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p className="mt-4">Loading...</p>
      )}

      {spot && spot.accessible_by_cycling && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Calculate Cycling Time</h2>
          <button
            onClick={getLocation}
            className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition duration-300"
          >
            Get Current Location
          </button>
          <p className="mt-2">Latitude: {userInput.latitude || 'Not available'}</p>
          <p>Longitude: {userInput.longitude || 'Not available'}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="cyclingSpeed" className="block font-medium text-gray-700">
                Cycling Speed (km/h):
              </label>
              <input
                id="cyclingSpeed"
                type="number"
                className="form-input shadow-lg border border-slate-200"
                value={userInput.cyclingSpeed}
                onChange={(e) =>
                  setUserInput({ ...userInput, cyclingSpeed: parseInt(e.target.value) })
                }
              />
            </div>
            <div>
              <label htmlFor="dailyCyclingHours" className="block font-medium text-gray-700">
                Daily Cycling Hours:
              </label>
              <input
                id="dailyCyclingHours"
                type="number"
                className="form-input shadow-lg border border-slate-200"
                value={userInput.dailyCyclingHours}
                onChange={(e) =>
                  setUserInput({ ...userInput, dailyCyclingHours: parseInt(e.target.value) })
                }
              />
            </div>
          </div>
          <button
            onClick={handleCalculate}
            className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition duration-300"
          >
            Calculate
          </button>
          {inputError && (
            <p className="mt-4 text-red-600">{inputError}</p>
          )}
          {estimatedTime !== null && (
            <p className="mt-4">
              Estimated cycling time: {estimatedTime.toFixed(2)} Days
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default SpotDetails;
