import { useSelector } from 'react-redux';

//Импорт компонентов мед манип:
import TraheotomiaTrah from '../../medmanipul/traheotomia/TraheotomiaTrah';

function MedmanipulTrah() {

    //Получаем из хранилища состояния мед манип:
    const traheotomia = useSelector((state) => state.medmanipul.traheotomia);

    return (
        <>
            {traheotomia && <TraheotomiaTrah/>}     
        </>
    );
}

export default MedmanipulTrah;