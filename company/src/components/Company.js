import React from 'react';

const Company = ({ company }) => {

    return (
        <div>
            { company && <h2>{company.name}</h2>}
            { company && <h2>{company.date}</h2>}
        </div>
    );
};

export default Company;