import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import GreyvsShit from '../../patan/greyvs/GreyvsShit';
import HoshimotoShit from '../../patan/hoshimoto/HoshimotoShit';
import FeAnemiShit from '../../patan/feAnemi/FeAnemiShit';

function PatanShit() {

    //Получаем из хранилища состояния пат изменений:
    
    const greyvs = useSelector((state) => state.pat.greyvs);
    const hoshimoto = useSelector((state) => state.pat.hoshimoto);
    const feAnemi = useSelector((state) => state.pat.feAnemi);
    
    // const ushibRanaNoogr = useSelector((state) => state.dopPovrezhden.ushibRanaNoogr);
    
    return (
        <>
            {/* Железодеф анемия: */}
            {feAnemi && <><FeAnemiShit/>
            <br></br></>} 
            {/* болезнь Грейвса: */}
            {greyvs && <><GreyvsShit/>
            <br></br></>}         
            {/* Хашимото: */}
            {hoshimoto && <><HoshimotoShit/>
            <br></br></>}         
            {/* Ссадины: */}
            {/* {ssadiny  && <><SsadinyDiagnoz/>
            <br></br></>} */}
        </>
    );
}

export default PatanShit;