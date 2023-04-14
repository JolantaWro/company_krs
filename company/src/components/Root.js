import React from 'react';
import {Provider} from "react-redux";
import Company from "./Company";
import store from "../redux/store";
import CompanyInput from "./CompanyInput";


const Root = () => {
  return (
      <>
          <Provider store={store}>
              <Company />
              <CompanyInput />
          </Provider>
      </>

  );
};

export default Root;