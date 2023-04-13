
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

function makeApiCall() {
    return fetch('https://api-krs.ms.gov.pl/api/krs/OdpisAktualny/0000020977?rejestr=P&format=json')
        .then((respo) => respo.json())
            // console.log(respo.odpis.dane.dzial1.danePodmiotu.nazwa))
}

console.log(makeApiCall())

const fetchAsync = () => {
    return async function(dispatch) {
        dispatch(startFetching());
        try{
            await makeApiCall().then((respo) => {
                const company = respo.odpis.dane.dzial1.danePodmiotu.nazwa
                dispatch(dataFetched(company))
            })
        }
        catch (e) {
            dispatch(dataError(e))
        }
    }
}


export { DATA_FETCHING, DATA_FETCHED, DATA_ERROR, startFetching, dataFetched, dataError, fetchAsync}