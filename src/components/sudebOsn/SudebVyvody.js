import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import AlcoOtrVyvody from '../../sudeb/alcoOtr/AlcoOtrVyvody';
import UdavVyvody from '../../sudeb/udav/UdavVyvody';

function SudebVyvody() {
    //Получаем из хранилища состояния пат изменений:
    const alcoOtr = useSelector((state) => state.sudebOsn.alcoOtr);
    const udav = useSelector((state) => state.sudebOsn.udav);
    
    return (
        <>
        {/* Отравление этанолом: */}
        {alcoOtr && <><b><AlcoOtrVyvody/></b>
            <br></br></>}
            {/* Удавление петлёй: */}
        {udav && <><b><UdavVyvody/></b>
            <br></br></>}
        </>
    );
}

export default SudebVyvody;