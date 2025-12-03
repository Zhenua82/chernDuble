import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:


import TubercMochPuz from '../../patan/tuberc/TubercMochPuz';

function PatanMochPuz() {

    //Получаем из хранилища состояния пат изменений:
    const tuberc = useSelector((state) => state.pat.tuberc);
    // const ushibRanaNoogr = useSelector((state) => state.dopPovrezhden.ushibRanaNoogr);
    

    return (
        <>
            {/* Туберкулез: */}
            {tuberc && <><TubercMochPuz/>
            <br></br></>}
            {/* Ссадины: */}
            {/* {ssadiny  && <><SsadinyDiagnoz/>
            <br></br></>} */}
        </>
    );
}

export default PatanMochPuz;