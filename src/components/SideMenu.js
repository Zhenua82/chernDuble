import React from 'react';
import { useState } from "react";
import styles from './SideMenu.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { dopPovrezhdenia } from '../store/index';
import { medmanipuljac } from '../store/index';

function SideMenu() {
    const ushibRanaOgr = useSelector((state) => state.dopPovrezhden.ushibRanaOgr);
    const ushibRanaNoogr = useSelector((state) => state.dopPovrezhden.ushibRanaNoogr);
    const bampPerelom = useSelector((state) => state.dopPovrezhden.bampPerelom);
    const krovopodtek = useSelector((state) => state.dopPovrezhden.krovopodtek);
    const ssadiny = useSelector((state) => state.dopPovrezhden.ssadiny);
    const krovUpr = useSelector((state) => state.dopPovrezhden.krovUpr);
    const rezanRana = useSelector((state) => state.dopPovrezhden.rezanRana);
    const ushib = useSelector((state) => state.dopPovrezhden.ushib);
    const colotoRez = useSelector((state) => state.dopPovrezhden.colotoRez);
    const mnogo = useSelector((state) => state.dopPovrezhden.mnogo);
    const ognestrelMnozh = useSelector((state) => state.dopPovrezhden.ognestrelMnozh);
    const ognestrelOdin = useSelector((state) => state.dopPovrezhden.ognestrelOdin);
    const colotayaRana = useSelector((state) => state.dopPovrezhden.colotayaRana);
    const ushibRanaMk = useSelector((state) => state.dopPovrezhden.ushibRanaMk);
    const ozhogiMk = useSelector((state) => state.dopPovrezhden.ozhogiMk);
    const ozhogPlamenem = useSelector((state) => state.dopPovrezhden.ozhogPlamenem);
    const ploskKostjOgr = useSelector((state) => state.dopPovrezhden.ploskKostjOgr);
    const ploskKostjNoogr = useSelector((state) => state.dopPovrezhden.ploskKostjNoogr);
    const colotoRezMk = useSelector((state) => state.dopPovrezhden.colotoRezMk);
    const ognestrelPya = useSelector((state) => state.dopPovrezhden.ognestrelPya);
    const prolezheni = useSelector((state) => state.dopPovrezhden.prolezheni);

    const injekcia = useSelector((state) => state.medmanipul.injekcia);
    const perefkateter = useSelector((state) => state.medmanipul.perefkateter);
    const kateterbedro = useSelector((state) => state.medmanipul.kateterbedro);
    const kateterpodcl = useSelector((state) => state.medmanipul.kateterpodcl);
    const defibril = useSelector((state) => state.medmanipul.defibril);
    const massazhserdca = useSelector((state) => state.medmanipul.massazhserdca);
    const laparocentez = useSelector((state) => state.medmanipul.laparocentez);
    const katetermoch = useSelector((state) => state.medmanipul.katetermoch);
    const laparotomia = useSelector((state) => state.medmanipul.laparotomia);
    const traheotomia = useSelector((state) => state.medmanipul.traheotomia);
    const intubacia = useSelector((state) => state.medmanipul.intubacia);
    const nazogastr = useSelector((state) => state.medmanipul.nazogastr);
    const laparostoma = useSelector((state) => state.medmanipul.laparostoma);
    const kranioektomia = useSelector((state) => state.medmanipul.kranioektomia);
    const torakocentez = useSelector((state) => state.medmanipul.torakocentez);
    const torakotomia = useSelector((state) => state.medmanipul.torakotomia);
    const fixaciaperlom = useSelector((state) => state.medmanipul.fixaciaperlom);


    const dispatchFunction = useDispatch();
    function changeStatusHandler(type){
        if (type === 'ushibRanaOgr') {
            dispatchFunction(dopPovrezhdenia.ushibRanaOgr());
        } else if (type === 'ushibRanaNoogr') {
            dispatchFunction(dopPovrezhdenia.ushibRanaNoogr());
        } else if (type === 'bampPerelom') {
            dispatchFunction(dopPovrezhdenia.bampPerelom());
        } else if (type === 'krovopodtek') {
            dispatchFunction(dopPovrezhdenia.krovopodtek());
        } else if (type === 'ssadiny') {
            dispatchFunction(dopPovrezhdenia.ssadiny());
        } else if (type === 'krovUpr') {
            dispatchFunction(dopPovrezhdenia.krovUpr());
        } else if (type === 'rezanRana') {
            dispatchFunction(dopPovrezhdenia.rezanRana());
        }else if (type === 'ushib') {
            dispatchFunction(dopPovrezhdenia.ushib());
        }else if (type === 'colotoRez') {
            dispatchFunction(dopPovrezhdenia.colotoRez());
        }else if (type === 'mnogo') {
            dispatchFunction(dopPovrezhdenia.mnogo());
        }else if (type === 'ognestrelMnozh') {
            dispatchFunction(dopPovrezhdenia.ognestrelMnozh());
        }else if (type === 'ognestrelOdin') {
            dispatchFunction(dopPovrezhdenia.ognestrelOdin());
        }else if (type === 'colotayaRana') {
            dispatchFunction(dopPovrezhdenia.colotayaRana());
        }else if (type === 'ushibRanaMk') {
            dispatchFunction(dopPovrezhdenia.ushibRanaMk());
        }else if (type === 'ozhogiMk') {
            dispatchFunction(dopPovrezhdenia.ozhogiMk());
        }else if (type === 'ozhogPlamenem') {
            dispatchFunction(dopPovrezhdenia.ozhogPlamenem());
        }else if (type === 'ploskKostjOgr') {
            dispatchFunction(dopPovrezhdenia.ploskKostjOgr());
        }else if (type === 'ploskKostjNoogr') {
            dispatchFunction(dopPovrezhdenia.ploskKostjNoogr());
        }else if (type === 'colotoRezMk') {
            dispatchFunction(dopPovrezhdenia.colotoRezMk());
        }else if (type === 'prolezheni') {
            dispatchFunction(dopPovrezhdenia.prolezheni());
        }else if (type === 'ognestrelPya') {
            dispatchFunction(dopPovrezhdenia.ognestrelPya());
        }else if (type === 'injekcia') {
            dispatchFunction(medmanipuljac.injekcia());
        }else if (type === 'perefkateter') {
            dispatchFunction(medmanipuljac.perefkateter());
        }else if (type === 'kateterbedro') {
            dispatchFunction(medmanipuljac.kateterbedro());
        }else if (type === 'kateterpodcl') {
            dispatchFunction(medmanipuljac.kateterpodcl());
        }else if (type === 'defibril') {
            dispatchFunction(medmanipuljac.defibril());
        }else if (type === 'laparocentez') {
            dispatchFunction(medmanipuljac.laparocentez());
        }else if (type === 'katetermoch') {
            dispatchFunction(medmanipuljac.katetermoch());
        }else if (type === 'laparotomia') {
            dispatchFunction(medmanipuljac.laparotomia());
        }else if (type === 'traheotomia') {
            dispatchFunction(medmanipuljac.traheotomia());
        }else if (type === 'intubacia') {
            dispatchFunction(medmanipuljac.intubacia());
        }else if (type === 'nazogastr') {
            dispatchFunction(medmanipuljac.nazogastr());
        }else if (type === 'laparostoma') {
            dispatchFunction(medmanipuljac.laparostoma());
        }else if (type === 'kranioektomia') {
            dispatchFunction(medmanipuljac.kranioektomia());
        }else if (type === 'massazhserdca') {
            dispatchFunction(medmanipuljac.massazhserdca());
        }else if (type === 'torakocentez') {
            dispatchFunction(medmanipuljac.torakocentez());
        }else if (type === 'torakotomia') {
            dispatchFunction(medmanipuljac.torakotomia());
        }else if (type === 'fixaciaperlom') {
            dispatchFunction(medmanipuljac.fixaciaperlom());
        }
    }


    const [isOpen, setIsOpen] = useState(false);
        const toggleList = () => {
            setIsOpen(!isOpen);
        };
        const [isOpenMed, setIsOpenMed] = useState(false);
        const toggleListMed = () => {
            setIsOpenMed(!isOpenMed);
        };
    return (
       
        <div className={styles["side-menu-wrapper"]}>
            <div className={styles["side-menu"]}>
                <p className={styles.povrezhden} onClick={toggleList}>
                    <u>Дополнительно добавить повреждения</u>&nbsp;
                </p>
                {isOpen && (
                    /* <ul className={styles.povrezhd}> Дополнительно добавить повреждения: */
                <ul className={styles.povrezhd}>
                    <li className={krovopodtek ? styles.linkActive : ''} onClick={() => changeStatusHandler('krovopodtek')}>
                            Кровоподтек
                    </li>
                    <li className={ssadiny ? styles.linkActive : ''} onClick={() => changeStatusHandler('ssadiny')}>
                        Ссадины
                    </li>
                    <li className={krovUpr ? styles.linkActive : ''} onClick={() => changeStatusHandler('krovUpr')}>
                        Кровоподтеки и ссадины (упрощенный вариант)
                    </li>
                    <li className={ushibRanaOgr ? styles.linkActive : ''} onClick={() => changeStatusHandler('ushibRanaOgr')}>
                        Ушибленная рана (ограниченная поверхность)
                    </li>
                    <li className={ushibRanaNoogr ? styles.linkActive : ''} onClick={() => changeStatusHandler('ushibRanaNoogr')}>
                        Ушибленная рана (неограниченная поверхность)
                    </li>
                    <li className={ushibRanaMk ? styles.linkActive : ''} onClick={() => changeStatusHandler('ushibRanaMk')}>
                        Ушибленная рана + перелом плоской кости (мед. крим.)
                    </li>
                    <li className={mnogo ? styles.linkActive : ''} onClick={() => changeStatusHandler('mnogo')}>
                        Множество повреждений (кровоподтеки, ссадины, перелом зуба, ушибленная рана)
                    </li>
                    <li className={rezanRana ? styles.linkActive : ''} onClick={() => changeStatusHandler('rezanRana')}>
                        Peзаные раны
                    </li>
                    <li className={colotayaRana ? styles.linkActive : ''} onClick={() => changeStatusHandler('colotayaRana')}>
                        Колотое ранение
                    </li>
                    <li className={colotoRez ? styles.linkActive : ''} onClick={() => changeStatusHandler('colotoRez')}>
                        Колото-резаное ранение
                    </li>
                    <li className={colotoRezMk ? styles.linkActive : ''} onClick={() => changeStatusHandler('colotoRezMk')}>
                        Колото-резаное ранение + мед. крим. (нож, одежда, хрящевая часть ребра)
                    </li>
                    <li className={ognestrelOdin ? styles.linkActive : ''} onClick={() => changeStatusHandler('ognestrelOdin')}>
                        Одиночное огнестрельное  ранение (ПМ)
                    </li>
                    <li className={ognestrelPya ? styles.linkActive : ''} onClick={() => changeStatusHandler('ognestrelPya')}>
                        Одиночное огнестрельное  ранение + мед. крим. (ПЯ)
                    </li>
                    <li className={ognestrelMnozh ? styles.linkActive : ''} onClick={() => changeStatusHandler('ognestrelMnozh')}>
                        Множественные огнестрельные  ранения + мед. крим. (АК-74)
                    </li>
                    <li className={ploskKostjOgr ? styles.linkActive : ''} onClick={() => changeStatusHandler('ploskKostjOgr')}>
                        Перелом плоской кости (ограниченная поверхность)
                    </li>
                    <li className={ploskKostjNoogr ? styles.linkActive : ''} onClick={() => changeStatusHandler('ploskKostjNoogr')}>
                        Перелом плоской кости + мед. крим. (неограниченная поверхность)
                    </li>
                    <li className={bampPerelom ? styles.linkActive : ''} onClick={() => changeStatusHandler('bampPerelom')}>
                        Бампер-перелом
                    </li>
                    <li className={ozhogiMk ? styles.linkActive : ''} onClick={() => changeStatusHandler('ozhogiMk')}>
                        Контактные ожоги (+ мед. крим.)
                    </li>
                    <li className={ozhogPlamenem ? styles.linkActive : ''} onClick={() => changeStatusHandler('ozhogPlamenem')}>
                        Ожог пламенем
                    </li>
                    <li className={prolezheni ? styles.linkActive : ''} onClick={() => changeStatusHandler('prolezheni')}>
                        Пролежни
                    </li>
                    <li className={ushib ? styles.linkActive : ''} onClick={() => changeStatusHandler('ushib')}>
                        "Ушиб" (отсутствие повреждений)
                    </li>
                </ul>
                )}
                <p className={styles.medic} onClick={toggleListMed}>
                    <u>Дополнительно добавить медицинские манипуляции</u>
                </p>
                {isOpenMed && (
                // <ul className={styles.med}> Дополнительно добавить медицинские манипуляции:
                <ul className={styles.med}>
                    <li className={injekcia ? styles.linkActive : ''} onClick={() => changeStatusHandler('injekcia')}>
                        Следы от инъекций
                    </li>
                    <li className={perefkateter ? styles.linkActive : ''} onClick={() => changeStatusHandler('perefkateter')}>
                        Катетеризация периферических вен
                    </li>
                    <li className={kateterbedro ? styles.linkActive : ''} onClick={() => changeStatusHandler('kateterbedro')}>
                        Катетеризация бедренной артерии / вены 
                    </li>
                    <li className={kateterpodcl ? styles.linkActive : ''} onClick={() => changeStatusHandler('kateterpodcl')}>
                        Катетеризация подключичной / наружной яремной вен 
                    </li>
                    <li className={katetermoch ? styles.linkActive : ''} onClick={() => changeStatusHandler('katetermoch')}>
                        Катетеризация мочевого пузыря 
                    </li>
                    <li className={intubacia ? styles.linkActive : ''} onClick={() => changeStatusHandler('intubacia')}>
                        Интубация трахеи
                    </li>
                    <li className={traheotomia ? styles.linkActive : ''} onClick={() => changeStatusHandler('traheotomia')}>
                        Трахеотомия и трахеостомия 
                    </li>
                    <li className={nazogastr ? styles.linkActive : ''} onClick={() => changeStatusHandler('nazogastr')}>
                        Назогастральный / желудочный зонд
                    </li>
                    <li className={defibril ? styles.linkActive : ''} onClick={() => changeStatusHandler('defibril')}>
                        Дефибрилляция, ЭИТ (ожоги) / датчики (электроды) для мониторинга сердечной деятельности и следы от них
                    </li>
                    <li className={massazhserdca ? styles.linkActive : ''} onClick={() => changeStatusHandler('massazhserdca')}>
                        Последствия непрямого массажа сердца (переломы ребер, кровоизлияния в мягкие ткани и в органы грудной клетки)
                    </li>
                    <li className={kranioektomia ? styles.linkActive : ''} onClick={() => changeStatusHandler('kranioektomia')}>
                        Декомпрессивная трепанация черепа (краниоэктомия)
                    </li>
                    <li className={torakocentez ? styles.linkActive : ''} onClick={() => changeStatusHandler('torakocentez')}>
                        Дренирование плевральной полости (торакоцентез)
                    </li>
                    <li className={torakotomia ? styles.linkActive : ''} onClick={() => changeStatusHandler('torakotomia')}>
                        Торакотомия
                    </li>
                    <li className={laparocentez ? styles.linkActive : ''} onClick={() => changeStatusHandler('laparocentez')}>
                        Лапароцентез
                    </li>
                    <li className={laparotomia ? styles.linkActive : ''} onClick={() => changeStatusHandler('laparotomia')}>
                        Лапаротомия, спленэктомия, санация и дренирование брюшной полости
                    </li>
                    <li className={laparostoma ? styles.linkActive : ''} onClick={() => changeStatusHandler('laparostoma')}>
                        Программированная лапаротомия, лапаростома
                    </li>
                    <li className={fixaciaperlom ? styles.linkActive : ''} onClick={() => changeStatusHandler('fixaciaperlom')}>
                        Фиксации переломов костей (описание ран)
                    </li>
                </ul>
                )}
            </div>
        </div>
    );
}

export default SideMenu;

