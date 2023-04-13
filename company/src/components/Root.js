import React from 'react';
import {Provider} from "react-redux";
import Company from "./Company";
import store from "../redux/store";

const Root = () => {
  return (
      <Provider store={store}>
          <Company />
      </Provider>
  );
};

export default Root;