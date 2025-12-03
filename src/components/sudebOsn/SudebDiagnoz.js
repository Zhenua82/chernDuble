import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import AlcoOtrDiagnoz from '../../sudeb/alcoOtr/AlcoOtrDiagnoz';
import UdavDiagnoz from '../../sudeb/udav/UdavDiagnoz';

function SudebDiagnoz() {
    //Получаем из хранилища состояния пат изменений:
    const alcoOtr = useSelector((state) => state.sudebOsn.alcoOtr);
    const udav = useSelector((state) => state.sudebOsn.udav);
    

    return (
        <>
        {/* Отравление этанолом: */}
        {alcoOtr && <><b><AlcoOtrDiagnoz/></b>
            <br></br></>}
            {/* Удавление петлёй: */}
        {udav && <><b><UdavDiagnoz/></b>
            <br></br></>}
        </>
    );
}

export default SudebDiagnoz;