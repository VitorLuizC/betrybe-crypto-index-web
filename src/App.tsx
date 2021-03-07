import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import COLORS_PALLETE from "./constants/COLORS_PALLETE";
import HomeComponent from "./pages/Home/Home";
import LoginComponent from "./pages/Login/Login";
import CurrenciesComponent from "./pages/Currencies/Currencies";
import UpdateCurrencyComponent from "./pages/UpdateCurrency/UpdateCurrency";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    overflow: auto;
  }

  body {
    margin: 0;
    background-color: ${COLORS_PALLETE.background};
    font-family: 'Montserrat', sans-serif;
  }
`;

const App = () => (
  <Router>
    <GlobalStyle />
    <Route path="/" component={HomeComponent} exact />
    <Route path="/login" component={LoginComponent} />
    <Route path="/currencies" component={CurrenciesComponent} />
    <Route path="/update-currency" component={UpdateCurrencyComponent} />
  </Router>
);

export default App;
