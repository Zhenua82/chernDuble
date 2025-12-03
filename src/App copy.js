import { Document, Packer, Paragraph, TextRun, AlignmentType, TabStopPosition, TabStopType } from 'docx';
import { saveAs } from 'file-saver';

import {Route, Switch, useHistory, Redirect} from 'react-router-dom';

import FormPoisk from "./pages/FormPoisk";
import HomeDuble from "./pages/HomeDuble";
import Home from './pages/Home';
import Help from "./pages/Help";
import InJob from "./pages/InJob";
import Pay from './pages/Pay';
import PayFinish from './pages/PayFinish';
import Spravka from "./pages/Spravka";
// import NotFound from './pages/NotFound';

import VerbalPortrait from "./pages/spravka/VerbalPortrait";
import RukDok from "./pages/spravka/RukDok";

import Vozrast from './pages/spravka/Vozrast';
import Davnostj from './pages/spravka/Davnostj';
import Experiment from "./pages/Experiment";
import IbsVksF from "./pages/IbsVksF";
import IbsVksM from "./pages/IbsVksM";
import IbsVksExp from "./pages/IbsVksExp";
import IshimInsultM from './pages/IshimInsultM';
import IshimInsultF from './pages/IshimInsultF';
import OtravlenieNeftM from "./pages/OtravlenieNeftM";
import OtravlenieNeftF from "./pages/OtravlenieNeftF";
import OtravlenieButirolactonM from './pages/OtravlenieButirolactonM';
import OtravlenieButirolactonF from './pages/OtravlenieButirolactonF';
import OtravlenieEtilenglicoljM from './pages/OtravlenieEtilenglicoljM';
import OtravlenieEtilenglicoljF from './pages/OtravlenieEtilenglicoljF';
import PoveshеnieM from './pages/PoveshеnieM';
import PoveshеnieF from './pages/PoveshеnieF';
import ChmtM from './pages/ChmtM';
import ChmtF from './pages/ChmtF';
import ElectroM from './pages/ElectroM';
import ElectroF from './pages/ElectroF';
import OgnestrelTorax1M from './pages/OgnestrelTorax1M';
import OgnestrelTorax1F from './pages/OgnestrelTorax1F';
import OgnestrelToraxManyM from './pages/OgnestrelToraxManyM';
import OgnestrelToraxManyF from './pages/OgnestrelToraxManyF';
import OgnestrelHeadM from './pages/OgnestrelHeadM';
import OgnestrelHeadF from './pages/OgnestrelHeadF';
import TromboflebitM from './pages/TromboflebitM';
import TromboflebitF from './pages/TromboflebitF';
import AutoPeshM from './pages/AutoPeshM';
import AutoPeshF from './pages/AutoPeshF';
import AutoVoditM from './pages/AutoVoditM';
import AutoVoditF from './pages/AutoVoditF';
import AutoPasF from './pages/AutoPasF';
import AutoPasM from './pages/AutoPasM';
import ColotoRezM from './pages/ColotoRezM';
import ColotoRezF from './pages/ColotoRezF';
import UtoplenieM from './pages/UtoplenieM';
import UtoplenieF from './pages/UtoplenieF';
import TupajaZhivotaM from './pages/TupajaZhivotaM';
import TupajaZhivotaF from './pages/TupajaZhivotaF';
import OzhogyM from './pages/OzhogyM';
import OzhogyF from './pages/OzhogyF';
import KatatravmaM from './pages/KatatravmaM';
import KatatravmaF from './pages/KatatravmaF';
import AviatravmaM from './pages/AviatravmaM';
import AviatravmaF from './pages/AviatravmaF';
import RakProstatyM from './pages/RakProstatyM';
import RakProstatyF from './pages/RakProstatyF';
import PatanOsnM from './pages/PatanOsnM';
import PatanOsnF from './pages/PatanOsnF';

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Mini from './pages/Mini';


const App = () => {
  const history = useHistory();
  const location = useLocation();

  // Динамическое обновление title и description:
  useEffect(() => {
    return history.listen((location) => {
      window.updateMetaTags(location.pathname);
    });
  }, [history]);

  // Перевод на страницу mini при ширине экрана < 768px:
  useEffect(() => {
    if (window.innerWidth < 768) {
      history.push('/mini');
    }
  }, [history]);

  // Перевод на страницу home со страницы mini при ширине экрана >= 768px:
  useEffect(() => {
    if (window.innerWidth >= 768 && location.pathname === '/mini') {
      history.push('/home');
    }
  }, [history, location]);

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
    <Switch> 
      <Route path='/' exact>
        <Redirect to='/homeDuble'/>
      </Route>
      <Route path='/home'>
        <Home/>
      </Route>
      <Route path='/homeDuble'>
        <HomeDuble/>
      </Route>
      <Route path='/search'>
        <FormPoisk onChangeData={onChangeData}></FormPoisk>
      </Route>
      <Route path='/help'>
        <Help/>
      </Route>
      <Route path='/pay' exact>
        <Pay/>
      </Route>
      <Route path='/payFinish' exact>
        <PayFinish/>
      </Route>
      <Route path='/info' exact>
        <Spravka/>
      </Route>
      <Route path='/mini' exact>
        <Mini/>
      </Route>

      <Route path='/info/verbalPortrait' exact>
        <VerbalPortrait/>
      </Route>
      <Route path='/info/rukDok' >
        <RukDok/>
      </Route>
      <Route path='/info/vozrast' exact>
        <Vozrast/>
      </Route>
      <Route path='/info/davnostj' exact>
        <Davnostj/>
      </Route>
      

      <Route path='/experiment' >
        <Experiment peredacha={generateDocument}/>
      </Route>
      <Route path='/otravlenieNeftM'>
        <OtravlenieNeftM peredacha={generateDocument}></OtravlenieNeftM>
      </Route>
      <Route path='/otravlenieNeftF'>
        <OtravlenieNeftF peredacha={generateDocument}></OtravlenieNeftF>
      </Route>
      <Route path='/otravlenieButirolactonM'>
        <OtravlenieButirolactonM peredacha={generateDocument}></OtravlenieButirolactonM>
      </Route>
      <Route path='/otravlenieButirolactonF'>
        <OtravlenieButirolactonF peredacha={generateDocument}></OtravlenieButirolactonF>
      </Route>
      <Route path='/otravlenieEtilenglicoljM'>
        <OtravlenieEtilenglicoljM peredacha={generateDocument}></OtravlenieEtilenglicoljM>
      </Route>
      <Route path='/otravlenieEtilenglicoljF'>
        <OtravlenieEtilenglicoljF peredacha={generateDocument}></OtravlenieEtilenglicoljF>
      </Route>
      <Route path='/ibsVksM' >
        <IbsVksM peredacha={generateDocument}/>
      </Route>
      <Route path='/ibsVksF' >
        <IbsVksF peredacha={generateDocument}/>
      </Route>
      <Route path='/ibsVksExp' >
        <IbsVksExp peredacha={generateDocument}/>
      </Route>
      <Route path='/ishimInsultM' >
        <IshimInsultM peredacha={generateDocument}/>
      </Route>
      <Route path='/ishimInsultF' >
        <IshimInsultF peredacha={generateDocument}/>
      </Route>
      <Route path='/poveshеnieM' >
        <PoveshеnieM peredacha={generateDocument}/>
      </Route>
      <Route path='/poveshеnieF' >
        <PoveshеnieF peredacha={generateDocument}/>
      </Route>
      <Route path='/chmtM' >
        <ChmtM peredacha={generateDocument}/>
      </Route>
      <Route path='/chmtF' >
        <ChmtF peredacha={generateDocument}/>
      </Route>
      <Route path='/electroM' >
        <ElectroM peredacha={generateDocument}/>
      </Route>
      <Route path='/electroF' >
        <ElectroF peredacha={generateDocument}/>
      </Route>
      <Route path='/ognestrelTorax1M' >
        <OgnestrelTorax1M peredacha={generateDocument}/>
      </Route>
      <Route path='/ognestrelTorax1F' >
        <OgnestrelTorax1F peredacha={generateDocument}/>
      </Route>
      <Route path='/ognestrelToraxManyM' >
        <OgnestrelToraxManyM peredacha={generateDocument}/>
      </Route>
      <Route path='/ognestrelToraxManyF' >
        <OgnestrelToraxManyF peredacha={generateDocument}/>
      </Route>
      <Route path='/ognestrelHeadM' >
        <OgnestrelHeadM peredacha={generateDocument}/>
      </Route>
      <Route path='/ognestrelHeadF' >
        <OgnestrelHeadF peredacha={generateDocument}/>
      </Route>
      <Route path='/tromboflebitM' >
        <TromboflebitM peredacha={generateDocument}/>
      </Route>
      <Route path='/tromboflebitF' >
        <TromboflebitF peredacha={generateDocument}/>
      </Route>
      <Route path='/autoPeshM' >
        <AutoPeshM peredacha={generateDocument}/>
      </Route>
      <Route path='/autoPeshF' >
        <AutoPeshF peredacha={generateDocument}/>
      </Route>
      <Route path='/autoVoditM' >
        <AutoVoditM peredacha={generateDocument}/>
      </Route>
      <Route path='/autoVoditF' >
        <AutoVoditF peredacha={generateDocument}/>
      </Route>
      <Route path='/autoPasM' >
        <AutoPasM peredacha={generateDocument}/>
      </Route>
      <Route path='/autoPasF' >
        <AutoPasF peredacha={generateDocument}/>
      </Route>
      <Route path='/colotoRezM' >
        <ColotoRezM peredacha={generateDocument}/>
      </Route>
      <Route path='/colotoRezF' >
        <ColotoRezF peredacha={generateDocument}/>
      </Route>
      <Route path='/utoplenieM' >
        <UtoplenieM peredacha={generateDocument}/>
      </Route>
      <Route path='/utoplenieF' >
        <UtoplenieF peredacha={generateDocument}/>
      </Route>
      <Route path='/tupajaZhivotaM' >
        <TupajaZhivotaM peredacha={generateDocument}/>
      </Route>
      <Route path='/tupajaZhivotaF' >
        <TupajaZhivotaF peredacha={generateDocument}/>
      </Route>
      <Route path='/ozhogyM' >
        <OzhogyM peredacha={generateDocument}/>
      </Route>
      <Route path='/ozhogyF' >
        <OzhogyF peredacha={generateDocument}/>
      </Route>
      <Route path='/katatravmaM' >
        <KatatravmaM peredacha={generateDocument}/>
      </Route>
      <Route path='/katatravmaF' >
        <KatatravmaF peredacha={generateDocument}/>
      </Route>
      <Route path='/aviatravmaM' >
        <AviatravmaM peredacha={generateDocument}/>
      </Route>
      <Route path='/aviatravmaF' >
        <AviatravmaF peredacha={generateDocument}/>
      </Route>
      <Route path='/rakProstatyM' >
        <RakProstatyM peredacha={generateDocument}/>
      </Route>
      <Route path='/rakProstatyF' >
        <RakProstatyF peredacha={generateDocument}/>
      </Route>
      <Route path='/inJob'>
        <InJob></InJob>
      </Route>
      <Route path='/patanM'>
        <PatanOsnM peredacha={generateDocument}/>
      </Route>
      <Route path='/patanF'>
        <PatanOsnF peredacha={generateDocument}/>
      </Route>

       {/* Маршрут для несуществующих страниц на 404 (NotFound) */}
       {/* <Route path='/:any'> */}
       {/* <Route path='*'>
        <NotFound />
      </Route> */}

      {/* Маршрут для перенаправления всех несуществующих страниц на страницу home */}
      <Route path='/:any'>
        <Redirect to='/home'/>
      </Route>
    </Switch>
    </>)
    };

 export default App;