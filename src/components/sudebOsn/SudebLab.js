import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import AlcoOtrLab from '../../sudeb/alcoOtr/AlcoOtrLab';
import UdavLab from '../../sudeb/udav/UdavLab';

function SudebLab() {
    //Получаем из хранилища состояния пат изменений:
    const alcoOtr = useSelector((state) => state.sudebOsn.alcoOtr);
    const udav = useSelector((state) => state.sudebOsn.udav);
    
    return (
        <>
        {/* Отравление этанолом: */}
        {alcoOtr && <><b><AlcoOtrLab/></b>
            <br></br></>}
             {/* Удавление петлёй: */}
        {udav && <><b><UdavLab/></b>
            <br></br></>}
        </>
    );
}

export default SudebLab;