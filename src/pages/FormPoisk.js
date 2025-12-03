import React, { useState, useRef, useEffect } from 'react';
import styles from './FormPoisk.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useSelector, useDispatch } from 'react-redux';
import { expNeopStatee } from '../store/index';

import { patan, patanOsn, sudebbOsn } from '../store/index';

const FormPoisk = (props) => {
    const [vid, setVid] = useState('');
    const [diagnoz, setDiagnoz] = useState('');
    const [sex, setSex] = useState('');
    const [izvesten, setIzvesten] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    // const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);
    const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(true);
    const [isSubDropdownOpenOtrava, setIsSubDropdownOpenOtrava] = useState(true);
    const [isSubDropdownOpenOgnestrel, setIsSubDropdownOpenOgnestrel] = useState(true);
    const [isSubDropdownOpenAvto, setIsSubDropdownOpenAvto] = useState(true);
    const [isSubDropdownOpenAsfixia, setIsSubDropdownOpenAsfixia] = useState(true);
    const [selectedOption, setSelectedOption] = useState('');
    const dropdownRef = useRef();

    const [invalidFields, setInvalidFields] = useState({});
    const dispatchFunction = useDispatch();

    const handleOptionClickk = (value1, value2) => {
            setSelectedOption(value2); // Устанавливаем выбранное значение
            setDiagnoz(value1); // Обновляем диагноз
            setDropdownOpen(false); // Закрываем основной список
            setIsSubDropdownOpen(false); // Закрываем подразделы   
    };
    const handleOptionClick = (value) => {
        if (value === 'патан') {
            setIsSubDropdownOpen((prev) => !prev); // Переключение видимости подразделов
        } else {
            setSelectedOption(value); // Устанавливаем выбранное значение
            setDiagnoz(value); // Обновляем диагноз
            setDropdownOpen(false); // Закрываем основной список
            setIsSubDropdownOpen(false); // Закрываем подразделы
        }
    };
    const handleOptionClickOtrava = (value) => {
        if (value === 'отрава') {
            setIsSubDropdownOpenOtrava((prev) => !prev); // Переключение видимости подразделов
        } else {
            setSelectedOption(value); // Устанавливаем выбранное значение
            setDiagnoz(value); // Обновляем диагноз
            setDropdownOpen(false); // Закрываем основной список
            setIsSubDropdownOpenOtrava(false); // Закрываем подразделы
        }
    };
    const handleOptionClickOgnestrel = (value) => {
        if (value === 'огнестрел') {
            setIsSubDropdownOpenOgnestrel((prev) => !prev); // Переключение видимости подразделов
        } else {
            setSelectedOption(value); // Устанавливаем выбранное значение
            setDiagnoz(value); // Обновляем диагноз
            setDropdownOpen(false); // Закрываем основной список
            setIsSubDropdownOpenOgnestrel(false); // Закрываем подразделы
        }
    };
    const handleOptionClickAvto = (value) => {
        if (value === 'авто') {
            setIsSubDropdownOpenAvto((prev) => !prev); // Переключение видимости подразделов
        } else {
            setSelectedOption(value); // Устанавливаем выбранное значение
            setDiagnoz(value); // Обновляем диагноз
            setDropdownOpen(false); // Закрываем основной список
            setIsSubDropdownOpenAvto(false); // Закрываем подразделы
        }
    };
    const handleOptionClickAsfixia = (value) => {
        if (value === 'асфиксия') {
            setIsSubDropdownOpenAsfixia((prev) => !prev); // Переключение видимости подразделов
        } else {
            setSelectedOption(value); // Устанавливаем выбранное значение
            setDiagnoz(value); // Обновляем диагноз
            setDropdownOpen(false); // Закрываем основной список
            setIsSubDropdownOpenAvto(false); // Закрываем подразделы
        }
    };

    const handleSubOptionClick = (subValue) => {
        setSelectedOption(subValue); // Устанавливаем выбранный подраздел как значение
        setDiagnoz('другие варианты ненасильственной смерти'); // Устанавливаем диагноз
        setIsSubDropdownOpen(false);
    };

    const handleOutsideClick = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setDropdownOpen(false); // Закрываем выпадающий список при клике вне
            // Закрываем подразделы:
            // setIsSubDropdownOpen(false); 
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    function addHandler(event) {
        event.preventDefault();
        const newInvalidFields = {};

        // Проверяем все поля, включая диагноз
        if (!vid) newInvalidFields.vid = true;
        if (!diagnoz) newInvalidFields.diagnoz = true;
        if (!sex) newInvalidFields.sex = true;
        if (!izvesten) newInvalidFields.izvesten = true;

        if (Object.keys(newInvalidFields).length > 0) {
            setInvalidFields(newInvalidFields);
            return;
        }

        let dataForm = { vid: vid, diagnoz: diagnoz, sex: sex, izvesten: izvesten };
        setVid('');
        setDiagnoz('');
        setSex('');
        setIzvesten('');
        setInvalidFields({});

        props.onChangeData(dataForm);

        dispatchFunction(expNeopStatee.exp(dataForm.vid));
        dispatchFunction(expNeopStatee.neop(dataForm.izvesten));
        dispatchFunction(expNeopStatee.sex(dataForm.sex));
    }
function changeStatusHandler(type) {
        if (type === 'gb') {
            dispatchFunction(patanOsn.gbOsn());
        } else if (type === 'saharDiab1') {
            dispatchFunction(patanOsn.saharDiab1Osn());
        } else if (type === 'saharDiab2') {
            dispatchFunction(patanOsn.saharDiab2Osn());
        } else if (type === 'vich') {
            dispatchFunction(patanOsn.vichOsn());
        } else if (type === 'covid') {
            dispatchFunction(patanOsn.covidOsn());
        } else if (type === 'gepatB') {
            dispatchFunction(patanOsn.gepatBOsn());
        } else if (type === 'gepatC') {
            dispatchFunction(patanOsn.gepatCOsn());
        } else if (type === 'sifilis') {
            dispatchFunction(patanOsn.sifilisOsn());
        } else if (type === 'gripp') {
            dispatchFunction(patanOsn.grippOsn());
        } else if (type === 'tuberc') {
            dispatchFunction(patanOsn.tubercOsn());
        } else if (type === 'krona') {
            dispatchFunction(patanOsn.kronaOsn());
        } else if (type === 'njak') {
            dispatchFunction(patanOsn.njakOsn());
        } else if (type === 'greyvs') {
            dispatchFunction(patanOsn.greyvsOsn());
        } else if (type === 'hoshimoto') {
            dispatchFunction(patanOsn.hoshimotoOsn());
        } else if (type === 'gemInsult') {
            dispatchFunction(patanOsn.gemInsultOsn());
        } else if (type === 'oglomerulo') {
            dispatchFunction(patanOsn.oglomeruloOsn());
        } else if (type === 'feAnemi') {
            dispatchFunction(patanOsn.feAnemiOsn());
        } else if (type === 'postgemAnemi') {
            dispatchFunction(patanOsn.postgemAnemiOsn());
        } else if (type === 'hronPielo') {
            dispatchFunction(patanOsn.hronPieloOsn());
        } else if (type === 'ishInsult') {
            dispatchFunction(patanOsn.ishInsultOsn());
        } else if (type === 'infarctMioc') {
            dispatchFunction(patanOsn.infarctMiocOsn());
        } else if (type === 'alco') {
            dispatchFunction(patanOsn.alcoOsn());
        } else if (type === 'dilCardio') {
            dispatchFunction(patanOsn.dilCardioOsn());
        } else if (type === 'gipCardio') {
            dispatchFunction(patanOsn.gipCardioOsn());
        } else if (type === 'miocardit') {
            dispatchFunction(patanOsn.miocarditOsn());
        } else if (type === 'sepsis') {
            dispatchFunction(patanOsn.sepsisOsn());
        } else if (type === 'hibs') {
            dispatchFunction(patanOsn.hibsOsn());
        } else if (type === 'mkb') {
            dispatchFunction(patanOsn.mkbOsn());
        } else if (type === 'pancreatit') {
            dispatchFunction(patanOsn.pancreatitOsn());
        } else if (type === 'pnevmoniaInterst') {
            dispatchFunction(patanOsn.pnevmoniaInterstOsn());
        } else if (type === 'pnevmoniaOchag') {
            dispatchFunction(patanOsn.pnevmoniaOchagOsn());
        } else if (type === 'pnevmoniaKrup') {
            dispatchFunction(patanOsn.pnevmoniaKrupOsn());
        } else if (type === 'hobl') {
            dispatchFunction(patanOsn.hoblOsn());
        } else if (type === 'astma') {
            dispatchFunction(patanOsn.astmaOsn());
        } else if (type === 'peritonit') {
            dispatchFunction(patanOsn.peritonitOsn());
        } else if (type === 'yazva') {
            dispatchFunction(patanOsn.yazvaOsn());
        } else if (type === 'meningit') {
            dispatchFunction(patanOsn.meningitOsn());
        } else if (type === 'difteria') {
            dispatchFunction(patanOsn.difteriaOsn());
        } else if (type === 'holecistit') {
            dispatchFunction(patanOsn.holecistitOsn());
        } else if (type === 'rs') {
            dispatchFunction(patanOsn.rsOsn());
        } else if (type === 'exper') {
            dispatchFunction(sudebbOsn.exper());
        } else if (type === 'alcoOtr') {
            dispatchFunction(sudebbOsn.alcoOtr());
        } else if (type === 'udav') {
            dispatchFunction(sudebbOsn.udav());
        }
    }

    function clearInvalidField(field) {
        setInvalidFields((prev) => ({ ...prev, [field]: false }));
    }

    const dispatch = useDispatch();

    function dell(){
        // Сбрасываем состояния Redux к их initialState
        dispatch(patanOsn.resetState());
    }
    function dellSudeb(){
        // Сбрасываем состояния Redux к их initialState
        dispatch(sudebbOsn.resetState());
    }
    
    return (
        <>
            <Header />
            <div className={styles.container}>
                <form>
                    <div className={styles.commun}>
                        {/* <div className={`${styles.exemp} ${invalidFields.vid ? styles.invalid : ''}`}> */}
                        <div className={`${styles.exemp}`}>
                            <label>Вид оформляемого документа</label>
                            <select value={vid} onChange={
                                (e) => {setVid(e.target.value); if (e.target.value !== '') {clearInvalidField('vid')}}} className={invalidFields.vid ? styles.invalid : ''}>
                                <option value="">Выберите вид оформляемого документа</option>
                                <option value="заключение эксперта">Заключение эксперта</option>
                                <option value="заключение специалиста">Заключение специалиста</option>
                            </select>
                        </div>
                        <div
                            // className={`${styles.exemp} ${
                            //     invalidFields.diagnoz ? styles.invalid : ''
                            // }`}
                            className={`${styles.exemp}`}
                        >
                            <label>Судебно-медицинский диагноз</label>
                            <div ref={dropdownRef} className={styles.customDropdown}>
                                <div
                                    // className={styles.selectedOption}
                                    className={`${styles.selectedOption} ${
                                        invalidFields.diagnoz ? styles.invalid : ''
                                    }`}
                                    onClick={() => setDropdownOpen((prev) => !prev)}
                                >
                                    {selectedOption || 'Выберите диагноз'}
                                </div>
                                {dropdownOpen && (
                                    <ul className={styles.optionsList}>
                                        <li
                                            className={styles.option}
                                            onClick={() => {handleOptionClick('ИБС Внезапная коронарная смерть'); clearInvalidField('diagnoz')}}
                                        >
                                            ИБС Внезапная коронарная смерть
                                        </li>
                                        <li
                                            className={styles.option}
                                            onClick={() => {handleOptionClick('тромбофлебит глубоких вен н/к, ТЭЛА'); clearInvalidField('diagnoz')}}
                                        >
                                            Тромбофлебит глубоких вен н/к, ТЭЛА
                                        </li>
                                        <li
                                            className={styles.option}
                                            onClick={() => {handleOptionClick('рак предстательной железы'); clearInvalidField('diagnoz')}}
                                        >
                                            Рак предстательной железы
                                        </li>
                                        <li
                                            className={styles.option}
                                            style={{ textDecoration: 'underline' }}
                                            onClick={() => handleOptionClick('патан')}
                                        >
                                            Другие варианты смерти от заболеваний
                                        </li>
                                        {isSubDropdownOpen && (
                                            <ul className={styles.subOptions}>
                                                <li
                                                    className={styles.subOption}
                                                    onClick={() =>{
                                                        dell();
                                                        changeStatusHandler('tuberc');
                                                        handleSubOptionClick('Туберкулез');
                                                        clearInvalidField('diagnoz');   
                                                    }                                      
                                                    }
                                                >
                                                    Туберкулез
                                                </li>
                                                <li
                                                    className={styles.subOption}
                                                    onClick={() =>{
                                                        dell();
                                                        changeStatusHandler('difteria');
                                                        handleSubOptionClick('Дифтерия');
                                                        clearInvalidField('diagnoz')}
                                                    }
                                                >
                                                    Дифтерия
                                                </li>
                                                <li
                                                    className={styles.subOption}
                                                    onClick={() =>{
                                                        dell();
                                                        changeStatusHandler('sifilis');
                                                        handleSubOptionClick('Сифилис'); 
                                                        clearInvalidField('diagnoz')}
                                                    }
                                                >
                                                     Сифилис
                                                </li>
                                                <li
                                                    className={styles.subOption}
                                                    onClick={() =>{
                                                        dell();
                                                        changeStatusHandler('gepatB');
                                                        handleSubOptionClick('Вирусный гепатит B');
                                                        clearInvalidField('diagnoz')}
                                                    }
                                                >
                                                    Вирусный гепатит B
                                                </li>
                                                <li
                                                    className={styles.subOption}
                                                    onClick={() =>{
                                                        dell();
                                                        changeStatusHandler('gepatC');
                                                        handleSubOptionClick('Вирусный гепатит C'); 
                                                        clearInvalidField('diagnoz')}
                                                    }
                                                >
                                                      Вирусный гепатит C
                                                </li>
                                                <li
                                                    className={styles.subOption}
                                                    onClick={() =>{
                                                        dell();
                                                        changeStatusHandler('vich');
                                                        handleSubOptionClick('ВИЧ-инфекция, стадия (период) СПИД'); 
                                                        clearInvalidField('diagnoz')}
                                                    }
                                                >
                                                        ВИЧ-инфекция, стадия (период) СПИД
                                                </li>
                                                 <li
                                                    className={styles.subOption}
                                                    onClick={() =>{
                                                        dell();
                                                        changeStatusHandler('gripp');
                                                        handleSubOptionClick('Грипп'); 
                                                        clearInvalidField('diagnoz')}
                                                    }
                                                >
                                                    Грипп
                                                </li>
                                                <li
                                                    className={styles.subOption}
                                                    onClick={() =>{
                                                        dell();
                                                        changeStatusHandler('covid');
                                                        handleSubOptionClick('COVID-19'); 
                                                        clearInvalidField('diagnoz')}
                                                    }
                                                >
                                                    COVID-19
                                                </li>
                                                <li
                                                    className={styles.subOption}
                                                    onClick={() =>{
                                                        dell();
                                                        changeStatusHandler('greyvs');
                                                        handleSubOptionClick('Болезнь Грейвса (диффузный токсический зоб)'); 
                                                        clearInvalidField('diagnoz')}
                                                    }
                                                >
                                                    Болезнь Грейвса (диффузный токсический зоб)
                                                </li>
                                                <li
                                                    className={styles.subOption}
                                                    onClick={() =>{
                                                        dell();
                                                        changeStatusHandler('saharDiab1');
                                                        handleSubOptionClick('Сахарный диабет 1 типа'); 
                                                        clearInvalidField('diagnoz')}
                                                    }
                                                >
                                                    Сахарный диабет 1 типа
                                                </li>
                                                <li
                                                    className={styles.subOption}
                                                    onClick={() =>{
                                                        dell();
                                                        changeStatusHandler('saharDiab2');
                                                        handleSubOptionClick('Сахарный диабет 2 типа'); 
                                                        clearInvalidField('diagnoz')}
                                                    }
                                                >
                                                    Сахарный диабет 2 типа
                                                </li>
                                                <li
                                                    className={styles.subOption}
                                                    onClick={() =>{
                                                        dell();
                                                        changeStatusHandler('alco');
                                                        handleSubOptionClick('Хронический алкоголизм (алкогольная кардиомиопатия)'); 
                                                        clearInvalidField('diagnoz')}
                                                    }
                                                >
                                                    Хронический алкоголизм (алкогольная кардиомиопатия)
                                                </li> 
                                                <li
                                                    className={styles.subOption}
                                                    onClick={() =>{
                                                        dell();
                                                        changeStatusHandler('meningit');
                                                        handleSubOptionClick('Менингит'); 
                                                        clearInvalidField('diagnoz')}
                                                    }
                                                >
                                                    Менингит
                                                </li>
                                                <li
                                                    className={styles.subOption}
                                                    onClick={() =>{
                                                        dell();
                                                        changeStatusHandler('gb');
                                                        handleSubOptionClick('ГБ высокой степени и стадии (3 степень и 2-3 стадии)'); 
                                                        clearInvalidField('diagnoz')}
                                                    }
                                                >
                                                    ГБ высокой степени и стадии (3 степень и 2-3 стадии)
                                                </li> 
                                                <li
                                                    className={styles.subOption}
                                                    onClick={() =>{
                                                        dell();
                                                        changeStatusHandler('infarctMioc');
                                                        handleSubOptionClick('Инфаркт миокарда'); 
                                                        clearInvalidField('diagnoz')}
                                                    }
                                                >
                                                    Инфаркт миокарда
                                                </li>
                                                <li
                                                    className={styles.subOption}
                                                    onClick={() =>{
                                                        dell();
                                                        changeStatusHandler('hibs');
                                                        handleSubOptionClick('ХИБС (кардиосклероз, аневризма сердца)'); 
                                                        clearInvalidField('diagnoz')}
                                                    }
                                                >
                                                    ХИБС (кардиосклероз, аневризма сердца)
                                                </li>
                                                <li                                          
                                                    className={styles.subOption}
                                                    onClick={() =>{
                                                        dell();
                                                        changeStatusHandler('sepsis');
                                                        handleSubOptionClick('Бактериальный эндокардит (сепсис)'); 
                                                        clearInvalidField('diagnoz')}
                                                    }
                                                >
                                                    Бактериальный эндокардит (сепсис)
                                                </li> 
                                                <li                                                 
                                                    className={styles.subOption}
                                                    onClick={() =>{
                                                        dell();
                                                        changeStatusHandler('miocardit');
                                                        handleSubOptionClick('Миокардит (+ инфаркты внутренних органов в результате тромбоэмболии)'); 
                                                        clearInvalidField('diagnoz')}
                                                    }
                                                >
                                                    Миокардит (+ инфаркты внутренних органов в результате тромбоэмболии)
                                                </li> 
                                                <li
                                                    className={styles.subOption}
                                                    onClick={() =>{
                                                        dell();
                                                        changeStatusHandler('dilCardio');
                                                        handleSubOptionClick('Дилатационная кардиомиопатия (ДКМП)'); 
                                                        clearInvalidField('diagnoz')}
                                                    }
                                                >
                                                    Дилатационная кардиомиопатия (ДКМП)
                                                </li> 
                                                <li                                          
                                                    className={styles.subOption}
                                                    onClick={() =>{
                                                        dell();
                                                        changeStatusHandler('gipCardio');
                                                        handleSubOptionClick('Гипертрофическая кардиомиопатия (ГКМП)'); 
                                                        clearInvalidField('diagnoz')}
                                                    }
                                                >
                                                    Гипертрофическая кардиомиопатия (ГКМП) 
                                                </li>
                                                <li                                               
                                                    className={styles.subOption}
                                                    onClick={() =>{
                                                        dell();
                                                        changeStatusHandler('gemInsult');
                                                        handleSubOptionClick('Геморрагический инсульт'); 
                                                        clearInvalidField('diagnoz')}
                                                    }
                                                >
                                                    Геморрагический инсульт
                                                </li>
                                                <li
                                                    className={styles.subOption}
                                                    onClick={() =>{
                                                        dell();
                                                        changeStatusHandler('ishInsult');
                                                        handleSubOptionClick('Ишемический инсульт'); 
                                                        clearInvalidField('diagnoz')}
                                                    }
                                                >
                                                    Ишемический инсульт
                                                </li> 
                                                <li
                                                    className={styles.subOption}
                                                    onClick={() =>{
                                                        dell();
                                                        changeStatusHandler('pnevmoniaKrup');
                                                        handleSubOptionClick('Пневмония крупозная (лобарная, плевропневмония)'); 
                                                        clearInvalidField('diagnoz')}
                                                    }
                                                >
                                                    Пневмония крупозная (лобарная, плевропневмония)
                                                </li>
                                                <li
                                                    className={styles.subOption}
                                                    onClick={() =>{
                                                        dell();
                                                        changeStatusHandler('pnevmoniaOchag');
                                                        handleSubOptionClick('Пневмония очаговая'); 
                                                        clearInvalidField('diagnoz')}
                                                    }
                                                >
                                                    Пневмония очаговая
                                                </li> 
                                                <li
                                                    className={styles.subOption}
                                                    onClick={() =>{
                                                        dell();
                                                        changeStatusHandler('pnevmoniaInterst');
                                                        handleSubOptionClick('Пневмония интерстициальная (межуточная)'); 
                                                        clearInvalidField('diagnoz')}
                                                    }
                                                >
                                                    Пневмония интерстициальная (межуточная)
                                                </li> 
                                                 <li
                                                    className={styles.subOption}
                                                    onClick={() =>{
                                                        dell();
                                                        changeStatusHandler('hobl');
                                                        handleSubOptionClick('Хроническая обструктивная болезнь легких (ХОБЛ)'); 
                                                        clearInvalidField('diagnoz')}
                                                    }
                                                >
                                                    Хроническая обструктивная болезнь легких (ХОБЛ) 
                                                </li> 
                                                <li
                                                    className={styles.subOption}
                                                    onClick={() =>{
                                                        dell();
                                                        changeStatusHandler('astma');
                                                        handleSubOptionClick('Бронхиальная астма'); 
                                                        clearInvalidField('diagnoz')}
                                                    }
                                                >
                                                    Бронхиальная астма 
                                                </li>
                                                <li
                                                    className={styles.subOption}
                                                    onClick={() =>{
                                                        dell();
                                                        changeStatusHandler('yazva');
                                                        handleSubOptionClick('Язвенная болезнь желудка и двенадцатиперстной кишки'); 
                                                        clearInvalidField('diagnoz')}
                                                    }
                                                >
                                                    Язвенная болезнь желудка и двенадцатиперстной кишки
                                                </li>
                                                <li
                                                    className={styles.subOption}
                                                    onClick={() =>{
                                                        dell();
                                                        changeStatusHandler('krona');
                                                        handleSubOptionClick('Болезнь Крона'); 
                                                        clearInvalidField('diagnoz')}
                                                    }
                                                >
                                                    Болезнь Крона
                                                </li>
                                                <li
                                                    className={styles.subOption}
                                                    onClick={() =>{
                                                        dell();
                                                        changeStatusHandler('njak');
                                                        handleSubOptionClick('Язвенный колит (НЯК)'); 
                                                        clearInvalidField('diagnoz')}
                                                    }
                                                >
                                                    Язвенный колит (НЯК)
                                                </li> 
                                                <li
                                                    className={styles.subOption}
                                                    onClick={() =>{
                                                        dell();
                                                        changeStatusHandler('holecistit');
                                                        handleSubOptionClick('Холецистит, холелитиаз'); 
                                                        clearInvalidField('diagnoz')}
                                                    }
                                                >
                                                    Холецистит, холелитиаз
                                                </li> 
                                                <li
                                                    className={styles.subOption}
                                                    onClick={() =>{
                                                        dell();
                                                        changeStatusHandler('pancreatit');
                                                        handleSubOptionClick('Панкреатит'); 
                                                        clearInvalidField('diagnoz')}
                                                    }
                                                >
                                                    Панкреатит
                                                </li>
                                                <li
                                                    className={styles.subOption}
                                                    onClick={() =>{
                                                        dell();
                                                        changeStatusHandler('oglomerulo');
                                                        handleSubOptionClick('Острый гломерулонефрит'); 
                                                        clearInvalidField('diagnoz')}
                                                    }
                                                >
                                                    Острый гломерулонефрит
                                                </li>
                                                <li
                                                    className={styles.subOption}
                                                    onClick={() =>{
                                                        dell();
                                                        changeStatusHandler('hronPielo');
                                                        handleSubOptionClick('Хронический пиелонефрит'); 
                                                        clearInvalidField('diagnoz')}
                                                    }
                                                >
                                                    Хронический пиелонефрит
                                                </li>
                                                <li
                                                    className={styles.subOption}
                                                    onClick={() =>{
                                                        dell();
                                                        changeStatusHandler('mkb');
                                                        handleSubOptionClick('Мочекаменная болезнь (нефролитиаз)'); 
                                                        clearInvalidField('diagnoz')}
                                                    }
                                                >
                                                    Мочекаменная болезнь (нефролитиаз)
                                                </li>
                                            </ul>
                                        )}
                                        <li
                                            className={styles.option}
                                            onClick={() => {handleOptionClick('ишемический инсульт ГМ'); clearInvalidField('diagnoz')}}
                                        >
                                            Ишемический инсульт ГМ
                                        </li>
                                        <li
                                            className={styles.option}
                                            onClick={() => {handleOptionClick('ЧМТ'); clearInvalidField('diagnoz')}}
                                        >
                                            ЧМТ
                                        </li>

                                        <li
                                            className={styles.option}
                                            style={{ textDecoration: 'underline' }}
                                            onClick={() => handleOptionClickOtrava('отрава')}
                                        >
                                            Отравления
                                        </li>
                                        {isSubDropdownOpenOtrava && (
                                            <ul className={styles.subOptions}>
                                                <li
                                                    className={styles.option}
                                                    onClick={() =>{
                                                        handleOptionClick('отравление бутиролактоном'); clearInvalidField('diagnoz')}
                                                    }
                                                >
                                                    Отравление бутиролактоном
                                                </li>
                                                <li
                                                    className={styles.option}
                                                    onClick={() =>{
                                                        handleOptionClick('отравление нефтепродуктами'); clearInvalidField('diagnoz')}
                                                    }
                                                >
                                                    Отравление нефтепродуктами
                                                </li>
                                                <li
                                                    className={styles.option}
                                                    onClick={() => {handleOptionClick('отравление этиленгликолем'); clearInvalidField('diagnoz')}}
                                                >
                                                    Отравление этиленгликолем
                                                </li>
                                                <li
                                                    className={styles.option}
                                                    onClick={() => {dellSudeb(); handleOptionClickk('смэ основное', 'Отравление этанолом'); changeStatusHandler('alcoOtr'); clearInvalidField('diagnoz')}}
                                                >
                                                    Отравление этанолом
                                                </li>
                                            </ul>
                                        )}
                                        {/* <li
                                            className={styles.option}
                                            onClick={() =>{
                                                handleOptionClick('отравление бутиролактоном'); clearInvalidField('diagnoz')}
                                            }
                                        >
                                            Отравление бутиролактоном
                                        </li>
                                        <li
                                            className={styles.option}
                                            onClick={() =>{
                                                handleOptionClick('отравление нефтепродуктами'); clearInvalidField('diagnoz')}
                                            }
                                        >
                                            Отравление нефтепродуктами
                                        </li>
                                        <li
                                            className={styles.option}
                                            onClick={() => {handleOptionClick('отравление этиленгликолем'); clearInvalidField('diagnoz')}}
                                        >
                                            Отравление этиленгликолем
                                        </li> */}
                                        <li
                                            className={styles.option}
                                            onClick={() => {handleOptionClick('термические ожоги + отравление СО'); clearInvalidField('diagnoz')}}
                                        >
                                            Термические ожоги + отравление СО
                                        </li>
                                        <li
                                            className={styles.option}
                                            style={{ textDecoration: 'underline' }}
                                            onClick={() => handleOptionClickAsfixia('асфиксия')}
                                        >
                                            Механическая асфиксия
                                        </li>
                                        {isSubDropdownOpenAsfixia && (
                                            <ul className={styles.subOptions}>
                                                <li
                                                    className={styles.option}
                                                    onClick={() =>{
                                                        handleOptionClick('повешение'); clearInvalidField('diagnoz')}
                                                    }
                                                >
                                                    Повешение
                                                </li>
                                                <li
                                                    className={styles.option}
                                                    onClick={() => {dellSudeb(); handleOptionClickk('смэ основное', 'Удавление петлёй'); changeStatusHandler('udav'); clearInvalidField('diagnoz')}}
                                                >
                                                    Удавление петлёй
                                                </li>
                                                <li
                                                    className={styles.option}
                                                    onClick={() =>{
                                                        handleOptionClick('утопление в воде'); clearInvalidField('diagnoz')}
                                                    }
                                                >
                                                    Утопление в воде
                                                </li>

                                                
                                                </ul>
                                        )}
                                        {/* <li
                                            className={styles.option}
                                            onClick={() => {dellSudeb(); handleOptionClickk('смэ основное', 'СМЭ эксперимент'); changeStatusHandler('exper'); clearInvalidField('diagnoz')}}
                                        >
                                            СМЭ эксперимент
                                        </li> */}
                                        <li
                                            className={styles.option}
                                            onClick={() => {handleOptionClick('поражение техническим электричеством'); clearInvalidField('diagnoz')}}
                                        >
                                            Поражение техническим электричеством
                                        </li>
                                        <li
                                            className={styles.option}
                                            style={{ textDecoration: 'underline' }}
                                            onClick={() => handleOptionClickOgnestrel('огнестрел')}
                                        >
                                            Огнестрельные ранения
                                        </li>
                                        {isSubDropdownOpenOgnestrel && (
                                            <ul className={styles.subOptions}>
                                                <li
                                                    className={styles.option}
                                                    onClick={() => {handleOptionClick('одиночное огнестрельное ранение груди'); clearInvalidField('diagnoz')}}
                                                >
                                                    Одиночное огнестрельное ранение груди
                                                </li>
                                                <li
                                                    className={styles.option}
                                                    onClick={() => {handleOptionClick('множественные огнестрельные ранения груди'); clearInvalidField('diagnoz')}}
                                                >
                                                    Множественные огнестрельные ранения груди
                                                </li>
                                                <li
                                                    className={styles.option}
                                                    onClick={() => {handleOptionClick('одиночное огнестрельное ранение головы'); clearInvalidField('diagnoz')}}
                                                >
                                                    Одиночное огнестрельное ранение головы
                                                </li>
                                            </ul>
                                        )}
                                        <li
                                            className={styles.option}
                                            onClick={() => {handleOptionClick('колото-резаное ранение груди'); clearInvalidField('diagnoz')}}
                                        >
                                            Колото-резаное ранение груди
                                        </li>

                                        <li
                                            className={styles.option}
                                            style={{ textDecoration: 'underline' }}
                                            onClick={() => handleOptionClickAvto('авто')}
                                        >
                                            Автомобильная травма
                                        </li>
                                        {isSubDropdownOpenAvto && (
                                            <ul className={styles.subOptions}>
                                                <li
                                                    className={styles.option}
                                                    onClick={() => {handleOptionClick('автомобильная травма (пешеход)'); clearInvalidField('diagnoz')}}
                                                >
                                                    Автомобильная травма (пешеход)
                                                </li>
                                                <li
                                                    className={styles.option}
                                                    onClick={() => {handleOptionClick('автомобильная травма (водитель)'); clearInvalidField('diagnoz')}}
                                                >
                                                    Автомобильная травма (водитель)
                                                </li>
                                                <li
                                                    className={styles.option}
                                                    onClick={() => {handleOptionClick('автомобильная травма (пассажир)'); clearInvalidField('diagnoz')}}
                                                >
                                                    Автомобильная травма (пассажир)
                                                </li>
                                            </ul>
                                        )}
                                         <li
                                            className={styles.option}
                                            onClick={() => {handleOptionClick('авиационная травма'); clearInvalidField('diagnoz')}}
                                        >
                                            Авиационная травма
                                        </li>
                                        <li
                                            className={styles.option}
                                            onClick={() => {handleOptionClick('тупая травма живота'); clearInvalidField('diagnoz')}}
                                        >
                                            Тупая травма живота
                                        </li>
                                        <li
                                            className={styles.option}
                                            onClick={() => {handleOptionClick('падение с высоты + переохлаждение'); clearInvalidField('diagnoz')}}
                                        >
                                            Падение с высоты + переохлаждение
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </div>
                        {/* <div className={`${styles.exemp} ${invalidFields.sex ? styles.invalid : ''}`}> */}
                        <div className={`${styles.exemp}`}>
                            <label>Пол</label>
                            <select value={sex} onChange={(e) => {setSex(e.target.value); if (e.target.value !== '') {clearInvalidField('sex')}}} className={invalidFields.sex ? styles.invalid : ''}>
                                <option value="">Выберите пол</option>
                                <option value="мужской">Мужской</option>
                                <option value="женский">Женский</option>
                            </select>
                        </div>
                        <div
                            // className={`${styles.exemp} ${invalidFields.izvesten ? styles.invalid : ''}`}
                            className={`${styles.exemp}`}
                        >
                            <label>Личность трупа</label>
                            <select value={izvesten} onChange={(e) => {setIzvesten(e.target.value); if (e.target.value !== '') {clearInvalidField('izvesten')}}} className={invalidFields.izvesten ? styles.invalid : ''}>
                                <option value="">Труп опознан или нет</option>
                                <option value="известен">Да</option>
                                <option value="неизвестен">Нет</option>
                            </select>
                        </div>
                        <div className={styles.buttonForm}>
                            <button type="submit" onClick={addHandler}>
                                Составить заключение
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default FormPoisk;