import { useSelector } from 'react-redux';

//Импорт компонентов мед манип:
import LaparotomiaSpleen from '../../medmanipul/laparotomia/LaparotomiaSpleen';

function MedmanipulSpleen() {

    //Получаем из хранилища состояния мед манип:
    const laparotomia = useSelector((state) => state.medmanipul.laparotomia);

    return (
        <>
            {laparotomia && <LaparotomiaSpleen/>}     
        </>
    );
}

export default MedmanipulSpleen;