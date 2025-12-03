import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { dopPovrezhdenia, patan, patanOsn, medmanipuljac, prichinySmertii, sudebbOsn } from '../store/index';

const NotFound = () => {
  useEffect(() => {
    if (typeof window.updateMetaTags === 'function') {
      // console.log('Updating meta tags for 404');
      window.updateMetaTags('/notFound');
    }

    // Устанавливаем HTTP 404 в браузере
    const meta = document.createElement('meta');
    meta.httpEquiv = "status";
    meta.content = "404 Not Found";
    document.head.appendChild(meta);
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
