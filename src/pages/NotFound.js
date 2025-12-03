import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { dopPovrezhdenia, patan, patanOsn, medmanipuljac, prichinySmertii, sudebbOsn } from '../store/index';

const NotFound = () => {
  useEffect(() => {
    if (typeof window.updateMetaTags === 'function') {
      window.updateMetaTags('/notFound');
    }

    // Принудительно устанавливаем код 404 в браузере
    document.title = "Страница 404";
    document.querySelector("meta[name='description']")?.setAttribute("content", "Страница 404 конструктора заключений по смэ.");

    // Используем pushState для корректного обновления истории
    window.history.replaceState({}, "", window.location.pathname);

    // Принудительно ставим код 404
    setTimeout(() => {
      if (window.location.pathname !== "/home") {
        const error = new Error("Page not found");
        error.code = 404;
        throw error;
      }
    }, 0);
  }, []);

  const dispatch = useDispatch();

  function dell() {
    const allCookies = document.cookie.split('; ').reduce((acc, cookie) => {
        const [name, value] = cookie.split('=');
        acc[name] = value;
        return acc;
    }, {});
    if (allCookies.paymentInitiated === 'true' && localStorage.getItem('paymentInitiated') === 'true') {
        document.cookie = 'paymentInitiated=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
        localStorage.removeItem('paymentInitiated');
    };
    localStorage.removeItem('data');
    dispatch(dopPovrezhdenia.resetState());
    dispatch(patan.resetState());
    dispatch(patanOsn.resetState());
    dispatch(medmanipuljac.resetState());
    dispatch(prichinySmertii.resetState());
    dispatch(sudebbOsn.resetState());
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Страница не найдена</h1>
      <p>К сожалению, страница, которую вы ищете, не существует.</p>
      <NavLink to='/home' onClick={dell}>Вернуться на главную страницу сайта</NavLink>
    </div>
  );
};

export default NotFound;
