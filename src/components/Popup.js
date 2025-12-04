import React from 'react';
// import { useCookies } from 'react-cookie';
import { useSelector, useDispatch } from 'react-redux';
import { expNeopStatee } from '../store/index';
import {useHistory} from 'react-router-dom';

function Popup() {
    // const [cookies, setCookie] = useCookies(['paymentInitiated']);
    const dispatchFunction = useDispatch();
    const history = useHistory();

    const exp = useSelector((state) => state.expNeopState.exp);
    const neop = useSelector((state) => state.expNeopState.neop);
    const sex = useSelector((state) => state.expNeopState.sex);
    const ushibRanaOgr = useSelector((state) => state.dopPovrezhden.ushibRanaOgr);
    const ushibRanaNoogr = useSelector((state) => state.dopPovrezhden.ushibRanaNoogr);
    const bampPerelom = useSelector((state) => state.dopPovrezhden.bampPerelom);
    const krovopodtek = useSelector((state) => state.dopPovrezhden.krovopodtek);
    const ssadiny = useSelector((state) => state.dopPovrezhden.ssadiny);
    const krovUpr = useSelector((state) => state.dopPovrezhden.krovUpr);
    const rezanRana = useSelector((state) => state.dopPovrezhden.rezanRana);
    const ushib = useSelector((state) => state.dopPovrezhden.ushib);
    const colotoRez = useSelector((state) => state.dopPovrezhden.colotoRez);
    const mnogo = useSelector((state) => state.dopPovrezhden.mnogo);
    const ognestrelMnozh = useSelector((state) => state.dopPovrezhden.ognestrelMnozh);
    const ognestrelOdin = useSelector((state) => state.dopPovrezhden.ognestrelOdin);
    const colotayaRana = useSelector((state) => state.dopPovrezhden.colotayaRana);
    const ushibRanaMk = useSelector((state) => state.dopPovrezhden.ushibRanaMk);
    const ozhogiMk = useSelector((state) => state.dopPovrezhden.ozhogiMk);
    const ozhogPlamenem = useSelector((state) => state.dopPovrezhden.ozhogPlamenem);
    const ploskKostjOgr = useSelector((state) => state.dopPovrezhden.ploskKostjOgr);
    const ploskKostjNoogr = useSelector((state) => state.dopPovrezhden.ploskKostjNoogr);
    const colotoRezMk = useSelector((state) => state.dopPovrezhden.colotoRezMk);
    const ognestrelPya = useSelector((state) => state.dopPovrezhden.ognestrelPya);
    const prolezheni = useSelector((state) => state.dopPovrezhden.prolezheni);

    const gbOsn = useSelector((state) => state.patOsn.gbOsn);
    const saharDiab1Osn = useSelector((state) => state.patOsn.saharDiab1Osn);
    const saharDiab2Osn = useSelector((state) => state.patOsn.saharDiab2Osn);
    const vichOsn = useSelector((state) => state.patOsn.vichOsn);
    const covidOsn = useSelector((state) => state.patOsn.covidOsn);
    const gepatBOsn = useSelector((state) => state.patOsn.gepatBOsn);
    const gepatCOsn = useSelector((state) => state.patOsn.gepatCOsn);
    const sifilisOsn = useSelector((state) => state.patOsn.sifilisOsn);
    const grippOsn = useSelector((state) => state.patOsn.grippOsn);
    const tubercOsn = useSelector((state) => state.patOsn.tubercOsn);
    const kronaOsn = useSelector((state) => state.patOsn.kronaOsn);
    const njakOsn = useSelector((state) => state.patOsn.njakOsn);
    const greyvsOsn = useSelector((state) => state.patOsn.greyvsOsn);
    const hoshimotoOsn = useSelector((state) => state.patOsn.hoshimotoOsn);
    const gemInsultOsn = useSelector((state) => state.patOsn.gemInsultOsn);
    const oglomeruloOsn = useSelector((state) => state.patOsn.oglomeruloOsn);
    const feAnemiOsn = useSelector((state) => state.patOsn.feAnemiOsn);
    const postgemAnemiOsn = useSelector((state) => state.patOsn.postgemAnemiOsn);
    const hronPieloOsn = useSelector((state) => state.patOsn.hronPieloOsn);
    const ishInsultOsn = useSelector((state) => state.patOsn.ishInsultOsn);
    const infarctMiocOsn = useSelector((state) => state.patOsn.infarctMiocOsn);
    const alcoOsn = useSelector((state) => state.patOsn.alcoOsn);
    const dilCardioOsn = useSelector((state) => state.patOsn.dilCardioOsn);
    const gipCardioOsn = useSelector((state) => state.patOsn.gipCardioOsn);
    const miocarditOsn = useSelector((state) => state.patOsn.miocarditOsn);
    const sepsisOsn = useSelector((state) => state.patOsn.sepsisOsn);
    const hibsOsn = useSelector((state) => state.patOsn.hibsOsn);
    const mkbOsn = useSelector((state) => state.patOsn.mkbOsn);
    const pancreatitOsn = useSelector((state) => state.patOsn.pancreatitOsn);
    const pnevmoniaInterstOsn = useSelector((state) => state.patOsn.pnevmoniaInterstOsn);
    const pnevmoniaOchagOsn = useSelector((state) => state.patOsn.pnevmoniaOchagOsn);
    const pnevmoniaKrupOsn = useSelector((state) => state.patOsn.pnevmoniaKrupOsn);
    const hoblOsn = useSelector((state) => state.patOsn.hoblOsn);
    const astmaOsn = useSelector((state) => state.patOsn.astmaOsn);
    const peritonitOsn = useSelector((state) => state.patOsn.peritonitOsn);
    const yazvaOsn = useSelector((state) => state.patOsn.yazvaOsn);
    const meningitOsn = useSelector((state) => state.patOsn.meningitOsn);
    const difteriaOsn = useSelector((state) => state.patOsn.difteriaOsn);
    const holecistitOsn = useSelector((state) => state.patOsn.holecistitOsn);
    const rsOsn = useSelector((state) => state.patOsn.rsOsn);
    
    const gb = useSelector((state) => state.pat.gb);
    const saharDiab1 = useSelector((state) => state.pat.saharDiab1);
    const saharDiab2 = useSelector((state) => state.pat.saharDiab2);
    const vich = useSelector((state) => state.pat.vich);
    const covid = useSelector((state) => state.pat.covid);
    const gepatB = useSelector((state) => state.pat.gepatB);
    const gepatC = useSelector((state) => state.pat.gepatC);
    const sifilis = useSelector((state) => state.pat.sifilis);
    const gripp = useSelector((state) => state.pat.gripp);
    const tuberc = useSelector((state) => state.pat.tuberc);
    const krona = useSelector((state) => state.pat.krona);
    const njak = useSelector((state) => state.pat.njak);
    const greyvs = useSelector((state) => state.pat.greyvs);
    const hoshimoto = useSelector((state) => state.pat.hoshimoto);
    const gemInsult = useSelector((state) => state.pat.gemInsult);
    const oglomerulo = useSelector((state) => state.pat.oglomerulo);
    const feAnemi = useSelector((state) => state.pat.feAnemi);
    const postgemAnemi = useSelector((state) => state.pat.postgemAnemi);
    const hronPielo = useSelector((state) => state.pat.hronPielo);
    const ishInsult = useSelector((state) => state.pat.ishInsult);
    const infarctMioc = useSelector((state) => state.pat.infarctMioc);
    const alco = useSelector((state) => state.pat.alco);
    const dilCardio = useSelector((state) => state.pat.dilCardio);
    const gipCardio = useSelector((state) => state.pat.gipCardio);
    const miocardit = useSelector((state) => state.pat.miocardit);
    const sepsis = useSelector((state) => state.pat.sepsis);
    const hibs = useSelector((state) => state.pat.hibs);
    const mkb = useSelector((state) => state.pat.mkb);
    const pancreatit = useSelector((state) => state.pat.pancreatit);
    const pnevmoniaInterst = useSelector((state) => state.pat.pnevmoniaInterst);
    const pnevmoniaOchag = useSelector((state) => state.pat.pnevmoniaOchag);
    const pnevmoniaKrup = useSelector((state) => state.pat.pnevmoniaKrup);
    const hobl = useSelector((state) => state.pat.hobl);
    const astma = useSelector((state) => state.pat.astma);
    const peritonit = useSelector((state) => state.pat.peritonit);
    const yazva = useSelector((state) => state.pat.yazva);
    const meningit = useSelector((state) => state.pat.meningit);
    const difteria = useSelector((state) => state.pat.difteria);
    const holecistit = useSelector((state) => state.pat.holecistit);
    const rs = useSelector((state) => state.pat.rs);

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

    const exper = useSelector((state) => state.sudebOsn.exper);
    const alcoOtr = useSelector((state) => state.sudebOsn.alcoOtr);
    const udav = useSelector((state) => state.sudebOsn.udav);
   

    function redirectToYooMoney() {
        // Установка cookie перед редиректом
        // setCookie('paymentInitiated', 'true', { path: '/' });
        
        // Установка значения в localStorage
        localStorage.setItem('paymentInitiated', 'true');

        // Установка в localStorage url текущей страницы:
        // localStorage.setItem('url', window.location.href);

        // localStorage.setItem('url', window.location.pathname);//без HashRouter
        localStorage.setItem('url', window.location.hash.replace('#', ''));// c HashRouter


        // Установка в localStorage данных хранилища текущей страницы:

        // const data = {exp, neop, sex, ushibRanaOgr, ushibRanaNoogr, bampPerelom, krovopodtek, ssadiny, krovUpr, rezanRana, ushib, colotoRez, mnogo, ognestrelMnozh, 
        //     ognestrelOdin, colotayaRana, ushibRanaMk, ozhogiMk, ozhogPlamenem, ploskKostjOgr, ploskKostjNoogr, colotoRezMk, ognestrelPya, gb, saharDiab1, saharDiab2, vich,
        // covid, gepatB, gepatC, sifilis, gripp, tuberc, krona, njak, greyvs, hoshimoto, gemInsult, oglomerulo, feAnemi, postgemAnemi, hronPielo, ishInsult, infarctMioc, alco, 
        // dilCardio, gipCardio, miocardit, sepsis, hibs, mkb, pancreatit, pnevmoniaInterst, pnevmoniaOchag, pnevmoniaKrup, hobl, astma, peritonit, yazva, meningit};

        const data = {
            expNeopState: { exp, neop, sex },
            dopPovrezhden: {
            krovopodtek, ssadiny, krovUpr, ushibRanaOgr, ushibRanaNoogr, ushibRanaMk, 
            mnogo, rezanRana, colotayaRana, colotoRez, colotoRezMk, ognestrelOdin, ognestrelPya, 
            ognestrelMnozh, ploskKostjOgr, ploskKostjNoogr, bampPerelom, ozhogiMk, ozhogPlamenem,
            prolezheni, ushib
            },
            pat: {
            tuberc, difteria, sifilis, gepatB, gepatC, vich,
              gripp, covid, feAnemi, postgemAnemi, greyvs, hoshimoto, saharDiab1, saharDiab2, 
              alco, meningit, rs, gb, infarctMioc, hibs, sepsis, miocardit, dilCardio, gipCardio, 
              gemInsult, ishInsult, pnevmoniaKrup, pnevmoniaOchag, pnevmoniaInterst, hobl, 
              astma, yazva, krona, njak, peritonit, holecistit, pancreatit, oglomerulo, 
              hronPielo, mkb 
            },
            patOsn: {
              gbOsn, saharDiab1Osn, saharDiab2Osn, vichOsn, covidOsn, gepatBOsn, gepatCOsn, sifilisOsn,
              grippOsn, tubercOsn, kronaOsn, njakOsn, greyvsOsn, hoshimotoOsn, gemInsultOsn,
              oglomeruloOsn, feAnemiOsn, postgemAnemiOsn, hronPieloOsn, ishInsultOsn, infarctMiocOsn,
              alcoOsn, dilCardioOsn, gipCardioOsn, miocarditOsn, sepsisOsn, hibsOsn, mkbOsn, pancreatitOsn,
              pnevmoniaInterstOsn, pnevmoniaOchagOsn, pnevmoniaKrupOsn, hoblOsn, astmaOsn,
              peritonitOsn, yazvaOsn, meningitOsn, difteriaOsn, holecistitOsn, rsOsn
            },
            medmanipul: {
                injekcia, perefkateter, kateterbedro, kateterpodcl, katetermoch, intubacia, 
                traheotomia, nazogastr, defibril, massazhserdca, kranioektomia, torakocentez, 
                torakotomia, laparocentez, laparotomia, laparostoma,  fixaciaperlom
            },
            prichinySmerti: {
                ossn, hsn, lungserdce, odn, ords, asfixia, vklinenie, ostrKrovopot, gemShok, travmShok, diabetcoma, itsh, opn, hpn, operitonit
            },
            sudebOsn: {
                exper, alcoOtr, udav
            }
          };
        localStorage.setItem('data', JSON.stringify(data));

        // Открытие нового окна/вкладки для редиректа на yoomoney.ru
        // window.open('https://yoomoney.ru/quickpay/fundraise/button?billNumber=1485DMQ8H32.240727', '_blank');
        // const redirectUrl = `https://yoomoney.ru/quickpay/fundraise/button?billNumber=1485DMQ8H32.240727&returnUrl=http://localhost:3000/otravlenieNeftM`;
        // const redirectUrl = `https://yoomoney.ru/transfer/quickpay?requestId=353439383130353835335f66613231663064646534393235313364333231386365383865386130616539366631333536666331&returnUrl=http://localhost:3000/home?referrer=https://yoomoney.ru/transfer/process/success?orderId=...`;
        // const redirectUrl = `https://yoomoney.ru/quickpay/fundraise/button?billNumber=1485DMQ8H32.240727&returnUrl=http://localhost:3000/home?referrer=https://yoomoney.ru/transfer/process/success?orderId=...`;
        // const redirectUrl = `https://yoomoney.ru/quickpay/fundraise/button?billNumber=1485DMQ8H32.240727`;
        // window.open(redirectUrl, '_blank');
        
        // history.push('/payFinish');
        // Задержка перед перенаправлением
        setTimeout(() => {
            if (
                localStorage.getItem('paymentInitiated') &&
                localStorage.getItem('url') &&
                localStorage.getItem('data')
            ) {
                // console.log("LocalStorage paymentInitiated: ", localStorage.getItem('paymentInitiated'));
                // console.log("LocalStorage url: ", localStorage.getItem('url'));
                // console.log("LocalStorage data: ", localStorage.getItem('data'));
                history.push('/payFinish');              
            } else {
                console.error('Данные не успели сохраниться в localStorage');
            }
        }, 500);
    };
    function close(){
                //Для всплывающего окна:
                dispatchFunction(expNeopStatee.popup(false));}

    return (
        <>
            <div className="popup">
                {/* <div className="popupClose" onClick={() => window.history.back()}>X</div> */} {/* Для отдельного окна */}
                <div className="popupClose" onClick={close}>X</div>
                <div className="popupTitle">
                    <h1 className='MsoBodyText'>Для дальнейшей загрузки сформированного документа, Вы можете добровольно пожертвовать (внести взнос в размере 300 рублей) на содержание и развитие данного проекта</h1>
                </div>
                <div className="payButton" onClick={redirectToYooMoney}>
                    <button>Перейти к оплате</button>
                    {/* Готовые кнопки оплаты: */}
                    {/* <iframe src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=146SFPKJ8JJ.240725&" width="330" height="50" frameBorder="0" allowtransparency="true" scrolling="no"></iframe>​ */}
                    {/* <iframe src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=146VU7AUQSS.240725&" width="330" height="50" frameBorder="0" allowtransparency="true" scrolling="no"></iframe>​ */}
                    {/* <iframe src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=1485DMQ8H32.240727&" width="330" height="50" frameBorder="0" allowtransparency="true" scrolling="no"></iframe>​ */}
                </div>
            </div>
        </>
    );
}

export default Popup;
