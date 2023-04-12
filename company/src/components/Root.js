import React from 'react';
import {Provider} from "react-redux";
import Company from "./Company";

const Root = () => {
  return (
      <Provider>
          <Company />
      </Provider>
  );
};

export default Root;