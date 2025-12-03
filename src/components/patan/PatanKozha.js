import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import SaharDiab1Kozha from '../../patan/saharDiab1/SaharDiab1Kozha';
import SaharDiab2Kozha from '../../patan/saharDiab2/SaharDiab2Kozha';
import VichKozha from '../../patan/vich/VichKozha';
import GepatBKozha from '../../patan/gepatB/GepatBKozha';
import GepatCKozha from '../../patan/gepatС/GepatCKozha';
import SifilisKozha from '../../patan/sifilis/SifilisKozha';
import GrippKozha from '../../patan/gripp/GrippKozha';
import TubercKozha from '../../patan/tuberc/TubercKozha';
import GreyvsKozha from '../../patan/greyvs/GreyvsKozha';
import HoshimotoKozha from '../../patan/hoshimoto/HoshimotoKozha';
import OglomeruloKozha from '../../patan/oglomerulo/OglomeruloKozha';
import FeAnemiKozha from '../../patan/feAnemi/FeAnemiKozha';
import PostgemAnemiKozha from '../../patan/postgemAnemi/PostgemAnemiKozha';
import HronPieloKozha from '../../patan/hronPielo/HronPieloKozha';
import IshInsultKozha from '../../patan/ishInsult/IshInsultKozha';
import GemInsultKozha from '../../patan/gemInsult/GemInsultKozha';
import InfarctMiocKozha from '../../patan/infarctMioc/InfarctMiocKozha';
import AlcoKozha from '../../patan/alco/AlcoKozha';
import DilCardioKozha from '../../patan/dilCardio/DilCardioKozha';
import GipCardioKozha from '../../patan/gipCardio/GipCardioKozha';
import MiocarditKozha from '../../patan/miocardit/MiocarditKozha';
import SepsisKozha from '../../patan/sepsis/SepsisKozha';
import HibsKozha from '../../patan/hibs/HibsKozha';
import MkbKozha from '../../patan/mkb/MkbKozha';
import PancreatitKozha from '../../patan/pancreatit/PancreatitKozha';
import PnevmoniaInterstKozha from '../../patan/pnevmoniaInterst/PnevmoniaInterstKozha';
import PnevmoniaOchagKozha from '../../patan/pnevmoniaOchag/PnevmoniaOchagKozha';
import PnevmoniaKrupKozha from '../../patan/pnevmoniaKrup/PnevmoniaKrupKozha';
import HoblKozha from '../../patan/hobl/HoblKozha';
import AstmaKozha from '../../patan/astma/AstmaKozha';
import PeritonitKozha from '../../patan/peritonit/PeritonitKozha';
import YazvaKozha from '../../patan/yazva/YazvaKozha';
import MeningitKozha from '../../patan/meningit/MeningitKozha';
import DifteriaKozha from '../../patan/difteria/DifteriaKozha';
import HolecistitKozha from '../../patan/holecistit/HolecistitKozha';
import CovidKozha from '../../patan/covid/CovidKozha';
import GbKozha from '../../patan/gb/GbKozha';
import NjakKozha from '../../patan/njak/NjakKozha';
import KronaKozha from '../../patan/krona/KronaKozha';
import RsKozha from '../../patan/rs/RsKozha';

import DiabetcomaKozha from '../../prichinySmerti/diabetcoma/DiabetcomaKozha';
import OssnKozha from '../../prichinySmerti/ossn/OssnKozha';
import HsnKozha from '../../prichinySmerti/hsn/HsnKozha';
import OdnKozha from '../../prichinySmerti/odn/OdnKozha';
import OrdsKozha from '../../prichinySmerti/ords/OrdsKozha';
import VklinenieKozha from '../../prichinySmerti/vklinenie/VklinenieKozha';
import TravmShokKozha from '../../prichinySmerti/travmShok/TravmShokKozha';
import GemShokKozha from '../../prichinySmerti/gemShok/GemShokKozha';
import OstrKrovopotKozha from '../../prichinySmerti/ostrKrovopot/OstrKrovopotKozha';
import LungserdceKozha from '../../prichinySmerti/lungserdce/LungserdceKozha';
import AsfixiaKozha from '../../prichinySmerti/asfixia/AsfixiaKozha';
import ItshKozha from '../../prichinySmerti/itsh/ItshKozha';
import OpnKozha from '../../prichinySmerti/opn/OpnKozha';
import HpnKozha from '../../prichinySmerti/hpn/HpnKozha';
import OperitonitKozha from '../../prichinySmerti/operitonit/OperitonitKozha';

function PatanKozha() {

    //Получаем из хранилища состояния пат изменений:
    const saharDiab1 = useSelector((state) => state.pat.saharDiab1);
    const saharDiab2 = useSelector((state) => state.pat.saharDiab2);
    const vich = useSelector((state) => state.pat.vich);
    const gepatB = useSelector((state) => state.pat.gepatB);
    const gepatC = useSelector((state) => state.pat.gepatC);
    const sifilis = useSelector((state) => state.pat.sifilis);
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
    const covid = useSelector((state) => state.pat.covid);
    const gb = useSelector((state) => state.pat.gb);
    const njak = useSelector((state) => state.pat.njak);
    const krona = useSelector((state) => state.pat.krona);
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
            {tuberc && <><TubercKozha/>
            <br></br></>}
            {/* Дифтерия: */}
            {difteria && <><DifteriaKozha/>
            <br></br></>}
            {/* Сифилис: */}
            {sifilis && <><SifilisKozha/>
            <br></br></>}
            {/* Гепатит B: */}
            {gepatB && <><GepatBKozha/>
            <br></br></>}
            {/* Гепатит C: */}
            {gepatC && <><GepatCKozha/>
            <br></br></>}
            {/* ВИЧ: */}
            {vich && <><VichKozha/>
            <br></br></>}
            {/* Грипп: */}
            {gripp && <><GrippKozha/>
            <br></br></>}
            {/* Covid-19: */}
            {covid && <><CovidKozha/>
            <br></br></>} 
            {/* Железодеф анемия: */}
            {feAnemi && <><FeAnemiKozha/>
            <br></br></>} 
            {/* Острая постгеморрагическая анемия: */}
            {postgemAnemi && <><PostgemAnemiKozha/>
            <br></br></>} 
            {/* болезнь Грейвса: */}
            {greyvs && <><GreyvsKozha/>
            <br></br></>}
            {/* Хошимото: */}
            {hoshimoto && <><HoshimotoKozha/>
            <br></br></>}
            {/* Сахар диаб 1: */}
            {saharDiab1 && <><SaharDiab1Kozha/>
            <br></br></>}
            {/* Сахар диаб 2: */}
            {saharDiab2 && <><SaharDiab2Kozha/>
            <br></br></>}
             {/* Хронический алкоголизм: */}
             {alco && <><AlcoKozha/>
            <br></br></>}
            {/* Менингит: */}
            {meningit && <><MeningitKozha/>
            <br></br></>}
            {/* Рассеянный склероз: */}
            {rs && <><RsKozha/>
            <br></br></>}
            {/* ГБ: */}
            {gb && <><GbKozha/>
            <br></br></>}
            {/* Инфаркт миокарда: */}
            {infarctMioc && <><InfarctMiocKozha/>
            <br></br></>}
            {/* ХИБС: */}
            {hibs && <><HibsKozha/>
            <br></br></>}
            {/* Сепсис: */}
            {sepsis && <><SepsisKozha/>
            <br></br></>}
            {/* Миокардит: */}
            {miocardit && <><MiocarditKozha/>
            <br></br></>}
            {/* Дилатационная кардиомиопатия: */}
            {dilCardio && <><DilCardioKozha/>
            <br></br></>}
            {/* Гипертрофическая кардиомиопатия: */}
            {gipCardio && <><GipCardioKozha/>
            <br></br></>}
            {/* Геморрагический инсульт: */}
            {gemInsult && <><GemInsultKozha/>
            <br></br></>}
            {/* Ишемический инсульт: */}
            {ishInsult && <><IshInsultKozha/>
            <br></br></>}
            {/* Крупозная пневмония: */}
            {pnevmoniaKrup && <><PnevmoniaKrupKozha/>
            <br></br></>}
            {/* Очаговая пневмония: */}
            {pnevmoniaOchag && <><PnevmoniaOchagKozha/>
            <br></br></>}
            {/* Интерстициальная пневмония: */}
            {pnevmoniaInterst && <><PnevmoniaInterstKozha/>
            <br></br></>}
            {/* ХОБЛ: */}
            {hobl && <><HoblKozha/>
            <br></br></>}
            {/* Астма: */}
            {astma && <><AstmaKozha/>
            <br></br></>}
             {/* ЯБ: */}
             {yazva && <><YazvaKozha/>
            <br></br></>} 
             {/* болезнь Крона: */}
             {krona && <><KronaKozha/>
            <br></br></>} 
            {/* НЯК: */}
            {njak && <><NjakKozha/>
            <br></br></>}
            {/* Перитонит: */}
            {peritonit && <><PeritonitKozha/>
            <br></br></>} 
            {/* Холецистит: */}
            {holecistit && <><HolecistitKozha/>
            <br></br></>} 
            {/* Панкреатит: */}
            {pancreatit && <><PancreatitKozha/>
            <br></br></>} 
            {/* О. гломерулонефрит: */}
            {oglomerulo && <><OglomeruloKozha/>
            <br></br></>}
            {/* Хронический пиелонефрит: */}     
            {hronPielo && <><HronPieloKozha/>
            <br></br></>}  
            {/* МКБ: */}     
            {mkb && <><MkbKozha/>
            <br></br></>} 
            {/* Ссадины: */}
            {/* {ssadiny  && <><SsadinyDiagnoz/>
            <br></br></>} */}
            {/* острая сердечно-сосудистая недостаточность: */} 
            {ossn && <><OssnKozha/>
            <br></br></>}  
            {/* Хроническая сердечная недостаточность: */} 
            {hsn && <><HsnKozha/>
            <br></br></>} 
            {/* Вторичная легочная гипертензия с формированием легочного сердца и последующей легочно-сердечной недостаточностью : */} 
            {lungserdce && <><LungserdceKozha/>
            <br></br></>}  
            {/* Острая дыхательная недостаточность: */} 
            {odn && <><OdnKozha/>
            <br></br></>}  
             {/* Острый респираторный дистресс-синдром: */} 
             {ords && <><OrdsKozha/>
            <br></br></>}
             {/* Механическая асфиксия: */} 
             {asfixia && <><AsfixiaKozha/>
            <br></br></>} 
            {/* Отек-набухание головного мозга с вариантами вклинения ствола и других структур мозга: */} 
            {vklinenie && <><VklinenieKozha/>
            <br></br></>} 
             {/* Острая массивная кровопотеря: */} 
             {ostrKrovopot && <><OstrKrovopotKozha/>
            <br></br></>}     
            {/* Геморрагический шок: */} 
            {gemShok && <><GemShokKozha/>
            <br></br></>} 
            {/* Травматический шок: */} 
            {travmShok && <><TravmShokKozha/>
            <br></br></>} 
            {/* Септический шок: */} 
            {itsh && <><ItshKozha/>
            <br></br></>} 
            {/* Перитонит: */} 
            {operitonit && <><OperitonitKozha/>
            <br></br></>}  
            {/* Острая почечная недостаточность (ОПН): */} 
            {opn && <><OpnKozha/>
            <br></br></>} 
            {/* Хроническая почечная недостаточность (ХПН): */} 
            {hpn && <><HpnKozha/>
            <br></br></>}     
            {/* Диабетическая кома: */} 
            {diabetcoma && <><DiabetcomaKozha/>
            <br></br></>}  
        </>
    );
}
export default PatanKozha;