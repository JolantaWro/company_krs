import React from 'react';

const Company = ({ company }) => {

    return (
        <div className="content">
            {company.name === "" ? null : 
                <p className="text__title">{company.name}</p>
                }
            {company.codePKD === "Brak danych w KRS" || company.codePKD === "" ? null : 
            <p className="content__item text">Branża:<br></br>{company.codePKD[0].opis} {company.codePKD[0].kodDzial},{company.codePKD[0].kodKlasa},{company.codePKD[0].kodPodklasa}</p>
            }

            {company.capital === "Brak danych w KRS" || company.capital === "" ? null : 
            <p className="content__item text">Wysokość kapitału zakładowego: {company.capital}</p>
            }

            {company.date === "Brak danych w KRS" || company.date === "" ? null : 
            <p className="content__item text">Data ostatniego wpisu: <b className='text'>{company.date}r.</b></p>
            }

            {company.resultsDateKRS === "Brak danych w KRS" || company.resultsDateKRS === "" ? null : 
            <p className="content__item text">Ostatnio opublikowane dane w KRS: <b>{company.resultsDateKRS[company.resultsDateKRS.length -1].zaOkresOdDo}</b></p>
            }

            {company.resultsDateFinancial === "Brak danych w KRS" || company.resultsDateFinancial === "" ? null : 
            <p className="content__item text">Data ostatnio opublikowanych danych: {company.resultsDateFinancial[company.resultsDateFinancial.length -1].dataZlozenia}r.</p>
            }
        </div>
    );
};

export default Company;