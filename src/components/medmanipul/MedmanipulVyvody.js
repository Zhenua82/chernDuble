import { useSelector } from 'react-redux';

//Импорт компонентов мед манип:
import MassazhserdcaVyvody from '../../medmanipul/massazhserdca/MassazhserdcaVyvody';

function MedmanipulVyvody() {

    //Получаем из хранилища состояния мед манип:
    const massazhserdca = useSelector((state) => state.medmanipul.massazhserdca);

    return (
        <>
            {massazhserdca && <MassazhserdcaVyvody/>}     
        </>
    );
}

export default MedmanipulVyvody;