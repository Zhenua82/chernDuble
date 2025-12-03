import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import TubercKishki from '../../patan/tuberc/TubercKishki';
import KronaKishki from '../../patan/krona/KronaKishki';
import NjakKishki from '../../patan/njak/NjakKishki';
import FeAnemiKishki from '../../patan/feAnemi/FeAnemiKishki';
import PostgemAnemiKishki from '../../patan/postgemAnemi/PostgemAnemiKishki';
import IshInsultKishki from '../../patan/ishInsult/IshInsultKishki';
import GemInsultKishki from '../../patan/gemInsult/GemInsultKishki';
import InfarctMiocKishki from '../../patan/infarctMioc/InfarctMiocKishki';
import AlcoKishki from '../../patan/alco/AlcoKishki';
import MiocarditKishki from '../../patan/miocardit/MiocarditKishki';
import SepsisKishki from '../../patan/sepsis/SepsisKishki';
import HibsKishki from '../../patan/hibs/HibsKishki';
import PancreatitKishki from '../../patan/pancreatit/PancreatitKishki';
import PnevmoniaKrupKishki from '../../patan/pnevmoniaKrup/PnevmoniaKrupKishki';
import YazvaKishki from '../../patan/yazva/YazvaKishki';
import HolecistitKishki from '../../patan/holecistit/HolecistitKishki';

function PatanOsnKishki() {

    //Получаем из хранилища состояния пат изменений:
    
    const tuberc = useSelector((state) => state.patOsn.tubercOsn);
    const krona = useSelector((state) => state.patOsn.kronaOsn);
    const njak = useSelector((state) => state.patOsn.njakOsn);
    const feAnemi = useSelector((state) => state.patOsn.feAnemiOsn);
    const postgemAnemi = useSelector((state) => state.patOsn.postgemAnemiOsn);
    const ishInsult = useSelector((state) => state.patOsn.ishInsultOsn);
    const gemInsult = useSelector((state) => state.patOsn.gemInsultOsn);
    const infarctMioc = useSelector((state) => state.patOsn.infarctMiocOsn);
    const alco = useSelector((state) => state.patOsn.alcoOsn);
    const miocardit = useSelector((state) => state.patOsn.miocarditOsn);
    const sepsis = useSelector((state) => state.patOsn.sepsisOsn);
    const hibs = useSelector((state) => state.patOsn.hibsOsn);
    const pancreatit = useSelector((state) => state.patOsn.pancreatitOsn);
    const pnevmoniaKrup = useSelector((state) => state.patOsn.pnevmoniaKrupOsn);
    const yazva = useSelector((state) => state.patOsn.yazvaOsn);
    const holecistit = useSelector((state) => state.patOsn.holecistitOsn);
    
    return (
        <>
            {/* Туберкулез: */}
            {tuberc && <><div className="parentContainerrr"><b><TubercKishki/></b></div>
            <br></br></>}
            {/* Железодеф анемия: */}
            {feAnemi && <><div className="parentContainerrr"><b><FeAnemiKishki/></b></div>
            <br></br></>} 
            {/* Острая постгеморрагическая анемия: */}
            {postgemAnemi && <><div className="parentContainerrr"><b><PostgemAnemiKishki/></b></div>
            <br></br></>}
             {/* Хронический алкоголизм: */}
             {alco && <><div className="parentContainerrr"><b><AlcoKishki/></b></div>
            <br></br></>}
            {/* Инфаркт миокарда: */}
            {infarctMioc && <><div className="parentContainerrr"><b><InfarctMiocKishki/></b></div>
            <br></br></>}
            {/* ХИБС: */}
            {hibs && <><div className="parentContainerrr"><b><HibsKishki/></b></div>
            <br></br></>}
             {/* Сепсис: */}
             {sepsis && <><div className="parentContainerrr"><b><SepsisKishki/></b></div>
            <br></br></>}
            {/* Миокардит: */}
            {miocardit && <><div className="parentContainerrr"><b><MiocarditKishki/></b></div>
            <br></br></>}
            {/* Геморрагический инсульт: */}
            {gemInsult && <><div className="parentContainerrr"><b><GemInsultKishki/></b></div>
            <br></br></>} 
            {/* Ишемический инсульт: */}
            {ishInsult && <><div className="parentContainerrr"><b><IshInsultKishki/></b></div>
            <br></br></>}
            {/* Крупозная пневмония: */}
            {pnevmoniaKrup && <><div className="parentContainerrr"><b><PnevmoniaKrupKishki/></b></div>
            <br></br></>}
             {/* ЯБ: */}
             {yazva && <><div className="parentContainerrr"><b><YazvaKishki/></b></div>
            <br></br></>} 
            {/* болезнь Крона: */}
            {krona && <><div className="parentContainerrr"><b><KronaKishki/></b></div>
            <br></br></>}
            {/* НЯК: */}
            {njak && <><div className="parentContainerrr"><b><NjakKishki/></b></div>
            <br></br></>}
            {/* Холецистит: */}
            {holecistit && <><div className="parentContainerrr"><b><HolecistitKishki/></b></div>
            <br></br></>} 
            {/* Панкреатит: */}
            {pancreatit && <><div className="parentContainerrr"><b><PancreatitKishki/></b></div>
            <br></br></>} 
        </>
    );
}

export default PatanOsnKishki;