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

function PatanOsnSpleen() {

    //Получаем из хранилища состояния пат изменений:
    const vich = useSelector((state) => state.patOsn.vichOsn);
    const gepatB = useSelector((state) => state.patOsn.gepatBOsn);
    const gepatC = useSelector((state) => state.patOsn.gepatCOsn);
    const sifilis = useSelector((state) => state.patOsn.sifilisOsn);
    const gripp = useSelector((state) => state.patOsn.grippOsn);
    const tuberc = useSelector((state) => state.patOsn.tubercOsn);
    const njak = useSelector((state) => state.patOsn.njakOsn);
    const gemInsult = useSelector((state) => state.patOsn.gemInsultOsn);
    const oglomerulo = useSelector((state) => state.patOsn.oglomeruloOsn);
    const feAnemi = useSelector((state) => state.patOsn.feAnemiOsn);
    const postgemAnemi = useSelector((state) => state.patOsn.postgemAnemiOsn);
    const ishInsult = useSelector((state) => state.patOsn.ishInsultOsn);
    const infarctMioc = useSelector((state) => state.patOsn.infarctMiocOsn);
    const alco = useSelector((state) => state.patOsn.alcoOsn);
    const dilCardio = useSelector((state) => state.patOsn.dilCardioOsn);
    const gipCardio = useSelector((state) => state.patOsn.gipCardioOsn);
    const miocardit = useSelector((state) => state.patOsn.miocarditOsn);
    const sepsis = useSelector((state) => state.patOsn.sepsisOsn);
    const hibs = useSelector((state) => state.patOsn.hibsOsn);
    const pnevmoniaKrup = useSelector((state) => state.patOsn.pnevmoniaKrupOsn);
    const peritonit = useSelector((state) => state.patOsn.peritonitOsn);
    const meningit = useSelector((state) => state.patOsn.meningitOsn);
    const difteria = useSelector((state) => state.patOsn.difteriaOsn);
    
    
    return (
        <>
             {/* Туберкулез: */}
             {tuberc && <><div className="parentContainerrr"><b><TubercSpleen /></b></div>
            <br></br></>}
            {/* Дифтерия: */}
            {difteria && <><div className="parentContainerrr"><b><DifteriaSpleen/></b></div>
            <br></br></>}
            {/* Сифилис: */}
            {sifilis && <><div className="parentContainerrr"><b><SifilisSpleen/></b></div>
            <br></br></>}
            {/* Гепатит B: */}
            {gepatB && <><div className="parentContainerrr"><b><GepatBSpleen/></b></div>
            <br></br></>}
            {/* Гепатит C: */}
            {gepatC && <><div className="parentContainerrr"><b><GepatCSpleen/></b></div>
            <br></br></>}
            {/* ВИЧ: */}
            {vich && <><div className="parentContainerrr"><b><VichSpleen/></b></div>
            <br></br></>}
            {/* Грипп: */}
            {gripp && <><div className="parentContainerrr"><b><GrippSpleen/></b></div>
            <br></br></>}
            {/* Железодеф анемия: */}
            {feAnemi && <><div className="parentContainerrr"><b><FeAnemiSpleen/></b></div>
            <br></br></>}
             {/* Острая постгеморрагическая анемия: */}
             {postgemAnemi && <><div className="parentContainerrr"><b><PostgemAnemiSpleen/></b></div>
            <br></br></>} 
            {/* Хронический алкоголизм: */}
            {alco && <><div className="parentContainerrr"><b><AlcoSpleen/></b></div>
            <br></br></>}
            {/* Менингит: */}
            {meningit && <><div className="parentContainerrr"><b><MeningitSpleen/></b></div>
            <br></br></>}
            {/* Инфаркт миокарда: */}
            {infarctMioc && <><div className="parentContainerrr"><b><InfarctMiocSpleen/></b></div>
            <br></br></>}
            {/* ХИБС: */}
            {hibs && <><div className="parentContainerrr"><b><HibsSpleen/></b></div>
            <br></br></>}
            {/* Сепсис: */}
            {sepsis && <><div className="parentContainerrr"><b><SepsisSpleen/></b></div>
            <br></br></>}
            {/* Миокардит: */}
            {miocardit && <><div className="parentContainerrr"><b><MiocarditSpleen/></b></div>
            <br></br></>}
            {/* Дилатационная кардиомиопатия: */}
            {dilCardio && <><div className="parentContainerrr"><b><DilCardioSpleen/></b></div>
            <br></br></>}
            {/* Гипертрофическая кардиомиопатия: */}
            {gipCardio && <><div className="parentContainerrr"><b><GipCardioSpleen/></b></div>
            <br></br></>}
            {/* Геморрагический инсульт: */}
            {gemInsult && <><div className="parentContainerrr"><b><GemInsultSpleen/></b></div>
            <br></br></>}
            {/* Ишемический инсульт: */}
            {ishInsult && <><div className="parentContainerrr"><b><IshInsultSpleen/></b></div>
            <br></br></>}
            {/* Крупозная пневмония: */}
            {pnevmoniaKrup && <><div className="parentContainerrr"><b><PnevmoniaKrupSpleen/></b></div>
            <br></br></>}
            {/* НЯК: */}
            {njak && <><div className="parentContainerrr"><b><NjakSpleen/></b></div>
            <br></br></>} 
            {/* Перитонит: */}
            {peritonit && <><div className="parentContainerrr"><b><PeritonitSpleen/></b></div>
            <br></br></>} 
            {/* О. гломерулонефрит: */}     
            {oglomerulo && <><div className="parentContainerrr"><b><OglomeruloSpleen/></b></div>
            <br></br></>}       
        </>
    );
}

export default PatanOsnSpleen;