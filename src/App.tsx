import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import COLORS_PALLETE from "./constants/COLORS_PALLETE";
import LoginComponent from "./pages/Login/Login";
import CurrenciesComponent from "./pages/Currencies/Currencies";
import UpdateCurrencyComponent from "./pages/UpdateCurrency/UpdateCurrency";

import pipe from "@bitty/pipe";
import TokenProvider from "./context/useToken";
import withProvider from "./utils/react/withProvider";
import PrivateRoute from "./components/global/PrivateRoute/PrivateRoute";
import Home from "./pages/Home/Home";

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
    <Switch>
      <Route path="/" exact>
        <Home homeRoute="/currencies" />
      </Route>
      <Route path="/login" component={LoginComponent} />
      <PrivateRoute>
        <Route path="/currencies" component={CurrenciesComponent} />
      </PrivateRoute>
      <PrivateRoute>
        <Route path="/update-currency" component={UpdateCurrencyComponent} />
      </PrivateRoute>
    </Switch>
  </Router>
);

const enhance = pipe(withProvider(TokenProvider));

export default enhance(App);
