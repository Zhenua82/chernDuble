import { useSelector } from 'react-redux';

//Импорт компонентов мед манип:
import InjekciaDiagnoz from '../../medmanipul/injekcia/InjekciaDiagnoz';
import PerefkateterDiagnoz from '../../medmanipul/perefkateter/PerefkateterDiagnoz';
import KateterbedroDiagnoz from '../../medmanipul/kateterbedro/KateterbedroDiagnoz';
import KateterpodclDiagnoz from '../../medmanipul/kateterpodcl/KateterpodclDiagnoz';
import DefibrilDiagnoz from '../../medmanipul/defibril/DefibrilDiagnoz';
import LaparocentezDiagnoz from '../../medmanipul/laparocentez/LaparocentezDiagnoz';
import KatetermochDiagnoz from '../../medmanipul/katetermoch/KatetermochDiagnoz';
import LaparotomiaDiagnoz from '../../medmanipul/laparotomia/LaparotomiaDiagnoz';
import TraheotomiaDiagnoz from '../../medmanipul/traheotomia/TraheotomiaDiagnoz';
import IntubaciaDiagnoz from '../../medmanipul/intubacia/IntubaciaDiagnoz';
import NazogastrDiagnoz from '../../medmanipul/nazogastr/NazogastrDiagnoz';
import LaparostomaDiagnoz from '../../medmanipul/laparostoma/LaparostomaDiagnoz';
import KranioektomiaDiagnoz from '../../medmanipul/kranioektomia/KranioektomiaDiagnoz';
import MassazhserdcaDiagnoz from '../../medmanipul/massazhserdca/MassazhserdcaDiagnoz';
import TorakocentezDiagnoz from '../../medmanipul/torakocentez/TorakocentezDiagnoz';
import TorakotomiaDiagnoz from '../../medmanipul/torakotomia/TorakotomiaDiagnoz';
import FixaciaperlomDiagnoz from '../../medmanipul/fixaciaperlom/FixaciaperlomDiagnoz';

function MedmanipulDiagnoz() {

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
            {injekcia && <InjekciaDiagnoz/>}
            {perefkateter && <PerefkateterDiagnoz/>}
            {kateterbedro && <KateterbedroDiagnoz/>}
            {kateterpodcl && <KateterpodclDiagnoz/>}
            {katetermoch && <KatetermochDiagnoz/>}
            {intubacia && <IntubaciaDiagnoz/>}
            {traheotomia && <TraheotomiaDiagnoz/>}
            {nazogastr && <NazogastrDiagnoz/>}
            {kranioektomia && <KranioektomiaDiagnoz/>}
            {torakocentez && <TorakocentezDiagnoz/>}
            {torakotomia && <TorakotomiaDiagnoz/>}
            {laparocentez && <LaparocentezDiagnoz/>}
            {laparotomia && <LaparotomiaDiagnoz/>}
            {laparostoma && <LaparostomaDiagnoz/>}
            {fixaciaperlom && <FixaciaperlomDiagnoz/>}
            {defibril && <DefibrilDiagnoz/>}
            {massazhserdca && <MassazhserdcaDiagnoz/>}
           
        </>
    );
}

export default MedmanipulDiagnoz;