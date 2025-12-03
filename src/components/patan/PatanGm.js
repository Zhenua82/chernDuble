import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import GbGm from '../../patan/gb/GbGm';
import VichGm from '../../patan/vich/VichGm';
import CovidGm from '../../patan/covid/CovidGm';
import SifilisGm from '../../patan/sifilis/SifilisGm';
import GrippGm from '../../patan/gripp/GrippGm';
import TubercGm from '../../patan/tuberc/TubercGm';
import HoshimotoGm from '../../patan/hoshimoto/HoshimotoGm';
import GemInsultGm from '../../patan/gemInsult/GemInsultGm';
import OglomeruloGm from '../../patan/oglomerulo/OglomeruloGm';
import PostgemAnemiGm from '../../patan/postgemAnemi/PostgemAnemiGm';
import IshInsultGm from '../../patan/ishInsult/IshInsultGm';
import InfarctMiocGm from '../../patan/infarctMioc/InfarctMiocGm';
import AlcoGm from '../../patan/alco/AlcoGm';
import DilCardioGm from '../../patan/dilCardio/DilCardioGm';
import GipCardioGm from '../../patan/gipCardio/GipCardioGm';
import MiocarditGm from '../../patan/miocardit/MiocarditGm';
import SepsisGm from '../../patan/sepsis/SepsisGm';
import HibsGm from '../../patan/hibs/HibsGm';
import PnevmoniaOchagGm from '../../patan/pnevmoniaOchag/PnevmoniaOchagGm';
import PnevmoniaKrupGm from '../../patan/pnevmoniaKrup/PnevmoniaKrupGm';
import MeningitGm from '../../patan/meningit/MeningitGm';
import DifteriaGm from '../../patan/difteria/DifteriaGm';
import RsGm from '../../patan/rs/RsGm';

import DiabetcomaGm from '../../prichinySmerti/diabetcoma/DiabetcomaGm';
import OssnGm from '../../prichinySmerti/ossn/OssnGm';
import HsnGm from '../../prichinySmerti/hsn/HsnGm';
import OdnGm from '../../prichinySmerti/odn/OdnGm';
import VklinenieGm from '../../prichinySmerti/vklinenie/VklinenieGm';
import TravmShokGm from '../../prichinySmerti/travmShok/TravmShokGm';
import GemShokGm from '../../prichinySmerti/gemShok/GemShokGm';
import OstrKrovopotGm from '../../prichinySmerti/ostrKrovopot/OstrKrovopotGm';
import LungserdceGm from '../../prichinySmerti/lungserdce/LungserdceGm';
import AsfixiaGm from '../../prichinySmerti/asfixia/AsfixiaGm';
import ItshGm from '../../prichinySmerti/itsh/ItshGm';
import OpnGm from '../../prichinySmerti/opn/OpnGm';
import HpnGm from '../../prichinySmerti/hpn/HpnGm';

function PatanGm() {

    //Получаем из хранилища состояния пат изменений:
    const gb = useSelector((state) => state.pat.gb);
    const vich = useSelector((state) => state.pat.vich);
    const covid = useSelector((state) => state.pat.covid);
    const sifilis = useSelector((state) => state.pat.sifilis);
    const gripp = useSelector((state) => state.pat.gripp);
    const tuberc = useSelector((state) => state.pat.tuberc);
    const hoshimoto = useSelector((state) => state.pat.hoshimoto);
    const gemInsult = useSelector((state) => state.pat.gemInsult);
    const oglomerulo = useSelector((state) => state.pat.oglomerulo);
    const postgemAnemi = useSelector((state) => state.pat.postgemAnemi);
    const ishInsult = useSelector((state) => state.pat.ishInsult);
    const infarctMioc = useSelector((state) => state.pat.infarctMioc);
    const alco = useSelector((state) => state.pat.alco);
    const dilCardio = useSelector((state) => state.pat.dilCardio);
    const gipCardio = useSelector((state) => state.pat.gipCardio);
    const miocardit = useSelector((state) => state.pat.miocardit);
    const sepsis = useSelector((state) => state.pat.sepsis);
    const hibs = useSelector((state) => state.pat.hibs);
    const pnevmoniaOchag = useSelector((state) => state.pat.pnevmoniaOchag);
    const pnevmoniaKrup = useSelector((state) => state.pat.pnevmoniaKrup);
    const meningit = useSelector((state) => state.pat.meningit);
    const difteria = useSelector((state) => state.pat.difteria);
    const rs = useSelector((state) => state.pat.rs);
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
            {tuberc && <><TubercGm/>
            <br></br></>}
            {/* Дифтерия: */}
            {difteria && <><DifteriaGm/>
            <br></br></>}
             {/* Сифилис: */}
             {sifilis && <><SifilisGm/>
            <br></br></>}
            {/* ВИЧ: */}
            {vich && <><VichGm/>
            <br></br></>}
            {/* Грипп: */}
            {gripp && <><GrippGm/>
            <br></br></>}
             {/* Covid-19: */}
             {covid && <><CovidGm/>
            <br></br></>}
            {/* Острая постгеморрагическая анемия: */}
            {postgemAnemi && <><PostgemAnemiGm/>
            <br></br></>} 
             {/* Хашимото: */}
             {hoshimoto && <><HoshimotoGm/>
            <br></br></>}
             {/* Хронический алкоголизм: */}
             {alco && <><AlcoGm/>
            <br></br></>}
            {/* Менингит: */}
            {meningit && <><MeningitGm/>
            <br></br></>}
            {/* Рассеянный склероз: */}
            {rs && <><RsGm/>
            <br></br></>}
            {/* ГБ: */}
            {gb && <><GbGm/>
            <br></br></>}  
            {/* Инфаркт миокарда: */}
            {infarctMioc && <><InfarctMiocGm/>
            <br></br></>} 
            {/* ХИБС: */}
            {hibs && <><HibsGm/>
            <br></br></>}
            {/* Сепсис: */}
            {sepsis && <><SepsisGm/>
            <br></br></>}
            {/* Миокардит: */}
            {miocardit && <><MiocarditGm/>
            <br></br></>}
            {/* Дилатационная кардиомиопатия: */}
            {dilCardio && <><DilCardioGm/>
            <br></br></>} 
            {/* Гипертрофическая кардиомиопатия: */}
            {gipCardio && <><GipCardioGm/>
            <br></br></>}      
            {/* Геморрагический инсульт: */}
            {gemInsult && <><GemInsultGm/>
            <br></br></>} 
            {/* Ишемический инсульт: */}
            {ishInsult && <><IshInsultGm/>
            <br></br></>} 
            {/* Крупозная пневмония: */}
            {pnevmoniaKrup && <><PnevmoniaKrupGm/>
            <br></br></>}
            {/* Очаговая пневмония: */}
            {pnevmoniaOchag && <><PnevmoniaOchagGm/>
            <br></br></>}        
            {/* О. гломерулонефрит: */}
            {oglomerulo && <><OglomeruloGm/>
            <br></br></>}          
            {/* Ссадины: */}
            {/* {ssadiny  && <><SsadinyDiagnoz/>
            <br></br></>} */}
            {/* острая сердечно-сосудистая недостаточность: */} 
            {ossn && <><OssnGm/>
            <br></br></>}  
            {/* Хроническая сердечная недостаточность: */} 
            {hsn && <><HsnGm/>
            <br></br></>}
            {/* Вторичная легочная гипертензия с формированием легочного сердца и последующей легочно-сердечной недостаточностью : */} 
            {lungserdce && <><LungserdceGm/>
            <br></br></>}  
            {/* Острая дыхательная недостаточность: */} 
            {odn && <><OdnGm/>
            <br></br></>} 
             {/* Механическая асфиксия: */} 
             {asfixia && <><AsfixiaGm/>
            <br></br></>}  
             {/* Отек-набухание головного мозга с вариантами вклинения ствола и других структур мозга: */} 
             {vklinenie && <><VklinenieGm/>
            <br></br></>} 
             {/* Острая массивная кровопотеря: */} 
             {ostrKrovopot && <><OstrKrovopotGm/>
            <br></br></>}  
            {/* Геморрагический шок: */} 
            {gemShok && <><GemShokGm/>
            <br></br></>} 
             {/* Травматический шок: */} 
             {travmShok && <><TravmShokGm/>
            <br></br></>} 
            {/* Септический шок: */} 
            {itsh && <><ItshGm/>
            <br></br></>}  
            {/* Острая почечная недостаточность (ОПН): */} 
            {opn && <><OpnGm/>
            <br></br></>} 
            {/* Хроническая почечная недостаточность (ХПН): */} 
            {hpn && <><HpnGm/>
            <br></br></>}         
            {/* Диабетическая кома: */} 
            {diabetcoma && <><DiabetcomaGm/>
            <br></br></>}  
        </>
    );
}

export default PatanGm;