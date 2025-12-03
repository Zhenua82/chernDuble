import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import TubercKishki from '../../patan/tuberc/TubercKishki';
import KronaKishki from '../../patan/krona/KronaKishki';
import NjakKishki from '../../patan/njak/NjakKishki';
import FeAnemiKishki from '../../patan/feAnemi/FeAnemiKishki';
import PostgemAnemiKishki from '../../patan/postgemAnemi/PostgemAnemiKishki';
import IshInsultKishki from '../../patan/ishInsult/IshInsultKishki';
import GemInsultKishki from '../../patan/gemInsult/GemInsultKishki';
import InfarctMiocKishki from '../../patan/infarctMioc/InfarctMiocKishki';
import AlcoKishki from '../../patan/alco/AlcoKishki';
import MiocarditKishki from '../../patan/miocardit/MiocarditKishki';
import SepsisKishki from '../../patan/sepsis/SepsisKishki';
import HibsKishki from '../../patan/hibs/HibsKishki';
import PancreatitKishki from '../../patan/pancreatit/PancreatitKishki';
import PnevmoniaKrupKishki from '../../patan/pnevmoniaKrup/PnevmoniaKrupKishki';
import YazvaKishki from '../../patan/yazva/YazvaKishki';
import HolecistitKishki from '../../patan/holecistit/HolecistitKishki';

import TravmShokKishki from '../../prichinySmerti/travmShok/TravmShokKishki';
import GemShokKishki from '../../prichinySmerti/gemShok/GemShokKishki';
import OstrKrovopotKishki from '../../prichinySmerti/ostrKrovopot/OstrKrovopotKishki';
import ItshKishki from '../../prichinySmerti/itsh/ItshKishki';
import OpnKishki from '../../prichinySmerti/opn/OpnKishki';
import HpnKishki from '../../prichinySmerti/hpn/HpnKishki';

function PatanKishki() {

    //Получаем из хранилища состояния пат изменений:
    
    const tuberc = useSelector((state) => state.pat.tuberc);
    const krona = useSelector((state) => state.pat.krona);
    const njak = useSelector((state) => state.pat.njak);
    const feAnemi = useSelector((state) => state.pat.feAnemi);
    const postgemAnemi = useSelector((state) => state.pat.postgemAnemi);
    const ishInsult = useSelector((state) => state.pat.ishInsult);
    const gemInsult = useSelector((state) => state.pat.gemInsult);
    const infarctMioc = useSelector((state) => state.pat.infarctMioc);
    const alco = useSelector((state) => state.pat.alco);
    const miocardit = useSelector((state) => state.pat.miocardit);
    const sepsis = useSelector((state) => state.pat.sepsis);
    const hibs = useSelector((state) => state.pat.hibs);
    const pancreatit = useSelector((state) => state.pat.pancreatit);
    const pnevmoniaKrup = useSelector((state) => state.pat.pnevmoniaKrup);
    const yazva = useSelector((state) => state.pat.yazva);
    const holecistit = useSelector((state) => state.pat.holecistit);
    // const ushibRanaNoogr = useSelector((state) => state.dopPovrezhden.ushibRanaNoogr);
    const travmShok = useSelector((state) => state.prichinySmerti.travmShok);
    const gemShok = useSelector((state) => state.prichinySmerti.gemShok);
    const ostrKrovopot = useSelector((state) => state.prichinySmerti.ostrKrovopot);
    const itsh = useSelector((state) => state.prichinySmerti.itsh);
    const opn = useSelector((state) => state.prichinySmerti.opn);
    const hpn = useSelector((state) => state.prichinySmerti.hpn);
    
    return (
        <>
            {/* Туберкулез: */}
            {tuberc && <><TubercKishki/>
            <br></br></>}
            {/* Железодеф анемия: */}
            {feAnemi && <><FeAnemiKishki/>
            <br></br></>} 
            {/* Острая постгеморрагическая анемия: */}
            {postgemAnemi && <><PostgemAnemiKishki/>
            <br></br></>}
             {/* Хронический алкоголизм: */}
             {alco && <><AlcoKishki/>
            <br></br></>}
            {/* Инфаркт миокарда: */}
            {infarctMioc && <><InfarctMiocKishki/>
            <br></br></>}
            {/* ХИБС: */}
            {hibs && <><HibsKishki/>
            <br></br></>}
             {/* Сепсис: */}
             {sepsis && <><SepsisKishki/>
            <br></br></>}
            {/* Миокардит: */}
            {miocardit && <><MiocarditKishki/>
            <br></br></>}
            {/* Геморрагический инсульт: */}
            {gemInsult && <><GemInsultKishki/>
            <br></br></>} 
            {/* Ишемический инсульт: */}
            {ishInsult && <><IshInsultKishki/>
            <br></br></>}
            {/* Крупозная пневмония: */}
            {pnevmoniaKrup && <><PnevmoniaKrupKishki/>
            <br></br></>}
             {/* ЯБ: */}
             {yazva && <><YazvaKishki/>
            <br></br></>} 
            {/* болезнь Крона: */}
            {krona && <><KronaKishki/>
            <br></br></>}
            {/* НЯК: */}
            {njak && <><NjakKishki/>
            <br></br></>}
            {/* Холецистит: */}
            {holecistit && <><HolecistitKishki/>
            <br></br></>} 
            {/* Панкреатит: */}
            {pancreatit && <><PancreatitKishki/>
            <br></br></>} 
            {/* Ссадины: */}
            {/* {ssadiny  && <><SsadinyDiagnoz/>
            <br></br></>} */}
             {/* Острая массивная кровопотеря: */} 
             {ostrKrovopot && <><OstrKrovopotKishki/>
            <br></br></>}  
            {/* Геморрагический шок: */} 
            {gemShok && <><GemShokKishki/>
            <br></br></>} 
            {/* Травматический шок: */} 
            {travmShok && <><TravmShokKishki/>
            <br></br></>} 
            {/* Септический шок: */} 
            {itsh && <><ItshKishki/>
            <br></br></>}
            {/* Острая почечная недостаточность (ОПН): */} 
            {opn && <><OpnKishki/>
            <br></br></>}
            {/* Хроническая почечная недостаточность (ХПН): */} 
            {hpn && <><HpnKishki/>
            <br></br></>}  
        </>
    );
}

export default PatanKishki;