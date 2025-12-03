import { useSelector } from 'react-redux';

//Импорт компонентов мед манип:
import MassazhserdcaGrudj from '../../medmanipul/massazhserdca/MassazhserdcaGrudj';
import TorakotomiaGrudj from '../../medmanipul/torakotomia/TorakotomiaGrudj';

function MedmanipulGrudj() {

    //Получаем из хранилища состояния мед манип:
    const massazhserdca = useSelector((state) => state.medmanipul.massazhserdca);
    const torakotomia = useSelector((state) => state.medmanipul.torakotomia);

    return (
        <>
            {massazhserdca && <MassazhserdcaGrudj/>}    
            {torakotomia && <TorakotomiaGrudj/>}    
        </>
    );
}

export default MedmanipulGrudj;