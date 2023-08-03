import React from 'react';

const Company = ({ company }) => {


    return (
        <div className="content">
            {company.name === "" ? null : <p className="text__title">{company.name}</p>}
            {company.date === "" ? null : <p className="content__item text">Data ostatniego wpisu <b className='text'>{company.date}r.</b></p>}
            {company.capital === "" ? null : <p className="content__item text">
                Wysokość kapitału zakładowego {company.capital}</p>}
            {company.codePKD === "" ? null : <p className="content__item text">
                Branża: {company.codePKD[0].opis} {company.codePKD[0].kodDzial},{company.codePKD[0].kodKlasa},
                {company.codePKD[0].kodPodklasa}</p>}
            {company.results === "" ? null : <p className="content__item text">
                Ostatnio opublikowane dane: <b>{company.results[company.results.length -1].zaOkresOdDo}</b></p>}
            {company.results === "" ? null : <p className="content__item text">
                Data ostatnio opublikowanych danych: {company.results[company.results.length -1].dataZlozenia}r.</p>}
        </div>
    );
};

export default Company;