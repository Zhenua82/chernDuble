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

function PatanOsnKozha() {

    //Получаем из хранилища состояния пат изменений:
    const gb = useSelector((state) => state.patOsn.gbOsn);
    const saharDiab1 = useSelector((state) => state.patOsn.saharDiab1Osn);
    const saharDiab2 = useSelector((state) => state.patOsn.saharDiab2Osn);
    const vich = useSelector((state) => state.patOsn.vichOsn);
    const covid = useSelector((state) => state.patOsn.covidOsn);
    const gepatB = useSelector((state) => state.patOsn.gepatBOsn);
    const gepatC = useSelector((state) => state.patOsn.gepatCOsn);
    const sifilis = useSelector((state) => state.patOsn.sifilisOsn);
    const gripp = useSelector((state) => state.patOsn.grippOsn);
    const tuberc = useSelector((state) => state.patOsn.tubercOsn);
    const krona = useSelector((state) => state.patOsn.kronaOsn);
    const njak = useSelector((state) => state.patOsn.njakOsn);
    const greyvs = useSelector((state) => state.patOsn.greyvsOsn);
    const hoshimoto = useSelector((state) => state.patOsn.hoshimotoOsn);
    const gemInsult = useSelector((state) => state.patOsn.gemInsultOsn);
    const oglomerulo = useSelector((state) => state.patOsn.oglomeruloOsn);
    const feAnemi = useSelector((state) => state.patOsn.feAnemiOsn);
    const postgemAnemi = useSelector((state) => state.patOsn.postgemAnemiOsn);
    const hronPielo = useSelector((state) => state.patOsn.hronPieloOsn);
    const ishInsult = useSelector((state) => state.patOsn.ishInsultOsn);
    const infarctMioc = useSelector((state) => state.patOsn.infarctMiocOsn);
    const alco = useSelector((state) => state.patOsn.alcoOsn);
    const dilCardio = useSelector((state) => state.patOsn.dilCardioOsn);
    const gipCardio = useSelector((state) => state.patOsn.gipCardioOsn);
    const miocardit = useSelector((state) => state.patOsn.miocarditOsn);
    const sepsis = useSelector((state) => state.patOsn.sepsisOsn);
    const hibs = useSelector((state) => state.patOsn.hibsOsn);
    const mkb = useSelector((state) => state.patOsn.mkbOsn);
    const pancreatit = useSelector((state) => state.patOsn.pancreatitOsn);
    const pnevmoniaInterst = useSelector((state) => state.patOsn.pnevmoniaInterstOsn);
    const pnevmoniaOchag = useSelector((state) => state.patOsn.pnevmoniaOchagOsn);
    const pnevmoniaKrup = useSelector((state) => state.patOsn.pnevmoniaKrupOsn);
    const hobl = useSelector((state) => state.patOsn.hoblOsn);
    const astma = useSelector((state) => state.patOsn.astmaOsn);
    const peritonit = useSelector((state) => state.patOsn.peritonitOsn);
    const yazva = useSelector((state) => state.patOsn.yazvaOsn);
    const meningit = useSelector((state) => state.patOsn.meningitOsn);
    const difteria = useSelector((state) => state.patOsn.difteriaOsn);
    const holecistit = useSelector((state) => state.patOsn.holecistitOsn);
    const rs = useSelector((state) => state.patOsn.rsOsn);

    return (
        <>
             {/* Туберкулез: */}
             {tuberc && <><div className="parentContainerrr"><b><TubercKozha /></b></div>
            <br></br></>}
            {/* Дифтерия: */}
            {difteria && <><div className="parentContainerrr"><b><DifteriaKozha/></b></div>
            <br></br></>}
            {/* Сифилис: */}
            {sifilis && <><div className="parentContainerrr"><b><SifilisKozha/></b></div>
            <br></br></>}
            {/* Гепатит B: */}
            {gepatB && <><div className="parentContainerrr"><b><GepatBKozha/></b></div>
            <br></br></>}
            {/* Гепатит C: */}
            {gepatC && <><div className="parentContainerrr"><b><GepatCKozha/></b></div>
            <br></br></>}
            {/* ВИЧ: */}
            {vich && <><div className="parentContainerrr"><b><VichKozha/></b></div>
            <br></br></>}
            {/* Грипп: */}
            {gripp && <><div className="parentContainerrr"><b><GrippKozha/></b></div>
            <br></br></>}
            {/* Covid-19: */}
            {covid && <><div className="parentContainerrr"><b><CovidKozha/></b></div>
            <br></br></>} 
            {/* Железодеф анемия: */}
            {feAnemi && <><div className="parentContainerrr"><b><FeAnemiKozha/></b></div>
            <br></br></>}
             {/* Острая постгеморрагическая анемия: */}
             {postgemAnemi && <><div className="parentContainerrr"><b><PostgemAnemiKozha/></b></div>
            <br></br></>} 
            {/* болезнь Грейвса: */}
            {greyvs && <><div className="parentContainerrr"><b><GreyvsKozha/></b></div>
            <br></br></>} 
            {/* Хошимото: */}
            {hoshimoto && <><div className="parentContainerrr"><b><HoshimotoKozha/></b></div>
            <br></br></>} 
            {/* Сахарный диабет 1: */}
            {saharDiab1 && <><div className="parentContainerrr"><b><SaharDiab1Kozha/></b></div>
            <br></br></>}
            {/* Сахарный диабет 2: */}
            {saharDiab2 && <><div className="parentContainerrr"><b><SaharDiab2Kozha/></b></div>
            <br></br></>}
            {/* Хронический алкоголизм: */}
            {alco && <><div className="parentContainerrr"><b><AlcoKozha/></b></div>
            <br></br></>}
            {/* Менингит: */}
            {meningit && <><div className="parentContainerrr"><b><MeningitKozha/></b></div>
            <br></br></>}
            {/* Рассеянный склероз: */}
            {rs && <><div className="parentContainerrr"><b><RsKozha/></b></div>
            <br></br></>}
            {/* ГБ: */}
            {gb && <><div className="parentContainerrr"><b><GbKozha/></b></div>
            <br></br></>}
            {/* Инфаркт миокарда: */}
            {infarctMioc && <><div className="parentContainerrr"><b><InfarctMiocKozha/></b></div>
            <br></br></>}
            {/* ХИБС: */}
            {hibs && <><div className="parentContainerrr"><b><HibsKozha/></b></div>
            <br></br></>}
            {/* Сепсис: */}
            {sepsis && <><div className="parentContainerrr"><b><SepsisKozha/></b></div>
            <br></br></>}
            {/* Миокардит: */}
            {miocardit && <><div className="parentContainerrr"><b><MiocarditKozha/></b></div>
            <br></br></>}
            {/* Дилатационная кардиомиопатия: */}
            {dilCardio && <><div className="parentContainerrr"><b><DilCardioKozha/></b></div>
            <br></br></>}
            {/* Гипертрофическая кардиомиопатия: */}
            {gipCardio && <><div className="parentContainerrr"><b><GipCardioKozha/></b></div>
            <br></br></>}
            {/* Геморрагический инсульт: */}
            {gemInsult && <><div className="parentContainerrr"><b><GemInsultKozha/></b></div>
            <br></br></>}
            {/* Ишемический инсульт: */}
            {ishInsult && <><div className="parentContainerrr"><b><IshInsultKozha/></b></div>
            <br></br></>}
            {/* Крупозная пневмония: */}
            {pnevmoniaKrup && <><div className="parentContainerrr"><b><PnevmoniaKrupKozha/></b></div>
            <br></br></>}
            {/* Очаговая пневмония: */}
            {pnevmoniaOchag && <><div className="parentContainerrr"><b><PnevmoniaOchagKozha/></b></div>
            <br></br></>}
            {/* Интерстициальная пневмония: */}
            {pnevmoniaInterst && <><div className="parentContainerrr"><b><PnevmoniaInterstKozha/></b></div>
            <br></br></>}
            {/* ХОБЛ: */}
            {hobl && <><div className="parentContainerrr"><b><HoblKozha/></b></div>
            <br></br></>}
            {/* Астма: */}
            {astma && <><div className="parentContainerrr"><b><AstmaKozha/></b></div>
            <br></br></>}
            {/* ЯБ: */}
            {yazva && <><div className="parentContainerrr"><b><YazvaKozha/></b></div>
            <br></br></>}      
            {/* болезнь Крона: */}
            {krona && <><div className="parentContainerrr"><b><KronaKozha/></b></div>
            <br></br></>}      
            {/* НЯК: */}
            {njak && <><div className="parentContainerrr"><b><NjakKozha/></b></div>
            <br></br></>} 
            {/* Перитонит: */}
            {peritonit && <><div className="parentContainerrr"><b><PeritonitKozha/></b></div>
            <br></br></>} 
            {/* Холецистит: */}
            {holecistit && <><div className="parentContainerrr"><b><HolecistitKozha/></b></div>
            <br></br></>} 
            {/* Панкреатит: */}
            {pancreatit && <><div className="parentContainerrr"><b><PancreatitKozha/></b></div>
            <br></br></>} 
            {/* О. гломерулонефрит: */}     
            {oglomerulo && <><div className="parentContainerrr"><b><OglomeruloKozha/></b></div>
            <br></br></>}      
            {/* Хронический пиелонефрит: */}     
            {hronPielo && <><div className="parentContainerrr"><b><HronPieloKozha/></b></div>
            <br></br></>}      
            {/* МКБ: */}     
            {mkb && <><div className="parentContainerrr"><b><MkbKozha/></b></div>
            <br></br></>}      
        </>
    );
}

export default PatanOsnKozha;