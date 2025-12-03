import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import GbVyvody from '../../patan/gb/GbVyvody';
import SaharDiab1Vyvody from '../../patan/saharDiab1/saharDiab1Vyvody';
import SaharDiab2Vyvody from '../../patan/saharDiab2/saharDiab2Vyvody';
import VichVyvody from '../../patan/vich/VichVyvody';
import CovidVyvody from '../../patan/covid/CovidVyvody';
import GepatBVyvody from '../../patan/gepatB/GepatBVyvody';
import GepatСVyvody from '../../patan/gepatС/GepatCVyvody';
import SifilisVyvody from '../../patan/sifilis/SifilisVyvody';
import GrippVyvody from '../../patan/gripp/GrippVyvody';
import TubercVyvody from '../../patan/tuberc/TubercVyvody';
import KronaVyvody from '../../patan/krona/KronaVyvody';
import NjakVyvody from '../../patan/njak/NjakVyvody';
import GreyvsVyvody from '../../patan/greyvs/GreyvsVyvody';
import HoshimotoVyvody from '../../patan/hoshimoto/HoshimotoVyvody';
import GemInsultVyvody from '../../patan/gemInsult/GemInsultVyvody';
import OglomeruloVyvody from '../../patan/oglomerulo/OglomeruloVyvody';
import FeAnemiVyvody from '../../patan/feAnemi/FeAnemiVyvody';
import PostgemAnemiVyvody from '../../patan/postgemAnemi/PostgemAnemiVyvody';
import HronPieloVyvody from '../../patan/hronPielo/HronPieloVyvody';
import IshInsultVyvody from '../../patan/ishInsult/IshInsultVyvody';
import InfarctMiocVyvody from '../../patan/infarctMioc/InfarctMiocVyvody';
import AlcoVyvody from '../../patan/alco/AlcoVyvody';
import DilCardioVyvody from '../../patan/dilCardio/DilCardioVyvody';
import GipCardioVyvody from '../../patan/gipCardio/GipCardioVyvody';
import MiocarditVyvody from '../../patan/miocardit/MiocarditVyvody';
import SepsisVyvody from '../../patan/sepsis/SepsisVyvody';
import HibsVyvody from '../../patan/hibs/HibsVyvody';
import MkbVyvody from '../../patan/mkb/MkbVyvody';
import PancreatitVyvody from '../../patan/pancreatit/PancreatitVyvody';
import PnevmoniaInterstVyvody from '../../patan/pnevmoniaInterst/PnevmoniaInterstVyvody';
import PnevmoniaOchagVyvody from '../../patan/pnevmoniaOchag/PnevmoniaOchagVyvody';
import PnevmoniaKrupVyvody from '../../patan/pnevmoniaKrup/PnevmoniaKrupVyvody';
import HoblVyvody from '../../patan/hobl/HoblVyvody';
import AstmaVyvody from '../../patan/astma/AstmaVyvody';
import PeritonitVyvody from '../../patan/peritonit/PeritonitVyvody';
import YazvaVyvody from '../../patan/yazva/YazvaVyvody';
import MeningitVyvody from '../../patan/meningit/MeningitVyvody';
import DifteriaVyvody from '../../patan/difteria/DifteriaVyvody';
import HolecistitVyvody from '../../patan/holecistit/HolecistitVyvody';
import RsVyvody from '../../patan/rs/RsVyvody';

function PatanVyvody() {

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
    
    return (
        <>
            {/* Туберкулез: */}
            {tuberc && <><TubercVyvody/>
            <br></br></>}
             {/* Дифтерия: */}
             {difteria && <><DifteriaVyvody/>
            <br></br></>}
            {/* Сифилис: */}
            {sifilis && <><SifilisVyvody/>
            <br></br></>}
            {/* Гепатит B: */}
            {gepatB && <><GepatBVyvody/>
            <br></br></>}
            {/* Гепатит C: */}
            {gepatC && <><GepatСVyvody/>
            <br></br></>}
             {/* ВИЧ: */}
             {vich && <><VichVyvody/>
            <br></br></>}
            {/* Грипп: */}
            {gripp && <><GrippVyvody/>
            <br></br></>}
            {/* Covid-19: */}
            {covid && <><CovidVyvody/>
            <br></br></>} 
            {/* Железодеф анемия: */}
            {feAnemi && <><FeAnemiVyvody/>
            <br></br></>}
            {/* Острая постгеморрагическая анемия: */}
            {postgemAnemi && <><PostgemAnemiVyvody/>
            <br></br></>} 
            {/* болезнь Грейвса: */}
            {greyvs && <><GreyvsVyvody/>
            <br></br></>}
            {/* Хашимото: */}
            {hoshimoto && <><HoshimotoVyvody/>
            <br></br></>}
            {/* СД 1: */}
            {saharDiab1 && <><SaharDiab1Vyvody/>
            <br></br></>}
            {/* СД 2: */}
            {saharDiab2 && <><SaharDiab2Vyvody/>
            <br></br></>}
             {/* Хронический алкоголизм: */}
             {alco && <><AlcoVyvody/>
            <br></br></>}
            {/* Менингит: */}
            {meningit && <><MeningitVyvody/>
            <br></br></>}
            {/* Рассеянный склероз: */}
            {rs && <><RsVyvody/>
            <br></br></>}
            {/* ГБ: */}
            {gb && <><GbVyvody/>
            <br></br></>}
            {/* Инфаркт миокарда: */}
            {infarctMioc && <><InfarctMiocVyvody/>
            <br></br></>}
            {/* ХИБС: */}
            {hibs && <><HibsVyvody/>
            <br></br></>}
             {/* Сепсис: */}
             {sepsis && <><SepsisVyvody/>
            <br></br></>}
            {/* Миокардит: */}
            {miocardit && <><MiocarditVyvody/>
            <br></br></>}
            {/* Дилатационная кардиомиопатия: */}
            {dilCardio && <><DilCardioVyvody/>
            <br></br></>}
            {/* Гипертрофическая кардиомиопатия: */}
            {gipCardio && <><GipCardioVyvody/>
            <br></br></>}
            {/* Геморрагический инсульт: */}
            {gemInsult && <><GemInsultVyvody/>
            <br></br></>}
            {/* Ишемический инсульт: */}
            {ishInsult && <><IshInsultVyvody/>
            <br></br></>}
            {/* Крупозная пневмония: */}
            {pnevmoniaKrup && <><PnevmoniaKrupVyvody/>
            <br></br></>}
            {/* Очаговая пневмония: */}
            {pnevmoniaOchag && <><PnevmoniaOchagVyvody/>
            <br></br></>}
            {/* Интерстициальная пневмония: */}
            {pnevmoniaInterst && <><PnevmoniaInterstVyvody/>
            <br></br></>}
            {/* ХОБЛ: */}
            {hobl && <><HoblVyvody/>
            <br></br></>}
            {/* Астма: */}
            {astma && <><AstmaVyvody/>
            <br></br></>}
             {/* ЯБ: */}
             {yazva && <><YazvaVyvody/>
            <br></br></>} 
            {/* болезнь Крона: */}
            {krona && <><KronaVyvody/>
            <br></br></>}
            {/* НЯК: */}
            {njak && <><NjakVyvody/>
            <br></br></>}
            {/* Перитонит: */}
            {peritonit && <><PeritonitVyvody/>
            <br></br></>} 
            {/* Холецистит: */}
            {holecistit && <><HolecistitVyvody/>
            <br></br></>} 
            {/* Панкреатит: */}
            {pancreatit && <><PancreatitVyvody/>
            <br></br></>} 
            {/* О. гломерулонефрит: */}
            {oglomerulo && <><OglomeruloVyvody/>
            <br></br></>}
            {/* Хронический пиелонефрит: */}     
            {hronPielo && <><HronPieloVyvody/>
            <br></br></>}
            {/* МКБ: */}     
            {mkb && <><MkbVyvody/>
            <br></br></>} 
            {/* Ссадины: */}
            {/* {ssadiny  && <><SsadinyDiagnoz/>
            <br></br></>} */}
        </>
    );
}

export default PatanVyvody;