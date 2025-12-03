import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import SifilisKosti from '../../patan/sifilis/SifilisKosti';
import TubercKosti from '../../patan/tuberc/TubercKosti';
import FeAnemiKosti from '../../patan/feAnemi/FeAnemiKosti';
import PostgemAnemiKosti from '../../patan/postgemAnemi/PostgemAnemiKosti';
import SepsisKosti from '../../patan/sepsis/SepsisKosti';
import PnevmoniaKrupKosti from '../../patan/pnevmoniaKrup/PnevmoniaKrupKosti';

function PatanKosti() {

    //Получаем из хранилища состояния пат изменений:
    const sifilis = useSelector((state) => state.pat.sifilis);
    const tuberc = useSelector((state) => state.pat.tuberc);
    const feAnemi = useSelector((state) => state.pat.feAnemi);
    const postgemAnemi = useSelector((state) => state.pat.postgemAnemi);
    const sepsis = useSelector((state) => state.pat.sepsis);
    const pnevmoniaKrup = useSelector((state) => state.pat.pnevmoniaKrup);
    
    // const ushibRanaNoogr = useSelector((state) => state.dopPovrezhden.ushibRanaNoogr);
    
    return (
        <>
            {/* Туберкулез: */}
            {tuberc && <><TubercKosti/>
            <br></br></>}
            {/* Сепсис: */}
            {sepsis && <><SepsisKosti/>
            <br></br></>}
            {/* Сифилис: */}
            {sifilis && <><SifilisKosti/>
            <br></br></>}
            {/* Железодеф анемия: */}
            {feAnemi && <><FeAnemiKosti/>
            <br></br></>} 
            {/* Острая постгеморрагическая анемия: */}
            {postgemAnemi && <><PostgemAnemiKosti/>
            <br></br></>} 
            {/* Крупозная пневмония: */}
            {pnevmoniaKrup && <><PnevmoniaKrupKosti/>
            <br></br></>}
            {/* Ссадины: */}
            {/* {ssadiny  && <><SsadinyDiagnoz/>
            <br></br></>} */}
        </>
    );
}

export default PatanKosti;