import React, { useEffect } from 'react';
import Header from "../components/Header";
import styles from './Home.module.css';
import {useHistory} from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { expNeopStatee, dopPovrezhdenia, patan, patanOsn, medmanipuljac, prichinySmertii, sudebbOsn } from '../store/index';

import imgSlide11 from '../assets/home3.jpg'
import imgSlide2 from '../assets/home2.jpg'
import imgSlide33 from '../assets/slide33.JPG'
import Footer from "../components/Footer";
import { NavLink } from 'react-router-dom';

// import { Helmet } from 'react-helmet';
import { Helmet } from "react-helmet-async";

function HomeeDublee() {
    const dispatchFunction = useDispatch();
    const history = useHistory();

    useEffect(() => {

        // console.time("useEffectExecution");
        // console.log("++++")

        // Вывод реферера (URL предыдущей страницы) в консоль
        // document.referrer будет работать корректно при переходе с одной HTTPS страницы на другую HTTPS страницу. Политика 
        // безопасности браузеров позволяет передавать реферер между страницами, которые обе используют защищенное соединение (HTTPS).
        // console.log('Referrer URL:', document.referrer);
        // const referrer = document.referrer;
        // if (referrer.includes('https://yoomoney.ru/transfer/process/success?orderId')) {
        //     dispatchFunction(expNeopStatee.money(true));
        // }

        // const allCookies = document.cookie.split('; ').reduce((acc, cookie) => {
        //     const [name, value] = cookie.split('=');
        //     acc[name] = value;
        //     return acc;
        // }, {});


        // console.log("Cookies: ", allCookies);
        // console.log("LocalStorage url: ", localStorage.getItem('url'));
        // console.log("LocalStorage data: ", localStorage.getItem('data'));
        // console.log("LocalStorage paymentInitiated: ", localStorage.getItem('paymentInitiated'));
        // console.log("Referrer: ", document.referrer);

        // if (allCookies.paymentInitiated === 'true' && localStorage.getItem('paymentInitiated') === 'true' && document.referrer === '') {
        if (localStorage.getItem('paymentInitiated') === 'true' && document.referrer === '') {    
            // console.log("homeDub");
            dispatchFunction(expNeopStatee.money(true));
            // Удаление cookie
            // document.cookie = 'paymentInitiated=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';

            // Удаление значения из localStorage:
            localStorage.removeItem('paymentInitiated');

            //Получение data (данных) из localStorage и отправка их в хранилище: 
            // const data = JSON.parse(localStorage.getItem('data'));
            // dispatchFunction(expNeopStatee.exp(data.exp));
            // dispatchFunction(expNeopStatee.neop(data.neop)); 
            // dispatchFunction(expNeopStatee.sex(data.sex));
            // data.ushibRanaOgr && dispatchFunction(dopPovrezhdenia.ushibRanaOgr());
            // data.ushibRanaNoogr && dispatchFunction(dopPovrezhdenia.ushibRanaNoogr());
            // data.bampPerelom && dispatchFunction(dopPovrezhdenia.bampPerelom());
            // data.krovopodtek && dispatchFunction(dopPovrezhdenia.krovopodtek());
            // data.ssadiny && dispatchFunction(dopPovrezhdenia.ssadiny());
            // data.krovUpr && dispatchFunction(dopPovrezhdenia.krovUpr());
            // data.rezanRana && dispatchFunction(dopPovrezhdenia.rezanRana());
            // data.ushib && dispatchFunction(dopPovrezhdenia.ushib());
            // data.colotoRez && dispatchFunction(dopPovrezhdenia.colotoRez());
            // data.mnogo && dispatchFunction(dopPovrezhdenia.mnogo());
            // data.ognestrelMnozh && dispatchFunction(dopPovrezhdenia.ognestrelMnozh());
            // data.ognestrelOdin && dispatchFunction(dopPovrezhdenia.ognestrelOdin());
            // data.colotayaRana && dispatchFunction(dopPovrezhdenia.colotayaRana());
            // data.ushibRanaMk && dispatchFunction(dopPovrezhdenia.ushibRanaMk());
            // data.ozhogiMk && dispatchFunction(dopPovrezhdenia.ozhogiMk());
            // data.ozhogPlamenem && dispatchFunction(dopPovrezhdenia.ozhogPlamenem());
            // data.ploskKostjOgr && dispatchFunction(dopPovrezhdenia.ploskKostjOgr());
            // data.ploskKostjNoogr && dispatchFunction(dopPovrezhdenia.ploskKostjNoogr());
            // data.colotoRezMk && dispatchFunction(dopPovrezhdenia.colotoRezMk());
            // data.ognestrelPya && dispatchFunction(dopPovrezhdenia.ognestrelPya());

            // data.gb && dispatchFunction(patan.gb());
            // data.saharDiab1 && dispatchFunction(patan.saharDiab1());
            // data.saharDiab2 && dispatchFunction(patan.saharDiab2());
            // data.vich && dispatchFunction(patan.vich());
            // data.covid && dispatchFunction(patan.covid());
            // data.gepatB && dispatchFunction(patan.gepatB());
            // data.gepatC && dispatchFunction(patan.gepatC());
            // data.sifilis && dispatchFunction(patan.sifilis());
            // data.gripp && dispatchFunction(patan.gripp());
            // data.tuberc && dispatchFunction(patan.tuberc());
            // data.krona && dispatchFunction(patan.krona());
            // data.njak && dispatchFunction(patan.njak());
            // data.greyvs && dispatchFunction(patan.greyvs());
            // data.hoshimoto && dispatchFunction(patan.hoshimoto());
            // data.gemInsult && dispatchFunction(patan.gemInsult());
            // data.oglomerulo && dispatchFunction(patan.oglomerulo());
            // data.feAnemi && dispatchFunction(patan.feAnemi());
            // data.postgemAnemi && dispatchFunction(patan.postgemAnemi());
            // data.hronPielo && dispatchFunction(patan.hronPielo());
            // data.ishInsult && dispatchFunction(patan.ishInsult());
            // data.infarctMioc && dispatchFunction(patan.infarctMioc());
            // data.alco && dispatchFunction(patan.alco());
            // data.dilCardio && dispatchFunction(patan.dilCardio());
            // data.gipCardio && dispatchFunction(patan.gipCardio());
            // data.miocardit && dispatchFunction(patan.miocardit());
            // data.sepsis && dispatchFunction(patan.sepsis());
            // data.hibs && dispatchFunction(patan.hibs());
            // data.mkb && dispatchFunction(patan.mkb());
            // data.pancreatit && dispatchFunction(patan.pancreatit());
            // data.pnevmoniaInterst && dispatchFunction(patan.pnevmoniaInterst());
            // data.pnevmoniaOchag && dispatchFunction(patan.pnevmoniaOchag());
            // data.pnevmoniaKrup && dispatchFunction(patan.pnevmoniaKrup());
            // data.hobl && dispatchFunction(patan.hobl());
            // data.astma && dispatchFunction(patan.astma());
            // data.peritonit && dispatchFunction(patan.peritonit());
            // data.yazva && dispatchFunction(patan.yazva());
            // data.meningit && dispatchFunction(patan.meningit());
            const data = JSON.parse(localStorage.getItem('data'));
            // console.log(data)
            if (data) {
              // Обработка expNeopState
              const { expNeopState } = data;
              if (expNeopState) {
                dispatchFunction(expNeopStatee.exp(expNeopState.exp));
                dispatchFunction(expNeopStatee.neop(expNeopState.neop));
                dispatchFunction(expNeopStatee.sex(expNeopState.sex));
              }
              // Обработка dopPovrezhden
              // const { dopPovrezhden } = data;
              // if (dopPovrezhden) {
              //   Object.entries(dopPovrezhden).forEach(([key, value]) => {
              //     if (value) {
              //       dispatchFunction(dopPovrezhdenia[key]());
              //     }
              //   });
              // }
              const { dopPovrezhden } = data;
              let countdopPovrezhden = 0; // Счетчик для отслеживания отправленных состояний
              const maxCountdopPovrezhden = 5; // Максимальное количество состояний для отправки
              if (dopPovrezhden) {
                Object.entries(dopPovrezhden).forEach(([key, value]) => {
                  if (value && countdopPovrezhden < maxCountdopPovrezhden) {// Проверяем, что значение существует и счетчик меньше максимального
                    dispatchFunction(dopPovrezhdenia[key]());
                    countdopPovrezhden++; // Увеличиваем счетчик после отправки
                  }
                });
              }
              // Обработка pat
              const { pat } = data;
              let countpat = 0; // Счетчик для отслеживания отправленных состояний
              const maxCountpat = 4; // Максимальное количество состояний для отправки
              if (pat) {
                Object.entries(pat).forEach(([key, value]) => {
                  if (value && countpat < maxCountpat) { // Проверяем, что значение существует и счетчик меньше максимального
                    dispatchFunction(patan[key]());
                    countpat++; // Увеличиваем счетчик после отправки
                  }
                });
              }
              // Обработка prichinySmerti
              const { prichinySmerti } = data;
              let countprichinySmerti = 0; // Счетчик для отслеживания отправленных состояний
              const maxCountprichinySmerti = 2; // Максимальное количество состояний для отправки
              if (prichinySmerti) {
                Object.entries(prichinySmerti).forEach(([key, value]) => {
                  if (value && countprichinySmerti < maxCountprichinySmerti) { // Проверяем, что значение существует и счетчик меньше максимального
                    dispatchFunction(prichinySmertii[key]());
                    countprichinySmerti++; // Увеличиваем счетчик после отправки
                  }
                });
              }
              // Обработка patOsn
              const { patOsn } = data;
              if (patOsn) {
                Object.entries(patOsn).forEach(([key, value]) => {
                  if (value) {
                    dispatchFunction(patanOsn[key]());
                  }
                });
              }
              // Обработка sudebOsn
              const { sudebOsn } = data;
              if (sudebOsn) {
                Object.entries(sudebOsn).forEach(([key, value]) => {
                  if (value) {
                    dispatchFunction(sudebbOsn[key]());
                  }
                });
              }
              // Обработка medmanipul
              const { medmanipul } = data;
              let countmedmanipul = 0; // Счетчик для отслеживания отправленных состояний
              const maxCountmedmanipul = 5; // Максимальное количество состояний для отправки
              if (medmanipul) {
                Object.entries(medmanipul).forEach(([key, value]) => {
                  if (value && countmedmanipul < maxCountmedmanipul) {
                    dispatchFunction(medmanipuljac[key]());
                    countmedmanipul++;
                  }
                });
              }
            }
            
            //Перенаправление на страницу url которой сохранен в localstorage:
            // window.open(localStorage.getItem('url'));
            // history.push(localStorage.getItem('url', '_blank'));
            history.push(localStorage.getItem('url'));

            // Удаление значения из localStorage url:
            localStorage.removeItem('url');
            // Удаление data (данных) из localStorage:
            localStorage.removeItem('data');
        }
        // Очистка не требуется, но можно добавить при необходимости
        // return () => {}; 
        // console.log("useEf!!!!!!!!!")
        // console.timeEnd("useEffectExecution");
    }, [dispatchFunction, history]);

    const money = useSelector((state) => state.expNeopState.money);
    // console.log('Money status:', money);

    return (
        <>
        <Helmet>
            <title>Конструктор заключений по смэ, завершение оплаты</title>
            <meta
            name="description"
            content="Страница завершения оплаты конструктора заключений по судебно-медицинской экспертизе (смэ)."
            />
            <meta name="robots" content="noindex" />
        </Helmet>
            <Header></Header>
            <h1 className={styles.h1Home}>Конструктор заключений по судебно-медицинской экспертизе (исследованию) трупа</h1>
            {money && <p>Оплата прошла успешно!</p>}
            <img src={imgSlide11} alt="Исследование трупа" className={styles.imgHome} width="1811" height="1018"/>
            <NavLink className={styles.link} to='/search'><button className={styles.btnHome}>Начать работу</button></NavLink>
            <img src={imgSlide2} alt="Конструктор по судебной медицине" className={styles.imgHome} width="1811" height="1018"/>
            {/* <h2> zzhmenka@yandex.ru</h2> */}
            <h2 className={styles.h2Home}>
                <a href="mailto:construktor-mail@yandex.ru">construktor-mail@yandex.ru</a>
            </h2>
            <img src={imgSlide33} alt="Экспертиза трупа" className={styles.imgHome} width="1811" height="1018"/>
            <h3 style={{ display: 'none' }}>Важно отметить, что данный сайт является всего лишь одним из инструментов для судебно-медицинского эксперта, и сам эксперт несет полную ответственность в соответствии с законодательством Российской Федерации за составленное им заключение, включая его объективность, всесторонность, полноту исследований, обоснованность и достоверность выводов.
            </h3>
            <Footer></Footer> 
        </>
    )
}

export default HomeeDublee;