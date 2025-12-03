// import { legacy_createStore } from 'redux';
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {ushibRanaOgr: false, ushibRanaNoogr: false, bampPerelom: false, krovopodtek: false, ssadiny: false, krovUpr: false, rezanRana: false, ushib: false, 
    colotoRez: false, mnogo: false, ognestrelMnozh: false, ognestrelOdin: false, colotayaRana: false, ushibRanaMk: false, ozhogiMk: false, ozhogPlamenem: false, 
    ploskKostjOgr: false, ploskKostjNoogr: false, colotoRezMk: false, ognestrelPya: false, prolezheni: false,
    saharDiab1: false, saharDiab2: false, vich: false, covid: false, gepatB: false, gepatC: false, sifilis: false, gripp: false, tuberc: false, krona: false, njak: false, 
    greyvs: false, hoshimoto: false, gemInsult: false, oglomerulo: false, feAnemi: false, postgemAnemi: false, hronPielo: false, ishInsult: false, gb: false, infarctMioc: false, 
    alco: false, dilCardio: false, gipCardio: false, miocardit: false, sepsis: false, hibs: false, mkb: false, pancreatit: false, pnevmoniaInterst: false, pnevmoniaOchag: false, 
    pnevmoniaKrup: false, hobl: false, astma: false, peritonit: false, yazva: false, meningit: false, difteria: false, holecistit: false, rs: false, 
    gbOsn: false, saharDiab1Osn: false, saharDiab2Osn: false, vichOsn: false, covidOsn: false, gepatBOsn: false, gepatCOsn: false, sifilisOsn: false, grippOsn: false, 
    tubercOsn: false, kronaOsn: false, njakOsn: false, greyvsOsn: false, hoshimotoOsn: false, gemInsultOsn: false, oglomeruloOsn: false, feAnemiOsn: false, postgemAnemiOsn: false, 
    hronPieloOsn: false, ishInsultOsn: false, infarctMiocOsn: false, alcoOsn: false, dilCardioOsn: false, gipCardioOsn: false, miocarditOsn: false, sepsisOsn: false,
    hibsOsn: false, mkbOsn: false, pancreatitOsn: false, pnevmoniaInterstOsn: false, pnevmoniaOchagOsn: false, pnevmoniaKrupOsn: false, hoblOsn: false, astmaOsn: false, 
    peritonitOsn: false, yazvaOsn: false, meningitOsn: false, difteriaOsn: false, holecistitOsn: false, rsOsn: false,
    injekcia: false, perefkateter: false, kateterbedro: false, kateterpodcl: false, defibril: false, laparocentez: false, katetermoch: false, laparotomia: false, traheotomia: false,
    intubacia: false, nazogastr: false, laparostoma: false, kranioektomia: false, massazhserdca: false, torakocentez: false, torakotomia: false, fixaciaperlom: false,
    diabetcoma: false, ossn: false, hsn: false, odn: false, ords: false, vklinenie: false, travmShok: false, gemShok: false, ostrKrovopot: false, lungserdce: false, asfixia: false,
    itsh: false, opn: false, hpn: false, operitonit: false, 
    exper: false, alcoOtr: false, udav: false};

const dopPovrezhden = createSlice({
    name: 'dopPovrezhden',
    initialState,
    reducers: {
        resetState: () => initialState,//Для сброса данных до initialState
        ushibRanaOgr(state) {state.ushibRanaOgr = !state.ushibRanaOgr;},
        ushibRanaNoogr(state) {state.ushibRanaNoogr = !state.ushibRanaNoogr;},
        bampPerelom(state) {state.bampPerelom = !state.bampPerelom;},
        krovopodtek(state) {state.krovopodtek = !state.krovopodtek;},
        ssadiny(state) {state.ssadiny = !state.ssadiny;},
        krovUpr(state) {state.krovUpr = !state.krovUpr;},
        rezanRana(state) {state.rezanRana = !state.rezanRana;},
        ushib(state) {state.ushib = !state.ushib;},
        colotoRez(state) {state.colotoRez = !state.colotoRez;},
        mnogo(state) {state.mnogo = !state.mnogo;},
        ognestrelMnozh(state) {state.ognestrelMnozh = !state.ognestrelMnozh;},
        ognestrelOdin(state) {state.ognestrelOdin = !state.ognestrelOdin;},
        colotayaRana(state) {state.colotayaRana = !state.colotayaRana;},
        ushibRanaMk(state) {state.ushibRanaMk = !state.ushibRanaMk;},
        ozhogiMk(state) {state.ozhogiMk = !state.ozhogiMk;},
        ozhogPlamenem(state) {state.ozhogPlamenem = !state.ozhogPlamenem;},
        ploskKostjOgr(state) {state.ploskKostjOgr = !state.ploskKostjOgr;},
        ploskKostjNoogr(state) {state.ploskKostjNoogr = !state.ploskKostjNoogr;},
        colotoRezMk(state) {state.colotoRezMk = !state.colotoRezMk;},
        ognestrelPya(state) {state.ognestrelPya = !state.ognestrelPya;},
        prolezheni(state) {state.prolezheni = !state.prolezheni;},
    }
});
const medmanipul = createSlice({
    name: 'medmanipul',
    initialState,
    reducers: {
        resetState: () => initialState,//Для сброса данных до initialState
        injekcia(state) {state.injekcia = !state.injekcia;},
        perefkateter(state) {state.perefkateter = !state.perefkateter;},
        kateterbedro(state) {state.kateterbedro = !state.kateterbedro;},
        kateterpodcl(state) {state.kateterpodcl = !state.kateterpodcl;},
        defibril(state) {state.defibril = !state.defibril;},
        laparocentez(state) {state.laparocentez = !state.laparocentez;},
        katetermoch(state) {state.katetermoch = !state.katetermoch;},
        laparotomia(state) {state.laparotomia = !state.laparotomia;},
        traheotomia(state) {state.traheotomia = !state.traheotomia;},
        intubacia(state) {state.intubacia = !state.intubacia;},
        nazogastr(state) {state.nazogastr = !state.nazogastr;},
        laparostoma(state) {state.laparostoma = !state.laparostoma;},
        kranioektomia(state) {state.kranioektomia = !state.kranioektomia;},
        massazhserdca(state) {state.massazhserdca = !state.massazhserdca;},
        torakocentez(state) {state.torakocentez = !state.torakocentez;},
        torakotomia(state) {state.torakotomia = !state.torakotomia;},
        fixaciaperlom(state) {state.fixaciaperlom = !state.fixaciaperlom;},
    }
});
const prichinySmerti = createSlice({
    name: 'prichinySmerti',
    initialState,
    reducers: {
        resetState: () => initialState,//Для сброса данных до initialState
        diabetcoma(state) {state.diabetcoma = !state.diabetcoma;},
        ossn(state) {state.ossn = !state.ossn;},
        hsn(state) {state.hsn = !state.hsn;},
        odn(state) {state.odn = !state.odn;},
        ords(state) {state.ords = !state.ords;},
        vklinenie(state) {state.vklinenie = !state.vklinenie;},
        travmShok(state) {state.travmShok = !state.travmShok;},
        gemShok(state) {state.gemShok = !state.gemShok;},
        ostrKrovopot(state) {state.ostrKrovopot = !state.ostrKrovopot;},
        lungserdce(state) {state.lungserdce = !state.lungserdce;},
        asfixia(state) {state.asfixia = !state.asfixia;},
        itsh(state) {state.itsh = !state.itsh;},
        opn(state) {state.opn = !state.opn;},
        hpn(state) {state.hpn = !state.hpn;},
        operitonit(state) {state.operitonit = !state.operitonit;},
    }
});
const pat = createSlice({
    name: 'pat',
    initialState,
    reducers: {
        resetState: () => initialState,//Для сброса данных до initialState
        saharDiab1(state) {state.saharDiab1 = !state.saharDiab1},
        saharDiab2(state) {state.saharDiab2 = !state.saharDiab2},
        vich(state) {state.vich = !state.vich},
        covid(state) {state.covid = !state.covid},
        gepatB(state) {state.gepatB = !state.gepatB},
        gepatC(state) {state.gepatC = !state.gepatC},
        sifilis(state) {state.sifilis = !state.sifilis},
        gripp(state) {state.gripp = !state.gripp},
        tuberc(state) {state.tuberc = !state.tuberc},
        krona(state) {state.krona = !state.krona},
        njak(state) {state.njak = !state.njak},
        greyvs(state) {state.greyvs = !state.greyvs},
        hoshimoto(state) {state.hoshimoto = !state.hoshimoto},
        gemInsult(state) {state.gemInsult = !state.gemInsult},
        oglomerulo(state) {state.oglomerulo = !state.oglomerulo},
        feAnemi(state) {state.feAnemi = !state.feAnemi},
        postgemAnemi(state) {state.postgemAnemi = !state.postgemAnemi},
        hronPielo(state) {state.hronPielo = !state.hronPielo},
        ishInsult(state) {state.ishInsult = !state.ishInsult},
        gb(state) {state.gb = !state.gb},
        infarctMioc(state) {state.infarctMioc = !state.infarctMioc},
        alco(state) {state.alco = !state.alco},
        dilCardio(state) {state.dilCardio = !state.dilCardio},
        gipCardio(state) {state.gipCardio = !state.gipCardio},
        miocardit(state) {state.miocardit = !state.miocardit},
        sepsis(state) {state.sepsis = !state.sepsis},
        hibs(state) {state.hibs = !state.hibs},
        mkb(state) {state.mkb = !state.mkb},
        pancreatit(state) {state.pancreatit = !state.pancreatit},
        pnevmoniaInterst(state) {state.pnevmoniaInterst = !state.pnevmoniaInterst},
        pnevmoniaOchag(state) {state.pnevmoniaOchag = !state.pnevmoniaOchag},
        pnevmoniaKrup(state) {state.pnevmoniaKrup = !state.pnevmoniaKrup},
        hobl(state) {state.hobl = !state.hobl},
        astma(state) {state.astma = !state.astma},
        peritonit(state) {state.peritonit = !state.peritonit},
        yazva(state) {state.yazva = !state.yazva},
        meningit(state) {state.meningit = !state.meningit},
        difteria(state) {state.difteria = !state.difteria},
        holecistit(state) {state.holecistit = !state.holecistit},
        rs(state) {state.rs = !state.rs},
        // ushibRanaNoogr(state) {state.ushibRanaNoogr = !state.ushibRanaNoogr;},
    }
});

const patOsn = createSlice({
    name: 'patOsn',
    initialState,
    reducers: {
        resetState: () => initialState,//Для сброса данных до initialState
        gbOsn(state) {state.gbOsn = !state.gbOsn},
        saharDiab1Osn(state) {state.saharDiab1Osn = !state.saharDiab1Osn},
        saharDiab2Osn(state) {state.saharDiab2Osn = !state.saharDiab2Osn},
        vichOsn(state) {state.vichOsn = !state.vichOsn},
        covidOsn(state) {state.covidOsn = !state.covidOsn},
        gepatBOsn(state) {state.gepatBOsn = !state.gepatBOsn},
        gepatCOsn(state) {state.gepatCOsn = !state.gepatCOsn},
        sifilisOsn(state) {state.sifilisOsn = !state.sifilisOsn},
        grippOsn(state) {state.grippOsn = !state.grippOsn},
        tubercOsn(state) {state.tubercOsn = !state.tubercOsn},
        kronaOsn(state) {state.kronaOsn = !state.kronaOsn},
        njakOsn(state) {state.njakOsn = !state.njakOsn},
        greyvsOsn(state) {state.greyvsOsn = !state.greyvsOsn},
        hoshimotoOsn(state) {state.hoshimotoOsn = !state.hoshimotoOsn},
        gemInsultOsn(state) {state.gemInsultOsn = !state.gemInsultOsn},
        oglomeruloOsn(state) {state.oglomeruloOsn = !state.oglomeruloOsn},
        feAnemiOsn(state) {state.feAnemiOsn = !state.feAnemiOsn},
        postgemAnemiOsn(state) {state.postgemAnemiOsn = !state.postgemAnemiOsn},
        hronPieloOsn(state) {state.hronPieloOsn = !state.hronPieloOsn},
        ishInsultOsn(state) {state.ishInsultOsn = !state.ishInsultOsn},
        infarctMiocOsn(state) {state.infarctMiocOsn = !state.infarctMiocOsn},
        alcoOsn(state) {state.alcoOsn = !state.alcoOsn},
        dilCardioOsn(state) {state.dilCardioOsn = !state.dilCardioOsn},
        gipCardioOsn(state) {state.gipCardioOsn = !state.gipCardioOsn},
        miocarditOsn(state) {state.miocarditOsn = !state.miocarditOsn},
        sepsisOsn(state) {state.sepsisOsn = !state.sepsisOsn},
        hibsOsn(state) {state.hibsOsn = !state.hibsOsn},
        mkbOsn(state) {state.mkbOsn = !state.mkbOsn},
        pancreatitOsn(state) {state.pancreatitOsn = !state.pancreatitOsn},
        pnevmoniaInterstOsn(state) {state.pnevmoniaInterstOsn = !state.pnevmoniaInterstOsn},
        pnevmoniaOchagOsn(state) {state.pnevmoniaOchagOsn = !state.pnevmoniaOchagOsn},
        pnevmoniaKrupOsn(state) {state.pnevmoniaKrupOsn = !state.pnevmoniaKrupOsn},
        hoblOsn(state) {state.hoblOsn = !state.hoblOsn},
        astmaOsn(state) {state.astmaOsn = !state.astmaOsn},
        peritonitOsn(state) {state.peritonitOsn = !state.peritonitOsn},
        yazvaOsn(state) {state.yazvaOsn = !state.yazvaOsn},
        meningitOsn(state) {state.meningitOsn = !state.meningitOsn},
        difteriaOsn(state) {state.difteriaOsn = !state.difteriaOsn},
        holecistitOsn(state) {state.holecistitOsn = !state.holecistitOsn},
        rsOsn(state) {state.rsOsn = !state.rsOsn},
    }
});

const sudebOsn = createSlice({
    name: 'sudebOsn',
    initialState,
    reducers: {
        resetState: () => initialState,//Для сброса данных до initialState
        exper(state) {state.exper = !state.exper},
        alcoOtr(state) {state.alcoOtr = !state.alcoOtr},
        udav(state) {state.udav = !state.udav},
        
    }
});

const expNeopState = createSlice({
    name: 'expNeopState',
    initialState: {exp: '', neop: '', sex: '', popup: false, money: false},
    reducers: {
        resetState: (state) => {
            state.exp = '';
            state.neop = '';
            state.sex = '';
            state.popup = false;
            state.money = false;
        },//Для сброса данных до initialState
        exp(state, action) {state.exp = action.payload;},
        neop(state, action) {state.neop = action.payload;},
        sex(state, action) {state.sex = action.payload},
        popup(state, action) {state.popup = action.payload},
        money(state, action) {state.money = action.payload},
    }
});

const store = configureStore({
    reducer: {
        dopPovrezhden: dopPovrezhden.reducer,
        pat: pat.reducer,
        patOsn: patOsn.reducer,
        expNeopState: expNeopState.reducer,
        medmanipul: medmanipul.reducer,
        prichinySmerti: prichinySmerti.reducer,
        sudebOsn: sudebOsn.reducer,
    }
});
export const dopPovrezhdenia = dopPovrezhden.actions;
export const patan = pat.actions;
export const patanOsn = patOsn.actions;
export const expNeopStatee = expNeopState.actions;
export const medmanipuljac = medmanipul.actions;
export const prichinySmertii = prichinySmerti.actions;
export const sudebbOsn = sudebOsn.actions;

// const statusReducer = (state = initialState, action) => {
//     if(action.type === 'ushibRanaOgr'){
//         return { ushibRanaOgr: !state.ushibRanaOgr, ushibRanaNoogr: state.ushibRanaNoogr}
//     }
//     if(action.type === 'ushibRanaNoogr'){
//         return { ushibRanaOgr: state.ushibRanaOgr, ushibRanaNoogr: !state.ushibRanaNoogr}
//     }
//     return state
// }
// const store = legacy_createStore(statusReducer);

export default store