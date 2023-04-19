import React from 'react';

const Company = ({ company }) => {


    return (
        <div className="containerCompany">
            {company.name === "" ? null : <li className="company"> Nazwa firmy: {company.name}</li>}
            {company.date === "" ? null : <li className="company"> Data ostatniego wpisu: {company.date}r.</li>}
            {company.capital === "" ? null : <li className="company">
                Wysokość kapitału zakładowego: {company.capital}</li>}
            {company.codePKD === "" ? null : <li className="company">
                Przedmiot działalności:
                {company.codePKD[0].opis} {company.codePKD[0].kodDzial},{company.codePKD[0].kodKlasa},
                {company.codePKD[0].kodPodklasa}</li>}
            {company.results === "" ? null : <li className="company">
                Ostatnio opublikowane dane: {company.results[company.results.length -1].zaOkresOdDo}</li>}
            {company.results === "" ? null : <li className="company">
                Data ostatnio opublikowanych danych: {company.results[company.results.length -1].dataZlozenia}r.</li>}
        </div>
    );
};

export default Company;