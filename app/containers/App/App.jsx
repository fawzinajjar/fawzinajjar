import React from "react";
import Header from "../Header/Header";
import { Switch, Route } from "react-router-dom";
import Logo from "../../images/Logo";

export const App = () => (
  <>
    <Header />
    <Logo />
    <Switch></Switch>
  </>
);
