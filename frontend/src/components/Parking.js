import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ParkingSpots = () => {
    const [spots, setSpots] = useState([]);

    useEffect(() => {
        const fetchSpots = async () => {
            try {
                const response = await axios.get('http://localhost:5000/spots');
                setSpots(response.data.spots);
            } catch (error) {
                console.error('Error fetching parking spots:', error);
            }
        };
        fetchSpots();
    }, []);

    const reserveSpot = async (spotId) => {
        try {
            await axios.post('http://localhost:5000/reserve', { spot_id: spotId });
            alert('Reservation successful');
        } catch (error) {
            console.error('Error reserving spot:', error);
            alert('Error during reservation');
        }
    };

    return (
        <div>
            <h2>Available Parking Spots</h2>
            <ul>
                {spots.map(spot => (
                    <li key={spot.id}>
                        {spot.location} - {spot.is_reserved ? 'Reserved' : 'Available'}
                        {!spot.is_reserved && (
                            <button onClick={() => reserveSpot(spot.id)}>Reserve</button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ParkingSpots;

