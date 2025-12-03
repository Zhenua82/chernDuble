import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import AlcoOtrPechen from '../../sudeb/alcoOtr/AlcoOtrPechen';
import UdavPechen from '../../sudeb/udav/UdavPechen';

function SudebPechen() {
    //Получаем из хранилища состояния пат изменений:
    const alcoOtr = useSelector((state) => state.sudebOsn.alcoOtr);
    const udav = useSelector((state) => state.sudebOsn.udav);
    
    return (
        <>
        {/* Отравление этанолом: */}
        {alcoOtr && <><b><AlcoOtrPechen/></b>
            <br></br></>}
             {/* Удавление петлёй: */}
        {udav && <><b><UdavPechen/></b>
            <br></br></>}
        </>
    );
}

export default SudebPechen;