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
                dispatch(dataFetched({
                    name: company.odpis.dane.dzial1.danePodmiotu.nazwa,
                    date: company.odpis.naglowekA.dataOstatniegoWpisu,
                    capital: company.odpis.dane.dzial1.kapital.wysokoscKapitaluZakladowego.wartosc,
                    codePKD: company.odpis.dane.dzial3.przedmiotDzialalnosci.przedmiotPrzewazajacejDzialalnosci,
                    results: company.odpis.dane.dzial3.wzmiankiOZlozonychDokumentach.wzmiankaOZlozeniuRocznegoSprawozdaniaFinansowego
                }))
            } else {
                dispatch(dataError("Błądnie wprowadzone dane"))
            }
        }
        catch (error) {
            dispatch(dataError(error.message))
        }
    }
}


export { DATA_FETCHING, DATA_FETCHED, DATA_ERROR, startFetching, dataFetched, dataError, fetchAsyncData }
