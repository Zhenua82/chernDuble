import { useSelector } from 'react-redux';

//Импорт компонентов доп повреждений:
// import InjekciaOpis from '../../medmanipul/injekcia/InjekciaOpis';
import KranioektomiaVnutr from '../../medmanipul/kranioektomia/KranioektomiaVnutr';

function MedmanipulVnutr() {

    //Получаем из хранилища состояния доп. повреждений:
    // const injekcia = useSelector((state) => state.medmanipul.injekcia)
    const kranioektomia = useSelector((state) => state.medmanipul.kranioektomia)

    return (
        <>
            {/* Cледы от инъекций: */}
            {/* {injekcia && <InjekciaOpis/>} */}
            {kranioektomia && <KranioektomiaVnutr/>}
        </>
    );
}

export default MedmanipulVnutr;