// import React from 'react';
import React, { useEffect } from 'react';

import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { dopPovrezhdenia, patan } from '../store/index';

const NotFound = () => {
  
  useEffect(() => {
    if (typeof window.updateMetaTags === 'function') {
      console.log('Updating meta tags for 404');
      window.updateMetaTags('/404');
    }
  }, []);

  const dispatch = useDispatch();
  // Удаляем куки и все из localStorage, обнуляем состояния в redux при нажатии на кнопки в header:
function dell(){
    const allCookies = document.cookie.split('; ').reduce((acc, cookie) => {
        const [name, value] = cookie.split('=');
        acc[name] = value;
        return acc;
    }, {});
    if (allCookies.paymentInitiated === 'true' && localStorage.getItem('paymentInitiated') === 'true') {
        // Удаление cookie
        document.cookie = 'paymentInitiated=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
        // Удаление значения из localStorage:
        localStorage.removeItem('paymentInitiated');
    };
    localStorage.removeItem('data');
    // Сбрасываем состояния Redux к их initialState
    dispatch(dopPovrezhdenia.resetState());
    dispatch(patan.resetState());
    // dispatch(expNeopStatee.resetState()); 
}

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Страница не найдена</h1>
      <p>К сожалению, страница, которую вы ищете, не существует.</p>
      <NavLink to='/home' onClick={dell}>Вернуться на главную страницу сайта</NavLink>
      {/* <NavLink className={styles.link} to='/home' onClick={dell}>На главную</NavLink> */}
    </div>
  );
};

export default NotFound;
