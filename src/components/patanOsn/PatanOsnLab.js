import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import GbLab from '../../patan/gb/GbLab';
import SaharDiab1Lab from '../../patan/saharDiab1/saharDiab1Lab';
import SaharDiab2Lab from '../../patan/saharDiab2/saharDiab2Lab';
import VichLab from '../../patan/vich/VichLab';
import CovidLab from '../../patan/covid/CovidLab';
import GepatBLab from '../../patan/gepatB/GepatBLab';
import GepatСLab from '../../patan/gepatС/GepatСLab';
import SifilisLab from '../../patan/sifilis/SifilisLab';
import GrippLab from '../../patan/gripp/GrippLab';
import TubercLab from '../../patan/tuberc/TubercLab';
import KronaLab from '../../patan/krona/KronaLab';
import NjakLab from '../../patan/njak/NjakLab';
import GreyvsLab from '../../patan/greyvs/GreyvsLab';
import HoshimotoLab from '../../patan/hoshimoto/HoshimotoLab';
import GemInsultLab from '../../patan/gemInsult/GemInsultLab';
import OglomeruloLab from '../../patan/oglomerulo/OglomeruloLab';
import FeAnemiLab from '../../patan/feAnemi/FeAnemiLab';
import PostgemAnemiLab from '../../patan/postgemAnemi/PostgemAnemiLab';
import HronPieloLab from '../../patan/hronPielo/HronPieloLab';
import IshInsultLab from '../../patan/ishInsult/IshInsultLab';
import InfarctMiocLab from '../../patan/infarctMioc/InfarctMiocLab';
import AlcoLab from '../../patan/alco/AlcoLab';
import DilCardioLab from '../../patan/dilCardio/DilCardioLab';
import GipCardioLab from '../../patan/gipCardio/GipCardioLab';
import MiocarditLab from '../../patan/miocardit/MiocarditLab';
import SepsisLab from '../../patan/sepsis/SepsisLab';
import HibsLab from '../../patan/hibs/HibsLab';
import MkbLab from '../../patan/mkb/MkbLab';
import PancreatitLab from '../../patan/pancreatit/PancreatitLab';
import PnevmoniaInterstLab from '../../patan/pnevmoniaInterst/PnevmoniaInterstLab';
import PnevmoniaOchagLab from '../../patan/pnevmoniaOchag/PnevmoniaOchagLab';
import PnevmoniaKrupLab from '../../patan/pnevmoniaKrup/PnevmoniaKrupLab';
import HoblLab from '../../patan/hobl/HoblLab';
import AstmaLab from '../../patan/astma/AstmaLab';
import PeritonitLab from '../../patan/peritonit/PeritonitLab';
import YazvaLab from '../../patan/yazva/YazvaLab';
import MeningitLab from '../../patan/meningit/MeningitLab';
import DifteriaLab from '../../patan/difteria/DifteriaLab';
import HolecistitLab from '../../patan/holecistit/HolecistitLab';
import RsLab from '../../patan/rs/RsLab';


function PatanOsnLab() {

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
             {tuberc && <><div className="parentContainerrr"><b><TubercLab /></b></div>
            <br></br></>}
            {/* Дифтерия: */}
            {difteria && <><div className="parentContainerrr"><b><DifteriaLab/></b></div>
            <br></br></>}
            {/* Сифилис: */}
            {sifilis && <><div className="parentContainerrr"><b><SifilisLab/></b></div>
            <br></br></>}
            {/* Гепатит B: */}
            {gepatB && <><div className="parentContainerrr"><b><GepatBLab/></b></div>
            <br></br></>}
            {/* Гепатит C: */}
            {gepatC && <><div className="parentContainerrr"><b><GepatСLab/></b></div>
            <br></br></>}
            {/* ВИЧ: */}
            {vich && <><div className="parentContainerrr"><b><VichLab/></b></div>
            <br></br></>}
            {/* Грипп: */}
            {gripp && <><div className="parentContainerrr"><b><GrippLab/></b></div>
            <br></br></>}
            {/* Covid-19: */}
            {covid && <><div className="parentContainerrr"><b><CovidLab/></b></div>
            <br></br></>} 
            {/* Железодеф анемия: */}
            {feAnemi && <><div className="parentContainerrr"><b><FeAnemiLab/></b></div>
            <br></br></>}
             {/* Острая постгеморрагическая анемия: */}
             {postgemAnemi && <><div className="parentContainerrr"><b><PostgemAnemiLab/></b></div>
            <br></br></>} 
            {/* болезнь Грейвса: */}
            {greyvs && <><div className="parentContainerrr"><b><GreyvsLab/></b></div>
            <br></br></>} 
            {/* Хошимото: */}
            {hoshimoto && <><div className="parentContainerrr"><b><HoshimotoLab/></b></div>
            <br></br></>} 
            {/* Сахарный диабет 1: */}
            {saharDiab1 && <><div className="parentContainerrr"><b><SaharDiab1Lab/></b></div>
            <br></br></>}
            {/* Сахарный диабет 2: */}
            {saharDiab2 && <><div className="parentContainerrr"><b><SaharDiab2Lab/></b></div>
            <br></br></>}
            {/* Хронический алкоголизм: */}
            {alco && <><div className="parentContainerrr"><b><AlcoLab/></b></div>
            <br></br></>}
            {/* Менингит: */}
            {meningit && <><div className="parentContainerrr"><b><MeningitLab/></b></div>
            <br></br></>}
            {/* Рассеянный склероз: */}
            {rs && <><div className="parentContainerrr"><b><RsLab/></b></div>
            <br></br></>}
            {/* ГБ: */}
            {gb && <><div className="parentContainerrr"><b><GbLab/></b></div>
            <br></br></>}
            {/* Инфаркт миокарда: */}
            {infarctMioc && <><div className="parentContainerrr"><b><InfarctMiocLab/></b></div>
            <br></br></>}
            {/* ХИБС: */}
            {hibs && <><div className="parentContainerrr"><b><HibsLab/></b></div>
            <br></br></>}
            {/* Сепсис: */}
            {sepsis && <><div className="parentContainerrr"><b><SepsisLab/></b></div>
            <br></br></>}
            {/* Миокардит: */}
            {miocardit && <><div className="parentContainerrr"><b><MiocarditLab/></b></div>
            <br></br></>}
            {/* Дилатационная кардиомиопатия: */}
            {dilCardio && <><div className="parentContainerrr"><b><DilCardioLab/></b></div>
            <br></br></>}
            {/* Гипертрофическая кардиомиопатия: */}
            {gipCardio && <><div className="parentContainerrr"><b><GipCardioLab/></b></div>
            <br></br></>}
            {/* Геморрагический инсульт: */}
            {gemInsult && <><div className="parentContainerrr"><b><GemInsultLab/></b></div>
            <br></br></>}
            {/* Ишемический инсульт: */}
            {ishInsult && <><div className="parentContainerrr"><b><IshInsultLab/></b></div>
            <br></br></>}
            {/* Крупозная пневмония: */}
            {pnevmoniaKrup && <><div className="parentContainerrr"><b><PnevmoniaKrupLab/></b></div>
            <br></br></>}
            {/* Очаговая пневмония: */}
            {pnevmoniaOchag && <><div className="parentContainerrr"><b><PnevmoniaOchagLab/></b></div>
            <br></br></>}
            {/* Интерстициальная пневмония: */}
            {pnevmoniaInterst && <><div className="parentContainerrr"><b><PnevmoniaInterstLab/></b></div>
            <br></br></>}
            {/* ХОБЛ: */}
            {hobl && <><div className="parentContainerrr"><b><HoblLab/></b></div>
            <br></br></>}
            {/* Астма: */}
            {astma && <><div className="parentContainerrr"><b><AstmaLab/></b></div>
            <br></br></>}
            {/* ЯБ: */}
            {yazva && <><div className="parentContainerrr"><b><YazvaLab/></b></div>
            <br></br></>}      
            {/* болезнь Крона: */}
            {krona && <><div className="parentContainerrr"><b><KronaLab/></b></div>
            <br></br></>}      
            {/* НЯК: */}
            {njak && <><div className="parentContainerrr"><b><NjakLab/></b></div>
            <br></br></>} 
            {/* Перитонит: */}
            {peritonit && <><div className="parentContainerrr"><b><PeritonitLab/></b></div>
            <br></br></>} 
            {/* Холецистит: */}
            {holecistit && <><div className="parentContainerrr"><b><HolecistitLab/></b></div>
            <br></br></>} 
            {/* Панкреатит: */}
            {pancreatit && <><div className="parentContainerrr"><b><PancreatitLab/></b></div>
            <br></br></>} 
            {/* О. гломерулонефрит: */}     
            {oglomerulo && <><div className="parentContainerrr"><b><OglomeruloLab/></b></div>
            <br></br></>}      
            {/* Хронический пиелонефрит: */}     
            {hronPielo && <><div className="parentContainerrr"><b><HronPieloLab/></b></div>
            <br></br></>}      
            {/* МКБ: */}     
            {mkb && <><div className="parentContainerrr"><b><MkbLab/></b></div>
            <br></br></>}      
        </>
    );
}

export default PatanOsnLab;