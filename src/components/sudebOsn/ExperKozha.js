import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import GbKozha from '../../patan/gb/GbKozha';

function ExperKozha() {
    //Получаем из хранилища состояния пат изменений:
    const gb = useSelector((state) => state.patOsn.gbOsn);
    

    return (
        <>
        <p>Эксперимент</p>
        <p>Эксперимент</p>
        </>
    );
}

export default ExperKozha;