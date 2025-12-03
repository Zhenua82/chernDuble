import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import TubercMochPuz from '../../patan/tuberc/TubercMochPuz';

function PatanOsnMochPuz() {

    //Получаем из хранилища состояния пат изменений:
    const tuberc = useSelector((state) => state.patOsn.tubercOsn);
    
    return (
        <>
            {/* Туберкулез: */}
            {tuberc && <><div className="parentContainerrr"><b><TubercMochPuz/></b></div>
            <br></br></>}
        </>
    );
}

export default PatanOsnMochPuz;