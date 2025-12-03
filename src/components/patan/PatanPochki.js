import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import GbPochki from '../../patan/gb/GbPochki';
import SaharDiab1Pochki from '../../patan/saharDiab1/SaharDiab1Pochki';
import SaharDiab2Pochki from '../../patan/saharDiab2/SaharDiab2Pochki';
import CovidPochki from '../../patan/covid/CovidPochki';
import GepatBPochki from '../../patan/gepatB/GepatBPochki';
import GepatСPochki from '../../patan/gepatС/GepatСPochki';
import GrippPochki from '../../patan/gripp/GrippPochki';
import TubercPochki from '../../patan/tuberc/TubercPochki';
import GreyvsPochki from '../../patan/greyvs/GreyvsPochki';
import HoshimotoPochki from '../../patan/hoshimoto/HoshimotoPochki';
import OglomeruloPochki from '../../patan/oglomerulo/OglomeruloPochki';
import FeAnemiPochki from '../../patan/feAnemi/FeAnemiPochki';
import PostgemAnemiPochki from '../../patan/postgemAnemi/PostgemAnemiPochki';
import HronPieloPochki from '../../patan/hronPielo/HronPieloPochki';
import IshInsultPochki from '../../patan/ishInsult/IshInsultPochki';
import GemInsultPochki from '../../patan/gemInsult/GemInsultPochki';
import InfarctMiocPochki from '../../patan/infarctMioc/InfarctMiocPochki';
import AlcoPochki from '../../patan/alco/AlcoPochki';
import DilCardioPochki from '../../patan/dilCardio/DilCardioPochki';
import GipCardioPochki from '../../patan/gipCardio/GipCardioPochki';
import MiocarditPochki from '../../patan/miocardit/MiocarditPochki';
import SepsisPochki from '../../patan/sepsis/SepsisPochki';
import HibsPochki from '../../patan/hibs/HibsPochki';
import MkbPochki from '../../patan/mkb/MkbPochki';
import PancreatitPochki from '../../patan/pancreatit/PancreatitPochki';
import PnevmoniaOchagPochki from '../../patan/pnevmoniaOchag/PnevmoniaOchagPochki';
import PnevmoniaKrupPochki from '../../patan/pnevmoniaKrup/PnevmoniaKrupPochki';
import MeningitPochki from '../../patan/meningit/MeningitPochki';
import DifteriaPochki from '../../patan/difteria/DifteriaPochki';
import PeritonitPochki from '../../patan/peritonit/PeritonitPochki';

import DiabetcomaPochki from '../../prichinySmerti/diabetcoma/DiabetcomaPochki';
import OssnPochki from '../../prichinySmerti/ossn/OssnPochki';
import HsnPochki from '../../prichinySmerti/hsn/HsnPochki';
import OdnPochki from '../../prichinySmerti/odn/OdnPochki';
import VklineniePochki from '../../prichinySmerti/vklinenie/VklineniePochki';
import TravmShokPochki from '../../prichinySmerti/travmShok/TravmShokPochki';
import GemShokPochki from '../../prichinySmerti/gemShok/GemShokPochki';
import OstrKrovopotPochki from '../../prichinySmerti/ostrKrovopot/OstrKrovopotPochki';
import LungserdcePochki from '../../prichinySmerti/lungserdce/LungserdcePochki';
import AsfixiaPochki from '../../prichinySmerti/asfixia/AsfixiaPochki';
import ItshPochki from '../../prichinySmerti/itsh/ItshPochki';
import OpnPochki from '../../prichinySmerti/opn/OpnPochki';
import HpnPochki from '../../prichinySmerti/hpn/HpnPochki';
import OperitonitPochki from '../../prichinySmerti/operitonit/OperitonitPochki';

function PatanPochki() {

    //Получаем из хранилища состояния пат изменений:
    const gb = useSelector((state) => state.pat.gb);
    const saharDiab1 = useSelector((state) => state.pat.saharDiab1);
    const saharDiab2 = useSelector((state) => state.pat.saharDiab2);
    const covid = useSelector((state) => state.pat.covid);
    const gepatB = useSelector((state) => state.pat.gepatB);
    const gepatC = useSelector((state) => state.pat.gepatC);
    const gripp = useSelector((state) => state.pat.gripp);
    const tuberc = useSelector((state) => state.pat.tuberc);
    const greyvs = useSelector((state) => state.pat.greyvs);
    const hoshimoto = useSelector((state) => state.pat.hoshimoto);
    const oglomerulo = useSelector((state) => state.pat.oglomerulo);
    const feAnemi = useSelector((state) => state.pat.feAnemi);
    const postgemAnemi = useSelector((state) => state.pat.postgemAnemi);
    const hronPielo = useSelector((state) => state.pat.hronPielo);
    const ishInsult = useSelector((state) => state.pat.ishInsult);
    const gemInsult = useSelector((state) => state.pat.gemInsult);
    const infarctMioc = useSelector((state) => state.pat.infarctMioc);
    const alco = useSelector((state) => state.pat.alco);
    const dilCardio = useSelector((state) => state.pat.dilCardio);
    const gipCardio = useSelector((state) => state.pat.gipCardio);
    const miocardit = useSelector((state) => state.pat.miocardit);
    const sepsis = useSelector((state) => state.pat.sepsis);
    const hibs = useSelector((state) => state.pat.hibs);
    const mkb = useSelector((state) => state.pat.mkb);
    const pancreatit = useSelector((state) => state.pat.pancreatit);
    const pnevmoniaOchag = useSelector((state) => state.pat.pnevmoniaOchag);
    const pnevmoniaKrup = useSelector((state) => state.pat.pnevmoniaKrup);
    const meningit = useSelector((state) => state.pat.meningit);
    const difteria = useSelector((state) => state.pat.difteria);
    const peritonit = useSelector((state) => state.pat.peritonit);
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
    const operitonit = useSelector((state) => state.prichinySmerti.operitonit);

    return (
        <>
            {/* Туберкулез: */}
            {tuberc && <><TubercPochki/>
            <br></br></>}
            {/* Дифтерия: */}
            {difteria && <><DifteriaPochki/>
            <br></br></>}
            {/* Гепатит B: */}
            {gepatB && <><GepatBPochki/>
            <br></br></>}
            {/* Гепатит C: */}
            {gepatC && <><GepatСPochki/>
            <br></br></>}
            {/* Грипп: */}
            {gripp && <><GrippPochki/>
            <br></br></>}
            {/* Covid-19: */}
            {covid && <><CovidPochki/>
            <br></br></>}
            {/* Железодеф анемия: */}
            {feAnemi && <><FeAnemiPochki/>
            <br></br></>} 
            {/* Острая постгеморрагическая анемия: */}
            {postgemAnemi && <><PostgemAnemiPochki/>
            <br></br></>} 
            {/* болезнь Грейвса: */}
            {greyvs && <><GreyvsPochki/>
            <br></br></>}
            {/* Хашимото: */}
            {hoshimoto && <><HoshimotoPochki/>
            <br></br></>}
            {/* Сахар диабет 1: */}
            {saharDiab1 && <><SaharDiab1Pochki/>
            <br></br></>}
            {/* Сахар диабет 2: */}
            {saharDiab2 && <><SaharDiab2Pochki/>
            <br></br></>}
             {/* Хронический алкоголизм: */}
             {alco && <><AlcoPochki/>
            <br></br></>}
            {/* Менингит: */}
            {meningit && <><MeningitPochki/>
            <br></br></>}
            {/* ГБ: */}
            {gb && <><GbPochki/>
            <br></br></>}
            {/* Инфаркт миокарда: */}
            {infarctMioc && <><InfarctMiocPochki/>
            <br></br></>}
            {/* ХИБС: */}
            {hibs && <><HibsPochki/>
            <br></br></>}
            {/* Сепсис: */}
            {sepsis && <><SepsisPochki/>
            <br></br></>}
            {/* Миокардит: */}
            {miocardit && <><MiocarditPochki/>
            <br></br></>}
            {/* Дилатационная кардиомиопатия: */}
            {dilCardio && <><DilCardioPochki/>
            <br></br></>}
            {/* Гипертрофическая кардиомиопатия: */}
            {gipCardio && <><GipCardioPochki/>
            <br></br></>}
            {/* Геморрагический инсульт: */}
            {gemInsult && <><GemInsultPochki/>
            <br></br></>}
            {/* Ишемический инсульт: */}
            {ishInsult && <><IshInsultPochki/>
            <br></br></>}
            {/* Крупозная пневмония: */}
            {pnevmoniaKrup && <><PnevmoniaKrupPochki/>
            <br></br></>}
            {/* Очаговая пневмония: */}
            {pnevmoniaOchag && <><PnevmoniaOchagPochki/>
            <br></br></>}
            {/* Перитонит: */}
            {peritonit && <><PeritonitPochki/>
            <br></br></>} 
            {/* Панкреатит: */}
            {pancreatit && <><PancreatitPochki/>
            <br></br></>} 
            {/* О. гломерулонефрит: */}
            {oglomerulo && <><OglomeruloPochki/>
            <br></br></>}
            {/* Хронический пиелонефрит: */}     
            {hronPielo && <><HronPieloPochki/>
            <br></br></>} 
            {/* МКБ: */}     
            {mkb && <><MkbPochki/>
            <br></br></>}  
            {/* Ссадины: */}
            {/* {ssadiny  && <><SsadinyDiagnoz/>
            <br></br></>} */}
             {/* острая сердечно-сосудистая недостаточность: */} 
             {ossn && <><OssnPochki/>
            <br></br></>} 
             {/* Хроническая сердечная недостаточность: */} 
             {hsn && <><HsnPochki/>
            <br></br></>}
            {/* Вторичная легочная гипертензия с формированием легочного сердца и последующей легочно-сердечной недостаточностью : */} 
            {lungserdce && <><LungserdcePochki/>
            <br></br></>}  
            {/* Острая дыхательная недостаточность: */} 
            {odn && <><OdnPochki/>
            <br></br></>} 
             {/* Механическая асфиксия: */} 
             {asfixia && <><AsfixiaPochki/>
            <br></br></>} 
            {/* Отек-набухание головного мозга с вариантами вклинения ствола и других структур мозга: */} 
            {vklinenie && <><VklineniePochki/>
            <br></br></>} 
             {/* Острая массивная кровопотеря: */} 
             {ostrKrovopot && <><OstrKrovopotPochki/>
            <br></br></>}      
            {/* Геморрагический шок: */} 
            {gemShok && <><GemShokPochki/>
            <br></br></>} 
            {/* Травматический шок: */} 
            {travmShok && <><TravmShokPochki/>
            <br></br></>}  
            {/* Септический шок: */} 
            {itsh && <><ItshPochki/>
            <br></br></>}
            {/* Перитонит: */} 
            {operitonit && <><OperitonitPochki/>
            <br></br></>} 
            {/* Острая почечная недостаточность (ОПН): */} 
            {opn && <><OpnPochki/>
            <br></br></>} 
            {/* Хроническая почечная недостаточность (ХПН): */} 
            {hpn && <><HpnPochki/>
            <br></br></>}  
             {/* Диабетическая кома: */} 
             {diabetcoma && <><DiabetcomaPochki/>
            <br></br></>}  
        </>
    );
}

export default PatanPochki;