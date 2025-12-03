import React, { useEffect } from 'react';
import Header from "../components/Header";
import styles from './Home.module.css';


import imgSlide11 from '../assets/home3.jpg'
import imgSlide2 from '../assets/home2.jpg'
import imgSlide33 from '../assets/slide33.JPG'
import Footer from "../components/Footer";
import { NavLink } from 'react-router-dom';

import { Helmet } from "react-helmet-async";

function HomeDuble() {

    // useEffect(() => {     
    //     if (localStorage.getItem('paymentInitiated') === 'true' && document.referrer === '') {   
    //         // Удаление значения из localStorage:
    //         localStorage.removeItem('paymentInitiated');
    //         // Удаление значения из localStorage url:
    //         localStorage.removeItem('url');
    //         // Удаление data (данных) из localStorage:
    //         localStorage.removeItem('data');
    //     }     
    // }, []);

    return (
        <>
        <Helmet>
            <title>Конструктор заключений по смэ, экспертиза трупа</title>
            <meta
            name="description"
            content="Страница конструктора заключений по судебно-медицинской экспертизе (смэ)."
            />
            <meta name="robots" content="noindex" />
        </Helmet>
            <Header></Header>
            <h1 className={styles.h1Home}>Конструктор заключений по судебно-медицинской экспертизе (исследованию) трупа</h1>
            {/* {money && <p>Оплата прошла успешно! -</p>} */}
            <img src={imgSlide11} alt="Исследование трупа" className={styles.imgHome} width="1811" height="1018"/>
            <NavLink className={styles.link} to='/search'><button className={styles.btnHome}>Начать работу</button></NavLink>
            <img src={imgSlide2} alt="Конструктор по судебной медицине" className={styles.imgHome} width="1811" height="1018"/>
            {/* <h2> zzhmenka@yandex.ru</h2> */}
            <h2 className={styles.h2Home}>
                <a href="mailto:construktor-mail@yandex.ru">construktor-mail@yandex.ru</a>
            </h2>
            <img src={imgSlide33} alt="Экспертиза трупа" className={styles.imgHome} width="1811" height="1018"/>
            <h3 style={{ display: 'none' }}>Сайт предназначен как для изучающих судебную медицину, так и для практикующих судебно-медицинских экспертов. Все материалы, представленные на сайте, основаны на реальных судебно-медицинских экспертизах, но для предотвращения различных недоразумений они обезличены, названия и даты - изменены, поэтому любые совпадения с реальными событиями являются случайными. 
                Цель создания данного проекта - автоматизация процесса составления заключений по исследованию трупа в зависимости от типа требуемого документа, половой принадлежности, установленного диагноза и личности трупа (опознан или нет). Эксперт, обладая этой информацией и используя возможность добавления дополнительных повреждений, может быстро составить шаблон заключения с типовыми вопросами и стандартными на них ответами. После этого он может скачать его на свой компьютер и адаптировать под индивидуальные особенности конкретного случая.
            </h3>
            <Footer></Footer> 
        </>
    )
}

export default HomeDuble;