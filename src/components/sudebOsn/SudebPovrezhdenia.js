import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import UdavPovrezhdenia from '../../sudeb/udav/UdavPovrezhdenia';

function SudebPovrezhdenia() {
    //Получаем из хранилища состояния пат изменений:
    const udav = useSelector((state) => state.sudebOsn.udav);
    

    return (
        <>
            {/* Удавление петлёй: */}
        {udav && <><b><UdavPovrezhdenia/></b>
            <br></br></>}
        </>
    );
}

export default SudebPovrezhdenia;