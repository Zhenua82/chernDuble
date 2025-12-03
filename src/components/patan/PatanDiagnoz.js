import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import GbDiagnoz from '../../patan/gb/GbDiagnoz';
import SaharDiab1Diagnoz from '../../patan/saharDiab1/SaharDiab1Diagnoz';
import SaharDiab2Diagnoz from '../../patan/saharDiab2/SaharDiab2Diagnoz';
import VichDiagnoz from '../../patan/vich/VichDiagnoz';
import CovidDiagnoz from '../../patan/covid/CovidDiagnoz';
import GepatBDiagnoz from '../../patan/gepatB/GepatBDiagnoz';
import GepatСDiagnoz from '../../patan/gepatС/GepatСDiagnoz';
import SifilisDiagnoz from '../../patan/sifilis/SifilisDiagnoz';
import GrippDiagnoz from '../../patan/gripp/GrippDiagnoz';
import TubercDiagnoz from '../../patan/tuberc/TubercDiagnoz';
import KronaDiagnoz from '../../patan/krona/KronaDiagnoz';
import NjakDiagnoz from '../../patan/njak/NjakDiagnoz';
import GreyvsDiagnoz from '../../patan/greyvs/GreyvsDiagnoz';
import HoshimotoDiagnoz from '../../patan/hoshimoto/HoshimotoDiagnoz';
import GemInsultDiagnoz from '../../patan/gemInsult/GemInsultDiagnoz';
import OglomeruloDiagnoz from '../../patan/oglomerulo/OglomeruloDiagnoz';
import FeAnemiDiagnoz from '../../patan/feAnemi/FeAnemiDiagnoz';
import PostgemAnemiDiagnoz from '../../patan/postgemAnemi/PostgemAnemiDiagnoz';
import HronPieloDiagnoz from '../../patan/hronPielo/HronPieloDiagnoz';
import IshInsultDiagnoz from '../../patan/ishInsult/IshInsultDiagnoz';
import InfarctMiocDiagnoz from '../../patan/infarctMioc/InfarctMiocDiagnoz';
import AlcoDiagnoz from '../../patan/alco/AlcoDiagnoz';
import DilCardioDiagnoz from '../../patan/dilCardio/DilCardioDiagnoz';
import GipCardioDiagnoz from '../../patan/gipCardio/GipCardioDiagnoz';
import MiocarditDiagnoz from '../../patan/miocardit/MiocarditDiagnoz';
import SepsisDiagnoz from '../../patan/sepsis/SepsisDiagnoz';
import HibsDiagnoz from '../../patan/hibs/HibsDiagnoz';
import MkbDiagnoz from '../../patan/mkb/MkbDiagnoz';
import PancreatitDiagnoz from '../../patan/pancreatit/PancreatitDiagnoz';
import PnevmoniaInterstDiagnoz from '../../patan/pnevmoniaInterst/PnevmoniaInterstDiagnoz';
import PnevmoniaOchagDiagnoz from '../../patan/pnevmoniaOchag/PnevmoniaOchagDiagnoz';
import PnevmoniaKrupDiagnoz from '../../patan/pnevmoniaKrup/PnevmoniaKrupDiagnoz';
import HoblDiagnoz from '../../patan/hobl/HoblDiagnoz';
import AstmaDiagnoz from '../../patan/astma/AstmaDiagnoz';
import PeritonitDiagnoz from '../../patan/peritonit/PeritonitDiagnoz';
import YazvaDiagnoz from '../../patan/yazva/YazvaDiagnoz';
import MeningitDiagnoz from '../../patan/meningit/MeningitDiagnoz';
import DifteriaDiagnoz from '../../patan/difteria/DifteriaDiagnoz';
import HolecistitDiagnoz from '../../patan/holecistit/HolecistitDiagnoz';
import RsDiagnoz from '../../patan/rs/RsDiagnoz';

import DiabetcomaDiagnoz from '../../prichinySmerti/diabetcoma/DiabetcomaDiagnoz';
import OssnDiagnoz from '../../prichinySmerti/ossn/OssnDiagnoz';
import HsnDiagnoz from '../../prichinySmerti/hsn/HsnDiagnoz';
import OdnDiagnoz from '../../prichinySmerti/odn/OdnDiagnoz';
import OrdsDiagnoz from '../../prichinySmerti/ords/OrdsDiagnoz';
import VklinenieDiagnoz from '../../prichinySmerti/vklinenie/VklinenieDiagnoz';
import TravmShokDiagnoz from '../../prichinySmerti/travmShok/TravmShokDiagnoz';
import GemShokDiagnoz from '../../prichinySmerti/gemShok/GemShokDiagnoz';
import OstrKrovopotDiagnoz from '../../prichinySmerti/ostrKrovopot/OstrKrovopotDiagnoz';
import LungserdceDiagnoz from '../../prichinySmerti/lungserdce/LungserdceDiagnoz';
import AsfixiaDiagnoz from '../../prichinySmerti/asfixia/AsfixiaDiagnoz';
import ItshDiagnoz from '../../prichinySmerti/itsh/ItshDiagnoz';
import OpnDiagnoz from '../../prichinySmerti/opn/OpnDiagnoz';
import HpnDiagnoz from '../../prichinySmerti/hpn/HpnDiagnoz';
import OperitonitDiagnoz from '../../prichinySmerti/operitonit/OperitonitDiagnoz';

function PatanDiagnoz() {

    //Получаем из хранилища состояния пат изменений:
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

    
    // const bampPerelom = useSelector((state) => state.dopPovrezhden.bampPerelom);

    return (
        <>
            {/* Острая сердечно-сосудистая недостаточность (ОССН) : */} 
            {ossn && <><OssnDiagnoz/>
            <br></br></>}  
            {/* Хроническая сердечная недостаточность : */} 
            {hsn && <><HsnDiagnoz/>
            <br></br></>}  
            {/* Вторичная легочная гипертензия с формированием легочного сердца и последующей легочно-сердечной недостаточностью : */} 
            {lungserdce && <><LungserdceDiagnoz/>
            <br></br></>}  
            {/* Острая дыхательная недостаточность: */} 
            {odn && <><OdnDiagnoz/>
            <br></br></>}
             {/* Острый респираторный дистресс-синдром: */} 
             {ords && <><OrdsDiagnoz/>
            <br></br></>}  
             {/* Механическая асфиксия: */} 
             {asfixia && <><AsfixiaDiagnoz/>
            <br></br></>} 
             {/* Отек-набухание головного мозга с вариантами вклинения ствола и других структур мозга: */} 
             {vklinenie && <><VklinenieDiagnoz/>
            <br></br></>} 
             {/* Острая массивная кровопотеря: */} 
             {ostrKrovopot && <><OstrKrovopotDiagnoz/>
            <br></br></>}   
             {/* Геморрагический шок: */} 
            {gemShok && <><GemShokDiagnoz/>
            <br></br></>} 
            {/* Травматический шок: */} 
            {travmShok && <><TravmShokDiagnoz/>
            <br></br></>} 
            {/* Септический шок: */} 
            {itsh && <><ItshDiagnoz/>
            <br></br></>}
            {/* Перитонит: */} 
            {operitonit && <><OperitonitDiagnoz/>
            <br></br></>} 
            {/* Острая почечная недостаточность (ОПН): */} 
            {opn && <><OpnDiagnoz/>
            <br></br></>}
            {/* Хроническая почечная недостаточность (ХПН): */} 
            {hpn && <><HpnDiagnoz/>
            <br></br></>}   
            {/* Диабетическая кома: */} 
            {diabetcoma && <><DiabetcomaDiagnoz/>
            <br></br></>}  
            <p className="MsoNormal"><u>Сопутствующие заболевания:</u></p>   
            {/* Туберкулез: */}
            {tuberc && <><TubercDiagnoz/>
            <br></br></>}
            {/* Дифтерия: */}
            {difteria && <><DifteriaDiagnoz/>
            <br></br></>}
            {/* Сифилис: */}
            {sifilis && <><SifilisDiagnoz/>
            <br></br></>}
            {/* Гепатит B: */}
            {gepatB && <><GepatBDiagnoz/>
            <br></br></>}
            {/* Гепатит C: */}
            {gepatC && <><GepatСDiagnoz/>
            <br></br></>}
            {/* ВИЧ: */}
            {vich && <><VichDiagnoz/>
            <br></br></>}
            {/* Грипп: */}
            {gripp && <><GrippDiagnoz/>
            <br></br></>}
            {/* Covid-19: */}
            {covid && <><CovidDiagnoz/>
            <br></br></>} 
            {/* Железодеф анемия: */}
            {feAnemi && <><FeAnemiDiagnoz/>
            <br></br></>}
             {/* Острая постгеморрагическая анемия: */}
             {postgemAnemi && <><PostgemAnemiDiagnoz/>
            <br></br></>} 
            {/* болезнь Грейвса: */}
            {greyvs && <><GreyvsDiagnoz/>
            <br></br></>} 
            {/* Хошимото: */}
            {hoshimoto && <><HoshimotoDiagnoz/>
            <br></br></>} 
            {/* Сахарный диабет 1: */}
            {saharDiab1 && <><SaharDiab1Diagnoz/>
            <br></br></>}
            {/* Сахарный диабет 2: */}
            {saharDiab2 && <><SaharDiab2Diagnoz/>
            <br></br></>}
            {/* Хронический алкоголизм: */}
            {alco && <><AlcoDiagnoz/>
            <br></br></>}
            {/* Менингит: */}
            {meningit && <><MeningitDiagnoz/>
            <br></br></>}
            {/* Рассеянный склероз: */}
            {rs && <><RsDiagnoz/>
            <br></br></>}
            {/* ГБ: */}
            {gb && <><GbDiagnoz/>
            <br></br></>}
            {/* Инфаркт миокарда: */}
            {infarctMioc && <><InfarctMiocDiagnoz/>
            <br></br></>}
            {/* ХИБС: */}
            {hibs && <><HibsDiagnoz/>
            <br></br></>}
            {/* Сепсис: */}
            {sepsis && <><SepsisDiagnoz/>
            <br></br></>}
            {/* Миокардит: */}
            {miocardit && <><MiocarditDiagnoz/>
            <br></br></>}
            {/* Дилатационная кардиомиопатия: */}
            {dilCardio && <><DilCardioDiagnoz/>
            <br></br></>}
            {/* Гипертрофическая кардиомиопатия: */}
            {gipCardio && <><GipCardioDiagnoz/>
            <br></br></>}
            {/* Геморрагический инсульт: */}
            {gemInsult && <><GemInsultDiagnoz/>
            <br></br></>}
            {/* Ишемический инсульт: */}
            {ishInsult && <><IshInsultDiagnoz/>
            <br></br></>}
            {/* Крупозная пневмония: */}
            {pnevmoniaKrup && <><PnevmoniaKrupDiagnoz/>
            <br></br></>}
            {/* Очаговая пневмония: */}
            {pnevmoniaOchag && <><PnevmoniaOchagDiagnoz/>
            <br></br></>}
            {/* Интерстициальная пневмония: */}
            {pnevmoniaInterst && <><PnevmoniaInterstDiagnoz/>
            <br></br></>}
            {/* ХОБЛ: */}
            {hobl && <><HoblDiagnoz/>
            <br></br></>}
            {/* Астма: */}
            {astma && <><AstmaDiagnoz/>
            <br></br></>}
            {/* ЯБ: */}
            {yazva && <><YazvaDiagnoz/>
            <br></br></>}      
            {/* болезнь Крона: */}
            {krona && <><KronaDiagnoz/>
            <br></br></>}      
            {/* НЯК: */}
            {njak && <><NjakDiagnoz/>
            <br></br></>} 
            {/* Перитонит: */}
            {peritonit && <><PeritonitDiagnoz/>
            <br></br></>} 
            {/* Холецистит: */}
            {holecistit && <><HolecistitDiagnoz/>
            <br></br></>} 
            {/* Панкреатит: */}
            {pancreatit && <><PancreatitDiagnoz/>
            <br></br></>} 
            {/* О. гломерулонефрит: */}     
            {oglomerulo && <><OglomeruloDiagnoz/>
            <br></br></>}      
            {/* Хронический пиелонефрит: */}     
            {hronPielo && <><HronPieloDiagnoz/>
            <br></br></>}      
            {/* МКБ: */}     
            {mkb && <><MkbDiagnoz/>
            <br></br></>}      
            {/* Ссадины: */}
            {/* {ssadiny  && <><SsadinyDiagnoz/>
            <br></br></>} */}
        </>
    );
}

export default PatanDiagnoz;