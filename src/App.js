import { Document, Packer, Paragraph, TextRun, AlignmentType, TabStopPosition, TabStopType } from 'docx';
import { saveAs } from 'file-saver';

import {Route, Switch, useHistory, Redirect, useLocation} from 'react-router-dom';
import React, { useEffect, Suspense, lazy } from 'react';
import { HelmetProvider } from "react-helmet-async";
// import { BrowserRouter } from 'react-router-dom';//

// Загрузка компонентов только при необходимости
const Home = lazy(() => import('./pages/Home'));
const Help = lazy(() => import('./pages/Help'));
const Mini = lazy(() => import('./pages/Mini'));
const Experiment = lazy(() => import('./pages/Experiment'));
const HomeDuble = lazy(() => import('./pages/HomeDuble'));
const HomeeDublee = lazy(() => import('./pages/HomeeDublee'));
const FormPoisk = lazy(() => import('./pages/FormPoisk'));
const Pay = lazy(() => import('./pages/Pay'));
const PayFinish = lazy(() => import('./pages/PayFinish'));
const Spravka = lazy(() => import('./pages/Spravka'));
const VerbalPortrait = lazy(() => import('./pages/spravka/VerbalPortrait'));
const RukDok = lazy(() => import('./pages/spravka/RukDok'));
const Vozrast = lazy(() => import('./pages/spravka/Vozrast'));
const Davnostj = lazy(() => import('./pages/spravka/Davnostj'));
const InJob = lazy(() => import('./pages/InJob'));
const NotFound = lazy(() => import('./pages/NotFound'));

const SudebOsnM = lazy(() => import('./pages/SudebOsnM'));
const SudebOsnF = lazy(() => import('./pages/SudebOsnF'));
const PatanOsnM = lazy(() => import('./pages/PatanOsnM'));
const PatanOsnF = lazy(() => import('./pages/PatanOsnF'));
const OtravlenieNeftM = lazy(() => import('./pages/OtravlenieNeftM'));
const OtravlenieNeftF = lazy(() => import('./pages/OtravlenieNeftF'));
const OtravlenieButirolactonM = lazy(() => import('./pages/OtravlenieButirolactonM'));
const OtravlenieButirolactonF = lazy(() => import('./pages/OtravlenieButirolactonF'));
const OtravlenieEtilenglicoljM = lazy(() => import('./pages/OtravlenieEtilenglicoljM'));
const OtravlenieEtilenglicoljF = lazy(() => import('./pages/OtravlenieEtilenglicoljF'));
const IbsVksM = lazy(() => import('./pages/IbsVksM'));
const IbsVksF = lazy(() => import('./pages/IbsVksF'));
const IbsVksExp = lazy(() => import('./pages/IbsVksExp'));
const IshimInsultM = lazy(() => import('./pages/IshimInsultM'));
const IshimInsultF = lazy(() => import('./pages/IshimInsultF'));
const PoveshеnieM = lazy(() => import('./pages/PoveshеnieM'));
const PoveshеnieF = lazy(() => import('./pages/PoveshеnieF'));
const ChmtM = lazy(() => import('./pages/ChmtM'));
const ChmtF = lazy(() => import('./pages/ChmtF'));
const ElectroM = lazy(() => import('./pages/ElectroM'));
const ElectroF = lazy(() => import('./pages/ElectroF'));
const OgnestrelTorax1M = lazy(() => import('./pages/OgnestrelTorax1M'));
const OgnestrelTorax1F = lazy(() => import('./pages/OgnestrelTorax1F'));
const OgnestrelToraxManyM = lazy(() => import('./pages/OgnestrelToraxManyM'));
const OgnestrelToraxManyF = lazy(() => import('./pages/OgnestrelToraxManyF'));
const OgnestrelHeadM = lazy(() => import('./pages/OgnestrelHeadM'));
const OgnestrelHeadF = lazy(() => import('./pages/OgnestrelHeadF'));
const TromboflebitM = lazy(() => import('./pages/TromboflebitM'));
const TromboflebitF = lazy(() => import('./pages/TromboflebitF'));
const AutoPeshM = lazy(() => import('./pages/AutoPeshM'));
const AutoPeshF = lazy(() => import('./pages/AutoPeshF'));
const AutoVoditM = lazy(() => import('./pages/AutoVoditM'));
const AutoVoditF = lazy(() => import('./pages/AutoVoditF'));
const AutoPasM = lazy(() => import('./pages/AutoPasM'));
const AutoPasF = lazy(() => import('./pages/AutoPasF'));
const ColotoRezM = lazy(() => import('./pages/ColotoRezM'));
const ColotoRezF = lazy(() => import('./pages/ColotoRezF'));
const UtoplenieM = lazy(() => import('./pages/UtoplenieM'));
const UtoplenieF = lazy(() => import('./pages/UtoplenieF'));
const TupajaZhivotaM = lazy(() => import('./pages/TupajaZhivotaM'));
const TupajaZhivotaF = lazy(() => import('./pages/TupajaZhivotaF'));
const OzhogyM = lazy(() => import('./pages/OzhogyM'));
const OzhogyF = lazy(() => import('./pages/OzhogyF'));
const KatatravmaM = lazy(() => import('./pages/KatatravmaM'));
const KatatravmaF = lazy(() => import('./pages/KatatravmaF'));
const AviatravmaM = lazy(() => import('./pages/AviatravmaM'));
const AviatravmaF = lazy(() => import('./pages/AviatravmaF'));
const RakProstatyM = lazy(() => import('./pages/RakProstatyM'));
const RakProstatyF = lazy(() => import('./pages/RakProstatyF'));

const App = () => {
  const history = useHistory();
  const location = useLocation();
  // Динамическое обновление title и description:
  // useEffect(() => {
  //   return history.listen((location) => {
  //     window.updateMetaTags(location.pathname);
  //     console.log('2lisn')
  //   });
  // }, [history]);
  useEffect(() => {
    const unlisten = history.listen((location) => {
      window.updateMetaTags(location.pathname);
      // console.log('lisn')
    });
    return () => {
      unlisten(); // Отписываемся при размонтировании
    };
  }, [history]);
  
  // Перевод на страницу mini при ширине экрана < 768px:
  // useEffect(() => {
  //   if (window.innerWidth < 768) {
  //     history.push('/mini');
  //   }
  // }, [history]);
  // Перевод на страницу home со страницы mini при ширине экрана >= 768px:
  // useEffect(() => {
  //   if (window.innerWidth >= 768 && location.pathname === '/mini') {
  //     history.push('/home');
  //   }
  // }, [history, location]);

  // useEffect(() => {
  //   if (window.innerWidth >= 768 && location.pathname === '/mini') {
  //     window.location.replace('/home'); // Перезаписываем историю, чтобы нельзя было вернуться назад
  //   }
  // }, [location]);

  // Перевод на страницу mini при ширине экрана < 768px и перевод на страницу home со страницы mini при ширине экрана >= 768px:
  useEffect(() => {
    if (window.innerWidth < 768 && location.pathname !== '/mini') {
      // Сохраняем реферер, если он не пустой и не наш сайт
      if (!sessionStorage.getItem('miniReferrer') && document.referrer) {
        sessionStorage.setItem('miniReferrer', document.referrer);
      }
      history.replace('/mini'); // Заменяем URL, не добавляя в историю
    }
  }, [history, location]);
  useEffect(() => {
    if (window.innerWidth >= 768 && location.pathname === '/mini') {
      const storedReferrer = sessionStorage.getItem('miniReferrer');
      sessionStorage.removeItem('miniReferrer'); // Очистка после использования

      if (storedReferrer && !storedReferrer.includes(window.location.origin)) {
        // Если referrer не с нашего сайта, возвращаем туда
        window.location.href = storedReferrer;
      } else {
        // Если referrer был пустым или с нашего сайта, редирект на /home
        history.replace('/home');
      }
    }
  }, [location]);

 
//Функция предотвращающая копирование текста(содержащегося в контейнере .content):
  useEffect(() => {
    const handleCopy = (e) => {
      const selection = window.getSelection();
      if (!selection.rangeCount) return;
      
      // Создаём временный контейнер для хранения выбранного содержимого
      const tempDiv = document.createElement('div');
      tempDiv.appendChild(selection.getRangeAt(0).cloneContents());
  
      // Удаляем все узлы, которые принадлежат элементам с классом .content
      tempDiv.querySelectorAll('.content').forEach((el) => el.remove());
  
      // Если после удаления .content текст остаётся — сохраняем его в буфер обмена
      const filteredText = tempDiv.innerText;
      if (filteredText.trim()) {
        e.clipboardData.setData('text/plain', filteredText);
      } else {
        e.clipboardData.clearData(); // Очищаем буфер обмена, если текста больше нет
      }
  
      e.preventDefault(); // Блокируем стандартное копирование
    };
  
    document.addEventListener('copy', handleCopy);
    return () => document.removeEventListener('copy', handleCopy);
  }, []);
//Функция предотвращающая выделение и перетаскивание контента содержащегося в контейнере .content):
//(dragstart — предотвращает начало перетаскивания контента, selectstart — блокирует возможность выделения текста)
  useEffect(() => {
    const contentElement = document.querySelector('.content');
    
    const disableDrag = (e) => e.preventDefault();
    const disableSelect = (e) => e.preventDefault();
  
    if (contentElement) {
      contentElement.addEventListener('dragstart', disableDrag);
      contentElement.addEventListener('selectstart', disableSelect);
    }
  
    return () => {
      if (contentElement) {
        contentElement.removeEventListener('dragstart', disableDrag);
        contentElement.removeEventListener('selectstart', disableSelect);
      }
    };
  }, []);
  //Отключение правой кнопки мыши кроме ссылки на почтовый ящик:
  useEffect(() => {
    const handleContextMenu = (event) => {
      if (event.target.closest(`a[href="mailto:construktor-mail@yandex.ru"]`)) {
        return;
      }
      event.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
    }, []);
  //Проверка, выполняется ли страница локально через протокол file://, и если да — скрывать контент или показывать пустую страницу (Прывет!!!):
  if (window.location.protocol === 'file:') {
    document.body.innerHTML = `
      <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
        <h1 style="color: blue;">Прывет!!!</h1>
      </div>
    `;
    return null; // Прерываем рендеринг компонента
  };
   
  function onChangeData(dataForm){
    // console.log(dataForm)
    if (dataForm.diagnoz ==='отравление нефтепродуктами' && dataForm.sex === 'мужской'){
      history.push('/otravlenieNeftM')
    }
    else if (dataForm.diagnoz ==='отравление нефтепродуктами' && dataForm.sex === 'женский'){
      history.push('/otravlenieNeftF')
    }
    else if (dataForm.diagnoz ==='отравление бутиролактоном' && dataForm.sex === 'мужской'){
      history.push('/otravlenieButirolactonM')
    }
    else if (dataForm.diagnoz ==='отравление бутиролактоном' && dataForm.sex === 'женский'){
      history.push('/otravlenieButirolactonF')
    } 
    else if (dataForm.diagnoz ==='отравление этиленгликолем' && dataForm.sex === 'мужской'){
      history.push('/otravlenieEtilenglicoljM')
    } 
    else if (dataForm.diagnoz ==='отравление этиленгликолем' && dataForm.sex === 'женский'){
      history.push('/otravlenieEtilenglicoljF')
    }   
    else if (dataForm.diagnoz ==='ИБС Внезапная коронарная смерть' && dataForm.sex === 'женский'){
      history.push('/ibsVksF')
    }
    else if (dataForm.diagnoz ==='ИБС Внезапная коронарная смерть' && dataForm.sex === 'мужской'){
      history.push('/ibsVksM')
    }
    else if (dataForm.diagnoz ==='ишемический инсульт ГМ' && dataForm.sex === 'мужской'){
      history.push('/ishimInsultM')
    }
    else if (dataForm.diagnoz ==='ишемический инсульт ГМ' && dataForm.sex === 'женский'){
      history.push('/ishimInsultF')
    }
    else if (dataForm.diagnoz ==='повешение' && dataForm.sex === 'мужской'){
      history.push('/poveshеnieM')
    }
    else if (dataForm.diagnoz ==='повешение' && dataForm.sex === 'женский'){
      history.push('/poveshеnieF')
    }
    else if (dataForm.diagnoz ==='ЧМТ' && dataForm.sex === 'мужской'){
      history.push('/chmtM')
    }
    else if (dataForm.diagnoz ==='ЧМТ' && dataForm.sex === 'женский'){
      history.push('/chmtF')
    }
    else if (dataForm.diagnoz ==='поражение техническим электричеством' && dataForm.sex === 'мужской'){
      history.push('/electroM')
    }
    else if (dataForm.diagnoz ==='поражение техническим электричеством' && dataForm.sex === 'женский'){
      history.push('/electroF')
    }
    else if (dataForm.diagnoz ==='одиночное огнестрельное ранение груди' && dataForm.sex === 'мужской'){
      history.push('/ognestrelTorax1M')
    }
    else if (dataForm.diagnoz ==='одиночное огнестрельное ранение груди' && dataForm.sex === 'женский'){
      history.push('/ognestrelTorax1F')
    }
    else if (dataForm.diagnoz ==='множественные огнестрельные ранения груди' && dataForm.sex === 'мужской'){
      history.push('/ognestrelToraxManyM')
    }
    else if (dataForm.diagnoz ==='множественные огнестрельные ранения груди' && dataForm.sex === 'женский'){
      history.push('/ognestrelToraxManyF')
    }
    else if (dataForm.diagnoz ==='одиночное огнестрельное ранение головы' && dataForm.sex === 'мужской'){
      history.push('/ognestrelHeadM')
    }
    else if (dataForm.diagnoz ==='одиночное огнестрельное ранение головы' && dataForm.sex === 'женский'){
      history.push('/ognestrelHeadF')
    }
    else if (dataForm.diagnoz ==='тромбофлебит глубоких вен н/к, ТЭЛА' && dataForm.sex === 'мужской'){
      history.push('/tromboflebitM')
    }
    else if (dataForm.diagnoz ==='тромбофлебит глубоких вен н/к, ТЭЛА' && dataForm.sex === 'женский'){
      history.push('/tromboflebitF')
    }
    else if (dataForm.diagnoz ==='автомобильная травма (пешеход)' && dataForm.sex === 'мужской'){
      history.push('/autoPeshM')
    }
    else if (dataForm.diagnoz ==='автомобильная травма (пешеход)' && dataForm.sex === 'женский'){
      history.push('/autoPeshF')
    }
    else if (dataForm.diagnoz ==='автомобильная травма (водитель)' && dataForm.sex === 'мужской'){
      history.push('/autoVoditM')
    }
    else if (dataForm.diagnoz ==='автомобильная травма (водитель)' && dataForm.sex === 'женский'){
      history.push('/autoVoditF')
    }
    else if (dataForm.diagnoz ==='автомобильная травма (пассажир)' && dataForm.sex === 'мужской'){
      history.push('/autoPasM')
    }
    else if (dataForm.diagnoz ==='автомобильная травма (пассажир)' && dataForm.sex === 'женский'){
      history.push('/autoPasF')
    }
    else if (dataForm.diagnoz ==='колото-резаное ранение груди' && dataForm.sex === 'мужской'){
      history.push('/colotoRezM')
    }
    else if (dataForm.diagnoz ==='колото-резаное ранение груди' && dataForm.sex === 'женский'){
      history.push('/colotoRezF')
    }
    else if (dataForm.diagnoz ==='утопление в воде' && dataForm.sex === 'мужской'){
      history.push('/utoplenieM')
    }
    else if (dataForm.diagnoz ==='утопление в воде' && dataForm.sex === 'женский'){
      history.push('/utoplenieF')
    }
    else if (dataForm.diagnoz ==='тупая травма живота' && dataForm.sex === 'мужской'){
      history.push('/tupajaZhivotaM')
    }
    else if (dataForm.diagnoz ==='тупая травма живота' && dataForm.sex === 'женский'){
      history.push('/tupajaZhivotaF')
    }
    else if (dataForm.diagnoz ==='термические ожоги + отравление СО' && dataForm.sex === 'мужской'){
      history.push('/ozhogyM')
    }
    else if (dataForm.diagnoz ==='термические ожоги + отравление СО' && dataForm.sex === 'женский'){
      history.push('/ozhogyF')
    }
    else if (dataForm.diagnoz ==='падение с высоты + переохлаждение' && dataForm.sex === 'мужской'){
      history.push('/katatravmaM')
    }
    else if (dataForm.diagnoz ==='падение с высоты + переохлаждение' && dataForm.sex === 'женский'){
      history.push('/katatravmaF')
    }
    else if (dataForm.diagnoz ==='авиационная травма' && dataForm.sex === 'мужской'){
      history.push('/aviatravmaM')
    }
    else if (dataForm.diagnoz ==='авиационная травма' && dataForm.sex === 'женский'){
      history.push('/aviatravmaF')
    }
    else if (dataForm.diagnoz ==='рак предстательной железы' && dataForm.sex === 'мужской'){
      history.push('/rakProstatyM')
    }
    else if (dataForm.diagnoz ==='рак предстательной железы' && dataForm.sex === 'женский'){
      history.push('/rakProstatyF')
    }
    else if (dataForm.diagnoz ==='другие варианты ненасильственной смерти' && dataForm.sex === 'женский'){
      history.push('/patanF')
    }
    else if (dataForm.diagnoz ==='другие варианты ненасильственной смерти' && dataForm.sex === 'мужской'){
      history.push('/patanM')
    }
    else if (dataForm.diagnoz ==='смэ основное' && dataForm.sex === 'мужской'){
      history.push('/sudebM')
    }
    else if (dataForm.diagnoz ==='смэ основное' && dataForm.sex === 'женский'){
      history.push('/sudebF')
    }
    // else if (dataForm.diagnoz ==='ИБС Внезапная коронарная смерть' && dataForm.sex === 'мужской'){
    //   history.push('/ibsVksExp')
    // }
    // else if (dataForm.diagnoz ==='эксперимент' && dataForm.sex === 'женский'){
    //   history.push('/experiment')
    // }
    // else if (dataForm.diagnoz ==='эксперимент' && dataForm.sex === 'мужской'){
    //   history.push('/experiment')
    // }
    else{history.push('/inJob')}
  }
  //Конечный вариант функции сохранения
  const generateDocument = async () => {
    try {
        const contentElement = document.querySelector('.content');

        if (!contentElement) {
            throw new Error("Content element not found.");
        }

        let listIndex = 1; // Начальный индекс для нумерации списков

        const processNode = (node, parentClass = '', parentStyles = {}) => {
            let paragraphs = [];
            let textRuns = [];

            if (node.nodeType === Node.ELEMENT_NODE) {
                const el = node;
                const currentClass = el.className || parentClass;
                let currentStyles = { ...parentStyles };

                if (el.nodeName === 'B') {
                    currentStyles.bold = true;
                } else if (el.nodeName === 'I') {
                    currentStyles.italic = true;
                } else if (el.nodeName === 'U') {
                    currentStyles.underline = true;
                }

                if (el.nodeName === 'P') {
                    el.childNodes.forEach(child => {
                        textRuns = textRuns.concat(processNode(child, currentClass, currentStyles));
                    });
                    //Добавка выравнивания по классу 'MsoNormal':
                    const alignment = el.id === 'MsoBodyTextIndent' || el.classList.contains('MsoNormal') ? AlignmentType.JUSTIFIED :
                        el.classList.contains('MsoBodyText') ? AlignmentType.CENTER : AlignmentType.LEFT;

                    paragraphs.push(new Paragraph({
                        children: textRuns,
                        alignment: alignment,
                        indent: el.id === 'MsoBodyTextIndent' ? { firstLine: 320 } : undefined
                    }));
                } else if (el.classList.contains('data')) {
                    const dataChildren = Array.from(el.querySelectorAll('.MsoBodyText .red'));

                    if (dataChildren.length >= 2) {
                        const leftText = dataChildren[0].textContent || '';
                        const rightText = dataChildren[1].textContent || '';

                        paragraphs.push(new Paragraph({
                            children: [new TextRun('')]
                        }));

                        paragraphs.push(new Paragraph({
                            children: [
                                new TextRun({ text: leftText, color: 'FF0000' }),
                                new TextRun({ text: '\t' }),
                                new TextRun({ text: rightText, color: 'FF0000' })
                            ],
                            tabStops: [
                                { type: TabStopType.LEFT, position: TabStopPosition.LEFT },
                                { type: TabStopType.RIGHT, position: TabStopPosition.MAX }
                            ]
                        }));

                        paragraphs.push(new Paragraph({
                            children: [new TextRun('')]
                        }));
                    }
                } else if (el.nodeName === 'OL' || el.nodeName === 'UL') {
                    const numberingRef = `numbering${listIndex}`;
                    listIndex++;

                    el.childNodes.forEach(child => {
                        if (child.nodeName === 'LI') {
                            let liTextRuns = [];

                            child.childNodes.forEach(grandchild => {
                                liTextRuns = liTextRuns.concat(processNode(grandchild, currentClass, currentStyles));
                            });

                            paragraphs.push(new Paragraph({
                                children: liTextRuns,
                                numbering: {
                                    reference: numberingRef,
                                    level: 0,
                                }
                            }));
                        }
                    });
                } else {
                    el.childNodes.forEach(child => {
                        paragraphs = paragraphs.concat(processNode(child, currentClass, currentStyles));
                    });
                }
            } else if (node.nodeType === Node.TEXT_NODE) {
                const textContent = node.textContent || '';
                let color;
                if (parentClass.includes('red')) {
                    color = 'FF0000';
                } else if (parentClass.includes('blue')) {
                    color = '0000FF';
                } else if (parentClass.includes('green')) {
                    color = '006600';
                }
                textRuns.push(new TextRun({ text: textContent, color, bold: parentStyles.bold, italic: parentStyles.italic, underline: parentStyles.underline }));
            }

            return paragraphs.length > 0 ? paragraphs : textRuns;
        };

        const paragraphs = processNode(contentElement);

        if (paragraphs.length === 0) {
            console.warn('No paragraphs were created.');
        }

        const doc = new Document({
            numbering: {
                config: Array.from({ length: listIndex - 1 }, (_, i) => ({
                    reference: `numbering${i + 1}`,
                    levels: [
                        {
                            level: 0,
                            format: "decimal",
                            text: "%1.",
                            alignment: AlignmentType.START,
                        },
                    ],
                })),
            },
            sections: [
                {
                    properties: {},
                    children: paragraphs
                }
            ]
        });

        const blob = await Packer.toBlob(doc);
        saveAs(blob, 'document.docx');
    } catch (error) {
        console.error('Error creating document:', error);
    }
};

    return (
    <>
    {/* <BrowserRouter basename=""> */}
    <HelmetProvider>
    <Suspense fallback={<div>Загрузка...</div>}>
<Switch>
  <Route path="/" exact render={() => <Redirect to="/home" />} />
  <Route
    path="/home"
    exact render={() => (
      <Suspense fallback={<div>Загрузка...</div>}>
        <Home />
      </Suspense>
    )}
  />
  <Route
    path="/notFound"
    exact render={() => (
      <Suspense fallback={<div>Загрузка...</div>}>
        <NotFound />
      </Suspense>
    )}
  />
  <Route
    path="/homeDuble"
    render={() => (
      <Suspense fallback={<div>Загрузка...</div>}>
        <HomeDuble />
      </Suspense>
    )}
  />
  <Route
    path="/homeeDublee"
    render={() => (
      <Suspense fallback={<div>Загрузка...</div>}>
        <HomeeDublee />
      </Suspense>
    )}
  />
  <Route
    path="/search"
    render={() => (
      <Suspense fallback={<div>Загрузка...</div>}>
        <FormPoisk onChangeData={onChangeData} />
      </Suspense>
    )}
  />
  <Route
    path="/help"
    render={() => (
      <Suspense fallback={<div>Загрузка...</div>}>
        <Help />
      </Suspense>
    )}
  />
  <Route
    path="/pay"
    exact
    render={() => (
      <Suspense fallback={<div>Загрузка...</div>}>
        <Pay />
      </Suspense>
    )}
  />
  <Route
    path="/payFinish"
    exact
    render={() => (
      <Suspense fallback={<div>Загрузка...</div>}>
        <PayFinish />
      </Suspense>
    )}
  />
  <Route
    path="/info"
    exact
    render={() => (
      <Suspense fallback={<div>Загрузка...</div>}>
        <Spravka />
      </Suspense>
    )}
  />
  <Route
    path="/mini"
    exact
    render={() => (
      <Suspense fallback={<div>Загрузка...</div>}>
        <Mini />
      </Suspense>
    )}
  />
  <Route
    path="/info/verbalPortrait"
    exact
    render={() => (
      <Suspense fallback={<div>Загрузка...</div>}>
        <VerbalPortrait />
      </Suspense>
    )}
  />
  <Route
    path="/info/rukDok"
    render={() => (
      <Suspense fallback={<div>Загрузка...</div>}>
        <RukDok />
      </Suspense>
    )}
  />
  <Route
    path="/info/vozrast"
    exact
    render={() => (
      <Suspense fallback={<div>Загрузка...</div>}>
        <Vozrast />
      </Suspense>
    )}
  />
  <Route
    path="/info/davnostj"
    exact
    render={() => (
      <Suspense fallback={<div>Загрузка...</div>}>
        <Davnostj />
      </Suspense>
    )}
  />
  <Route
    path="/experiment"
    render={() => (
      <Suspense fallback={<div>Загрузка...</div>}>
        <Experiment peredacha={generateDocument} />
      </Suspense>
    )}
  />
  {/* Остальные маршруты */}
      <Route path="/inJob" render={() => <InJob peredacha={generateDocument} />}/>
      <Route path="/sudebM" render={() => <SudebOsnM peredacha={generateDocument} />}/>
      <Route path="/sudebF" render={() => <SudebOsnF peredacha={generateDocument} />}/>
      <Route path="/patanM" render={() => <PatanOsnM peredacha={generateDocument} />}/>
      <Route path="/patanF" render={() => <PatanOsnF peredacha={generateDocument} />}/>
      <Route path="/otravlenieEtilenglicoljM" render={() => <OtravlenieEtilenglicoljM peredacha={generateDocument} />}/>
      <Route path="/otravlenieEtilenglicoljF" render={() => <OtravlenieEtilenglicoljF peredacha={generateDocument} />}/>
      <Route path="/ibsVksM" render={() => <IbsVksM peredacha={generateDocument} />}/>
      <Route path="/ibsVksF" render={() => <IbsVksF peredacha={generateDocument} />}/>
      <Route path="/ibsVksExp" render={() => <IbsVksExp peredacha={generateDocument} />}/>
      <Route path="/ishimInsultM" render={() => <IshimInsultM peredacha={generateDocument} />}/>
      <Route path="/ishimInsultF" render={() => <IshimInsultF peredacha={generateDocument} />} />
      <Route path="/poveshеnieM" render={() => <PoveshеnieM peredacha={generateDocument} />} />
      <Route path="/poveshеnieF" render={() => <PoveshеnieF peredacha={generateDocument} />}/>
      <Route path="/chmtM" render={() => <ChmtM peredacha={generateDocument} />}/>
      <Route path="/chmtF" render={() => <ChmtF peredacha={generateDocument} />}/>
      <Route path="/electroM" render={() => <ElectroM peredacha={generateDocument} />}/>
      <Route path="/electroF" render={() => <ElectroF peredacha={generateDocument} />}/>
      <Route path="/ognestrelTorax1M" render={() => <OgnestrelTorax1M peredacha={generateDocument} />}/>
      <Route path="/ognestrelTorax1F" render={() => <OgnestrelTorax1F peredacha={generateDocument} />}/>
      <Route path="/ognestrelToraxManyM" render={() => <OgnestrelToraxManyM peredacha={generateDocument} />}/>
      <Route path="/ognestrelToraxManyF" render={() => <OgnestrelToraxManyF peredacha={generateDocument} />}/>
      <Route path="/ognestrelHeadM" render={() => <OgnestrelHeadM peredacha={generateDocument} />}/>
      <Route path="/ognestrelHeadF" render={() => <OgnestrelHeadF peredacha={generateDocument} />}/>
      <Route path="/tromboflebitM" render={() => <TromboflebitM peredacha={generateDocument} />}/>
      <Route path="/tromboflebitF" render={() => <TromboflebitF peredacha={generateDocument} />}/>
      <Route path="/autoPeshM" render={() => <AutoPeshM peredacha={generateDocument} />}/>
      <Route path="/autoPeshF" render={() => <AutoPeshF peredacha={generateDocument} />}/>
      <Route path="/autoVoditM" render={() => <AutoVoditM peredacha={generateDocument} />}/>
      <Route path="/autoVoditF" render={() => <AutoVoditF peredacha={generateDocument} />}/>
      <Route path="/autoPasM" render={() => <AutoPasM peredacha={generateDocument} />} />
      <Route path="/autoPasF" render={() => <AutoPasF peredacha={generateDocument} />} />
      <Route path="/colotoRezM" render={() => <ColotoRezM peredacha={generateDocument} />}/>
      <Route path="/colotoRezF" render={() => <ColotoRezF peredacha={generateDocument} />}/>
      <Route path="/utoplenieM" render={() => <UtoplenieM peredacha={generateDocument} />} />
      <Route path="/utoplenieF" render={() => <UtoplenieF peredacha={generateDocument} />} />
      <Route path="/tupajaZhivotaM" render={() => <TupajaZhivotaM peredacha={generateDocument} />} />
      <Route path="/tupajaZhivotaF" render={() => <TupajaZhivotaF peredacha={generateDocument} />} />
      <Route path="/ozhogyM" render={() => <OzhogyM peredacha={generateDocument} />} />
      <Route path="/ozhogyF" render={() => <OzhogyF peredacha={generateDocument} />} />
      <Route path="/katatravmaM" render={() => <KatatravmaM peredacha={generateDocument} />} />
      <Route path="/katatravmaF" render={() => <KatatravmaF peredacha={generateDocument} />} />
      <Route path="/aviatravmaM" render={() => <AviatravmaM peredacha={generateDocument} />} />
      <Route path="/aviatravmaF" render={() => <AviatravmaF peredacha={generateDocument} />} />
      <Route path="/rakProstatyM" render={() => <RakProstatyM peredacha={generateDocument} />} />
      <Route path="/rakProstatyF" render={() => <RakProstatyF peredacha={generateDocument} />} />
      <Route path="/otravlenieNeftM" render={() => <OtravlenieNeftM peredacha={generateDocument} />} />
      <Route path="/otravlenieNeftF" render={() => <OtravlenieNeftF peredacha={generateDocument} />} />
      <Route path="/otravlenieButirolactonM" render={() => <OtravlenieButirolactonM peredacha={generateDocument} />} />
      <Route path="/otravlenieButirolactonF" render={() => <OtravlenieButirolactonF peredacha={generateDocument} />} />
  {/* <Route path="/*" render={() => <Redirect to="/home" />} /> */}
  {/* <Route path="/*" render={() => <Redirect to="/notFound" />} /> */}
  <Route path="/*" render={() => <NotFound />} />
</Switch>
</Suspense>
</HelmetProvider>
{/* </BrowserRouter> */}
    </>)
    }

 export default App;