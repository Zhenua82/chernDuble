import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import GbGm from '../../patan/gb/GbGm';
import VichGm from '../../patan/vich/VichGm';
import CovidGm from '../../patan/covid/CovidGm';
import SifilisGm from '../../patan/sifilis/SifilisGm';
import GrippGm from '../../patan/gripp/GrippGm';
import TubercGm from '../../patan/tuberc/TubercGm';
import HoshimotoGm from '../../patan/hoshimoto/HoshimotoGm';
import GemInsultGm from '../../patan/gemInsult/GemInsultGm';
import OglomeruloGm from '../../patan/oglomerulo/OglomeruloGm';
import PostgemAnemiGm from '../../patan/postgemAnemi/PostgemAnemiGm';
import IshInsultGm from '../../patan/ishInsult/IshInsultGm';
import InfarctMiocGm from '../../patan/infarctMioc/InfarctMiocGm';
import AlcoGm from '../../patan/alco/AlcoGm';
import DilCardioGm from '../../patan/dilCardio/DilCardioGm';
import GipCardioGm from '../../patan/gipCardio/GipCardioGm';
import MiocarditGm from '../../patan/miocardit/MiocarditGm';
import SepsisGm from '../../patan/sepsis/SepsisGm';
import HibsGm from '../../patan/hibs/HibsGm';
import PnevmoniaOchagGm from '../../patan/pnevmoniaOchag/PnevmoniaOchagGm';
import PnevmoniaKrupGm from '../../patan/pnevmoniaKrup/PnevmoniaKrupGm';
import MeningitGm from '../../patan/meningit/MeningitGm';
import DifteriaGm from '../../patan/difteria/DifteriaGm';
import RsGm from '../../patan/rs/RsGm';

function PatanOsnGm() {

    //Получаем из хранилища состояния пат изменений:
    const gb = useSelector((state) => state.patOsn.gbOsn);
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
    const pnevmoniaOchag = useSelector((state) => state.patOsn.pnevmoniaOchagOsn);
    const pnevmoniaKrup = useSelector((state) => state.patOsn.pnevmoniaKrupOsn);
    const meningit = useSelector((state) => state.patOsn.meningitOsn);
    const difteria = useSelector((state) => state.patOsn.difteriaOsn);
    const rs = useSelector((state) => state.patOsn.rsOsn);
    
    return (
        <>
            {/* Туберкулез: */}
            {tuberc && <><div className="parentContainerrr"><b><TubercGm/></b></div>
            <br></br></>}
            {/* Дифтерия: */}
            {difteria && <><div className="parentContainerrr"><b><DifteriaGm/></b></div>
            <br></br></>}
             {/* Сифилис: */}
             {sifilis && <><div className="parentContainerrr"><b><SifilisGm/></b></div>
            <br></br></>}
            {/* ВИЧ: */}
            {vich && <><div className="parentContainerrr"><b><VichGm/></b></div>
            <br></br></>}
            {/* Грипп: */}
            {gripp && <><div className="parentContainerrr"><b><GrippGm/></b></div>
            <br></br></>}
             {/* Covid-19: */}
             {covid && <><div className="parentContainerrr"><b><CovidGm/></b></div>
            <br></br></>}
            {/* Острая постгеморрагическая анемия: */}
            {postgemAnemi && <><div className="parentContainerrr"><b><PostgemAnemiGm/></b></div>
            <br></br></>} 
             {/* Хашимото: */}
             {hoshimoto && <><div className="parentContainerrr"><b><HoshimotoGm/></b></div>
            <br></br></>}
             {/* Хронический алкоголизм: */}
             {alco && <><div className="parentContainerrr"><b><AlcoGm/></b></div>
            <br></br></>}
            {/* Менингит: */}
            {meningit && <><div className="parentContainerrr"><b><MeningitGm/></b></div>
            <br></br></>}
            {/* Рассеянный склероз: */}
            {rs && <><div className="parentContainerrr"><b><RsGm/></b></div>
            <br></br></>}
            {/* ГБ: */}
            {gb && <><div className="parentContainerrr"><b><GbGm/></b></div>
            <br></br></>}  
            {/* Инфаркт миокарда: */}
            {infarctMioc && <><div className="parentContainerrr"><b><InfarctMiocGm/></b></div>
            <br></br></>} 
            {/* ХИБС: */}
            {hibs && <><div className="parentContainerrr"><b><HibsGm/></b></div>
            <br></br></>}
            {/* Сепсис: */}
            {sepsis && <><div className="parentContainerrr"><b><SepsisGm/></b></div>
            <br></br></>}
            {/* Миокардит: */}
            {miocardit && <><div className="parentContainerrr"><b><MiocarditGm/></b></div>
            <br></br></>}
            {/* Дилатационная кардиомиопатия: */}
            {dilCardio && <><div className="parentContainerrr"><b><DilCardioGm/></b></div>
            <br></br></>} 
            {/* Гипертрофическая кардиомиопатия: */}
            {gipCardio && <><div className="parentContainerrr"><b><GipCardioGm/></b></div>
            <br></br></>}      
            {/* Геморрагический инсульт: */}
            {gemInsult && <><div className="parentContainerrr"><b><GemInsultGm/></b></div>
            <br></br></>} 
            {/* Ишемический инсульт: */}
            {ishInsult && <><div className="parentContainerrr"><b><IshInsultGm/></b></div>
            <br></br></>} 
            {/* Крупозная пневмония: */}
            {pnevmoniaKrup && <><div className="parentContainerrr"><b><PnevmoniaKrupGm/></b></div>
            <br></br></>}
            {/* Очаговая пневмония: */}
            {pnevmoniaOchag && <><div className="parentContainerrr"><b><PnevmoniaOchagGm/></b></div>
            <br></br></>}        
            {/* О. гломерулонефрит: */}
            {oglomerulo && <><div className="parentContainerrr"><b><OglomeruloGm/></b></div>
            <br></br></>}          
        </>
    );
}

export default PatanOsnGm;