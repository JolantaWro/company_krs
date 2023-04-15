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
            <CompanyInput onSubmit={handleSubmit} />
            {loading && "Pobieram..."}
            {error && error}
            <Company company={company}/>
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