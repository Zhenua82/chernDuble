import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import SifilisKosti from '../../patan/sifilis/SifilisKosti';
import TubercKosti from '../../patan/tuberc/TubercKosti';
import FeAnemiKosti from '../../patan/feAnemi/FeAnemiKosti';
import PostgemAnemiKosti from '../../patan/postgemAnemi/PostgemAnemiKosti';
import SepsisKosti from '../../patan/sepsis/SepsisKosti';
import PnevmoniaKrupKosti from '../../patan/pnevmoniaKrup/PnevmoniaKrupKosti';

function PatanOsnKosti() {

    //Получаем из хранилища состояния пат изменений:
    const sifilis = useSelector((state) => state.patOsn.sifilisOsn);
    const tuberc = useSelector((state) => state.patOsn.tubercOsn);
    const feAnemi = useSelector((state) => state.patOsn.feAnemiOsn);
    const postgemAnemi = useSelector((state) => state.patOsn.postgemAnemiOsn);
    const sepsis = useSelector((state) => state.patOsn.sepsisOsn);
    const pnevmoniaKrup = useSelector((state) => state.patOsn.pnevmoniaKrupOsn);
    
    return (
        <>
            {/* Туберкулез: */}
            {tuberc && <><div className="parentContainerrr"><b><TubercKosti/></b></div>
            <br></br></>}
            {/* Сепсис: */}
            {sepsis && <><div className="parentContainerrr"><b><SepsisKosti/></b></div>
            <br></br></>}
            {/* Сифилис: */}
            {sifilis && <><div className="parentContainerrr"><b><SifilisKosti/></b></div>
            <br></br></>}
            {/* Железодеф анемия: */}
            {feAnemi && <><div className="parentContainerrr"><b><FeAnemiKosti/></b></div>
            <br></br></>} 
            {/* Острая постгеморрагическая анемия: */}
            {postgemAnemi && <><div className="parentContainerrr"><b><PostgemAnemiKosti/></b></div>
            <br></br></>} 
            {/* Крупозная пневмония: */}
            {pnevmoniaKrup && <><div className="parentContainerrr"><b><PnevmoniaKrupKosti/></b></div>
            <br></br></>}
        </>
    );
}

export default PatanOsnKosti;