import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import GbPochki from '../../patan/gb/GbPochki';
import SaharDiab1Pochki from '../../patan/saharDiab1/SaharDiab1Pochki';
import SaharDiab2Pochki from '../../patan/saharDiab2/SaharDiab2Pochki';
import CovidPochki from '../../patan/covid/CovidPochki';
import GepatBPochki from '../../patan/gepatB/GepatBPochki';
import GepatСPochki from '../../patan/gepatС/GepatСPochki';
import GrippPochki from '../../patan/gripp/GrippPochki';
import TubercPochki from '../../patan/tuberc/TubercPochki';
import GreyvsPochki from '../../patan/greyvs/GreyvsPochki';
import HoshimotoPochki from '../../patan/hoshimoto/HoshimotoPochki';
import OglomeruloPochki from '../../patan/oglomerulo/OglomeruloPochki';
import FeAnemiPochki from '../../patan/feAnemi/FeAnemiPochki';
import PostgemAnemiPochki from '../../patan/postgemAnemi/PostgemAnemiPochki';
import HronPieloPochki from '../../patan/hronPielo/HronPieloPochki';
import IshInsultPochki from '../../patan/ishInsult/IshInsultPochki';
import GemInsultPochki from '../../patan/gemInsult/GemInsultPochki';
import InfarctMiocPochki from '../../patan/infarctMioc/InfarctMiocPochki';
import AlcoPochki from '../../patan/alco/AlcoPochki';
import DilCardioPochki from '../../patan/dilCardio/DilCardioPochki';
import GipCardioPochki from '../../patan/gipCardio/GipCardioPochki';
import MiocarditPochki from '../../patan/miocardit/MiocarditPochki';
import SepsisPochki from '../../patan/sepsis/SepsisPochki';
import HibsPochki from '../../patan/hibs/HibsPochki';
import MkbPochki from '../../patan/mkb/MkbPochki';
import PancreatitPochki from '../../patan/pancreatit/PancreatitPochki';
import PnevmoniaOchagPochki from '../../patan/pnevmoniaOchag/PnevmoniaOchagPochki';
import PnevmoniaKrupPochki from '../../patan/pnevmoniaKrup/PnevmoniaKrupPochki';
import MeningitPochki from '../../patan/meningit/MeningitPochki';
import DifteriaPochki from '../../patan/difteria/DifteriaPochki';

function PatanOsnPochki() {

    //Получаем из хранилища состояния пат изменений:
    const gb = useSelector((state) => state.patOsn.gbOsn);
    const saharDiab1 = useSelector((state) => state.patOsn.saharDiab1Osn);
    const saharDiab2 = useSelector((state) => state.patOsn.saharDiab2Osn);
    const covid = useSelector((state) => state.patOsn.covidOsn);
    const gepatB = useSelector((state) => state.patOsn.gepatBOsn);
    const gepatC = useSelector((state) => state.patOsn.gepatCOsn);
    const gripp = useSelector((state) => state.patOsn.grippOsn);
    const tuberc = useSelector((state) => state.patOsn.tubercOsn);
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
    const pnevmoniaOchag = useSelector((state) => state.patOsn.pnevmoniaOchagOsn);
    const pnevmoniaKrup = useSelector((state) => state.patOsn.pnevmoniaKrupOsn);
    const meningit = useSelector((state) => state.patOsn.meningitOsn);
    const difteria = useSelector((state) => state.patOsn.difteriaOsn);

    return (
        <>
             {/* Туберкулез: */}
             {tuberc && <><div className="parentContainerrr"><b><TubercPochki /></b></div>
            <br></br></>}
            {/* Дифтерия: */}
            {difteria && <><div className="parentContainerrr"><b><DifteriaPochki/></b></div>
            <br></br></>}
            {/* Гепатит B: */}
            {gepatB && <><div className="parentContainerrr"><b><GepatBPochki/></b></div>
            <br></br></>}
            {/* Гепатит C: */}
            {gepatC && <><div className="parentContainerrr"><b><GepatСPochki/></b></div>
            <br></br></>}
            {/* Грипп: */}
            {gripp && <><div className="parentContainerrr"><b><GrippPochki/></b></div>
            <br></br></>}
            {/* Covid-19: */}
            {covid && <><div className="parentContainerrr"><b><CovidPochki/></b></div>
            <br></br></>} 
            {/* Железодеф анемия: */}
            {feAnemi && <><div className="parentContainerrr"><b><FeAnemiPochki/></b></div>
            <br></br></>}
             {/* Острая постгеморрагическая анемия: */}
             {postgemAnemi && <><div className="parentContainerrr"><b><PostgemAnemiPochki/></b></div>
            <br></br></>} 
            {/* болезнь Грейвса: */}
            {greyvs && <><div className="parentContainerrr"><b><GreyvsPochki/></b></div>
            <br></br></>} 
            {/* Хошимото: */}
            {hoshimoto && <><div className="parentContainerrr"><b><HoshimotoPochki/></b></div>
            <br></br></>} 
            {/* Сахарный диабет 1: */}
            {saharDiab1 && <><div className="parentContainerrr"><b><SaharDiab1Pochki/></b></div>
            <br></br></>}
            {/* Сахарный диабет 2: */}
            {saharDiab2 && <><div className="parentContainerrr"><b><SaharDiab2Pochki/></b></div>
            <br></br></>}
            {/* Хронический алкоголизм: */}
            {alco && <><div className="parentContainerrr"><b><AlcoPochki/></b></div>
            <br></br></>}
            {/* Менингит: */}
            {meningit && <><div className="parentContainerrr"><b><MeningitPochki/></b></div>
            <br></br></>}
            {/* ГБ: */}
            {gb && <><div className="parentContainerrr"><b><GbPochki/></b></div>
            <br></br></>}
            {/* Инфаркт миокарда: */}
            {infarctMioc && <><div className="parentContainerrr"><b><InfarctMiocPochki/></b></div>
            <br></br></>}
            {/* ХИБС: */}
            {hibs && <><div className="parentContainerrr"><b><HibsPochki/></b></div>
            <br></br></>}
            {/* Сепсис: */}
            {sepsis && <><div className="parentContainerrr"><b><SepsisPochki/></b></div>
            <br></br></>}
            {/* Миокардит: */}
            {miocardit && <><div className="parentContainerrr"><b><MiocarditPochki/></b></div>
            <br></br></>}
            {/* Дилатационная кардиомиопатия: */}
            {dilCardio && <><div className="parentContainerrr"><b><DilCardioPochki/></b></div>
            <br></br></>}
            {/* Гипертрофическая кардиомиопатия: */}
            {gipCardio && <><div className="parentContainerrr"><b><GipCardioPochki/></b></div>
            <br></br></>}
            {/* Геморрагический инсульт: */}
            {gemInsult && <><div className="parentContainerrr"><b><GemInsultPochki/></b></div>
            <br></br></>}
            {/* Ишемический инсульт: */}
            {ishInsult && <><div className="parentContainerrr"><b><IshInsultPochki/></b></div>
            <br></br></>}
            {/* Крупозная пневмония: */}
            {pnevmoniaKrup && <><div className="parentContainerrr"><b><PnevmoniaKrupPochki/></b></div>
            <br></br></>}
            {/* Очаговая пневмония: */}
            {pnevmoniaOchag && <><div className="parentContainerrr"><b><PnevmoniaOchagPochki/></b></div>
            <br></br></>}
            {/* Панкреатит: */}
            {pancreatit && <><div className="parentContainerrr"><b><PancreatitPochki/></b></div>
            <br></br></>} 
            {/* О. гломерулонефрит: */}     
            {oglomerulo && <><div className="parentContainerrr"><b><OglomeruloPochki/></b></div>
            <br></br></>}      
            {/* Хронический пиелонефрит: */}     
            {hronPielo && <><div className="parentContainerrr"><b><HronPieloPochki/></b></div>
            <br></br></>}      
            {/* МКБ: */}     
            {mkb && <><div className="parentContainerrr"><b><MkbPochki/></b></div>
            <br></br></>}      
        </>
    );
}

export default PatanOsnPochki;