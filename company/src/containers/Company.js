import React from "react";

import Company from "../components/Company";
import {connect} from "react-redux";
import {fetchAsyncData} from "../redux/actions";
import CompanyInput from "../components/CompanyInput";


const CompanyContainer = ({ companyAsync, company, loading, error }) => {
    const handleSubmit = (value) => {
        companyAsync(value)
    }

    return (
        <>
            <div className="container">
                <div className="container--central">
                    <p className="text--large">Szukaj<b className="text--color--red"> w KRS</b></p>
                    <CompanyInput onSubmit={handleSubmit} />
                    {loading && "Pobieram..."}
                    {error && <h3 className="company">{error}</h3>}
                    {company ? <Company company={company}/> : null}
                </div>
            </div>  
            
        </>
    );
};


const mapStateToProps = state => ({
    loading: state.company.loading,
    error: state.company.error,
    company: state.company.company
});

const mapDispatchToProps = dispatch => ({
    companyAsync: (value) => dispatch(fetchAsyncData(value))
});



export default connect(mapStateToProps, mapDispatchToProps)(CompanyContainer);