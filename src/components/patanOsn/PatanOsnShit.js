import { useSelector } from 'react-redux';

//Импорт компонентов пат изменений:
import GreyvsShit from '../../patan/greyvs/GreyvsShit';
import HoshimotoShit from '../../patan/hoshimoto/HoshimotoShit';
import FeAnemiShit from '../../patan/feAnemi/FeAnemiShit';

function PatanOsnShit() {

    //Получаем из хранилища состояния пат изменений:
    
    const greyvs = useSelector((state) => state.patOsn.greyvsOsn);
    const hoshimoto = useSelector((state) => state.patOsn.hoshimotoOsn);
    const feAnemi = useSelector((state) => state.patOsn.feAnemiOsn);
    
    return (
        <>
            {/* Железодеф анемия: */}
            {feAnemi && <><div className="parentContainerrr"><b><FeAnemiShit/></b></div>
            <br></br></>} 
            {/* болезнь Грейвса: */}
            {greyvs && <><div className="parentContainerrr"><b><GreyvsShit/></b></div>
            <br></br></>}         
            {/* Хашимото: */}
            {hoshimoto && <><div className="parentContainerrr"><b><HoshimotoShit/></b></div>
            <br></br></>}         
        </>
    );
}

export default PatanOsnShit;