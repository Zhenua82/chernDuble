import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import TubercBrushina from '../../patan/tuberc/TubercBrushina';
import KronaBrushina from '../../patan/krona/KronaBrushina';
import HoshimotoBrushina from '../../patan/hoshimoto/HoshimotoBrushina';
import PancreatitBrushina from '../../patan/pancreatit/PancreatitBrushina';
import PeritonitBrushina from '../../patan/peritonit/PeritonitBrushina';
import YazvaBrushina from '../../patan/yazva/YazvaBrushina';
import HolecistitBrushina from '../../patan/holecistit/HolecistitBrushina';

import OperitonitBrushina from '../../prichinySmerti/operitonit/OperitonitBrushina';

function PatanBrushina() {

    //Получаем из хранилища состояния пат изменений:
    
    const tuberc = useSelector((state) => state.pat.tuberc);
    const krona = useSelector((state) => state.pat.krona);
    const hoshimoto = useSelector((state) => state.pat.hoshimoto);
    const pancreatit = useSelector((state) => state.pat.pancreatit);
    const peritonit = useSelector((state) => state.pat.peritonit);
    const yazva = useSelector((state) => state.pat.yazva);
    const holecistit = useSelector((state) => state.pat.holecistit);

    const operitonit = useSelector((state) => state.prichinySmerti.operitonit);
    
    // const ushibRanaNoogr = useSelector((state) => state.dopPovrezhden.ushibRanaNoogr);
    
    return (
        <>
            {/* Туберкулез: */}
            {tuberc && <><TubercBrushina/>
            <br></br></>}
            {/* Хашимото: */}
            {hoshimoto && <><HoshimotoBrushina/>
            <br></br></>}
             {/* ЯБ: */}
             {yazva && <><YazvaBrushina/>
            <br></br></>} 
            {/* болезнь Крона: */}
            {krona && <><KronaBrushina/>
            <br></br></>}
            {/* Перитонит: */}
            {peritonit && <><PeritonitBrushina/>
            <br></br></>} 
            {/* Холецистит: */}
            {holecistit && <><HolecistitBrushina/>
            <br></br></>} 
            {/* Панкреатит: */}
            {pancreatit && <><PancreatitBrushina/>
            <br></br></>} 
            {/* Ссадины: */}
            {/* {ssadiny  && <><SsadinyDiagnoz/>
            <br></br></>} */}
            {/* Перитонит: */} 
            {operitonit && <><OperitonitBrushina/>
            <br></br></>} 
        </>
    );
}

export default PatanBrushina;