import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import VichLungs from '../../patan/vich/VichLungs';
import CovidLungs from '../../patan/covid/CovidLungs';
import SifilisLungs from '../../patan/sifilis/SifilisLungs';
import GrippLungs from '../../patan/gripp/GrippLungs';
import TubercLungs from '../../patan/tuberc/TubercLungs';
import HoshimotoLungs from '../../patan/hoshimoto/HoshimotoLungs';
import OglomeruloLungs from '../../patan/oglomerulo/OglomeruloLungs';
import PostgemAnemiLungs from '../../patan/postgemAnemi/PostgemAnemiLungs';
import IshInsultLungs from '../../patan/ishInsult/IshInsultLungs';
import GemInsultLungs from '../../patan/gemInsult/GemInsultLungs';
import InfarctMiocLungs from '../../patan/infarctMioc/InfarctMiocLungs';
import AlcoLungs from '../../patan/alco/AlcoLungs';
import DilCardioLungs from '../../patan/dilCardio/DilCardioLungs';
import GipCardioLungs from '../../patan/gipCardio/GipCardioLungs';
import MiocarditLungs from '../../patan/miocardit/MiocarditLungs';
import SepsisLungs from '../../patan/sepsis/SepsisLungs';
import HibsLungs from '../../patan/hibs/HibsLungs';
import PancreatitLungs from '../../patan/pancreatit/PancreatitLungs';
import PnevmoniaInterstLungs from '../../patan/pnevmoniaInterst/PnevmoniaInterstLungs';
import PnevmoniaOchagLungs from '../../patan/pnevmoniaOchag/PnevmoniaOchagLungs';
import PnevmoniaKrupLungs from '../../patan/pnevmoniaKrup/PnevmoniaKrupLungs';
import HoblLungs from '../../patan/hobl/HoblLungs';
import AstmaLungs from '../../patan/astma/AstmaLungs';
import PeritonitLungs from '../../patan/peritonit/PeritonitLungs';
import MeningitLungs from '../../patan/meningit/MeningitLungs';
import DifteriaLungs from '../../patan/difteria/DifteriaLungs';

function PatanOsnLungs() {

    //Получаем из хранилища состояния пат изменений:
    
    const vich = useSelector((state) => state.patOsn.vichOsn);
    const covid = useSelector((state) => state.patOsn.covidOsn);
    const sifilis = useSelector((state) => state.patOsn.sifilisOsn);
    const gripp = useSelector((state) => state.patOsn.grippOsn);
    const tuberc = useSelector((state) => state.patOsn.tubercOsn);
    const hoshimoto = useSelector((state) => state.patOsn.hoshimotoOsn);
    const gemInsult = useSelector((state) => state.patOsn.gemInsultOsn);
    const oglomerulo = useSelector((state) => state.patOsn.oglomeruloOsn);
    const postgemAnemi = useSelector((state) => state.patOsn.postgemAnemiOsn);
    const ishInsult = useSelector((state) => state.patOsn.ishInsultOsn);
    const infarctMioc = useSelector((state) => state.patOsn.infarctMiocOsn);
    const alco = useSelector((state) => state.patOsn.alcoOsn);
    const dilCardio = useSelector((state) => state.patOsn.dilCardioOsn);
    const gipCardio = useSelector((state) => state.patOsn.gipCardioOsn);
    const miocardit = useSelector((state) => state.patOsn.miocarditOsn);
    const sepsis = useSelector((state) => state.patOsn.sepsisOsn);
    const hibs = useSelector((state) => state.patOsn.hibsOsn);
    const pancreatit = useSelector((state) => state.patOsn.pancreatitOsn);
    const pnevmoniaInterst = useSelector((state) => state.patOsn.pnevmoniaInterstOsn);
    const pnevmoniaOchag = useSelector((state) => state.patOsn.pnevmoniaOchagOsn);
    const pnevmoniaKrup = useSelector((state) => state.patOsn.pnevmoniaKrupOsn);
    const hobl = useSelector((state) => state.patOsn.hoblOsn);
    const astma = useSelector((state) => state.patOsn.astmaOsn);
    const peritonit = useSelector((state) => state.patOsn.peritonitOsn);
    const meningit = useSelector((state) => state.patOsn.meningitOsn);
    const difteria = useSelector((state) => state.patOsn.difteriaOsn);

    return (
        <>
            {/* Туберкулез: */}
            {tuberc && <><div className="parentContainerrr"><b><TubercLungs /></b></div>
            <br></br></>}
            {/* Дифтерия: */}
            {difteria && <><div className="parentContainerrr"><b><DifteriaLungs/></b></div>
            <br></br></>}
            {/* Сифилис: */}
            {sifilis && <><div className="parentContainerrr"><b><SifilisLungs/></b></div>
            <br></br></>}
            {/* ВИЧ: */}
            {vich && <><div className="parentContainerrr"><b><VichLungs/></b></div>
            <br></br></>}
            {/* Грипп: */}
            {gripp && <><div className="parentContainerrr"><b><GrippLungs/></b></div>
            <br></br></>}
            {/* Covid-19: */}
            {covid && <><div className="parentContainerrr"><b><CovidLungs/></b></div>
            <br></br></>} 
             {/* Острая постгеморрагическая анемия: */}
             {postgemAnemi && <><div className="parentContainerrr"><b><PostgemAnemiLungs/></b></div>
            <br></br></>} 
            {/* Хошимото: */}
            {hoshimoto && <><div className="parentContainerrr"><b><HoshimotoLungs/></b></div>
            <br></br></>} 
            {/* Хронический алкоголизм: */}
            {alco && <><div className="parentContainerrr"><b><AlcoLungs/></b></div>
            <br></br></>}
            {/* Менингит: */}
            {meningit && <><div className="parentContainerrr"><b><MeningitLungs/></b></div>
            <br></br></>}
            {/* Инфаркт миокарда: */}
            {infarctMioc && <><div className="parentContainerrr"><b><InfarctMiocLungs/></b></div>
            <br></br></>}
            {/* ХИБС: */}
            {hibs && <><div className="parentContainerrr"><b><HibsLungs/></b></div>
            <br></br></>}
            {/* Сепсис: */}
            {sepsis && <><div className="parentContainerrr"><b><SepsisLungs/></b></div>
            <br></br></>}
            {/* Миокардит: */}
            {miocardit && <><div className="parentContainerrr"><b><MiocarditLungs/></b></div>
            <br></br></>}
            {/* Дилатационная кардиомиопатия: */}
            {dilCardio && <><div className="parentContainerrr"><b><DilCardioLungs/></b></div>
            <br></br></>}
            {/* Гипертрофическая кардиомиопатия: */}
            {gipCardio && <><div className="parentContainerrr"><b><GipCardioLungs/></b></div>
            <br></br></>}
            {/* Геморрагический инсульт: */}
            {gemInsult && <><div className="parentContainerrr"><b><GemInsultLungs/></b></div>
            <br></br></>}
            {/* Ишемический инсульт: */}
            {ishInsult && <><div className="parentContainerrr"><b><IshInsultLungs/></b></div>
            <br></br></>}
            {/* Крупозная пневмония: */}
            {pnevmoniaKrup && <><div className="parentContainerrr"><b><PnevmoniaKrupLungs/></b></div>
            <br></br></>}
            {/* Очаговая пневмония: */}
            {pnevmoniaOchag && <><div className="parentContainerrr"><b><PnevmoniaOchagLungs/></b></div>
            <br></br></>}
            {/* Интерстициальная пневмония: */}
            {pnevmoniaInterst && <><div className="parentContainerrr"><b><PnevmoniaInterstLungs/></b></div>
            <br></br></>}
            {/* ХОБЛ: */}
            {hobl && <><div className="parentContainerrr"><b><HoblLungs/></b></div>
            <br></br></>}
            {/* Астма: */}
            {astma && <><div className="parentContainerrr"><b><AstmaLungs/></b></div>
            <br></br></>}
            {/* Перитонит: */}
            {peritonit && <><div className="parentContainerrr"><b><PeritonitLungs/></b></div>
            <br></br></>} 
            {/* Панкреатит: */}
            {pancreatit && <><div className="parentContainerrr"><b><PancreatitLungs/></b></div>
            <br></br></>} 
            {/* О. гломерулонефрит: */}     
            {oglomerulo && <><div className="parentContainerrr"><b><OglomeruloLungs/></b></div>
            <br></br></>}      
        </>
    );
}

export default PatanOsnLungs;