import { useSelector } from 'react-redux';

//Импорт компонентов мед манип:
import InjekciaOpis from '../../medmanipul/injekcia/InjekciaOpis';
import PerefkateterOpis from '../../medmanipul/perefkateter/PerefkateterOpis';
import KateterbedroOpis from '../../medmanipul/kateterbedro/KateterbedroOpis';
import KateterpodclOpis from '../../medmanipul/kateterpodcl/KateterpodclOpis';
import DefibrilOpis from '../../medmanipul/defibril/DefibrilOpis';
import LaparocentezOpis from '../../medmanipul/laparocentez/LaparocentezOpis';
import KatetermochOpis from '../../medmanipul/katetermoch/KatetermochOpis';
import LaparotomiaOpis from '../../medmanipul/laparotomia/LaparotomiaOpis';
import TraheotomiaOpis from '../../medmanipul/traheotomia/TraheotomiaOpis';
import IntubaciaOpis from '../../medmanipul/intubacia/IntubaciaOpis';
import NazogastrOpis from '../../medmanipul/nazogastr/NazogastrOpis';
import LaparostomaOpis from '../../medmanipul/laparostoma/LaparostomaOpis';
import KranioektomiaOpis from '../../medmanipul/kranioektomia/KranioektomiaOpis';
import MassazhserdcaOpis from '../../medmanipul/massazhserdca/MassazhserdcaOpis';
import TorakocentezOpis from '../../medmanipul/torakocentez/TorakocentezOpis';
import TorakotomiaOpis from '../../medmanipul/torakotomia/TorakotomiaOpis';
import FixaciaperlomOpis from '../../medmanipul/fixaciaperlom/FixaciaperlomOpis';


function MedmanipulOpis() {
    //Получаем из хранилища состояния мед манип:
    const injekcia = useSelector((state) => state.medmanipul.injekcia);
    const perefkateter = useSelector((state) => state.medmanipul.perefkateter);
    const kateterbedro = useSelector((state) => state.medmanipul.kateterbedro);
    const kateterpodcl = useSelector((state) => state.medmanipul.kateterpodcl);
    const defibril = useSelector((state) => state.medmanipul.defibril);
    const laparocentez = useSelector((state) => state.medmanipul.laparocentez);
    const katetermoch = useSelector((state) => state.medmanipul.katetermoch);
    const laparotomia = useSelector((state) => state.medmanipul.laparotomia);
    const traheotomia = useSelector((state) => state.medmanipul.traheotomia);
    const intubacia = useSelector((state) => state.medmanipul.intubacia);
    const nazogastr = useSelector((state) => state.medmanipul.nazogastr);
    const laparostoma = useSelector((state) => state.medmanipul.laparostoma);
    const kranioektomia = useSelector((state) => state.medmanipul.kranioektomia);
    const massazhserdca = useSelector((state) => state.medmanipul.massazhserdca);
    const torakocentez = useSelector((state) => state.medmanipul.torakocentez);
    const torakotomia = useSelector((state) => state.medmanipul.torakotomia);
    const fixaciaperlom = useSelector((state) => state.medmanipul.fixaciaperlom);

    return (
        <>
            {injekcia && <InjekciaOpis/>}
            {perefkateter && <PerefkateterOpis/>}
            {kateterbedro && <KateterbedroOpis/>}
            {kateterpodcl && <KateterpodclOpis/>}
            {katetermoch && <KatetermochOpis/>}
            {intubacia && <IntubaciaOpis/>}
            {traheotomia && <TraheotomiaOpis/>}
            {nazogastr && <NazogastrOpis/>}
            {defibril && <DefibrilOpis/>}
            {massazhserdca && <MassazhserdcaOpis/>}
            {kranioektomia && <KranioektomiaOpis/>}
            {torakocentez && <TorakocentezOpis/>}
            {torakotomia && <TorakotomiaOpis/>}
            {laparocentez && <LaparocentezOpis/>}
            {laparotomia && <LaparotomiaOpis/>}         
            {laparostoma && <LaparostomaOpis/>}         
            {fixaciaperlom && <FixaciaperlomOpis/>}         
        </>
    );
}

export default MedmanipulOpis;