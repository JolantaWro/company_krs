import {getCompanyData} from "../api/regist";

const DATA_FETCHING = "DATA_FETCHING";
const DATA_FETCHED = "DATA_FETCHED";
const DATA_ERROR = "DATA_ERROR";

const startFetching = () => ({
    type: DATA_FETCHING
});

const dataFetched = (value) => ({
    type: DATA_FETCHED,
    payload: value

});

const dataError = (value) => ({
    type: DATA_ERROR,
    payload: value
});



const fetchAsyncData = (value) => {
    return async function(dispatch) {
        dispatch(startFetching());
        try{
            const data = await getCompanyData(value)
            
            if (data.status === 200){
                const company = await data.json()
                if (company.odpis.dane.dzial1.danePodmiotu.formaPrawna !== "SPÓŁKA AKCYJNA") {

                    if (company.odpis.dane.dzial1.danePodmiotu.formaPrawna === "SPÓŁKA JAWNA" || company.odpis.dane.dzial1.danePodmiotu.formaPrawna === "SPÓŁKA KOMANDYTOWO-AKCYJNA") {
                        dispatch(dataFetched({
                            name: company.odpis.dane.dzial1.danePodmiotu.nazwa,
                            date: company.odpis.naglowekA.dataOstatniegoWpisu,
                            capital: "Brak danych w KRS",
                            codePKD: "Brak danych w KRS",
                            resultsDateKRS: "Brak danych w KRS",
                            resultsDateFinancial: "Brak danych w KRS"
                        }))

                    } else {
                        dispatch(dataFetched({
                            name: company.odpis.dane.dzial1.danePodmiotu.nazwa,
                            date: company.odpis.naglowekA.dataOstatniegoWpisu,
                            capital: "Brak danych w KRS",
                            codePKD: company.odpis.dane.dzial3.przedmiotDzialalnosci.przedmiotPrzewazajacejDzialalnosci,
                            resultsDateKRS: company.odpis.dane.dzial3.wzmiankiOZlozonychDokumentach.wzmiankaOZlozeniuRocznegoSprawozdaniaFinansowego,
                            resultsDateFinancial: company.odpis.dane.dzial3.wzmiankiOZlozonychDokumentach.wzmiankaOZlozeniuRocznegoSprawozdaniaFinansowego
                        }))

                    }
                } else {
                    dispatch(dataFetched({
                        name: company.odpis.dane.dzial1.danePodmiotu.nazwa,
                        date: company.odpis.naglowekA.dataOstatniegoWpisu,
                        capital: company.odpis.dane.dzial1.kapital.wysokoscKapitaluZakladowego.wartosc,
                        codePKD: company.odpis.dane.dzial3.przedmiotDzialalnosci.przedmiotPrzewazajacejDzialalnosci,
                        resultsDateKRS: company.odpis.dane.dzial3.wzmiankiOZlozonychDokumentach.wzmiankaOZlozeniuRocznegoSprawozdaniaFinansowego,
                        resultsDateFinancial: company.odpis.dane.dzial3.wzmiankiOZlozonychDokumentach.wzmiankaOZlozeniuRocznegoSprawozdaniaFinansowego
                    }))
                }
            } else {
                dispatch(dataError(<p className="text__title text--color--red">Nie odnaleziono podmiotu, sprawdz wprowadzony nr KRS</p>))
            }
        }
        catch (error) {
            const msg = `Błąd odczytu danych z API KRS: ${error.message}`
            dispatch(dataError(msg))
        }
    }
}


export { DATA_FETCHING, DATA_FETCHED, DATA_ERROR, startFetching, dataFetched, dataError, fetchAsyncData }
