import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import VichLungs from '../../patan/vich/VichLungs';
import CovidLungs from '../../patan/covid/CovidLungs';
import SifilisLungs from '../../patan/sifilis/SifilisLungs';
import GrippLungs from '../../patan/gripp/GrippLungs';
import TubercLungs from '../../patan/tuberc/TubercLungs';
import HoshimotoLungs from '../../patan/hoshimoto/HoshimotoLungs';
import OglomeruloLungs from '../../patan/oglomerulo/OglomeruloLungs';
import PostgemAnemiLungs from '../../patan/postgemAnemi/PostgemAnemiLungs';
import IshInsultLungs from '../../patan/ishInsult/IshInsultLungs';
import GemInsultLungs from '../../patan/gemInsult/GemInsultLungs';
import InfarctMiocLungs from '../../patan/infarctMioc/InfarctMiocLungs';
import AlcoLungs from '../../patan/alco/AlcoLungs';
import DilCardioLungs from '../../patan/dilCardio/DilCardioLungs';
import GipCardioLungs from '../../patan/gipCardio/GipCardioLungs';
import MiocarditLungs from '../../patan/miocardit/MiocarditLungs';
import SepsisLungs from '../../patan/sepsis/SepsisLungs';
import HibsLungs from '../../patan/hibs/HibsLungs';
import PancreatitLungs from '../../patan/pancreatit/PancreatitLungs';
import PnevmoniaInterstLungs from '../../patan/pnevmoniaInterst/PnevmoniaInterstLungs';
import PnevmoniaOchagLungs from '../../patan/pnevmoniaOchag/PnevmoniaOchagLungs';
import PnevmoniaKrupLungs from '../../patan/pnevmoniaKrup/PnevmoniaKrupLungs';
import HoblLungs from '../../patan/hobl/HoblLungs';
import AstmaLungs from '../../patan/astma/AstmaLungs';
import PeritonitLungs from '../../patan/peritonit/PeritonitLungs';
import MeningitLungs from '../../patan/meningit/MeningitLungs';
import DifteriaLungs from '../../patan/difteria/DifteriaLungs';

import DiabetcomaLungs from '../../prichinySmerti/diabetcoma/DiabetcomaLungs';
import OssnLungs from '../../prichinySmerti/ossn/OssnLungs';
import HsnLungs from '../../prichinySmerti/hsn/HsnLungs';
import OdnLungs from '../../prichinySmerti/odn/OdnLungs';
import OrdsLungs from '../../prichinySmerti/ords/OrdsLungs';
import VklinenieLungs from '../../prichinySmerti/vklinenie/VklinenieLungs';
import TravmShokLungs from '../../prichinySmerti/travmShok/TravmShokLungs';
import GemShokLungs from '../../prichinySmerti/gemShok/GemShokLungs';
import OstrKrovopotLungs from '../../prichinySmerti/ostrKrovopot/OstrKrovopotLungs';
import LungserdceLungs from '../../prichinySmerti/lungserdce/LungserdceLungs';
import AsfixiaLungs from '../../prichinySmerti/asfixia/AsfixiaLungs';
import ItshLungs from '../../prichinySmerti/itsh/ItshLungs';
import OpnLungs from '../../prichinySmerti/opn/OpnLungs';
import HpnLungs from '../../prichinySmerti/hpn/HpnLungs';
import OperitonitLungs from '../../prichinySmerti/operitonit/OperitonitLungs';

function PatanLungs() {

    //Получаем из хранилища состояния пат изменений:
    const vich = useSelector((state) => state.pat.vich);
    const covid = useSelector((state) => state.pat.covid);
    const sifilis = useSelector((state) => state.pat.sifilis);
    const gripp = useSelector((state) => state.pat.gripp);
    const tuberc = useSelector((state) => state.pat.tuberc);
    const hoshimoto = useSelector((state) => state.pat.hoshimoto);
    const oglomerulo = useSelector((state) => state.pat.oglomerulo);
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
    const peritonit = useSelector((state) => state.pat.peritonit);
    const meningit = useSelector((state) => state.pat.meningit);
    const difteria = useSelector((state) => state.pat.difteria);
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
            {/* Туберкулез */}
            {tuberc && <><TubercLungs/>
            <br></br></>}
            {/* Дифтерия: */}
            {difteria && <><DifteriaLungs/>
            <br></br></>}
             {/* Сифилис */}
             {sifilis && <><SifilisLungs/>
            <br></br></>}
            {/* ВИЧ: */}
            {vich && <><VichLungs/>
            <br></br></>}
            {/* Грипп */}
            {gripp && <><GrippLungs/>
            <br></br></>}
            {/* Covid-19 */}
            {covid && <><CovidLungs/>
            <br></br></>}
            {/* Острая постгеморрагическая анемия: */}
            {postgemAnemi && <><PostgemAnemiLungs/>
            <br></br></>} 
            {/* Хашимото */}
            {hoshimoto && <><HoshimotoLungs/>
            <br></br></>} 
             {/* Хронический алкоголизм: */}
             {alco && <><AlcoLungs/>
            <br></br></>}
            {/* Менингит: */}
            {meningit && <><MeningitLungs/>
            <br></br></>}
            {/* Инфаркт миокарда: */}
            {infarctMioc && <><InfarctMiocLungs/>
            <br></br></>}
            {/* ХИБС: */}
            {hibs && <><HibsLungs/>
            <br></br></>}
            {/* Сепсис: */}
            {sepsis && <><SepsisLungs/>
            <br></br></>}
            {/* Миокардит: */}
            {miocardit && <><MiocarditLungs/>
            <br></br></>}
            {/* Дилатационная кардиомиопатия: */}
            {dilCardio && <><DilCardioLungs/>
            <br></br></>}
            {/* Гипертрофическая кардиомиопатия: */}
            {gipCardio && <><GipCardioLungs/>
            <br></br></>}
            {/* Геморрагический инсульт: */}
            {gemInsult && <><GemInsultLungs/>
            <br></br></>} 
            {/* Ишемический инсульт: */}
            {ishInsult && <><IshInsultLungs/>
            <br></br></>}
            {/* Крупозная пневмония: */}
            {pnevmoniaKrup && <><PnevmoniaKrupLungs/>
            <br></br></>}
            {/* Очаговая пневмония: */}
            {pnevmoniaOchag && <><PnevmoniaOchagLungs/>
            <br></br></>}
            {/* Интерстициальная пневмония: */}
            {pnevmoniaInterst && <><PnevmoniaInterstLungs/>
            <br></br></>}
            {/* ХОБЛ: */}
            {hobl && <><HoblLungs/>
            <br></br></>}
            {/* Астма: */}
            {astma && <><AstmaLungs/>
            <br></br></>}
            {/* Перитонит: */}
            {peritonit && <><PeritonitLungs/>
            <br></br></>} 
            {/* Панкреатит: */}
            {pancreatit && <><PancreatitLungs/>
            <br></br></>} 
            {/* О. гломерулонефрит */}
            {oglomerulo && <><OglomeruloLungs/>
            <br></br></>}  
            {/* Ссадины: */}
            {/* {ssadiny  && <><SsadinyDiagnoz/>
            <br></br></>} */}
              {/* острая сердечно-сосудистая недостаточность: */} 
            {ossn && <><OssnLungs/>
            <br></br></>}  
              {/* Хроническая сердечная недостаточность: */} 
            {hsn && <><HsnLungs/>
            <br></br></>} 
            {/* Вторичная легочная гипертензия с формированием легочного сердца и последующей легочно-сердечной недостаточностью : */} 
            {lungserdce && <><LungserdceLungs/>
            <br></br></>}  
            {/* Острая дыхательная недостаточность: */} 
            {odn && <><OdnLungs/>
            <br></br></>}
             {/* Острый респираторный дистресс-синдром: */} 
             {ords && <><OrdsLungs/>
            <br></br></>}
             {/* Механическая асфиксия: */} 
             {asfixia && <><AsfixiaLungs/>
            <br></br></>} 
            {/* Отек-набухание головного мозга с вариантами вклинения ствола и других структур мозга: */} 
            {vklinenie && <><VklinenieLungs/>
            <br></br></>} 
             {/* Острая массивная кровопотеря: */} 
             {ostrKrovopot && <><OstrKrovopotLungs/>
            <br></br></>}  
            {/* Геморрагический шок: */} 
            {gemShok && <><GemShokLungs/>
            <br></br></>}  
            {/* Травматический шок: */} 
            {travmShok && <><TravmShokLungs/>
            <br></br></>} 
            {/* Септический шок: */} 
            {itsh && <><ItshLungs/>
            <br></br></>} 
            {/* Перитонит: */} 
            {operitonit && <><OperitonitLungs/>
            <br></br></>} 
            {/* Острая почечная недостаточность (ОПН): */} 
            {opn && <><OpnLungs/>
            <br></br></>}
            {/* Хроническая почечная недостаточность (ХПН): */} 
            {hpn && <><HpnLungs/>
            <br></br></>}            
             {/* Диабетическая кома: */} 
             {diabetcoma && <><DiabetcomaLungs/>
            <br></br></>}  
        </>
    );
}

export default PatanLungs;