import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import VichSpleen from '../../patan/vich/VichSpleen';
import GepatBSpleen from '../../patan/gepatB/GepatBSpleen';
import GepatCSpleen from '../../patan/gepatС/GepatCSpleen';
import SifilisSpleen from '../../patan/sifilis/SifilisSpleen';
import GrippSpleen from '../../patan/gripp/GrippSpleen';
import TubercSpleen from '../../patan/tuberc/TubercSpleen';
import NjakSpleen from '../../patan/njak/NjakSpleen';
import OglomeruloSpleen from '../../patan/oglomerulo/OglomeruloSpleen';
import FeAnemiSpleen from '../../patan/feAnemi/FeAnemiSpleen';
import PostgemAnemiSpleen from '../../patan/postgemAnemi/PostgemAnemiSpleen';
import IshInsultSpleen from '../../patan/ishInsult/IshInsultSpleen';
import GemInsultSpleen from '../../patan/gemInsult/GemInsultSpleen';
import InfarctMiocSpleen from '../../patan/infarctMioc/InfarctMiocSpleen';
import AlcoSpleen from '../../patan/alco/AlcoSpleen';
import DilCardioSpleen from '../../patan/dilCardio/DilCardioSpleen';
import GipCardioSpleen from '../../patan/gipCardio/GipCardioSpleen';
import MiocarditSpleen from '../../patan/miocardit/MiocarditSpleen';
import SepsisSpleen from '../../patan/sepsis/SepsisSpleen';
import HibsSpleen from '../../patan/hibs/HibsSpleen';
import PnevmoniaKrupSpleen from '../../patan/pnevmoniaKrup/PnevmoniaKrupSpleen';
import PeritonitSpleen from '../../patan/peritonit/PeritonitSpleen';
import MeningitSpleen from '../../patan/meningit/MeningitSpleen';
import DifteriaSpleen from '../../patan/difteria/DifteriaSpleen';

import OssnSpleen from '../../prichinySmerti/ossn/OssnSpleen';
import HsnSpleen from '../../prichinySmerti/hsn/HsnSpleen';
import OdnSpleen from '../../prichinySmerti/odn/OdnSpleen';
import VklinenieSpleen from '../../prichinySmerti/vklinenie/VklinenieSpleen';
import TravmShokSpleen from '../../prichinySmerti/travmShok/TravmShokSpleen';
import GemShokSpleen from '../../prichinySmerti/gemShok/GemShokSpleen';
import OstrKrovopotSpleen from '../../prichinySmerti/ostrKrovopot/OstrKrovopotSpleen';
import ItshSpleen from '../../prichinySmerti/itsh/ItshSpleen';
import HpnSpleen from '../../prichinySmerti/hpn/HpnSpleen';
import OperitonitSpleen from '../../prichinySmerti/operitonit/OperitonitSpleen';

function PatanSpleen() {

    //Получаем из хранилища состояния пат изменений:
    const vich = useSelector((state) => state.pat.vich);
    const gepatB = useSelector((state) => state.pat.gepatB);
    const gepatC = useSelector((state) => state.pat.gepatC);
    const sifilis = useSelector((state) => state.pat.sifilis);
    const gripp = useSelector((state) => state.pat.gripp);
    const tuberc = useSelector((state) => state.pat.tuberc);
    const njak = useSelector((state) => state.pat.njak);
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
    const pnevmoniaKrup = useSelector((state) => state.pat.pnevmoniaKrup);
    const peritonit = useSelector((state) => state.pat.peritonit);
    const meningit = useSelector((state) => state.pat.meningit);
    const difteria = useSelector((state) => state.pat.difteria);
    // const ushibRanaNoogr = useSelector((state) => state.dopPovrezhden.ushibRanaNoogr);
    const ossn = useSelector((state) => state.prichinySmerti.ossn);
    const hsn = useSelector((state) => state.prichinySmerti.hsn);
    const odn = useSelector((state) => state.prichinySmerti.odn);
    const vklinenie = useSelector((state) => state.prichinySmerti.vklinenie);
    const travmShok = useSelector((state) => state.prichinySmerti.travmShok);
    const gemShok = useSelector((state) => state.prichinySmerti.gemShok);
    const ostrKrovopot = useSelector((state) => state.prichinySmerti.ostrKrovopot);
    const itsh = useSelector((state) => state.prichinySmerti.itsh);
    const hpn = useSelector((state) => state.prichinySmerti.hpn);
    const operitonit = useSelector((state) => state.prichinySmerti.operitonit);
    
    return (
        <>
            {/* Туберкулез: */}
            {tuberc && <><TubercSpleen/>
            <br></br></>}
            {/* Дифтерия: */}
            {difteria && <><DifteriaSpleen/>
            <br></br></>}
            {/* Сифилис: */}
            {sifilis && <><SifilisSpleen/>
            <br></br></>}
             {/* Гепатит B: */}
             {gepatB && <><GepatBSpleen/>
            <br></br></>}
            {/* Гепатит C: */}
            {gepatC && <><GepatCSpleen/>
            <br></br></>}
            {/* ВИЧ: */}
            {vich && <><VichSpleen/>
            <br></br></>}   
            {/* Грипп: */}
            {gripp && <><GrippSpleen/>
            <br></br></>}
            {/* Железодеф анемия: */}
            {feAnemi && <><FeAnemiSpleen/>
            <br></br></>} 
            {/* Острая постгеморрагическая анемия: */}
            {postgemAnemi && <><PostgemAnemiSpleen/>
            <br></br></>}
             {/* Хронический алкоголизм: */}
             {alco && <><AlcoSpleen/>
            <br></br></>}
            {/* Менингит: */}
            {meningit && <><MeningitSpleen/>
            <br></br></>}
            {/* Инфаркт миокарда: */}
            {infarctMioc && <><InfarctMiocSpleen/>
            <br></br></>}
            {/* ХИБС: */}
            {hibs && <><HibsSpleen/>
            <br></br></>}
             {/* Сепсис: */}
             {sepsis && <><SepsisSpleen/>
            <br></br></>}
            {/* Миокардит: */}
            {miocardit && <><MiocarditSpleen/>
            <br></br></>}
            {/* Дилатационная кардиомиопатия: */}
            {dilCardio && <><DilCardioSpleen/>
            <br></br></>}
            {/* Гипертрофическая кардиомиопатия: */}
            {gipCardio && <><GipCardioSpleen/>
            <br></br></>}
            {/* Геморрагический инсульт: */}
            {gemInsult && <><GemInsultSpleen/>
            <br></br></>}
            {/* Ишемический инсульт: */}
            {ishInsult && <><IshInsultSpleen/>
            <br></br></>} 
            {/* Крупозная пневмония: */}
            {pnevmoniaKrup && <><PnevmoniaKrupSpleen/>
            <br></br></>}
            {/* НЯК: */}
            {njak && <><NjakSpleen/>
            <br></br></>}
            {/* Перитонит: */}
            {peritonit && <><PeritonitSpleen/>
            <br></br></>} 
            {/* О. гломерулонефрит: */}
            {oglomerulo && <><OglomeruloSpleen/>
            <br></br></>}
            {/* Ссадины: */}
            {/* {ssadiny  && <><SsadinyDiagnoz/>
            <br></br></>} */}
            {/* острая сердечно-сосудистая недостаточность: */} 
            {ossn && <><OssnSpleen/>
            <br></br></>}
            {/* Хроническая сердечная недостаточность: */} 
            {hsn && <><HsnSpleen/>
            <br></br></>}   
            {/* Острая дыхательная недостаточность: */} 
            {odn && <><OdnSpleen/>
            <br></br></>} 
            {/* Отек-набухание головного мозга с вариантами вклинения ствола и других структур мозга: */} 
            {vklinenie && <><VklinenieSpleen/>
            <br></br></>} 
             {/* Острая массивная кровопотеря: */} 
             {ostrKrovopot && <><OstrKrovopotSpleen/>
            <br></br></>}   
            {/* Геморрагический шок: */} 
            {gemShok && <><GemShokSpleen/>
            <br></br></>} 
            {/* Травматический шок: */} 
            {travmShok && <><TravmShokSpleen/>
            <br></br></>} 
            {/* Септический шок: */} 
            {itsh && <><ItshSpleen/>
            <br></br></>} 
            {/* Перитонит: */} 
            {operitonit && <><OperitonitSpleen/>
            <br></br></>}  
            {/* Хроническая почечная недостаточность (ХПН): */} 
            {hpn && <><HpnSpleen/>
            <br></br></>}        
        </>
    );
}

export default PatanSpleen;