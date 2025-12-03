import React, { useEffect, useState } from 'react';
import logoImg from '../assets/logo.webp';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { dopPovrezhdenia, patan, patanOsn, expNeopStatee, medmanipuljac, prichinySmertii, sudebbOsn } from '../store/index';

function Header() {
    const dispatch = useDispatch();

    const [dateTime, setDateTime] = useState({
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime({
                date: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString(),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

// Удаляем куки и все из localStorage, обнуляем состояния в redux при нажатии на кнопки в header:
function dell(){
    // const allCookies = document.cookie.split('; ').reduce((acc, cookie) => {
    //     const [name, value] = cookie.split('=');
    //     acc[name] = value;
    //     return acc;
    // }, {});
    // if (allCookies.paymentInitiated === 'true' && localStorage.getItem('paymentInitiated') === 'true') {
    if (localStorage.getItem('paymentInitiated') === 'true') {
        // Удаление cookie
        // document.cookie = 'paymentInitiated=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';

        // Удаление значения из localStorage:
        localStorage.removeItem('paymentInitiated');
    };
    localStorage.removeItem('data');
    // Сбрасываем состояния Redux к их initialState
    dispatch(dopPovrezhdenia.resetState());
    dispatch(patan.resetState());
    dispatch(patanOsn.resetState());
    dispatch(expNeopStatee.resetState());
    dispatch(medmanipuljac.resetState());
    dispatch(prichinySmertii.resetState());
    dispatch(sudebbOsn.resetState());
}
    

    return (
        <header className={styles.header}>
            <NavLink to='/home' onClick={dell}>  <img src={logoImg} alt="Конструктор смэ" className={styles.logo} /> </NavLink>
            <nav className={styles.nav}>
                <NavLink activeClassName={styles.linkActive} className={styles.link} to='/search' onClick={dell}>Работа</NavLink>
                <NavLink activeClassName={styles.linkActive} className={styles.link} to='/help' onClick={dell}>Помощь</NavLink>
                <NavLink activeClassName={styles.linkActive} className={styles.link} to='/info' onClick={dell}>Справка</NavLink>
                <NavLink className={styles.link} to='/home' onClick={dell}>На главную</NavLink>
            </nav>
            <div className={styles.dateTime}>
                <span className={styles.date}>{dateTime.date}</span>
                <span className={styles.time}>{dateTime.time}</span>
            </div>
        </header>
    );
}

export default Header;
