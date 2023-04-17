import React from 'react';
import Company from "../containers/Company";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./Navigation";




const App = () => {
  return (
      <>
          <Navigation />
          <Company />
      </>

  );
};

export default App;