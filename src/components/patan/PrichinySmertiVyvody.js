import { useSelector } from 'react-redux';

//Импорт компонентов причин смерти:
import DiabetcomaVyvody from '../../prichinySmerti/diabetcoma/DiabetcomaVyvody';
import OssnVyvody from '../../prichinySmerti/ossn/OssnVyvody';
import HsnVyvody from '../../prichinySmerti/hsn/HsnVyvody';
import OdnVyvody from '../../prichinySmerti/odn/OdnVyvody';
import OrdsVyvody from '../../prichinySmerti/ords/OrdsVyvody';
import VklinenieVyvody from '../../prichinySmerti/vklinenie/VklinenieVyvody';
import TravmShokVyvody from '../../prichinySmerti/travmShok/TravmShokVyvody';
import GemShokVyvody from '../../prichinySmerti/gemShok/GemShokVyvody';
import OstrKrovopotVyvody from '../../prichinySmerti/ostrKrovopot/OstrKrovopotVyvody';
import LungserdceVyvody from '../../prichinySmerti/lungserdce/LungserdceVyvody';
import AsfixiaVyvody from '../../prichinySmerti/asfixia/AsfixiaVyvody';
import ItshVyvody from '../../prichinySmerti/itsh/ItshVyvody';
import OpnVyvody from '../../prichinySmerti/opn/OpnVyvody';
import HpnVyvody from '../../prichinySmerti/hpn/HpnVyvody';
import OperitonitVyvody from '../../prichinySmerti/operitonit/OperitonitVyvody';

function PrichinySmertiVyvody() {

    //Получаем из хранилища состояния причин смерти:
    const diabetcoma = useSelector((state) => state.prichinySmerti.diabetcoma);
    const ossn = useSelector((state) => state.prichinySmerti.ossn);
    const hsn = useSelector((state) => state.prichinySmerti.hsn);
    const odn = useSelector((state) => state.prichinySmerti.odn);
    const ords = useSelector((state) => state.prichinySmerti.ords);
    const vklinenie = useSelector((state) => state.prichinySmerti.vklinenie);
    const travmShok = useSelector((state) => state.prichinySmerti.travmShok);
    const gemShok = useSelector((state) => state.prichinySmerti.gemShok);
    const ostrKrovopot = useSelector((state) => state.prichinySmerti.ostrKrovopot);
    const lungserdce = useSelector((state) => state.prichinySmerti.lungserdce);
    const asfixia = useSelector((state) => state.prichinySmerti.asfixia);
    const itsh = useSelector((state) => state.prichinySmerti.itsh);
    const opn = useSelector((state) => state.prichinySmerti.opn);
    const hpn = useSelector((state) => state.prichinySmerti.hpn);
    const operitonit = useSelector((state) => state.prichinySmerti.operitonit);
    
    // const ushibRanaNoogr = useSelector((state) => state.dopPovrezhden.ushibRanaNoogr);
    
    return (
        <>
            {/* Острая сердечно-сосудистая недостаточность: */} 
            {ossn && <><OssnVyvody/>
            <br></br></>}  
            {/* Хроническая сердечная недостаточность : */} 
            {hsn && <><HsnVyvody/>
            <br></br></>}  
            {/* Вторичная легочная гипертензия с формированием легочного сердца и последующей легочно-сердечной недостаточностью : */} 
            {lungserdce && <><LungserdceVyvody/>
            <br></br></>}  
            {/* Острая дыхательная недостаточность: */} 
            {odn && <><OdnVyvody/>
            <br></br></>}
            {/* Острый респираторный дистресс-синдром: */} 
            {ords && <><OrdsVyvody/>
            <br></br></>} 
            {/* Механическая асфиксия: */} 
            {asfixia && <><AsfixiaVyvody/>
            <br></br></>} 
             {/* Отек-набухание головного мозга с вариантами вклинения ствола и других структур мозга: */} 
             {vklinenie && <><VklinenieVyvody/>
            <br></br></>}   
            {/* Острая массивная кровопотеря: */} 
            {ostrKrovopot && <><OstrKrovopotVyvody/>
            <br></br></>}     
            {/* Геморрагический шок: */} 
            {gemShok && <><GemShokVyvody/>
            <br></br></>}   
            {/* Травматический шок: */} 
            {travmShok && <><TravmShokVyvody/>
            <br></br></>} 
            {/* Септический шок: */} 
            {itsh && <><ItshVyvody/>
            <br></br></>} 
            {/* Перитонит: */} 
            {operitonit && <><OperitonitVyvody/>
            <br></br></>} 
            {/* Острая почечная недостаточность (ОПН): */} 
            {opn && <><OpnVyvody/>
            <br></br></>} 
            {/* Хроническая почечная недостаточность (ХПН): */} 
            {hpn && <><HpnVyvody/>
            <br></br></>} 
            {/* Диабетическая кома: */} 
            {diabetcoma && <><DiabetcomaVyvody/>
            <br></br></>}  

        </>
    );
}

export default PrichinySmertiVyvody;