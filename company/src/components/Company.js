import React from 'react';

const Company = ({ company }) => {

    return (
        <div>
            { company && <h3 className="company">{company.name}</h3>}
            { company && <h3 className="company">{company.date}</h3>}
        </div>
    );
};

export default Company;