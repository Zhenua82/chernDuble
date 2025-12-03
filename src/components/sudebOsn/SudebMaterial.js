import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import UdavMaterial from '../../sudeb/udav/UdavMaterial';

function SudebMaterial() {
    //Получаем из хранилища состояния пат изменений:
    const udav = useSelector((state) => state.sudebOsn.udav);
    

    return (
        <>
            {/* Удавление петлёй: */}
        {udav && <><b><UdavMaterial/></b>
            <br></br></>}
        </>
    );
}

export default SudebMaterial;