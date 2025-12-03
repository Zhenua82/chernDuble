import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import AlcoOtrKishki from '../../sudeb/alcoOtr/AlcoOtrKishki';

function SudebKishki() {
    //Получаем из хранилища состояния пат изменений:
    const alcoOtr = useSelector((state) => state.sudebOsn.alcoOtr);
    

    return (
        <>
        {/* Отравление этанолом: */}
        {alcoOtr && <><b><AlcoOtrKishki/></b>
            <br></br></>}
        </>
    );
}

export default SudebKishki;