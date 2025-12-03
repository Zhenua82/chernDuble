import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import SaharDiab1Pechen from '../../patan/saharDiab1/SaharDiab1Pechen';
import SaharDiab2Pechen from '../../patan/saharDiab2/SaharDiab2Pechen';
import VichPechen from '../../patan/vich/VichPechen';
import CovidPechen from '../../patan/covid/CovidPechen';
import GepatBPechen from '../../patan/gepatB/GepatBPechen';
import GepatCPechen from '../../patan/gepatС/GepatCPechen';
import SifilisPechen from '../../patan/sifilis/SifilisPechen';
import TubercPechen from '../../patan/tuberc/TubercPechen';
import KronaPechen from '../../patan/krona/KronaPechen';
import NjakPechen from '../../patan/njak/NjakPechen';
import GreyvsPechen from '../../patan/greyvs/GreyvsPechen';
import HoshimotoPechen from '../../patan/hoshimoto/HoshimotoPechen';
import OglomeruloPechen from '../../patan/oglomerulo/OglomeruloPechen';
import FeAnemiPechen from '../../patan/feAnemi/FeAnemiPechen';
import PostgemAnemiPechen from '../../patan/postgemAnemi/PostgemAnemiPechen';
import IshInsultPechen from '../../patan/ishInsult/IshInsultPechen';
import GemInsultPechen from '../../patan/gemInsult/GemInsultPechen';
import InfarctMiocPechen from '../../patan/infarctMioc/InfarctMiocPechen';
import AlcoPechen from '../../patan/alco/AlcoPechen';
import DilCardioPechen from '../../patan/dilCardio/DilCardioPechen';
import GipCardioPechen from '../../patan/gipCardio/GipCardioPechen';
import MiocarditPechen from '../../patan/miocardit/MiocarditPechen';
import SepsisPechen from '../../patan/sepsis/SepsisPechen';
import HibsPechen from '../../patan/hibs/HibsPechen';
import PancreatitPechen from '../../patan/pancreatit/PancreatitPechen';
import PnevmoniaInterstPechen from '../../patan/pnevmoniaInterst/PnevmoniaInterstPechen';
import PnevmoniaKrupPechen from '../../patan/pnevmoniaKrup/PnevmoniaKrupPechen';
import HoblPechen from '../../patan/hobl/HoblPechen';
import AstmaPechen from '../../patan/astma/AstmaPechen';
import PeritonitPechen from '../../patan/peritonit/PeritonitPechen';
import YazvaPechen from '../../patan/yazva/YazvaPechen';
import MeningitPechen from '../../patan/meningit/MeningitPechen';
import DifteriaPechen from '../../patan/difteria/DifteriaPechen';
import HolecistitPechen from '../../patan/holecistit/HolecistitPechen';

function PatanOsnPechen() {

    //Получаем из хранилища состояния пат изменений:
    const saharDiab1 = useSelector((state) => state.patOsn.saharDiab1Osn);
    const saharDiab2 = useSelector((state) => state.patOsn.saharDiab2Osn);
    const vich = useSelector((state) => state.patOsn.vichOsn);
    const covid = useSelector((state) => state.patOsn.covidOsn);
    const gepatB = useSelector((state) => state.patOsn.gepatBOsn);
    const gepatC = useSelector((state) => state.patOsn.gepatCOsn);
    const sifilis = useSelector((state) => state.patOsn.sifilisOsn);
    const tuberc = useSelector((state) => state.patOsn.tubercOsn);
    const krona = useSelector((state) => state.patOsn.kronaOsn);
    const njak = useSelector((state) => state.patOsn.njakOsn);
    const greyvs = useSelector((state) => state.patOsn.greyvsOsn);
    const hoshimoto = useSelector((state) => state.patOsn.hoshimotoOsn);
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
    const pancreatit = useSelector((state) => state.patOsn.pancreatitOsn);
    const pnevmoniaInterst = useSelector((state) => state.patOsn.pnevmoniaInterstOsn);
    const pnevmoniaKrup = useSelector((state) => state.patOsn.pnevmoniaKrupOsn);
    const hobl = useSelector((state) => state.patOsn.hoblOsn);
    const astma = useSelector((state) => state.patOsn.astmaOsn);
    const peritonit = useSelector((state) => state.patOsn.peritonitOsn);
    const yazva = useSelector((state) => state.patOsn.yazvaOsn);
    const meningit = useSelector((state) => state.patOsn.meningitOsn);
    const difteria = useSelector((state) => state.patOsn.difteriaOsn);
    const holecistit = useSelector((state) => state.patOsn.holecistitOsn);
    
    
    return (
        <>
            {/* Туберкулез: */}
            {tuberc && <><div className="parentContainerrr"><b><TubercPechen /></b></div>
            <br></br></>}
            {/* Дифтерия: */}
            {difteria && <><div className="parentContainerrr"><b><DifteriaPechen/></b></div>
            <br></br></>}
            {/* Сифилис: */}
            {sifilis && <><div className="parentContainerrr"><b><SifilisPechen/></b></div>
            <br></br></>}
            {/* Гепатит B: */}
            {gepatB && <><div className="parentContainerrr"><b><GepatBPechen/></b></div>
            <br></br></>}
            {/* Гепатит C: */}
            {gepatC && <><div className="parentContainerrr"><b><GepatCPechen/></b></div>
            <br></br></>}
            {/* ВИЧ: */}
            {vich && <><div className="parentContainerrr"><b><VichPechen/></b></div>
            <br></br></>}
            {/* Covid-19: */}
            {covid && <><div className="parentContainerrr"><b><CovidPechen/></b></div>
            <br></br></>} 
            {/* Железодеф анемия: */}
            {feAnemi && <><div className="parentContainerrr"><b><FeAnemiPechen/></b></div>
            <br></br></>}
             {/* Острая постгеморрагическая анемия: */}
             {postgemAnemi && <><div className="parentContainerrr"><b><PostgemAnemiPechen/></b></div>
            <br></br></>} 
            {/* болезнь Грейвса: */}
            {greyvs && <><div className="parentContainerrr"><b><GreyvsPechen/></b></div>
            <br></br></>} 
            {/* Хошимото: */}
            {hoshimoto && <><div className="parentContainerrr"><b><HoshimotoPechen/></b></div>
            <br></br></>} 
            {/* Сахарный диабет 1: */}
            {saharDiab1 && <><div className="parentContainerrr"><b><SaharDiab1Pechen/></b></div>
            <br></br></>}
            {/* Сахарный диабет 2: */}
            {saharDiab2 && <><div className="parentContainerrr"><b><SaharDiab2Pechen/></b></div>
            <br></br></>}
            {/* Хронический алкоголизм: */}
            {alco && <><div className="parentContainerrr"><b><AlcoPechen/></b></div>
            <br></br></>}
            {/* Менингит: */}
            {meningit && <><div className="parentContainerrr"><b><MeningitPechen/></b></div>
            <br></br></>}
            {/* Инфаркт миокарда: */}
            {infarctMioc && <><div className="parentContainerrr"><b><InfarctMiocPechen/></b></div>
            <br></br></>}
            {/* ХИБС: */}
            {hibs && <><div className="parentContainerrr"><b><HibsPechen/></b></div>
            <br></br></>}
            {/* Сепсис: */}
            {sepsis && <><div className="parentContainerrr"><b><SepsisPechen/></b></div>
            <br></br></>}
            {/* Миокардит: */}
            {miocardit && <><div className="parentContainerrr"><b><MiocarditPechen/></b></div>
            <br></br></>}
            {/* Дилатационная кардиомиопатия: */}
            {dilCardio && <><div className="parentContainerrr"><b><DilCardioPechen/></b></div>
            <br></br></>}
            {/* Гипертрофическая кардиомиопатия: */}
            {gipCardio && <><div className="parentContainerrr"><b><GipCardioPechen/></b></div>
            <br></br></>}
            {/* Геморрагический инсульт: */}
            {gemInsult && <><div className="parentContainerrr"><b><GemInsultPechen/></b></div>
            <br></br></>}
            {/* Ишемический инсульт: */}
            {ishInsult && <><div className="parentContainerrr"><b><IshInsultPechen/></b></div>
            <br></br></>}
            {/* Крупозная пневмония: */}
            {pnevmoniaKrup && <><div className="parentContainerrr"><b><PnevmoniaKrupPechen/></b></div>
            <br></br></>}
            {/* Интерстициальная пневмония: */}
            {pnevmoniaInterst && <><div className="parentContainerrr"><b><PnevmoniaInterstPechen/></b></div>
            <br></br></>}
            {/* ХОБЛ: */}
            {hobl && <><div className="parentContainerrr"><b><HoblPechen/></b></div>
            <br></br></>}
            {/* Астма: */}
            {astma && <><div className="parentContainerrr"><b><AstmaPechen/></b></div>
            <br></br></>}
            {/* ЯБ: */}
            {yazva && <><div className="parentContainerrr"><b><YazvaPechen/></b></div>
            <br></br></>}      
            {/* болезнь Крона: */}
            {krona && <><div className="parentContainerrr"><b><KronaPechen/></b></div>
            <br></br></>}      
            {/* НЯК: */}
            {njak && <><div className="parentContainerrr"><b><NjakPechen/></b></div>
            <br></br></>} 
            {/* Перитонит: */}
            {peritonit && <><div className="parentContainerrr"><b><PeritonitPechen/></b></div>
            <br></br></>} 
            {/* Холецистит: */}
            {holecistit && <><div className="parentContainerrr"><b><HolecistitPechen/></b></div>
            <br></br></>} 
            {/* Панкреатит: */}
            {pancreatit && <><div className="parentContainerrr"><b><PancreatitPechen/></b></div>
            <br></br></>} 
            {/* О. гломерулонефрит: */}     
            {oglomerulo && <><div className="parentContainerrr"><b><OglomeruloPechen/></b></div>
            <br></br></>}      
        </>
    );
}

export default PatanOsnPechen;