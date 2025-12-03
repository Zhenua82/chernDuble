import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import UdavVyvody2 from '../../sudeb/udav/UdavVyvody2';

function SudebVyvody2() {
    //Получаем из хранилища состояния пат изменений:
    const udav = useSelector((state) => state.sudebOsn.udav);
    
    return (
        <>
            {/* Удавление петлёй: */}
        {udav && <><b><UdavVyvody2/></b>
            <br></br></>}
        </>
    );
}

export default SudebVyvody2;