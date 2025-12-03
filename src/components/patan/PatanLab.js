import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import GbLab from '../../patan/gb/GbLab';
import SaharDiab1Lab from '../../patan/saharDiab1/saharDiab1Lab';
import SaharDiab2Lab from '../../patan/saharDiab2/saharDiab2Lab';
import VichLab from '../../patan/vich/VichLab';
import CovidLab from '../../patan/covid/CovidLab';
import GepatBLab from '../../patan/gepatB/GepatBLab';
import GepatСLab from '../../patan/gepatС/GepatСLab';
import SifilisLab from '../../patan/sifilis/SifilisLab';
import GrippLab from '../../patan/gripp/GrippLab';
import TubercLab from '../../patan/tuberc/TubercLab';
import KronaLab from '../../patan/krona/KronaLab';
import NjakLab from '../../patan/njak/NjakLab';
import GreyvsLab from '../../patan/greyvs/GreyvsLab';
import HoshimotoLab from '../../patan/hoshimoto/HoshimotoLab';
import GemInsultLab from '../../patan/gemInsult/GemInsultLab';
import OglomeruloLab from '../../patan/oglomerulo/OglomeruloLab';
import FeAnemiLab from '../../patan/feAnemi/FeAnemiLab';
import PostgemAnemiLab from '../../patan/postgemAnemi/PostgemAnemiLab';
import HronPieloLab from '../../patan/hronPielo/HronPieloLab';
import IshInsultLab from '../../patan/ishInsult/IshInsultLab';
import InfarctMiocLab from '../../patan/infarctMioc/InfarctMiocLab';
import AlcoLab from '../../patan/alco/AlcoLab';
import DilCardioLab from '../../patan/dilCardio/DilCardioLab';
import GipCardioLab from '../../patan/gipCardio/GipCardioLab';
import MiocarditLab from '../../patan/miocardit/MiocarditLab';
import SepsisLab from '../../patan/sepsis/SepsisLab';
import HibsLab from '../../patan/hibs/HibsLab';
import MkbLab from '../../patan/mkb/MkbLab';
import PancreatitLab from '../../patan/pancreatit/PancreatitLab';
import PnevmoniaInterstLab from '../../patan/pnevmoniaInterst/PnevmoniaInterstLab';
import PnevmoniaOchagLab from '../../patan/pnevmoniaOchag/PnevmoniaOchagLab';
import PnevmoniaKrupLab from '../../patan/pnevmoniaKrup/PnevmoniaKrupLab';
import HoblLab from '../../patan/hobl/HoblLab';
import AstmaLab from '../../patan/astma/AstmaLab';
import PeritonitLab from '../../patan/peritonit/PeritonitLab';
import YazvaLab from '../../patan/yazva/YazvaLab';
import MeningitLab from '../../patan/meningit/MeningitLab';
import DifteriaLab from '../../patan/difteria/DifteriaLab';
import HolecistitLab from '../../patan/holecistit/HolecistitLab';
import RsLab from '../../patan/rs/RsLab';

import DiabetcomaLab from '../../prichinySmerti/diabetcoma/DiabetcomaLab';
import OssnLab from '../../prichinySmerti/ossn/OssnLab';
import HsnLab from '../../prichinySmerti/hsn/HsnLab';
import OdnLab from '../../prichinySmerti/odn/OdnLab';
import OrdsLab from '../../prichinySmerti/ords/OrdsLab';
import VklinenieLab from '../../prichinySmerti/vklinenie/VklinenieLab';
import TravmShokLab from '../../prichinySmerti/travmShok/TravmShokLab';
import GemShokLab from '../../prichinySmerti/gemShok/GemShokLab';
import OstrKrovopotLab from '../../prichinySmerti/ostrKrovopot/OstrKrovopotLab';
import LungserdceLab from '../../prichinySmerti/lungserdce/LungserdceLab';
import AsfixiaLab from '../../prichinySmerti/asfixia/AsfixiaLab';
import ItshLab from '../../prichinySmerti/itsh/ItshLab';
import OpnLab from '../../prichinySmerti/opn/OpnLab';
import HpnLab from '../../prichinySmerti/hpn/HpnLab';
import OperitonitLab from '../../prichinySmerti/operitonit/OperitonitLab';


function PatanLab() {

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
    
    return (
        <>
            {/* Туберкулез: */}
            {tuberc && <><TubercLab/>
            <br></br></>}
             {/* Дифтерия: */}
             {difteria && <><DifteriaLab/>
            <br></br></>}
            {/* Сифилис: */}
            {sifilis && <><SifilisLab/>
            <br></br></>}
            {/* Гепатит B: */}
            {gepatB && <><GepatBLab/>
            <br></br></>}
            {/* Гепатит C: */}
            {gepatC && <><GepatСLab/>
            <br></br></>}
            {/* ВИЧ: */}
            {vich && <><VichLab/>
            <br></br></>}
            {/* Грипп: */}
            {gripp && <><GrippLab/>
            <br></br></>}
            {/* Covid-19: */}
            {covid && <><CovidLab/>
            <br></br></>}
            {/* Железодеф анемия: */}
            {feAnemi && <><FeAnemiLab/>
            <br></br></>} 
            {/* Острая постгеморрагическая анемия: */}
            {postgemAnemi && <><PostgemAnemiLab/>
            <br></br></>} 
            {/* болезнь Грейвса: */}
            {greyvs && <><GreyvsLab/>
            <br></br></>}
            {/* Хашимото: */}
            {hoshimoto && <><HoshimotoLab/>
            <br></br></>}
            {/* СД 1 типа: */}
            {saharDiab1 && <><SaharDiab1Lab/>
            <br></br></>}
            {/* СД 2 типа: */}
            {saharDiab2 && <><SaharDiab2Lab/>
            <br></br></>}
             {/* Хронический алкоголизм: */}
             {alco && <><AlcoLab/>
            <br></br></>}
            {/* Менингит: */}
            {meningit && <><MeningitLab/>
            <br></br></>}
            {/* Рассеянный склероз: */}
            {rs && <><RsLab/>
            <br></br></>}
            {/* ГБ: */}
            {gb && <><GbLab/>
            <br></br></>}
            {/* Инфаркт миокарда: */}
            {infarctMioc && <><InfarctMiocLab/>
            <br></br></>}
            {/* ХИБС: */}
            {hibs && <><HibsLab/>
            <br></br></>}
             {/* Сепсис: */}
             {sepsis && <><SepsisLab/>
            <br></br></>}
            {/* Миокардит: */}
            {miocardit && <><MiocarditLab/>
            <br></br></>}
            {/* Дилатационная кардиомиопатия: */}
            {dilCardio && <><DilCardioLab/>
            <br></br></>}
            {/* Гипертрофическая кардиомиопатия: */}
            {gipCardio && <><GipCardioLab/>
            <br></br></>}
            {/* Геморрагический инсульт: */}
            {gemInsult && <><GemInsultLab/>
            <br></br></>}
            {/* Ишемический инсульт: */}
            {ishInsult && <><IshInsultLab/>
            <br></br></>}
            {/* Крупозная пневмония: */}
            {pnevmoniaKrup && <><PnevmoniaKrupLab/>
            <br></br></>}
            {/* Очаговая пневмония: */}
            {pnevmoniaOchag && <><PnevmoniaOchagLab/>
            <br></br></>}
            {/* Интерстициальная пневмония: */}
            {pnevmoniaInterst && <><PnevmoniaInterstLab/>
            <br></br></>}
            {/* ХОБЛ: */}
            {hobl && <><HoblLab/>
            <br></br></>}
            {/* Астма: */}
            {astma && <><AstmaLab/>
            <br></br></>}
             {/* ЯБ: */}
             {yazva && <><YazvaLab/>
            <br></br></>} 
            {/* болезнь Крона: */}
            {krona && <><KronaLab/>
            <br></br></>}
            {/* НЯК: */}
            {njak && <><NjakLab/>
            <br></br></>}
            {/* Перитонит: */}
            {peritonit && <><PeritonitLab/>
            <br></br></>} 
            {/* Холецистит: */}
            {holecistit && <><HolecistitLab/>
            <br></br></>} 
            {/* Панкреатит: */}
            {pancreatit && <><PancreatitLab/>
            <br></br></>} 
            {/* О. гломерулонефрит: */}
            {oglomerulo && <><OglomeruloLab/>
            <br></br></>}
            {/* Хронический пиелонефрит: */}     
            {hronPielo && <><HronPieloLab/>
            <br></br></>} 
            {/* МКБ: */}     
            {mkb && <><MkbLab/>
            <br></br></>}  
            {/* Ссадины: */}
            {/* {ssadiny  && <><SsadinyDiagnoz/>
            <br></br></>} */}
            {/* острая сердечно-сосудистая недостаточность: */} 
            {ossn && <><OssnLab/>
            <br></br></>}  
             {/* Хроническая сердечная недостаточность: */} 
             {hsn && <><HsnLab/>
            <br></br></>} 
            {/* Вторичная легочная гипертензия с формированием легочного сердца и последующей легочно-сердечной недостаточностью : */} 
            {lungserdce && <><LungserdceLab/>
            <br></br></>}  
            {/* Острая дыхательная недостаточность: */} 
            {odn && <><OdnLab/>
            <br></br></>} 
             {/* Острый респираторный дистресс-синдром: */} 
             {ords && <><OrdsLab/>
            <br></br></>} 
             {/* Механическая асфиксия: */} 
             {asfixia && <><AsfixiaLab/>
            <br></br></>} 
            {/* Отек-набухание головного мозга с вариантами вклинения ствола и других структур мозга: */} 
            {vklinenie && <><VklinenieLab/>
            <br></br></>} 
             {/* Острая массивная кровопотеря: */} 
             {ostrKrovopot && <><OstrKrovopotLab/>
            <br></br></>}  
            {/* Геморрагический шок: */} 
            {gemShok && <><GemShokLab/>
            <br></br></>} 
            {/* Травматический шок: */} 
            {travmShok && <><TravmShokLab/>
            <br></br></>}  
            {/* Септический шок: */} 
            {itsh && <><ItshLab/>
            <br></br></>}
            {/* Перитонит: */} 
            {operitonit && <><OperitonitLab/>
            <br></br></>} 
            {/* Острая почечная недостаточность (ОПН): */} 
            {opn && <><OpnLab/>
            <br></br></>}
            {/* Хроническая почечная недостаточность (ХПН): */} 
            {hpn && <><HpnLab/>
            <br></br></>}     
            {/* Диабетическая кома: */} 
            {diabetcoma && <><DiabetcomaLab/>
            <br></br></>}  
        </>
    );
}

export default PatanLab;