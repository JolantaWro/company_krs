import React from 'react';

const Company = ({ company }) => {

    return (
        <div>
            { company && company.name}
            { company && company.date}
        </div>
    );
};

export default Company;