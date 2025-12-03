import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import AlcoOtrGm from '../../sudeb/alcoOtr/AlcoOtrGm';
import UdavGm from '../../sudeb/udav/UdavGm';

function SudebGm() {
    //Получаем из хранилища состояния пат изменений:
    const alcoOtr = useSelector((state) => state.sudebOsn.alcoOtr);
    const udav = useSelector((state) => state.sudebOsn.udav);
    

    return (
        <>
        {/* Отравление этанолом: */}
        {alcoOtr && <><b><AlcoOtrGm/></b>
            <br></br></>}
            {/* Удавление петлёй: */}
        {udav && <><b><UdavGm/></b>
            <br></br></>}
        </>
    );
}

export default SudebGm;