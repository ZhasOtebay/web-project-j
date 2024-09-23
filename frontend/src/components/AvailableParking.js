// src/components/AvailableParking.js

import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './AvailableParking.css';

const TOTAL_SPOTS = 600;

const AvailableParking = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [availableSpots, setAvailableSpots] = useState(TOTAL_SPOTS);
    const [reservedSpots, setReservedSpots] = useState(0);
    const [currentData, setCurrentData] = useState([]);

    const calculateAvailableSpots = () => {
        const occupiedCount = reservedSpots;
        const availableCount = TOTAL_SPOTS - occupiedCount;
        setAvailableSpots(availableCount);
    };

    const reserveSpot = (hours) => {
        if (availableSpots > 0) {
            setReservedSpots(prev => prev + 1);
            alert(`Парковочное место зарезервировано на ${hours} час(а)`);
        } else {
            alert('Нет доступных мест для резервирования!');
        }
    };

    useEffect(() => {
        // Здесь вы можете обновить данные о занятости (например, из API)
        const initialOccupied = Math.floor(Math.random() * TOTAL_SPOTS);
        setReservedSpots(initialOccupied);
        calculateAvailableSpots();
    }, []);

    useEffect(() => {
        calculateAvailableSpots();
    }, [reservedSpots]);

    return (
        <div className="available-parking-container">
            <h2>Доступные парковочные места</h2>
            <DatePicker
                selected={startDate}
                onChange={setStartDate}
                dateFormat="yyyy/MM/dd"
                showTimeSelect
                timeIntervals={30}
                timeCaption="Время"
                className="datepicker"
                placeholderText="Выберите дату и время"
            />
            <div className="spot-info">
                <p>Свободные места: {availableSpots}</p>
                <p>Занятые места: {reservedSpots}</p>
            </div>
            <div className="reserve-buttons">
                {[1, 2, 3, 4, 5].map(hours => (
                    <button 
                        key={hours} 
                        onClick={() => reserveSpot(hours)} 
                        className="reserve-button"
                    >
                        Резервировать на {hours} час(а)
                    </button>
                ))}
            </div>
        </div>
    );
};

export default AvailableParking;

