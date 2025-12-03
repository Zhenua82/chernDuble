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

function PatanPodj() {

    //Получаем из хранилища состояния пат изменений:
    const saharDiab1 = useSelector((state) => state.pat.saharDiab1);
    const saharDiab2 = useSelector((state) => state.pat.saharDiab2);
    const tuberc = useSelector((state) => state.pat.tuberc);
    const infarctMioc = useSelector((state) => state.pat.infarctMioc);
    const alco = useSelector((state) => state.pat.alco);
    const miocardit = useSelector((state) => state.pat.miocardit);
    const pancreatit = useSelector((state) => state.pat.pancreatit);
    const yazva = useSelector((state) => state.pat.yazva);
    const holecistit = useSelector((state) => state.pat.holecistit);
    // const bampPerelom = useSelector((state) => state.dopPovrezhden.bampPerelom);

    return (
        <>
            {/* Туберкулез: */}
            {tuberc && <><TubercPodj/>
            <br></br></>}
            {/* Сахарный диабет 1: */}
            {saharDiab1 && <><SaharDiab1Podj/>
            <br></br></>}
            {/* Сахарный диабет 2: */}
            {saharDiab2 && <><SaharDiab2Podj/>
            <br></br></>}
             {/* Хронический алкоголизм: */}
             {alco && <><AlcoPodj/>
            <br></br></>}
            {/* Инфаркт миокарда: */}
            {infarctMioc && <><InfarctMiocPodj/>
            <br></br></>}
            {/* Миокардит: */}
            {miocardit && <><MiocarditPodj/>
            <br></br></>}
             {/* ЯБ: */}
             {yazva && <><YazvaPodj/>
            <br></br></>} 
            {/* Холецистит: */}
            {holecistit && <><HolecistitPodj/>
            <br></br></>} 
            {/* Панкреатит: */}
            {pancreatit && <><PancreatitPodj/>
            <br></br></>} 
            {/* Ссадины: */}
            {/* {ssadiny  && <><SsadinyDiagnoz/>
            <br></br></>} */}
        </>
    );
}

export default PatanPodj;