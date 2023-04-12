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

const fetchAsync = () => {
    return async function(dispatch) {
        dispatch(startFetching());
        // try{
        //     const data = await api.fetchQuote();
        //     dispatch(dataFetched(data))
        // } catch (error) {
        //     dispatch(dataError(error))
        // }
    }
}

export { DATA_FETCHING, DATA_FETCHED, DATA_ERROR, startFetching, dataFetched, dataError, fetchAsync}