// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={styles.container}>
            <h1>Добро пожаловать в систему парковки!</h1>
            <p>Здесь вы можете найти и зарезервировать парковочное место.</p>
            <Link to="/parking" style={styles.link}>Перейти к резервированию</Link>
            <Link to="/available-parking" style={styles.link}>Доступные парковочные места</Link> {/* Новая ссылка */}
            <Link to="/registration" style={styles.link}>Регистрация</Link>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '50px',
    },
    link: {
        display: 'block',
        margin: '20px 0',
        textDecoration: 'none',
        color: '#007BFF',
    },
};

export default Home;

