import {Route, Switch, useHistory, Redirect, useLocation} from 'react-router-dom';
import React, { useEffect, Suspense, lazy } from 'react';
import { HelmetProvider } from "react-helmet-async";

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
  useEffect(() => {
    const unlisten = history.listen((location) => {
      window.updateMetaTags(location.pathname);
    });
    return () => {
      unlisten(); // Отписываемся при размонтировании
    };
  }, [history]);
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

  //Проверка, выполняется ли страница локально через протокол file://, и если да — скрывать контент или показывать пустую страницу (Прывет!!!):
  if (window.location.protocol === 'file:') {
    document.body.innerHTML = `
      <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
        <h1 style="color: blue;">Прывет!!!</h1>
      </div>
    `;
    return null;
  };

  //Конечный вариант функции сохранения
    const generateDocument = async () => {
      // ...
      return
      // ...     
  };
   
  function onChangeData(dataForm){
    if (dataForm.diagnoz ==='отравление нефтепродуктами' && dataForm.sex === 'мужской'){
      history.push('/chernDuble/otravlenieNeftM')
    }
    else if (dataForm.diagnoz ==='отравление нефтепродуктами' && dataForm.sex === 'женский'){
      history.push('/chernDuble/otravlenieNeftF')
    }
    else if (dataForm.diagnoz ==='отравление бутиролактоном' && dataForm.sex === 'мужской'){
      history.push('/chernDuble/otravlenieButirolactonM')
    }
    else if (dataForm.diagnoz ==='отравление бутиролактоном' && dataForm.sex === 'женский'){
      history.push('/chernDuble/otravlenieButirolactonF')
    } 
  //  ...
    else if (dataForm.diagnoz ==='смэ основное' && dataForm.sex === 'мужской'){
      history.push('/chernDuble/sudebM')
    }
    else if (dataForm.diagnoz ==='смэ основное' && dataForm.sex === 'женский'){
      history.push('/chernDuble/sudebF')
    }
    else{history.push('/chernDuble/inJob')}
  }
    return (
    <>
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
      <Route path="/otravlenieEtilenglicoljM" render={() => <OtravlenieEtilenglicoljM peredacha={generateDocument} />}/>
      {/* ... */}
      <Route path="/otravlenieButirolactonM" render={() => <OtravlenieButirolactonM peredacha={generateDocument} />} />
      <Route path="/otravlenieButirolactonF" render={() => <OtravlenieButirolactonF peredacha={generateDocument} />} />
  <Route path="/*" render={() => <NotFound />} />
</Switch>
</Suspense>
</HelmetProvider>
    </>)
    }

 export default App;