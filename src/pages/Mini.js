import logoImg from '../assets/logo.webp';
import miniImg from '../assets/mini4.webp'; 
import styles from './Mini.module.css';
import Footer from "../components/Footer"
// import { useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

function Mini() {
    // const history = useHistory();

    // useEffect(() => {
    //     if (window.innerWidth > 768) {
    //         history.push('/home');
    //         // Обновляем заголовок
    //         document.title = "Конструктор составления заключений по смэ - главная, экспертиза трупа";
    //         // Обновляем метатег description
    //         let metaDescription = document.querySelector("meta[name='description']");
    //         if (!metaDescription) {
    //         metaDescription = document.createElement('meta');
    //         metaDescription.name = "description";
    //         document.head.appendChild(metaDescription);
    //         }
    //         metaDescription.content = "Составление заключений по судебно-медицинской экспертизе трупа, главная страница конструктора составления заключений по смэ трупа.";
    //     }
    // }, [history]);

    return (
        <div className={styles.container}>
            <img src={logoImg} alt="Экспертиза трупа" className={styles.logo} />
            <h1 className={styles.h1}>
                Конструктор заключений по судебно-медицинской экспертизе (исследованию) трупа
            </h1>

            <img src={miniImg} alt="Конструктор смэ" className={styles.img} />

            <h2 className={styles.h2}>
                <a href="mailto:construktor-mail@yandex.ru">construktor-mail@yandex.ru</a>
            </h2>
            <Footer />
        </div>
    )
}

export default Mini
