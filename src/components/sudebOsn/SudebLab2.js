import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import UdavLab2 from '../../sudeb/udav/UdavLab2';

function SudebLab2() {
    //Получаем из хранилища состояния пат изменений:
    const udav = useSelector((state) => state.sudebOsn.udav);
    
    return (
        <>
             {/* Удавление петлёй: */}
        {udav && <><b><UdavLab2/></b>
            <br></br></>}
        </>
    );
}

export default SudebLab2;