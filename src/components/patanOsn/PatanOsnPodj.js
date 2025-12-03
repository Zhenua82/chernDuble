import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import SaharDiab1Podj from '../../patan/saharDiab1/SaharDiab1Podj';
import SaharDiab2Podj from '../../patan/saharDiab2/SaharDiab2Podj';
import TubercPodj from '../../patan/tuberc/TubercPodj';
import InfarctMiocPodj from '../../patan/infarctMioc/InfarctMiocPodj';
import AlcoPodj from '../../patan/alco/AlcoPodj';
import MiocarditPodj from '../../patan/miocardit/MiocarditPodj';
import PancreatitPodj from '../../patan/pancreatit/PancreatitPodj';
import YazvaPodj from '../../patan/yazva/YazvaPodj';
import HolecistitPodj from '../../patan/holecistit/HolecistitPodj';

function PatanOsnPodj() {

    //Получаем из хранилища состояния пат изменений:
    const saharDiab1 = useSelector((state) => state.patOsn.saharDiab1Osn);
    const saharDiab2 = useSelector((state) => state.patOsn.saharDiab2Osn);
    const tuberc = useSelector((state) => state.patOsn.tubercOsn);
    const infarctMioc = useSelector((state) => state.patOsn.infarctMiocOsn);
    const alco = useSelector((state) => state.patOsn.alcoOsn);
    const miocardit = useSelector((state) => state.patOsn.miocarditOsn);
    const pancreatit = useSelector((state) => state.patOsn.pancreatitOsn);
    const yazva = useSelector((state) => state.patOsn.yazvaOsn);
    const holecistit = useSelector((state) => state.patOsn.holecistitOsn);

    return (
        <>
            {/* Туберкулез: */}
            {tuberc && <><div className="parentContainerrr"><b><TubercPodj/></b></div>
            <br></br></>}
            {/* Сахарный диабет 1: */}
            {saharDiab1 && <><div className="parentContainerrr"><b><SaharDiab1Podj/></b></div>
            <br></br></>}
            {/* Сахарный диабет 2: */}
            {saharDiab2 && <><div className="parentContainerrr"><b><SaharDiab2Podj/></b></div>
            <br></br></>}
             {/* Хронический алкоголизм: */}
             {alco && <><div className="parentContainerrr"><b><AlcoPodj/></b></div>
            <br></br></>}
            {/* Инфаркт миокарда: */}
            {infarctMioc && <><div className="parentContainerrr"><b><InfarctMiocPodj/></b></div>
            <br></br></>}
            {/* Миокардит: */}
            {miocardit && <><div className="parentContainerrr"><b><MiocarditPodj/></b></div>
            <br></br></>}
             {/* ЯБ: */}
             {yazva && <><div className="parentContainerrr"><b><YazvaPodj/></b></div>
            <br></br></>} 
            {/* Холецистит: */}
            {holecistit && <><div className="parentContainerrr"><b><HolecistitPodj/></b></div>
            <br></br></>} 
            {/* Панкреатит: */}
            {pancreatit && <><div className="parentContainerrr"><b><PancreatitPodj/></b></div>
            <br></br></>} 
        </>
    );
}

export default PatanOsnPodj;