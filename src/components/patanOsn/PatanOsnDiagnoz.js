import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import GbOsnDiagnoz from '../../patan/gb/GbOsnDiagnoz';
import SaharDiab1OsnDiagnoz from '../../patan/saharDiab1/SaharDiab1OsnDiagnoz';
import SaharDiab2OsnDiagnoz from '../../patan/saharDiab2/SaharDiab2OsnDiagnoz';
import KronaOsnDiagnoz from '../../patan/krona/KronaOsnDiagnoz';
import NjakOsnDiagnoz from '../../patan/njak/NjakOsnDiagnoz';
import GreyvsOsnDiagnoz from '../../patan/greyvs/GreyvsOsnDiagnoz';
import HoshimotoOsnDiagnoz from '../../patan/hoshimoto/HoshimotoOsnDiagnoz';
import GemInsultOsnDiagnoz from '../../patan/gemInsult/GemInsultOsnDiagnoz';
import OglomeruloOsnDiagnoz from '../../patan/oglomerulo/OglomeruloOsnDiagnoz';
import FeAnemiOsnDiagnoz from '../../patan/feAnemi/FeAnemiOsnDiagnoz';
import PostgemAnemiOsnDiagnoz from '../../patan/postgemAnemi/PostgemAnemiOsnDiagnoz';
import HronPieloOsnDiagnoz from '../../patan/hronPielo/HronPieloOsnDiagnoz';
import IshInsultOsnDiagnoz from '../../patan/ishInsult/IshInsultOsnDiagnoz';
import InfarctMiocOsnDiagnoz from '../../patan/infarctMioc/InfarctMiocOsnDiagnoz';
import AlcoOsnDiagnoz from '../../patan/alco/AlcoOsnDiagnoz';
import DilCardioOsnDiagnoz from '../../patan/dilCardio/DilCardioOsnDiagnoz';
import GipCardioOsnDiagnoz from '../../patan/gipCardio/GipCardioOsnDiagnoz';
import MiocarditOsnDiagnoz from '../../patan/miocardit/MiocarditOsnDiagnoz';
import SepsisOsnDiagnoz from '../../patan/sepsis/SepsisOsnDiagnoz';
import HibsOsnDiagnoz from '../../patan/hibs/HibsOsnDiagnoz';
import MkbOsnDiagnoz from '../../patan/mkb/MkbOsnDiagnoz';
import PancreatitOsnDiagnoz from '../../patan/pancreatit/PancreatitOsnDiagnoz';
import PnevmoniaInterstOsnDiagnoz from '../../patan/pnevmoniaInterst/PnevmoniaInterstOsnDiagnoz';
import PnevmoniaOchagOsnDiagnoz from '../../patan/pnevmoniaOchag/PnevmoniaOchagOsnDiagnoz';
import PnevmoniaKrupOsnDiagnoz from '../../patan/pnevmoniaKrup/PnevmoniaKrupOsnDiagnoz';
import HoblOsnDiagnoz from '../../patan/hobl/HoblOsnDiagnoz';
import AstmaOsnDiagnoz from '../../patan/astma/AstmaOsnDiagnoz';
import PeritonitOsnDiagnoz from '../../patan/peritonit/PeritonitOsnDiagnoz';
import YazvaOsnDiagnoz from '../../patan/yazva/YazvaOsnDiagnoz';
import MeningitOsnDiagnoz from '../../patan/meningit/MeningitOsnDiagnoz';
import HolecistitOsnDiagnoz from '../../patan/holecistit/HolecistitOsnDiagnoz';
import RsOsnDiagnoz from '../../patan/rs/RsOsnDiagnoz';
import TubercOsnDiagnoz from '../../patan/tuberc/TubercOsnDiagnoz';
import DifteriaOsnDiagnoz from '../../patan/difteria/DifteriaOsnDiagnoz';
import SifilisOsnDiagnoz from '../../patan/sifilis/SifilisOsnDiagnoz';
import GepatBOsnDiagnoz from '../../patan/gepatB/GepatBOsnDiagnoz';
import GepatСOsnDiagnoz from '../../patan/gepatС/GepatСOsnDiagnoz';
import VichOsnDiagnoz from '../../patan/vich/VichOsnDiagnoz';
import GrippOsnDiagnoz from '../../patan/gripp/GrippOsnDiagnoz';
import CovidOsnDiagnoz from '../../patan/covid/CovidOsnDiagnoz';

function PatanOsnDiagnoz() {

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
            {tuberc && <><div className="parentContainerrr"><b><TubercOsnDiagnoz /></b></div>
            <br></br></>}
            {/* Дифтерия: */}
            {difteria && <><div className="parentContainerrr"><b><DifteriaOsnDiagnoz/></b></div>
            <br></br></>}
            {/* Сифилис: */}
            {sifilis && <><div className="parentContainerrr"><b><SifilisOsnDiagnoz/></b></div>
            <br></br></>}
            {/* Гепатит B: */}
            {gepatB && <><div className="parentContainerrr"><b><GepatBOsnDiagnoz/></b></div>
            <br></br></>}
            {/* Гепатит C: */}
            {gepatC && <><div className="parentContainerrr"><b><GepatСOsnDiagnoz/></b></div>
            <br></br></>}
            {/* ВИЧ: */}
            {vich && <><div className="parentContainerrr"><b><VichOsnDiagnoz/></b></div>
            <br></br></>}
            {/* Грипп: */}
            {gripp && <><div className="parentContainerrr"><b><GrippOsnDiagnoz/></b></div>
            <br></br></>}
            {/* Covid-19: */}
            {covid && <><div className="parentContainerrr"><b><CovidOsnDiagnoz/></b></div>
            <br></br></>} 
            {/* Железодеф анемия: */}
            {feAnemi && <><div className="parentContainerrr"><b><FeAnemiOsnDiagnoz/></b></div>
            <br></br></>}
             {/* Острая постгеморрагическая анемия: */}
             {postgemAnemi && <><div className="parentContainerrr"><b><PostgemAnemiOsnDiagnoz/></b></div>
            <br></br></>} 
            {/* болезнь Грейвса: */}
            {greyvs && <><div className="parentContainerrr"><b><GreyvsOsnDiagnoz/></b></div>
            <br></br></>} 
            {/* Хошимото: */}
            {hoshimoto && <><div className="parentContainerrr"><b><HoshimotoOsnDiagnoz/></b></div>
            <br></br></>} 
            {/* Сахарный диабет 1: */}
            {saharDiab1 && <><div className="parentContainerrr"><b><SaharDiab1OsnDiagnoz/></b></div>
            <br></br></>}
            {/* Сахарный диабет 2: */}
            {saharDiab2 && <><div className="parentContainerrr"><b><SaharDiab2OsnDiagnoz/></b></div>
            <br></br></>}
            {/* Хронический алкоголизм: */}
            {alco && <><div className="parentContainerrr"><b><AlcoOsnDiagnoz/></b></div>
            <br></br></>}
            {/* Менингит: */}
            {meningit && <><div className="parentContainerrr"><b><MeningitOsnDiagnoz/></b></div>
            <br></br></>}
            {/* Рассеянный склероз: */}
            {rs && <><div className="parentContainerrr"><b><RsOsnDiagnoz/></b></div>
            <br></br></>}
            {/* ГБ: */}
            {gb && <><div className="parentContainerrr"><b><GbOsnDiagnoz/></b></div>
            <br></br></>}
            {/* Инфаркт миокарда: */}
            {infarctMioc && <><div className="parentContainerrr"><b><InfarctMiocOsnDiagnoz/></b></div>
            <br></br></>}
            {/* ХИБС: */}
            {hibs && <><div className="parentContainerrr"><b><HibsOsnDiagnoz/></b></div>
            <br></br></>}
            {/* Сепсис: */}
            {sepsis && <><div className="parentContainerrr"><b><SepsisOsnDiagnoz/></b></div>
            <br></br></>}
            {/* Миокардит: */}
            {miocardit && <><div className="parentContainerrr"><b><MiocarditOsnDiagnoz/></b></div>
            <br></br></>}
            {/* Дилатационная кардиомиопатия: */}
            {dilCardio && <><div className="parentContainerrr"><b><DilCardioOsnDiagnoz/></b></div>
            <br></br></>}
            {/* Гипертрофическая кардиомиопатия: */}
            {gipCardio && <><div className="parentContainerrr"><b><GipCardioOsnDiagnoz/></b></div>
            <br></br></>}
            {/* Геморрагический инсульт: */}
            {gemInsult && <><div className="parentContainerrr"><b><GemInsultOsnDiagnoz/></b></div>
            <br></br></>}
            {/* Ишемический инсульт: */}
            {ishInsult && <><div className="parentContainerrr"><b><IshInsultOsnDiagnoz/></b></div>
            <br></br></>}
            {/* Крупозная пневмония: */}
            {pnevmoniaKrup && <><div className="parentContainerrr"><b><PnevmoniaKrupOsnDiagnoz/></b></div>
            <br></br></>}
            {/* Очаговая пневмония: */}
            {pnevmoniaOchag && <><div className="parentContainerrr"><b><PnevmoniaOchagOsnDiagnoz/></b></div>
            <br></br></>}
            {/* Интерстициальная пневмония: */}
            {pnevmoniaInterst && <><div className="parentContainerrr"><b><PnevmoniaInterstOsnDiagnoz/></b></div>
            <br></br></>}
            {/* ХОБЛ: */}
            {hobl && <><div className="parentContainerrr"><b><HoblOsnDiagnoz/></b></div>
            <br></br></>}
            {/* Астма: */}
            {astma && <><div className="parentContainerrr"><b><AstmaOsnDiagnoz/></b></div>
            <br></br></>}
            {/* ЯБ: */}
            {yazva && <><div className="parentContainerrr"><b><YazvaOsnDiagnoz/></b></div>
            <br></br></>}      
            {/* болезнь Крона: */}
            {krona && <><div className="parentContainerrr"><b><KronaOsnDiagnoz/></b></div>
            <br></br></>}      
            {/* НЯК: */}
            {njak && <><div className="parentContainerrr"><b><NjakOsnDiagnoz/></b></div>
            <br></br></>} 
            {/* Перитонит: */}
            {peritonit && <><div className="parentContainerrr"><b><PeritonitOsnDiagnoz/></b></div>
            <br></br></>} 
            {/* Холецистит: */}
            {holecistit && <><div className="parentContainerrr"><b><HolecistitOsnDiagnoz/></b></div>
            <br></br></>} 
            {/* Панкреатит: */}
            {pancreatit && <><div className="parentContainerrr"><b><PancreatitOsnDiagnoz/></b></div>
            <br></br></>} 
            {/* О. гломерулонефрит: */}     
            {oglomerulo && <><div className="parentContainerrr"><b><OglomeruloOsnDiagnoz/></b></div>
            <br></br></>}      
            {/* Хронический пиелонефрит: */}     
            {hronPielo && <><div className="parentContainerrr"><b><HronPieloOsnDiagnoz/></b></div>
            <br></br></>}      
            {/* МКБ: */}     
            {mkb && <><div className="parentContainerrr"><b><MkbOsnDiagnoz/></b></div>
            <br></br></>}      
        </>
    );
}

export default PatanOsnDiagnoz;