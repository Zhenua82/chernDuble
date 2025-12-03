import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import AlcoOtrPodj from '../../sudeb/alcoOtr/AlcoOtrPodj';

function SudebPodj() {
    //Получаем из хранилища состояния пат изменений:
    const alcoOtr = useSelector((state) => state.sudebOsn.alcoOtr);
    
    return (
        <>
        {/* Отравление этанолом: */}
        {alcoOtr && <><b><AlcoOtrPodj/></b>
            <br></br></>}
        </>
    );
}

export default SudebPodj;