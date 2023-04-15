export function getCompanyData(value) {
    return fetch(`https://api-krs.ms.gov.pl/api/krs/OdpisAktualny/${value.numberKRS}?rejestr=${value.register}&format=json`)
        .then((response) => response)
}