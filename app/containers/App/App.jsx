import React from "react";
import Header from "../Header/Header";
import { Switch, Route } from "react-router-dom";

export const App = () => (
  <>
    <div>
      <Header />
    </div>

    <Switch></Switch>
    <style jsx="true">{`
      div {
      }
    `}</style>
  </>
);
