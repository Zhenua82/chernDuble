import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import GbSerdce from '../../patan/gb/GbSerdceAorta';
import SaharDiab1Serdce from '../../patan/saharDiab1/SaharDiab1Serdce';
import SaharDiab2Serdce from '../../patan/saharDiab2/SaharDiab2Serdce';
import CovidSerdce from '../../patan/covid/CovidSerdce';
import SifilisSerdce from '../../patan/sifilis/SifilisSerdce';
import GrippSerdce from '../../patan/gripp/GrippSerdce';
import TubercSerdce from '../../patan/tuberc/TubercSerdce';
import GreyvsSerdceAorta from '../../patan/greyvs/GreyvsSerdceAorta';
import HoshimotoSerdceAorta from '../../patan/hoshimoto/HoshimotoSerdceAorta';
import OglomeruloSerdce from '../../patan/oglomerulo/OglomeruloSerdce';
import FeAnemiSerdce from '../../patan/feAnemi/FeAnemiSerdce';
import PostgemAnemiSerdce from '../../patan/postgemAnemi/PostgemAnemiSerdce';
import IshInsultSerdce from '../../patan/ishInsult/IshInsultSerdce';
import GemInsultSerdce from '../../patan/gemInsult/GemInsultSerdce';
import InfarctMiocSerdceAorta from '../../patan/infarctMioc/InfarctMiocSerdceAorta';
import AlcoSerdceAorta from '../../patan/alco/AlcoSerdceAorta';
import DilCardioSerdceAorta from '../../patan/dilCardio/DilCardioSerdceAorta';
import GipCardioSerdceAorta from '../../patan/gipCardio/GipCardioSerdceAorta';
import MiocarditSerdceAorta from '../../patan/miocardit/MiocarditSerdceAorta';
import SepsisSerdceAorta from '../../patan/sepsis/SepsisSerdceAorta';
import HibsSerdceAorta from '../../patan/hibs/HibsSerdceAorta';
import PancreatitSerdceAorta from '../../patan/pancreatit/PancreatitSerdceAorta';
import PnevmoniaInterstSerdce from '../../patan/pnevmoniaInterst/PnevmoniaInterstSerdce';
import PnevmoniaOchagSerdce from '../../patan/pnevmoniaOchag/PnevmoniaOchagSerdce';
import PnevmoniaKrupSerdce from '../../patan/pnevmoniaKrup/PnevmoniaKrupSerdce';
import HoblSerdce from '../../patan/hobl/HoblSerdce';
import AstmaSerdce from '../../patan/astma/AstmaSerdce';
import MeningitSerdceAorta from '../../patan/meningit/MeningitSerdceAorta';
import DifteriaSerdceAorta from '../../patan/difteria/DifteriaSerdceAorta';

function PatanOsnSerdceAorta() {

    //Получаем из хранилища состояния пат изменений:
    const gb = useSelector((state) => state.patOsn.gbOsn);
    const saharDiab1 = useSelector((state) => state.patOsn.saharDiab1Osn);
    const saharDiab2 = useSelector((state) => state.patOsn.saharDiab2Osn);
    const covid = useSelector((state) => state.patOsn.covidOsn);
    const sifilis = useSelector((state) => state.patOsn.sifilisOsn);
    const gripp = useSelector((state) => state.patOsn.grippOsn);
    const tuberc = useSelector((state) => state.patOsn.tubercOsn);
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
    const pnevmoniaOchag = useSelector((state) => state.patOsn.pnevmoniaOchagOsn);
    const pnevmoniaKrup = useSelector((state) => state.patOsn.pnevmoniaKrupOsn);
    const hobl = useSelector((state) => state.patOsn.hoblOsn);
    const astma = useSelector((state) => state.patOsn.astmaOsn);
    const meningit = useSelector((state) => state.patOsn.meningitOsn);
    const difteria = useSelector((state) => state.patOsn.difteriaOsn);
    
    
    return (
        <>
             {/* Туберкулез: */}
             {tuberc && <><div className="parentContainerrr"><b><TubercSerdce/></b></div>
            <br></br></>}
            {/* Дифтерия: */}
            {difteria && <><div className="parentContainerrr"><b><DifteriaSerdceAorta/></b></div>
            <br></br></>}
            {/* Сифилис: */}
            {sifilis && <><div className="parentContainerrr"><b><SifilisSerdce/></b></div>
            <br></br></>}
            {/* Грипп: */}
            {gripp && <><div className="parentContainerrr"><b><GrippSerdce/></b></div>
            <br></br></>}
            {/* Covid-19: */}
            {covid && <><div className="parentContainerrr"><b><CovidSerdce/></b></div>
            <br></br></>} 
            {/* Железодеф анемия: */}
            {feAnemi && <><div className="parentContainerrr"><b><FeAnemiSerdce/></b></div>
            <br></br></>}
             {/* Острая постгеморрагическая анемия: */}
             {postgemAnemi && <><div className="parentContainerrr"><b><PostgemAnemiSerdce/></b></div>
            <br></br></>} 
            {/* болезнь Грейвса: */}
            {greyvs && <><div className="parentContainerrr"><b><GreyvsSerdceAorta/></b></div>
            <br></br></>} 
            {/* Хошимото: */}
            {hoshimoto && <><div className="parentContainerrr"><b><HoshimotoSerdceAorta/></b></div>
            <br></br></>} 
            {/* Сахарный диабет 1: */}
            {saharDiab1 && <><div className="parentContainerrr"><b><SaharDiab1Serdce/></b></div>
            <br></br></>}
            {/* Сахарный диабет 2: */}
            {saharDiab2 && <><div className="parentContainerrr"><b><SaharDiab2Serdce/></b></div>
            <br></br></>}
            {/* Хронический алкоголизм: */}
            {alco && <><div className="parentContainerrr"><b><AlcoSerdceAorta/></b></div>
            <br></br></>}
            {/* Менингит: */}
            {meningit && <><div className="parentContainerrr"><b><MeningitSerdceAorta/></b></div>
            <br></br></>}
            {/* ГБ: */}
            {gb && <><div className="parentContainerrr"><b><GbSerdce/></b></div>
            <br></br></>}
            {/* Инфаркт миокарда: */}
            {infarctMioc && <><div className="parentContainerrr"><b><InfarctMiocSerdceAorta/></b></div>
            <br></br></>}
            {/* ХИБС: */}
            {hibs && <><div className="parentContainerrr"><b><HibsSerdceAorta/></b></div>
            <br></br></>}
            {/* Сепсис: */}
            {sepsis && <><div className="parentContainerrr"><b><SepsisSerdceAorta/></b></div>
            <br></br></>}
            {/* Миокардит: */}
            {miocardit && <><div className="parentContainerrr"><b><MiocarditSerdceAorta/></b></div>
            <br></br></>}
            {/* Дилатационная кардиомиопатия: */}
            {dilCardio && <><div className="parentContainerrr"><b><DilCardioSerdceAorta/></b></div>
            <br></br></>}
            {/* Гипертрофическая кардиомиопатия: */}
            {gipCardio && <><div className="parentContainerrr"><b><GipCardioSerdceAorta/></b></div>
            <br></br></>}
            {/* Геморрагический инсульт: */}
            {gemInsult && <><div className="parentContainerrr"><b><GemInsultSerdce/></b></div>
            <br></br></>}
            {/* Ишемический инсульт: */}
            {ishInsult && <><div className="parentContainerrr"><b><IshInsultSerdce/></b></div>
            <br></br></>}
            {/* Крупозная пневмония: */}
            {pnevmoniaKrup && <><div className="parentContainerrr"><b><PnevmoniaKrupSerdce/></b></div>
            <br></br></>}
            {/* Очаговая пневмония: */}
            {pnevmoniaOchag && <><div className="parentContainerrr"><b><PnevmoniaOchagSerdce/></b></div>
            <br></br></>}
            {/* Интерстициальная пневмония: */}
            {pnevmoniaInterst && <><div className="parentContainerrr"><b><PnevmoniaInterstSerdce/></b></div>
            <br></br></>}
            {/* ХОБЛ: */}
            {hobl && <><div className="parentContainerrr"><b><HoblSerdce/></b></div>
            <br></br></>}
            {/* Астма: */}
            {astma && <><div className="parentContainerrr"><b><AstmaSerdce/></b></div>
            <br></br></>}
            {/* Панкреатит: */}
            {pancreatit && <><div className="parentContainerrr"><b><PancreatitSerdceAorta/></b></div>
            <br></br></>} 
            {/* О. гломерулонефрит: */}     
            {oglomerulo && <><div className="parentContainerrr"><b><OglomeruloSerdce/></b></div>
            <br></br></>}      
        </>
    );
}

export default PatanOsnSerdceAorta;