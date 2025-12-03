import React from 'react';
import { useState } from "react";
import styles from './SideMenuPatan.module.css'; // Импортируем стили как модуль

import { useSelector, useDispatch } from 'react-redux';
// import { dopPovrezhdenia } from '../store/index';
import { patan, patanOsn, prichinySmertii } from '../store/index';

function SideMenuPatan() {
    const gb = useSelector((state) => state.pat.gb);
    const saharDiab1 = useSelector((state) => state.pat.saharDiab1);
    const saharDiab2 = useSelector((state) => state.pat.saharDiab2);
    const vich = useSelector((state) => state.pat.vich);
    const covid = useSelector((state) => state.pat.covid);
    const gepatB = useSelector((state) => state.pat.gepatB);
    const gepatC = useSelector((state) => state.pat.gepatC);
    const sifilis = useSelector((state) => state.pat.sifilis);
    const gripp = useSelector((state) => state.pat.gripp);
    const tuberc = useSelector((state) => state.pat.tuberc);
    const krona = useSelector((state) => state.pat.krona);
    const njak = useSelector((state) => state.pat.njak);
    const greyvs = useSelector((state) => state.pat.greyvs);
    const hoshimoto = useSelector((state) => state.pat.hoshimoto);
    const gemInsult = useSelector((state) => state.pat.gemInsult);
    const oglomerulo = useSelector((state) => state.pat.oglomerulo);
    const feAnemi = useSelector((state) => state.pat.feAnemi);
    const postgemAnemi = useSelector((state) => state.pat.postgemAnemi);
    const hronPielo = useSelector((state) => state.pat.hronPielo);
    const ishInsult = useSelector((state) => state.pat.ishInsult);
    const infarctMioc = useSelector((state) => state.pat.infarctMioc);
    const alco = useSelector((state) => state.pat.alco);
    const dilCardio = useSelector((state) => state.pat.dilCardio);
    const gipCardio = useSelector((state) => state.pat.gipCardio);
    const miocardit = useSelector((state) => state.pat.miocardit);
    const sepsis = useSelector((state) => state.pat.sepsis);
    const hibs = useSelector((state) => state.pat.hibs);
    const mkb = useSelector((state) => state.pat.mkb);
    const pancreatit = useSelector((state) => state.pat.pancreatit);
    const pnevmoniaInterst = useSelector((state) => state.pat.pnevmoniaInterst);
    const pnevmoniaOchag = useSelector((state) => state.pat.pnevmoniaOchag);
    const pnevmoniaKrup = useSelector((state) => state.pat.pnevmoniaKrup);
    const hobl = useSelector((state) => state.pat.hobl);
    const astma = useSelector((state) => state.pat.astma);
    const peritonit = useSelector((state) => state.pat.peritonit);
    const yazva = useSelector((state) => state.pat.yazva);
    const meningit = useSelector((state) => state.pat.meningit);
    const difteria = useSelector((state) => state.pat.difteria);
    const holecistit = useSelector((state) => state.pat.holecistit);
    const rs = useSelector((state) => state.pat.rs);
    // const ushibRanaNoogr = useSelector((state) => state.dopPovrezhden.ushibRanaNoogr);
    const diabetcoma = useSelector((state) => state.prichinySmerti.diabetcoma);
    const ossn = useSelector((state) => state.prichinySmerti.ossn);
    const hsn = useSelector((state) => state.prichinySmerti.hsn);
    const odn = useSelector((state) => state.prichinySmerti.odn);
    const ords = useSelector((state) => state.prichinySmerti.ords);
    const vklinenie = useSelector((state) => state.prichinySmerti.vklinenie);
    const travmShok = useSelector((state) => state.prichinySmerti.travmShok);
    const gemShok = useSelector((state) => state.prichinySmerti.gemShok);
    const ostrKrovopot = useSelector((state) => state.prichinySmerti.ostrKrovopot);
    const lungserdce = useSelector((state) => state.prichinySmerti.lungserdce);
    const asfixia = useSelector((state) => state.prichinySmerti.asfixia);
    const itsh = useSelector((state) => state.prichinySmerti.itsh);
    const opn = useSelector((state) => state.prichinySmerti.opn);
    const hpn = useSelector((state) => state.prichinySmerti.hpn);
    const operitonit = useSelector((state) => state.prichinySmerti.operitonit);


    const dispatchFunction = useDispatch();
    function changeStatusHandler(type) {
        if (type === 'gb') {
            dispatchFunction(patan.gb());
        } else if (type === 'saharDiab1') {
            dispatchFunction(patan.saharDiab1());
        } else if (type === 'saharDiab2') {
            dispatchFunction(patan.saharDiab2());
        } else if (type === 'vich') {
            dispatchFunction(patan.vich());
        } else if (type === 'covid') {
            dispatchFunction(patan.covid());
        } else if (type === 'gepatB') {
            dispatchFunction(patan.gepatB());
        } else if (type === 'gepatC') {
            dispatchFunction(patan.gepatC());
        } else if (type === 'sifilis') {
            dispatchFunction(patan.sifilis());
        } else if (type === 'gripp') {
            dispatchFunction(patan.gripp());
        } else if (type === 'tuberc') {
            dispatchFunction(patan.tuberc());
        } else if (type === 'krona') {
            dispatchFunction(patan.krona());
        } else if (type === 'njak') {
            dispatchFunction(patan.njak());
        } else if (type === 'greyvs') {
            dispatchFunction(patan.greyvs());
        } else if (type === 'hoshimoto') {
            dispatchFunction(patan.hoshimoto());
        } else if (type === 'gemInsult') {
            dispatchFunction(patan.gemInsult());
        } else if (type === 'oglomerulo') {
            dispatchFunction(patan.oglomerulo());
        } else if (type === 'feAnemi') {
            dispatchFunction(patan.feAnemi());
        } else if (type === 'postgemAnemi') {
            dispatchFunction(patan.postgemAnemi());
        } else if (type === 'hronPielo') {
            dispatchFunction(patan.hronPielo());
        } else if (type === 'ishInsult') {
            dispatchFunction(patan.ishInsult());
        } else if (type === 'infarctMioc') {
            dispatchFunction(patan.infarctMioc());
        } else if (type === 'alco') {
            dispatchFunction(patan.alco());
        } else if (type === 'dilCardio') {
            dispatchFunction(patan.dilCardio());
        } else if (type === 'gipCardio') {
            dispatchFunction(patan.gipCardio());
        } else if (type === 'miocardit') {
            dispatchFunction(patan.miocardit());
        } else if (type === 'sepsis') {
            dispatchFunction(patan.sepsis());
        } else if (type === 'hibs') {
            dispatchFunction(patan.hibs());
        } else if (type === 'mkb') {
            dispatchFunction(patan.mkb());
        } else if (type === 'pancreatit') {
            dispatchFunction(patan.pancreatit());
        } else if (type === 'pnevmoniaInterst') {
            dispatchFunction(patan.pnevmoniaInterst());
        } else if (type === 'pnevmoniaOchag') {
            dispatchFunction(patan.pnevmoniaOchag());
        } else if (type === 'pnevmoniaKrup') {
            dispatchFunction(patan.pnevmoniaKrup());
        } else if (type === 'hobl') {
            dispatchFunction(patan.hobl());
        } else if (type === 'astma') {
            dispatchFunction(patan.astma());
        } else if (type === 'peritonit') {
            dispatchFunction(patan.peritonit());
        } else if (type === 'yazva') {
            dispatchFunction(patan.yazva());
        } else if (type === 'meningit') {
            dispatchFunction(patan.meningit());
        } else if (type === 'difteria') {
            dispatchFunction(patan.difteria());
        } else if (type === 'holecistit') {
            dispatchFunction(patan.holecistit());
        } else if (type === 'rs') {
            dispatchFunction(patan.rs());
        } else if (type === 'diabetcoma') {
            dispatchFunction(prichinySmertii.diabetcoma());
        } else if (type === 'ossn') {
            dispatchFunction(prichinySmertii.ossn());
        } else if (type === 'hsn') {
            dispatchFunction(prichinySmertii.hsn());
        } else if (type === 'odn') {
            dispatchFunction(prichinySmertii.odn());
        } else if (type === 'ords') {
            dispatchFunction(prichinySmertii.ords());
        } else if (type === 'vklinenie') {
            dispatchFunction(prichinySmertii.vklinenie());
        } else if (type === 'travmShok') {
            dispatchFunction(prichinySmertii.travmShok());
        } else if (type === 'gemShok') {
            dispatchFunction(prichinySmertii.gemShok());
        } else if (type === 'ostrKrovopot') {
            dispatchFunction(prichinySmertii.ostrKrovopot());
        } else if (type === 'lungserdce') {
            dispatchFunction(prichinySmertii.lungserdce());
        } else if (type === 'asfixia') {
            dispatchFunction(prichinySmertii.asfixia());
        } else if (type === 'itsh') {
            dispatchFunction(prichinySmertii.itsh());
        } else if (type === 'opn') {
            dispatchFunction(prichinySmertii.opn());
        } else if (type === 'hpn') {
            dispatchFunction(prichinySmertii.hpn());
        } else if (type === 'operitonit') {
            dispatchFunction(prichinySmertii.operitonit());
        } 
        
    }

    const gbOsn = useSelector((state) => state.patOsn.gbOsn);
    const saharDiab1Osn = useSelector((state) => state.patOsn.saharDiab1Osn);
    const saharDiab2Osn = useSelector((state) => state.patOsn.saharDiab2Osn);
    const vichOsn = useSelector((state) => state.patOsn.vichOsn);
    const covidOsn = useSelector((state) => state.patOsn.covidOsn);
    const gepatBOsn = useSelector((state) => state.patOsn.gepatBOsn);
    const gepatCOsn = useSelector((state) => state.patOsn.gepatCOsn);
    const sifilisOsn = useSelector((state) => state.patOsn.sifilisOsn);
    const grippOsn = useSelector((state) => state.patOsn.grippOsn);
    const tubercOsn = useSelector((state) => state.patOsn.tubercOsn);
    const kronaOsn = useSelector((state) => state.patOsn.kronaOsn);
    const njakOsn = useSelector((state) => state.patOsn.njakOsn);
    const greyvsOsn = useSelector((state) => state.patOsn.greyvsOsn);
    const hoshimotoOsn = useSelector((state) => state.patOsn.hoshimotoOsn);
    const gemInsultOsn = useSelector((state) => state.patOsn.gemInsultOsn);
    const oglomeruloOsn = useSelector((state) => state.patOsn.oglomeruloOsn);
    const feAnemiOsn = useSelector((state) => state.patOsn.feAnemiOsn);
    const postgemAnemiOsn = useSelector((state) => state.patOsn.postgemAnemiOsn);
    const hronPieloOsn = useSelector((state) => state.patOsn.hronPieloOsn);
    const ishInsultOsn = useSelector((state) => state.patOsn.ishInsultOsn);
    const infarctMiocOsn = useSelector((state) => state.patOsn.infarctMiocOsn);
    const alcoOsn = useSelector((state) => state.patOsn.alcoOsn);
    const dilCardioOsn = useSelector((state) => state.patOsn.dilCardioOsn);
    const gipCardioOsn = useSelector((state) => state.patOsn.gipCardioOsn);
    const miocarditOsn = useSelector((state) => state.patOsn.miocarditOsn);
    const sepsisOsn = useSelector((state) => state.patOsn.sepsisOsn);
    const hibsOsn = useSelector((state) => state.patOsn.hibsOsn);
    const mkbOsn = useSelector((state) => state.patOsn.mkbOsn);
    const pancreatitOsn = useSelector((state) => state.patOsn.pancreatitOsn);
    const pnevmoniaInterstOsn = useSelector((state) => state.patOsn.pnevmoniaInterstOsn);
    const pnevmoniaOchagOsn = useSelector((state) => state.patOsn.pnevmoniaOchagOsn);
    const pnevmoniaKrupOsn = useSelector((state) => state.patOsn.pnevmoniaKrupOsn);
    const hoblOsn = useSelector((state) => state.patOsn.hoblOsn);
    const astmaOsn = useSelector((state) => state.patOsn.astmaOsn);
    const peritonitOsn = useSelector((state) => state.patOsn.peritonitOsn);
    const yazvaOsn = useSelector((state) => state.patOsn.yazvaOsn);
    const meningitOsn = useSelector((state) => state.patOsn.meningitOsn);
    const difteriaOsn = useSelector((state) => state.patOsn.difteriaOsn);
    const holecistitOsn = useSelector((state) => state.patOsn.holecistitOsn);
    const rsOsn = useSelector((state) => state.patOsn.rsOsn);



    const [isOpen, setIsOpen] = useState(false);
    const toggleList = () => {
        setIsOpen(!isOpen);
    };
    const [isOpenVnutr, setIsOpenVnutr] = useState(false);
    const toggleListVnutr = () => {
        setIsOpenVnutr(!isOpenVnutr);
    };

    return (     
        <div className={styles["side-menu-wrapper"]}>
            <div className={styles["side-menu"]}>
            <p className={styles.vnutr} onClick={toggleListVnutr}>
                <u>Дополнительно добавить патологию внутренних органов</u>
            </p>
            {isOpenVnutr && (
                // <ul> Дополнительно добавить патологию внутренних органов: 
                <ul className={styles.prichinySmerti}> 
                {(tubercOsn === false) &&  
                    <li
                        className={`${tuberc ? styles.linkActive : ''}`}
                        onClick={() => changeStatusHandler('tuberc')}
                    >
                        Туберкулез
                    </li> } 
                    {(difteriaOsn === false) &&
                    <li
                        className={`${difteria ? styles.linkActive : ''}`}
                        onClick={() => changeStatusHandler('difteria')}
                    >
                        Дифтерия
                    </li>}
                    {(sifilisOsn === false) &&
                    <li
                        className={`${sifilis ? styles.linkActive : ''}`}
                        onClick={() => changeStatusHandler('sifilis')}
                    >
                        Сифилис
                    </li> }
                    {(gepatBOsn === false) && 
                    <li
                        className={`${gepatB ? styles.linkActive : ''}`}
                        onClick={() => changeStatusHandler('gepatB')}
                    >
                        Вирусный гепатит B
                    </li>}
                    {(gepatCOsn === false) && 
                    <li
                        className={`${gepatC ? styles.linkActive : ''}`}
                        onClick={() => changeStatusHandler('gepatC')}
                    >
                        Вирусный гепатит C
                    </li>} 
                    {(vichOsn === false) && 
                    <li
                        className={`${vich ? styles.linkActive : ''}`}
                        onClick={() => changeStatusHandler('vich')}
                    >
                        ВИЧ-инфекция, стадия (период) СПИД
                    </li>}
                    {(grippOsn === false) &&
                    <li
                        className={`${gripp ? styles.linkActive : ''}`}
                        onClick={() => changeStatusHandler('gripp')}
                    >
                        Грипп
                    </li>}
                    {(covidOsn === false) &&
                    <li
                        className={`${covid ? styles.linkActive : ''}`}
                        onClick={() => changeStatusHandler('covid')}
                    >
                        COVID-19
                    </li>}
                    {(feAnemiOsn === false) &&
                    <li
                        className={`${feAnemi ? styles.linkActive : ''}`}
                        onClick={() => changeStatusHandler('feAnemi')}
                    >
                        Железодефицитная анемия, в том числе вторичная (вследствие хронической потери крови)
                    </li> }
                    {(postgemAnemiOsn === false) &&
                    <li
                        className={`${postgemAnemi ? styles.linkActive : ''}`}
                        onClick={() => changeStatusHandler('postgemAnemi')}
                    >
                        Острая постгеморрагическая анемия
                    </li>} 
                    {(greyvsOsn === false) &&
                    <li
                        className={`${greyvs ? styles.linkActive : ''}`}
                        onClick={() => changeStatusHandler('greyvs')}
                    >
                        Болезнь Грейвса (диффузный токсический зоб)
                    </li>}
                    {(hoshimotoOsn === false) &&
                    <li
                        className={`${hoshimoto ? styles.linkActive : ''}`}
                        onClick={() => changeStatusHandler('hoshimoto')}
                    >
                        Аутоиммунный тиреоидит (тиреоидит Хашимото) с гипотиреозом
                    </li>}
                    {(saharDiab1Osn === false) &&
                    <li
                        className={`${saharDiab1 ? styles.linkActive : ''}`}
                        onClick={() => changeStatusHandler('saharDiab1')}
                    >
                        Сахарный диабет 1 типа
                    </li>}  
                    {(saharDiab2Osn === false) &&       
                    <li
                        className={`${saharDiab2 ? styles.linkActive : ''}`}
                        onClick={() => changeStatusHandler('saharDiab2')}
                    >
                        Сахарный диабет 2 типа
                    </li>}   
                    {(alcoOsn === false) && 
                    <li
                        className={`${alco ? styles.linkActive : ''}`}
                        onClick={() => changeStatusHandler('alco')}
                    >
                        Хронический алкоголизм (алкогольная кардиомиопатия)
                    </li>} 
                    {(meningitOsn === false) &&  
                    <li
                        className={`${meningit ? styles.linkActive : ''}`}
                        onClick={() => changeStatusHandler('meningit')}
                    >
                        Менингит
                    </li>}
                    {(rsOsn === false) &&    
                    <li
                        className={`${rs ? styles.linkActive : ''}`}
                        onClick={() => changeStatusHandler('rs')}
                    >
                        Рассеянный склероз
                    </li>} 
                    {(gbOsn === false) &&   
                    <li
                        className={`${gb ? styles.linkActive : ''}`}
                        onClick={() => changeStatusHandler('gb')}
                    >
                        ГБ высокой степени и стадии (3 степень и 2-3 стадии)
                    </li>} 
                    {(infarctMiocOsn === false) &&               
                    <li
                        className={`${infarctMioc ? styles.linkActive : ''}`}
                        onClick={() => changeStatusHandler('infarctMioc')}
                    >
                        Инфаркт миокарда
                    </li>}
                    {(hibsOsn === false) &&
                    <li
                        className={`${hibs ? styles.linkActive : ''}`}
                        onClick={() => changeStatusHandler('hibs')}
                    >
                        ХИБС (кардиосклероз, аневризма сердца)
                    </li>}
                    {(sepsisOsn === false) &&
                    <li
                        className={`${sepsis ? styles.linkActive : ''}`}
                        onClick={() => changeStatusHandler('sepsis')}
                    >
                        Бактериальный эндокардит (сепсис)
                    </li>}   
                    {(miocarditOsn === false) &&                 
                    <li
                        className={`${miocardit ? styles.linkActive : ''}`}
                        onClick={() => changeStatusHandler('miocardit')}
                    >
                        Миокардит (+ инфаркты внутренних органов в результате тромбоэмболии)
                    </li>}   
                    {(dilCardioOsn === false) &&              
                    <li
                        className={`${dilCardio ? styles.linkActive : ''}`}
                        onClick={() => changeStatusHandler('dilCardio')}
                    >
                        Дилатационная кардиомиопатия (ДКМП)
                    </li>}   
                    {(gipCardioOsn === false) &&              
                    <li
                        className={`${gipCardio ? styles.linkActive : ''}`}
                        onClick={() => changeStatusHandler('gipCardio')}
                    >
                        Гипертрофическая кардиомиопатия (ГКМП) 
                    </li>}
                    {(gemInsultOsn === false) &&                 
                    <li
                        className={`${gemInsult ? styles.linkActive : ''}`}
                        onClick={() => changeStatusHandler('gemInsult')}
                    >
                        Геморрагический инсульт
                    </li>} 
                    {(ishInsultOsn === false) &&                
                    <li
                        className={`${ishInsult ? styles.linkActive : ''}`}
                        onClick={() => changeStatusHandler('ishInsult')}
                    >
                        Ишемический инсульт
                    </li>}  
                    {(pnevmoniaKrupOsn === false) &&               
                    <li
                        className={`${pnevmoniaKrup ? styles.linkActive : ''}`}
                        onClick={() => changeStatusHandler('pnevmoniaKrup')}
                    >
                        Пневмония крупозная (лобарная, плевропневмония)
                    </li>}    
                    {(pnevmoniaOchagOsn === false) &&             
                    <li
                        className={`${pnevmoniaOchag ? styles.linkActive : ''}`}
                        onClick={() => changeStatusHandler('pnevmoniaOchag')}
                    >
                        Пневмония очаговая
                    </li>}  
                    {(pnevmoniaInterstOsn === false) &&              
                    <li
                        className={`${pnevmoniaInterst ? styles.linkActive : ''}`}
                        onClick={() => changeStatusHandler('pnevmoniaInterst')}
                    >
                        Пневмония интерстициальная (межуточная)
                    </li>} 
                    {(hoblOsn === false) &&                
                    <li
                        className={`${hobl ? styles.linkActive : ''}`}
                        onClick={() => changeStatusHandler('hobl')}
                    >
                        Хроническая обструктивная болезнь легких (ХОБЛ) 
                    </li>} 
                    {(astmaOsn === false) &&                
                    <li
                        className={`${astma ? styles.linkActive : ''}`}
                        onClick={() => changeStatusHandler('astma')}
                    >
                        Бронхиальная астма 
                    </li>}
                    {(yazvaOsn === false) &&                 
                    <li
                        className={`${yazva ? styles.linkActive : ''}`}
                        onClick={() => changeStatusHandler('yazva')}
                    >
                        Язвенная болезнь желудка и двенадцатиперстной кишки
                    </li>}
                    {(kronaOsn === false) &&                 
                    <li
                        className={`${krona ? styles.linkActive : ''}`}
                        onClick={() => changeStatusHandler('krona')}
                    >
                        Болезнь Крона
                    </li>}  
                    {(njakOsn === false) &&               
                    <li
                        className={`${njak ? styles.linkActive : ''}`}
                        onClick={() => changeStatusHandler('njak')}
                    >
                        Язвенный колит (НЯК)
                    </li>}  
                    {(peritonitOsn === false) &&               
                    <li
                        className={`${peritonit ? styles.linkActive : ''}`}
                        onClick={() => changeStatusHandler('peritonit')}
                    >
                        Острый перитонит
                    </li>}
                    {(holecistitOsn === false) &&                 
                    <li
                        className={`${holecistit ? styles.linkActive : ''}`}
                        onClick={() => changeStatusHandler('holecistit')}
                    >
                        Холецистит, холелитиаз
                    </li>} 
                    {(pancreatitOsn === false) &&                
                    <li
                        className={`${pancreatit ? styles.linkActive : ''}`}
                        onClick={() => changeStatusHandler('pancreatit')}
                    >
                        Панкреатит
                    </li>} 
                    {(oglomeruloOsn === false) &&                
                    <li
                        className={`${oglomerulo ? styles.linkActive : ''}`}
                        onClick={() => changeStatusHandler('oglomerulo')}
                    >
                        Острый гломерулонефрит
                    </li>} 
                    {(hronPieloOsn === false) &&                
                    <li
                        className={`${hronPielo ? styles.linkActive : ''}`}
                        onClick={() => changeStatusHandler('hronPielo')}
                    >
                        Хронический пиелонефрит
                    </li>} 
                    {(mkbOsn === false) &&                
                    <li
                        className={`${mkb ? styles.linkActive : ''}`}
                        onClick={() => changeStatusHandler('mkb')}
                    >
                        Мочекаменная болезнь (нефролитиаз)
                    </li>}                 
                </ul>
            )}
                <p className={styles.smertj} onClick={toggleList}>
                <u>Добавить непосредственную причину смерти и/или другие синдромы, состояния</u>
            </p>
            {isOpen && (
                // <ul className={styles.prichinySmerti}> Добавить непосредственную причину смерти и/или другие синдромы, состояния:         
                <ul className={styles.prichinySmerti}>        
                    <li className={ossn ? styles.linkActive : ''} onClick={() =>  changeStatusHandler('ossn')}>
                        Острая сердечно-сосудистая недостаточность (ОССН) 
                    </li>
                    <li className={hsn ? styles.linkActive : ''} onClick={() =>  changeStatusHandler('hsn')}>
                        Хроническая сердечная недостаточность (ХСН) 
                    </li>
                    <li className={lungserdce ? styles.linkActive : ''} onClick={() =>  changeStatusHandler('lungserdce')}>
                        Легочная гипертензия, легочное сердце и последующая правожелудочковая (легочно-сердечная) недостаточность   
                    </li>
                    <li className={odn ? styles.linkActive : ''} onClick={() =>  changeStatusHandler('odn')}>
                        Острая дыхательная недостаточность (ОДН)  
                    </li>
                    <li className={ords ? styles.linkActive : ''} onClick={() =>  changeStatusHandler('ords')}>
                        Острый респираторный дистресс-синдром (ОРДС)   
                    </li>
                    <li className={asfixia ? styles.linkActive : ''} onClick={() =>  changeStatusHandler('asfixia')}>
                        Механическая асфиксия, общеасфиктические признаки (признаки быстро наступившей смерти)
                    </li>
                    <li className={vklinenie ? styles.linkActive : ''} onClick={() =>  changeStatusHandler('vklinenie')}>
                        Отек-набухание головного мозга с вариантами вклинения ствола и других структур мозга   
                    </li>
                    <li className={ostrKrovopot ? styles.linkActive : ''} onClick={() =>  changeStatusHandler('ostrKrovopot')}>
                        Острая массивная кровопотеря   
                    </li>       
                    <li className={gemShok ? styles.linkActive : ''} onClick={() =>  changeStatusHandler('gemShok')}>
                        Геморрагический шок  
                    </li>
                    <li className={travmShok ? styles.linkActive : ''} onClick={() =>  changeStatusHandler('travmShok')}>
                        Травматический шок  
                    </li>
                    <li className={itsh ? styles.linkActive : ''} onClick={() =>  changeStatusHandler('itsh')}>
                        Септический шок (ИТШ)
                    </li>
                    <li className={operitonit ? styles.linkActive : ''} onClick={() =>  changeStatusHandler('operitonit')}>
                        Перитонит
                    </li>
                    <li className={opn ? styles.linkActive : ''} onClick={() =>  changeStatusHandler('opn')}>
                        Острая почечная недостаточность (ОПН)
                    </li>
                    <li className={hpn ? styles.linkActive : ''} onClick={() =>  changeStatusHandler('hpn')}>
                        Хроническая почечная недостаточность (ХПН)
                    </li>
                    <li className={diabetcoma ? styles.linkActive : ''} onClick={() =>  changeStatusHandler('diabetcoma')}>
                        Диабетическая кома
                    </li>
                </ul>
                )}
            </div>
        </div>
    );
}

export default SideMenuPatan;

