import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import UdavMtshei from '../../sudeb/udav/UdavMtshei';

function SudebMtshei() {
    //Получаем из хранилища состояния пат изменений:
    const udav = useSelector((state) => state.sudebOsn.udav);
    
    return (
        <>
            {/* Удавление петлёй: */}
        {udav && <><b><UdavMtshei/></b>
            <br></br></>}
        </>
    );
}

export default SudebMtshei;