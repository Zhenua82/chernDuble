import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import GbSerdce from '../../patan/gb/GbSerdceAorta';
import SaharDiab1Serdce from '../../patan/saharDiab1/SaharDiab1Serdce';
import SaharDiab2Serdce from '../../patan/saharDiab2/SaharDiab2Serdce';
import CovidSerdce from '../../patan/covid/CovidSerdce';
import SifilisSerdce from '../../patan/sifilis/SifilisSerdce';
import GrippSerdce from '../../patan/gripp/GrippSerdce';
import TubercSerdce from '../../patan/tuberc/TubercSerdce';
import GreyvsSerdceAorta from '../../patan/greyvs/GreyvsSerdceAorta';
import HoshimotoSerdceAorta from '../../patan/hoshimoto/HoshimotoSerdceAorta';
import OglomeruloSerdce from '../../patan/oglomerulo/OglomeruloSerdce';
import FeAnemiSerdce from '../../patan/feAnemi/FeAnemiSerdce';
import PostgemAnemiSerdce from '../../patan/postgemAnemi/PostgemAnemiSerdce';
import IshInsultSerdce from '../../patan/ishInsult/IshInsultSerdce';
import GemInsultSerdce from '../../patan/gemInsult/GemInsultSerdce';
import InfarctMiocSerdceAorta from '../../patan/infarctMioc/InfarctMiocSerdceAorta';
import AlcoSerdceAorta from '../../patan/alco/AlcoSerdceAorta';
import DilCardioSerdceAorta from '../../patan/dilCardio/DilCardioSerdceAorta';
import GipCardioSerdceAorta from '../../patan/gipCardio/GipCardioSerdceAorta';
import MiocarditSerdceAorta from '../../patan/miocardit/MiocarditSerdceAorta';
import SepsisSerdceAorta from '../../patan/sepsis/SepsisSerdceAorta';
import HibsSerdceAorta from '../../patan/hibs/HibsSerdceAorta';
import PancreatitSerdceAorta from '../../patan/pancreatit/PancreatitSerdceAorta';
import PnevmoniaInterstSerdce from '../../patan/pnevmoniaInterst/PnevmoniaInterstSerdce';
import PnevmoniaOchagSerdce from '../../patan/pnevmoniaOchag/PnevmoniaOchagSerdce';
import PnevmoniaKrupSerdce from '../../patan/pnevmoniaKrup/PnevmoniaKrupSerdce';
import HoblSerdce from '../../patan/hobl/HoblSerdce';
import AstmaSerdce from '../../patan/astma/AstmaSerdce';
import MeningitSerdceAorta from '../../patan/meningit/MeningitSerdceAorta';
import DifteriaSerdceAorta from '../../patan/difteria/DifteriaSerdceAorta';

import DiabetcomaSerdce from '../../prichinySmerti/diabetcoma/DiabetcomaSerdce';
import OssnSerdce from '../../prichinySmerti/ossn/OssnSerdce';
import HsnSerdce from '../../prichinySmerti/hsn/HsnSerdce';
import OdnSerdce from '../../prichinySmerti/odn/OdnSerdce';
import VklinenieSerdce from '../../prichinySmerti/vklinenie/VklinenieSerdce';
import TravmShokSerdce from '../../prichinySmerti/travmShok/TravmShokSerdce';
import GemShokSerdce from '../../prichinySmerti/gemShok/GemShokSerdce';
import OstrKrovopotSerdce from '../../prichinySmerti/ostrKrovopot/OstrKrovopotSerdce';
import LungserdceSerdce from '../../prichinySmerti/lungserdce/LungserdceSerdce';
import AsfixiaSerdce from '../../prichinySmerti/asfixia/AsfixiaSerdce';
import ItshSerdce from '../../prichinySmerti/itsh/ItshSerdce';
import OpnSerdce from '../../prichinySmerti/opn/OpnSerdce';
import HpnSerdce from '../../prichinySmerti/hpn/HpnSerdce';


function PatanSerdceAorta() {

    //Получаем из хранилища состояния пат изменений:
    const gb = useSelector((state) => state.pat.gb);
    const saharDiab1 = useSelector((state) => state.pat.saharDiab1);
    const saharDiab2 = useSelector((state) => state.pat.saharDiab2);
    const covid = useSelector((state) => state.pat.covid);
    const sifilis = useSelector((state) => state.pat.sifilis);
    const gripp = useSelector((state) => state.pat.gripp);
    const tuberc = useSelector((state) => state.pat.tuberc);
    const greyvs = useSelector((state) => state.pat.greyvs);
    const hoshimoto = useSelector((state) => state.pat.hoshimoto);
    const oglomerulo = useSelector((state) => state.pat.oglomerulo);
    const feAnemi = useSelector((state) => state.pat.feAnemi);
    const postgemAnemi = useSelector((state) => state.pat.postgemAnemi);
    const ishInsult = useSelector((state) => state.pat.ishInsult);
    const gemInsult = useSelector((state) => state.pat.gemInsult);
    const infarctMioc = useSelector((state) => state.pat.infarctMioc);
    const alco = useSelector((state) => state.pat.alco);
    const dilCardio = useSelector((state) => state.pat.dilCardio);
    const gipCardio = useSelector((state) => state.pat.gipCardio);
    const miocardit = useSelector((state) => state.pat.miocardit);
    const sepsis = useSelector((state) => state.pat.sepsis);
    const hibs = useSelector((state) => state.pat.hibs);
    const pancreatit = useSelector((state) => state.pat.pancreatit);
    const pnevmoniaInterst = useSelector((state) => state.pat.pnevmoniaInterst);
    const pnevmoniaOchag = useSelector((state) => state.pat.pnevmoniaOchag);
    const pnevmoniaKrup = useSelector((state) => state.pat.pnevmoniaKrup);
    const hobl = useSelector((state) => state.pat.hobl);
    const astma = useSelector((state) => state.pat.astma);
    const meningit = useSelector((state) => state.pat.meningit);
    const difteria = useSelector((state) => state.pat.difteria);
    // const ushibRanaNoogr = useSelector((state) => state.dopPovrezhden.ushibRanaNoogr);
    const diabetcoma = useSelector((state) => state.prichinySmerti.diabetcoma);
    const ossn = useSelector((state) => state.prichinySmerti.ossn);
    const hsn = useSelector((state) => state.prichinySmerti.hsn);
    const odn = useSelector((state) => state.prichinySmerti.odn);
    const vklinenie = useSelector((state) => state.prichinySmerti.vklinenie);
    const travmShok = useSelector((state) => state.prichinySmerti.travmShok);
    const gemShok = useSelector((state) => state.prichinySmerti.gemShok);
    const ostrKrovopot = useSelector((state) => state.prichinySmerti.ostrKrovopot);
    const lungserdce = useSelector((state) => state.prichinySmerti.lungserdce);
    const asfixia = useSelector((state) => state.prichinySmerti.asfixia);
    const itsh = useSelector((state) => state.prichinySmerti.itsh);
    const opn = useSelector((state) => state.prichinySmerti.opn);
    const hpn = useSelector((state) => state.prichinySmerti.hpn);
    
    
    return (
        <>
            {/* Туберкулез: */}
            {tuberc && <><TubercSerdce/>
            <br></br></>}
            {/* Дифтерия: */}
            {difteria && <><DifteriaSerdceAorta/>
            <br></br></>}
            {/* Сифилис: */}
            {sifilis && <><SifilisSerdce/>
            <br></br></>}
            {/* Грипп: */}
            {gripp && <><GrippSerdce/>
            <br></br></>}
            {/* Covid-19: */}
            {covid && <><CovidSerdce/>
            <br></br></>}
            {/* Железодеф анемия: */}
            {feAnemi && <><FeAnemiSerdce/>
            <br></br></>} 
            {/* Острая постгеморрагическая анемия: */}
            {postgemAnemi && <><PostgemAnemiSerdce/>
            <br></br></>} 
            {/* болезнь Грейвса: */}
            {greyvs && <><GreyvsSerdceAorta/>
            <br></br></>}
            {/* Хашимото: */}
            {hoshimoto && <><HoshimotoSerdceAorta/>
            <br></br></>}
            {/* Сахар диаб 1: */}
            {saharDiab1 && <><SaharDiab1Serdce/>
            <br></br></>}
            {/* Сахар диаб 2: */}
            {saharDiab2 && <><SaharDiab2Serdce/>
            <br></br></>}
             {/* Хронический алкоголизм: */}
             {alco && <><AlcoSerdceAorta/>
            <br></br></>}
            {/* Менингит: */}
            {meningit && <><MeningitSerdceAorta/>
            <br></br></>}
            {/* ГБ: */}
            {gb && <><GbSerdce/>
            <br></br></>}
            {/* Инфаркт миокарда: */}
            {infarctMioc && <><InfarctMiocSerdceAorta/>
            <br></br></>}
            {/* ХИБС: */}
            {hibs && <><HibsSerdceAorta/>
            <br></br></>}
            {/* Сепсис: */}
            {sepsis && <><SepsisSerdceAorta/>
            <br></br></>}
            {/* Миокардит: */}
            {miocardit && <><MiocarditSerdceAorta/>
            <br></br></>}
            {/* Дилатационная кардиомиопатия: */}
            {dilCardio && <><DilCardioSerdceAorta/>
            <br></br></>}
            {/* Гипертрофическая кардиомиопатия: */}
            {gipCardio && <><GipCardioSerdceAorta/>
            <br></br></>}
            {/* Геморрагический инсульт: */}
            {gemInsult && <><GemInsultSerdce/>
            <br></br></>}
            {/* Ишемический инсульт: */}
            {ishInsult && <><IshInsultSerdce/>
            <br></br></>}
            {/* Крупозная пневмония: */}
            {pnevmoniaKrup && <><PnevmoniaKrupSerdce/>
            <br></br></>}
            {/* Очаговая пневмония: */}
            {pnevmoniaOchag && <><PnevmoniaOchagSerdce/>
            <br></br></>}
            {/* Интерстициальная пневмония: */}
            {pnevmoniaInterst && <><PnevmoniaInterstSerdce/>
            <br></br></>}
            {/* ХОБЛ: */}
            {hobl && <><HoblSerdce/>
            <br></br></>}
            {/* Астма: */}
            {astma && <><AstmaSerdce/>
            <br></br></>}
            {/* Панкреатит: */}
            {pancreatit && <><PancreatitSerdceAorta/>
            <br></br></>} 
            {/* О. гломерулонефрит: */}
            {oglomerulo && <><OglomeruloSerdce/>
            <br></br></>}
            {/* Ссадины: */}
            {/* {ssadiny  && <><SsadinyDiagnoz/>
            <br></br></>} */}
             {/* острая сердечно-сосудистая недостаточность: */} 
             {ossn && <><OssnSerdce/>
            <br></br></>}  
             {/* хроническая сердечная недостаточность: */} 
             {hsn && <><HsnSerdce/>
            <br></br></>} 
            {/* Вторичная легочная гипертензия с формированием легочного сердца и последующей легочно-сердечной недостаточностью : */} 
            {lungserdce && <><LungserdceSerdce/>
            <br></br></>}  
            {/* Острая дыхательная недостаточность: */} 
            {odn && <><OdnSerdce/>
            <br></br></>} 
             {/* Механическая асфиксия: */} 
             {asfixia && <><AsfixiaSerdce/>
            <br></br></>} 
            {/* Отек-набухание головного мозга с вариантами вклинения ствола и других структур мозга: */} 
            {vklinenie && <><VklinenieSerdce/>
            <br></br></>} 
             {/* Острая массивная кровопотеря: */} 
             {ostrKrovopot && <><OstrKrovopotSerdce/>
            <br></br></>}    
            {/* Геморрагический шок: */} 
            {gemShok && <><GemShokSerdce/>
            <br></br></>} 
            {/* Травматический шок: */} 
            {travmShok && <><TravmShokSerdce/>
            <br></br></>}  
            {/* Септический шок: */} 
            {itsh && <><ItshSerdce/>
            <br></br></>}
            {/* Острая почечная недостаточность (ОПН): */} 
            {opn && <><OpnSerdce/>
            <br></br></>}
            {/* Хроническая почечная недостаточность (ХПН): */} 
            {hpn && <><HpnSerdce/>
            <br></br></>}      
            {/* Диабетическая кома: */} 
            {diabetcoma && <><DiabetcomaSerdce/>
            <br></br></>}  
        </>
    );
}

export default PatanSerdceAorta;