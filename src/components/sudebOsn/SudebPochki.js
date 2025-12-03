import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import AlcoOtrPochki from '../../sudeb/alcoOtr/AlcoOtrPochki';
import UdavPochki from '../../sudeb/udav/UdavPochki';

function SudebPochki() {
    //Получаем из хранилища состояния пат изменений:
    const alcoOtr = useSelector((state) => state.sudebOsn.alcoOtr);
    const udav = useSelector((state) => state.sudebOsn.udav);
    
    return (
        <>
        {/* Отравление этанолом: */}
        {alcoOtr && <><b><AlcoOtrPochki/></b>
            <br></br></>}
             {/* Удавление петлёй: */}
        {udav && <><b><UdavPochki/></b>
            <br></br></>}
        </>
    );
}

export default SudebPochki;