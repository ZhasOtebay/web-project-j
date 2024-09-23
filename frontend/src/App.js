// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Registration from './components/Registration';
import Parking from './components/Parking';
import AvailableParking from './components/AvailableParking'; // Импорт нового компонента

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/parking" element={<Parking />} />
                <Route path="/available-parking" element={<AvailableParking />} /> {/* Новый маршрут */}
            </Routes>
        </Router>
    );
};

export default App;

