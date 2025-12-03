import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import AlcoOtrKozha from '../../sudeb/alcoOtr/AlcoOtrKozha';
import UdavKozha from '../../sudeb/udav/UdavKozha';

function SudebKozha() {
    //Получаем из хранилища состояния пат изменений:
    const alcoOtr = useSelector((state) => state.sudebOsn.alcoOtr);
    const udav = useSelector((state) => state.sudebOsn.udav);
    

    return (
        <>
        {/* Отравление этанолом: */}
        {alcoOtr && <><b><AlcoOtrKozha/></b>
            <br></br></>}
        {/* Удавление петлёй: */}
        {udav && <><b><UdavKozha/></b>
            <br></br></>}
        </>
    );
}

export default SudebKozha;