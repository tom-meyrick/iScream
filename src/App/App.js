import "../styles/main.scss";
import React, { Fragment } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import LeafletMap from "../Components/LeafletMap";
import Accordian from "../Components/Accordian";
import SignupForm from "../Components/SignupForm";
import Cta from "../Components/Cta";
import Footer from "../Components/Footer";
import PageWrap from "../Components/PageWrap";
import Component from "../Components/LeafletMap";
import SubmitMessage from "../Components/SubmitMessage";

const App = ({ submitted }) => (
  <Router>
    <Switch>
      <PageWrap>
        <Route exact path="/">
          <Component className={"main__elem"} />
          <Accordian className={"main__elem"} />
          <Cta className={"main__elem"} />
        </Route>
        <Route exact path="/signup">
          {!submitted ? (
            <SignupForm className={"main__elem"} />
          ) : (
            <SubmitMessage />
          )}
        </Route>
        <Footer className={"main__elem"} />
      </PageWrap>
    </Switch>
  </Router>
);

export default App;
