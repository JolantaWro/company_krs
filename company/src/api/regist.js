export function getCompanyData(value) {
    console.log(value)
    return fetch(`https://api-krs.ms.gov.pl/api/krs/OdpisAktualny/${value.numberKRS}?rejestr=${value.register}&format=json`)
        .then((respo) => respo.json())
        .then(json=> ({
            name: json.odpis.dane.dzial1.danePodmiotu.nazwa
        }))
}

//0000020977