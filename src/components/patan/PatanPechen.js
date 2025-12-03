import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import SaharDiab1Pechen from '../../patan/saharDiab1/SaharDiab1Pechen';
import SaharDiab2Pechen from '../../patan/saharDiab2/SaharDiab2Pechen';
import VichPechen from '../../patan/vich/VichPechen';
import CovidPechen from '../../patan/covid/CovidPechen';
import GepatBPechen from '../../patan/gepatB/GepatBPechen';
import GepatCPechen from '../../patan/gepatС/GepatCPechen';
import SifilisPechen from '../../patan/sifilis/SifilisPechen';
import TubercPechen from '../../patan/tuberc/TubercPechen';
import KronaPechen from '../../patan/krona/KronaPechen';
import NjakPechen from '../../patan/njak/NjakPechen';
import GreyvsPechen from '../../patan/greyvs/GreyvsPechen';
import HoshimotoPechen from '../../patan/hoshimoto/HoshimotoPechen';
import OglomeruloPechen from '../../patan/oglomerulo/OglomeruloPechen';
import FeAnemiPechen from '../../patan/feAnemi/FeAnemiPechen';
import PostgemAnemiPechen from '../../patan/postgemAnemi/PostgemAnemiPechen';
import IshInsultPechen from '../../patan/ishInsult/IshInsultPechen';
import GemInsultPechen from '../../patan/gemInsult/GemInsultPechen';
import InfarctMiocPechen from '../../patan/infarctMioc/InfarctMiocPechen';
import AlcoPechen from '../../patan/alco/AlcoPechen';
import DilCardioPechen from '../../patan/dilCardio/DilCardioPechen';
import GipCardioPechen from '../../patan/gipCardio/GipCardioPechen';
import MiocarditPechen from '../../patan/miocardit/MiocarditPechen';
import SepsisPechen from '../../patan/sepsis/SepsisPechen';
import HibsPechen from '../../patan/hibs/HibsPechen';
import PancreatitPechen from '../../patan/pancreatit/PancreatitPechen';
import PnevmoniaInterstPechen from '../../patan/pnevmoniaInterst/PnevmoniaInterstPechen';
import PnevmoniaKrupPechen from '../../patan/pnevmoniaKrup/PnevmoniaKrupPechen';
import HoblPechen from '../../patan/hobl/HoblPechen';
import AstmaPechen from '../../patan/astma/AstmaPechen';
import PeritonitPechen from '../../patan/peritonit/PeritonitPechen';
import YazvaPechen from '../../patan/yazva/YazvaPechen';
import MeningitPechen from '../../patan/meningit/MeningitPechen';
import DifteriaPechen from '../../patan/difteria/DifteriaPechen';
import HolecistitPechen from '../../patan/holecistit/HolecistitPechen';

import DiabetcomaPechen from '../../prichinySmerti/diabetcoma/DiabetcomaPechen';
import OssnPechen from '../../prichinySmerti/ossn/OssnPechen';
import HsnPechen from '../../prichinySmerti/hsn/HsnPechen';
import OdnPechen from '../../prichinySmerti/odn/OdnPechen';
import VklineniePechen from '../../prichinySmerti/vklinenie/VklineniePechen';
import TravmShokPechen from '../../prichinySmerti/travmShok/TravmShokPechen';
import GemShokPechen from '../../prichinySmerti/gemShok/GemShokPechen';
import OstrKrovopotPechen from '../../prichinySmerti/ostrKrovopot/OstrKrovopotPechen';
import LungserdcePechen from '../../prichinySmerti/lungserdce/LungserdcePechen';
import AsfixiaPechen from '../../prichinySmerti/asfixia/AsfixiaPechen';
import ItshPechen from '../../prichinySmerti/itsh/ItshPechen';
import OpnPechen from '../../prichinySmerti/opn/OpnPechen';
import HpnPechen from '../../prichinySmerti/hpn/HpnPechen';
import OperitonitPechen from '../../prichinySmerti/operitonit/OperitonitPechen';

function PatanPechen() {

    //Получаем из хранилища состояния пат изменений:
    const saharDiab1 = useSelector((state) => state.pat.saharDiab1);
    const saharDiab2 = useSelector((state) => state.pat.saharDiab2);
    const vich = useSelector((state) => state.pat.vich);
    const covid = useSelector((state) => state.pat.covid);
    const gepatB = useSelector((state) => state.pat.gepatB);
    const gepatC = useSelector((state) => state.pat.gepatC);
    const sifilis = useSelector((state) => state.pat.sifilis);
    const tuberc = useSelector((state) => state.pat.tuberc);
    const krona = useSelector((state) => state.pat.krona);
    const njak = useSelector((state) => state.pat.njak);
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
    const pnevmoniaKrup = useSelector((state) => state.pat.pnevmoniaKrup);
    const hobl = useSelector((state) => state.pat.hobl);
    const astma = useSelector((state) => state.pat.astma);
    const peritonit = useSelector((state) => state.pat.peritonit);
    const yazva = useSelector((state) => state.pat.yazva);
    const meningit = useSelector((state) => state.pat.meningit);
    const difteria = useSelector((state) => state.pat.difteria);
    const holecistit = useSelector((state) => state.pat.holecistit);
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
            {tuberc && <><TubercPechen/>
            <br></br></>}
            {/* Дифтерия: */}
            {difteria && <><DifteriaPechen/>
            <br></br></>}
            {/* Сифилис: */}
            {sifilis && <><SifilisPechen/>
            <br></br></>}
             {/* Гепатит B: */}
             {gepatB && <><GepatBPechen/>
            <br></br></>}
            {/* Гепатит C: */}
            {gepatC && <><GepatCPechen/>
            <br></br></>}
             {/* ВИЧ: */}
             {vich && <><VichPechen/>
            <br></br></>}
            {/* Covid-19: */}
            {covid && <><CovidPechen/>
            <br></br></>}
            {/* Железодеф анемия: */}
            {feAnemi && <><FeAnemiPechen/>
            <br></br></>} 
            {/* Острая постгеморрагическая анемия: */}
            {postgemAnemi && <><PostgemAnemiPechen/>
            <br></br></>} 
            {/* болезнь Грейвса: */}
            {greyvs && <><GreyvsPechen/>
            <br></br></>}
            {/* Хашимото: */}
            {hoshimoto && <><HoshimotoPechen/>
            <br></br></>}
            {/* Сахар диаб 1: */}
            {saharDiab1 && <><SaharDiab1Pechen/>
            <br></br></>}
            {/* Сахар диаб 2: */}
            {saharDiab2 && <><SaharDiab2Pechen/>
            <br></br></>}
             {/* Хронический алкоголизм: */}
             {alco && <><AlcoPechen/>
            <br></br></>}
            {/* Менингит: */}
            {meningit && <><MeningitPechen/>
            <br></br></>}
            {/* Инфаркт миокарда: */}
            {infarctMioc && <><InfarctMiocPechen/>
            <br></br></>}
            {/* ХИБС: */}
            {hibs && <><HibsPechen/>
            <br></br></>}
             {/* Сепсис: */}
             {sepsis && <><SepsisPechen/>
            <br></br></>}
            {/* Миокардит: */}
            {miocardit && <><MiocarditPechen/>
            <br></br></>}
            {/* Дилатационная кардиомиопатия: */}
            {dilCardio && <><DilCardioPechen/>
            <br></br></>}
            {/* Гипертрофическая кардиомиопатия: */}
            {gipCardio && <><GipCardioPechen/>
            <br></br></>}
            {/* Геморрагический инсульт: */}
            {gemInsult && <><GemInsultPechen/>
            <br></br></>}
            {/* Ишемический инсульт: */}
            {ishInsult && <><IshInsultPechen/>
            <br></br></>}
            {/* Крупозная пневмония: */}
            {pnevmoniaKrup && <><PnevmoniaKrupPechen/>
            <br></br></>}
            {/* Интерстициальная пневмония: */}
            {pnevmoniaInterst && <><PnevmoniaInterstPechen/>
            <br></br></>}
            {/* ХОБЛ: */}
            {hobl && <><HoblPechen/>
            <br></br></>}
            {/* Астма: */}
            {astma && <><AstmaPechen/>
            <br></br></>}
             {/* ЯБ: */}
             {yazva && <><YazvaPechen/>
            <br></br></>} 
            {/* Болезнь Крона: */}
            {krona && <><KronaPechen/>
            <br></br></>}
            {/* НЯК: */}
            {njak && <><NjakPechen/>
            <br></br></>}
            {/* Перитонит: */}
            {peritonit && <><PeritonitPechen/>
            <br></br></>} 
            {/* Холецистит: */}
            {holecistit && <><HolecistitPechen/>
            <br></br></>} 
            {/* Панкреатит: */}
            {pancreatit && <><PancreatitPechen/>
            <br></br></>} 
            {/* О. гломерулонефрит: */}
            {oglomerulo && <><OglomeruloPechen/>
            <br></br></>}          
            {/* Ссадины: */}
            {/* {ssadiny  && <><SsadinyDiagnoz/>
            <br></br></>} */}
            {/* острая сердечно-сосудистая недостаточность: */} 
            {ossn && <><OssnPechen/>
            <br></br></>}  
            {/* Хроническая сердечная недостаточность: */} 
            {hsn && <><HsnPechen/>
            <br></br></>}
            {/* Вторичная легочная гипертензия с формированием легочного сердца и последующей легочно-сердечной недостаточностью : */} 
            {lungserdce && <><LungserdcePechen/>
            <br></br></>}  
            {/* Острая дыхательная недостаточность: */} 
            {odn && <><OdnPechen/>
            <br></br></>}  
             {/* Механическая асфиксия: */} 
             {asfixia && <><AsfixiaPechen/>
            <br></br></>} 
            {/* Отек-набухание головного мозга с вариантами вклинения ствола и других структур мозга: */} 
            {vklinenie && <><VklineniePechen/>
            <br></br></>} 
             {/* Острая массивная кровопотеря: */} 
             {ostrKrovopot && <><OstrKrovopotPechen/>
            <br></br></>}   
            {/* Геморрагический шок: */} 
            {gemShok && <><GemShokPechen/>
            <br></br></>}  
            {/* Травматический шок: */} 
            {travmShok && <><TravmShokPechen/>
            <br></br></>}
            {/* Септический шок: */} 
            {itsh && <><ItshPechen/>
            <br></br></>} 
            {/* Перитонит: */} 
            {operitonit && <><OperitonitPechen/>
            <br></br></>} 
            {/* Острая почечная недостаточность (ОПН): */} 
            {opn && <><OpnPechen/>
            <br></br></>} 
            {/* Хроническая почечная недостаточность (ХПН): */} 
            {hpn && <><HpnPechen/>
            <br></br></>}      
            {/* Диабетическая кома: */} 
            {diabetcoma && <><DiabetcomaPechen/>
            <br></br></>} 
        </>
    );
}

export default PatanPechen;