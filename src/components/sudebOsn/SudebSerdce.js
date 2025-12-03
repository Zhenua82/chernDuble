import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import AlcoOtrSerdce from '../../sudeb/alcoOtr/AlcoOtrSerdce';
import UdavSerdce from '../../sudeb/udav/UdavSerdce';

function SudebSerdce() {
    //Получаем из хранилища состояния пат изменений:
    const alcoOtr = useSelector((state) => state.sudebOsn.alcoOtr);
    const udav = useSelector((state) => state.sudebOsn.udav);
    
    return (
        <>
        {/* Отравление этанолом: */}
        {alcoOtr && <><b><AlcoOtrSerdce/></b>
            <br></br></>}
             {/* Удавление петлёй: */}
        {udav && <><b><UdavSerdce/></b>
            <br></br></>}
        </>
    );
}

export default SudebSerdce;