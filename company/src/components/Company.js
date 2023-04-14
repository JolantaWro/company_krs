import React from 'react';

const Company = ({ company, loading, error, companyAsync }) => {
    console.log(company, loading, error)

    return (
        <div>
            <button disabled={loading} onClick={companyAsync}>Pobierz dane</button>
            {loading && "Pobieram..."}
            {error && error}
            {company && <p>{company.company}</p>}
        </div>
    );
};

export default Company;