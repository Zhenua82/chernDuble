import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import AlcoOtrLungs from '../../sudeb/alcoOtr/AlcoOtrLungs';
import UdavLungs from '../../sudeb/udav/UdavLungs';

function SudebLungs() {
    //Получаем из хранилища состояния пат изменений:
    const alcoOtr = useSelector((state) => state.sudebOsn.alcoOtr);
    const udav = useSelector((state) => state.sudebOsn.udav);
    
    return (
        <>
        {/* Отравление этанолом: */}
        {alcoOtr && <><b><AlcoOtrLungs/></b>
            <br></br></>}
             {/* Удавление петлёй: */}
        {udav && <><b><UdavLungs/></b>
            <br></br></>}
        </>
    );
}

export default SudebLungs;