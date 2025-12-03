import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import TubercBrushina from '../../patan/tuberc/TubercBrushina';
import KronaBrushina from '../../patan/krona/KronaBrushina';
import HoshimotoBrushina from '../../patan/hoshimoto/HoshimotoBrushina';
import PancreatitBrushina from '../../patan/pancreatit/PancreatitBrushina';
import PeritonitBrushina from '../../patan/peritonit/PeritonitBrushina';
import YazvaBrushina from '../../patan/yazva/YazvaBrushina';
import HolecistitBrushina from '../../patan/holecistit/HolecistitBrushina';

function PatanOsnBrushina() {

    //Получаем из хранилища состояния пат изменений:  
    const tubercOsn = useSelector((state) => state.patOsn.tubercOsn);
    const kronaOsn = useSelector((state) => state.patOsn.kronaOsn);
    const hoshimotoOsn = useSelector((state) => state.patOsn.hoshimotoOsn);
    const pancreatitOsn = useSelector((state) => state.patOsn.pancreatitOsn);
    const peritonitOsn = useSelector((state) => state.patOsn.peritonitOsn);
    const yazvaOsn = useSelector((state) => state.patOsn.yazvaOsn);
    const holecistitOsn = useSelector((state) => state.patOsn.holecistitOsn);
    
    return (
        <>
            {/* Туберкулез: */}
            {tubercOsn && <><div className="parentContainerrr"><b><TubercBrushina/></b></div>
            <br></br></>}
            {/* Хашимото: */}
            {hoshimotoOsn && <><div className="parentContainerrr"><b><HoshimotoBrushina/></b></div>
            <br></br></>}
             {/* ЯБ: */}
             {yazvaOsn && <><div className="parentContainerrr"><b><YazvaBrushina/></b></div>
            <br></br></>} 
            {/* болезнь Крона: */}
            {kronaOsn && <><div className="parentContainerrr"><b><KronaBrushina/></b></div>
            <br></br></>}
            {/* Перитонит: */}
            {peritonitOsn && <><div className="parentContainerrr"><b><PeritonitBrushina/></b></div>
            <br></br></>} 
            {/* Холецистит: */}
            {holecistitOsn && <><div className="parentContainerrr"><b><HolecistitBrushina/></b></div>
            <br></br></>} 
            {/* Панкреатит: */}
            {pancreatitOsn && <><div className="parentContainerrr"><b><PancreatitBrushina/></b></div>
            <br></br></>} 
        </>
    );
}

export default PatanOsnBrushina;