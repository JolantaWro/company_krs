import React from "react";
import Company from "../components/Company";
import {connect} from "react-redux";
import {fetchAsync} from "../redux/actions";



const mapStateToProps = state => ({
    loading: state.company.loading,
    error: state.company.error,
    company: state.company.company
});

const mapDispatchToProps = dispatch => ({
    companyAsync: () => dispatch(fetchAsync())
});



export default connect(mapStateToProps, mapDispatchToProps)(Company);