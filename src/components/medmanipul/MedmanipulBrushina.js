import { useSelector } from 'react-redux';

//Импорт компонентов мед манип:
import LaparostomaBrushina from '../../medmanipul/laparostoma/LaparostomaBrushina';

function MedmanipulBrushina() {

    //Получаем из хранилища состояния мед манип:
    const laparostoma = useSelector((state) => state.medmanipul.laparostoma);

    return (
        <>
            {laparostoma && <LaparostomaBrushina/>}     
        </>
    );
}

export default MedmanipulBrushina;