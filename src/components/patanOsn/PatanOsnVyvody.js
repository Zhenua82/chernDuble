import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import GbOsnVyvody from '../../patan/gb/GbOsnVyvody';
import SaharDiab1OsnVyvody from '../../patan/saharDiab1/saharDiab1OsnVyvody';
import SaharDiab2OsnVyvody from '../../patan/saharDiab2/saharDiab2OsnVyvody';
import VichOsnVyvody from '../../patan/vich/VichOsnVyvody';
import CovidOsnVyvody from '../../patan/covid/CovidOsnVyvody';
import GrippOsnVyvody from '../../patan/gripp/GrippOsnVyvody';
import KronaOsnVyvody from '../../patan/krona/KronaOsnVyvody';
import NjakOsnVyvody from '../../patan/njak/NjakOsnVyvody';
import GreyvsOsnVyvody from '../../patan/greyvs/GreyvsOsnVyvody';
import HoshimotoOsnVyvody from '../../patan/hoshimoto/HoshimotoOsnVyvody';
import GemInsultOsnVyvody from '../../patan/gemInsult/GemInsultOsnVyvody';
import OglomeruloOsnVyvody from '../../patan/oglomerulo/OglomeruloOsnVyvody';
import FeAnemiOsnVyvody from '../../patan/feAnemi/FeAnemiOsnVyvody';
import PostgemAnemiOsnVyvody from '../../patan/postgemAnemi/PostgemAnemiOsnVyvody';
import HronPieloOsnVyvody from '../../patan/hronPielo/HronPieloOsnVyvody';
import IshInsultOsnVyvody from '../../patan/ishInsult/IshInsultOsnVyvody';
import InfarctMiocOsnVyvody from '../../patan/infarctMioc/InfarctMiocOsnVyvody';
import AlcoOsnVyvody from '../../patan/alco/AlcoOsnVyvody';
import DilCardioOsnVyvody from '../../patan/dilCardio/DilCardioOsnVyvody';
import GipCardioOsnVyvody from '../../patan/gipCardio/GipCardioOsnVyvody';
import MiocarditOsnVyvody from '../../patan/miocardit/MiocarditOsnVyvody';
import SepsisOsnVyvody from '../../patan/sepsis/SepsisOsnVyvody';
import HibsOsnVyvody from '../../patan/hibs/HibsOsnVyvody';
import MkbOsnVyvody from '../../patan/mkb/MkbOsnVyvody';
import PancreatitOsnVyvody from '../../patan/pancreatit/PancreatitOsnVyvody';
import PnevmoniaInterstOsnVyvody from '../../patan/pnevmoniaInterst/PnevmoniaInterstOsnVyvody';
import PnevmoniaOchagOsnVyvody from '../../patan/pnevmoniaOchag/PnevmoniaOchagOsnVyvody';
import PnevmoniaKrupOsnVyvody from '../../patan/pnevmoniaKrup/PnevmoniaKrupOsnVyvody';
import HoblOsnVyvody from '../../patan/hobl/HoblOsnVyvody';
import AstmaOsnVyvody from '../../patan/astma/AstmaOsnVyvody';
import PeritonitOsnVyvody from '../../patan/peritonit/PeritonitOsnVyvody';
import YazvaOsnVyvody from '../../patan/yazva/YazvaOsnVyvody';
import MeningitOsnVyvody from '../../patan/meningit/MeningitOsnVyvody';
import HolecistitOsnVyvody from '../../patan/holecistit/HolecistitOsnVyvody';
import RsOsnVyvody from '../../patan/rs/RsOsnVyvody';
import TubercOsnVyvody from '../../patan/tuberc/TubercOsnVyvody';
import DifteriaOsnVyvody from '../../patan/difteria/DifteriaOsnVyvody';
import SifilisOsnVyvody from '../../patan/sifilis/SifilisOsnVyvody';
import GepatBOsnVyvody from '../../patan/gepatB/GepatBOsnVyvody';
import GepatСOsnVyvody from '../../patan/gepatС/GepatCOsnVyvody';

function PatanOsnVyvody() {

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
            {tuberc && <><div className="parentContainerrr"><b><TubercOsnVyvody/></b></div>
            <br></br></>}
             {/* Дифтерия: */}
             {difteria && <><div className="parentContainerrr"><b><DifteriaOsnVyvody/></b></div>
            <br></br></>}
            {/* Сифилис: */}
            {sifilis && <><div className="parentContainerrr"><b><SifilisOsnVyvody/></b></div>
            <br></br></>}
            {/* Гепатит B: */}
            {gepatB && <><div className="parentContainerrr"><b><GepatBOsnVyvody/></b></div>
            <br></br></>}
            {/* Гепатит C: */}
            {gepatC && <><div className="parentContainerrr"><b><GepatСOsnVyvody/></b></div>
            <br></br></>}
             {/* ВИЧ: */}
             {vich && <><div className="parentContainerrr"><b><VichOsnVyvody/></b></div>
            <br></br></>}
            {/* Грипп: */}
            {gripp && <><div className="parentContainerrr"><b><GrippOsnVyvody/></b></div>
            <br></br></>}
            {/* Covid-19: */}
            {covid && <><div className="parentContainerrr"><b><CovidOsnVyvody/></b></div>
            <br></br></>} 
            {/* Железодеф анемия: */}
            {feAnemi && <><div className="parentContainerrr"><b><FeAnemiOsnVyvody/></b></div>
            <br></br></>}
            {/* Острая постгеморрагическая анемия: */}
            {postgemAnemi && <><div className="parentContainerrr"><b><PostgemAnemiOsnVyvody/></b></div>
            <br></br></>} 
            {/* болезнь Грейвса: */}
            {greyvs && <><div className="parentContainerrr"><b><GreyvsOsnVyvody/></b></div>
            <br></br></>}
            {/* Хашимото: */}
            {hoshimoto && <><div className="parentContainerrr"><b><HoshimotoOsnVyvody/></b></div>
            <br></br></>}
            {/* СД 1: */}
            {saharDiab1 && <><div className="parentContainerrr"><b><SaharDiab1OsnVyvody/></b></div>
            <br></br></>}
            {/* СД 2: */}
            {saharDiab2 && <><div className="parentContainerrr"><b><SaharDiab2OsnVyvody/></b></div>
            <br></br></>}
             {/* Хронический алкоголизм: */}
             {alco && <><div className="parentContainerrr"><b><AlcoOsnVyvody/></b></div>
            <br></br></>}
            {/* Менингит: */}
            {meningit && <><div className="parentContainerrr"><b><MeningitOsnVyvody/></b></div>
            <br></br></>}
            {/* Рассеянный склероз: */}
            {rs && <><div className="parentContainerrr"><b><RsOsnVyvody/></b></div>
            <br></br></>}
            {/* ГБ: */}
            {gb && <><div className="parentContainerrr"><b><GbOsnVyvody/></b></div>
            <br></br></>}
            {/* Инфаркт миокарда: */}
            {infarctMioc && <><div className="parentContainerrr"><b><InfarctMiocOsnVyvody/></b></div>
            <br></br></>}
            {/* ХИБС: */}
            {hibs && <><div className="parentContainerrr"><b><HibsOsnVyvody/></b></div>
            <br></br></>}
             {/* Сепсис: */}
             {sepsis && <><div className="parentContainerrr"><b><SepsisOsnVyvody/></b></div>
            <br></br></>}
            {/* Миокардит: */}
            {miocardit && <><div className="parentContainerrr"><b><MiocarditOsnVyvody/></b></div>
            <br></br></>}
            {/* Дилатационная кардиомиопатия: */}
            {dilCardio && <><div className="parentContainerrr"><b><DilCardioOsnVyvody/></b></div>
            <br></br></>}
            {/* Гипертрофическая кардиомиопатия: */}
            {gipCardio && <><div className="parentContainerrr"><b><GipCardioOsnVyvody/></b></div>
            <br></br></>}
            {/* Геморрагический инсульт: */}
            {gemInsult && <><div className="parentContainerrr"><b><GemInsultOsnVyvody/></b></div>
            <br></br></>}
            {/* Ишемический инсульт: */}
            {ishInsult && <><div className="parentContainerrr"><b><IshInsultOsnVyvody/></b></div>
            <br></br></>}
            {/* Крупозная пневмония: */}
            {pnevmoniaKrup && <><div className="parentContainerrr"><b><PnevmoniaKrupOsnVyvody/></b></div>
            <br></br></>}
            {/* Очаговая пневмония: */}
            {pnevmoniaOchag && <><div className="parentContainerrr"><b><PnevmoniaOchagOsnVyvody/></b></div>
            <br></br></>}
            {/* Интерстициальная пневмония: */}
            {pnevmoniaInterst && <><div className="parentContainerrr"><b><PnevmoniaInterstOsnVyvody/></b></div>
            <br></br></>}
            {/* ХОБЛ: */}
            {hobl && <><div className="parentContainerrr"><b><HoblOsnVyvody/></b></div>
            <br></br></>}
            {/* Астма: */}
            {astma && <><div className="parentContainerrr"><b><AstmaOsnVyvody/></b></div>
            <br></br></>}
             {/* ЯБ: */}
             {yazva && <><div className="parentContainerrr"><b><YazvaOsnVyvody/></b></div>
            <br></br></>} 
            {/* болезнь Крона: */}
            {krona && <><div className="parentContainerrr"><b><KronaOsnVyvody/></b></div>
            <br></br></>}
            {/* НЯК: */}
            {njak && <><div className="parentContainerrr"><b><NjakOsnVyvody/></b></div>
            <br></br></>}
            {/* Перитонит: */}
            {peritonit && <><div className="parentContainerrr"><b><PeritonitOsnVyvody/></b></div>
            <br></br></>} 
            {/* Холецистит: */}
            {holecistit && <><div className="parentContainerrr"><b><HolecistitOsnVyvody/></b></div>
            <br></br></>} 
            {/* Панкреатит: */}
            {pancreatit && <><div className="parentContainerrr"><b><PancreatitOsnVyvody/></b></div>
            <br></br></>} 
            {/* О. гломерулонефрит: */}
            {oglomerulo && <><div className="parentContainerrr"><b><OglomeruloOsnVyvody/></b></div>
            <br></br></>}
            {/* Хронический пиелонефрит: */}     
            {hronPielo && <><div className="parentContainerrr"><b><HronPieloOsnVyvody/></b></div>
            <br></br></>}
            {/* МКБ: */}     
            {mkb && <><div className="parentContainerrr"><b><MkbOsnVyvody/></b></div>
            <br></br></>} 
        </>
    );
}

export default PatanOsnVyvody;