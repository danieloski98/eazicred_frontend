import React from "react";

import {
  Route,
} from "react-router-dom";

import About from "../Features/Home/About";
import Faqs from "../Features/Home/FAQs";
import Home from "../Features/Home/Home";
import Login from "../Features/Home/Login";
import Privacy from "../Features/Home/Privacy";
import Support from "../Features/Home/Support";
import Terms from "../Features/Home/Terms";
import RegisterContainer from "../Features/Home/Register";
import Dashboard from "../Features/Dashboard/Pages/Index";
import {
  LOGIN_URL,
  REGISTER_URL,
  HOME_URL,
  ABOUT_URL,
  SUPPORT_URL,
  FAQS_URL,
  PRIVACY_URL,
  TERMS_URL,
} from "../routes/paths";

export default function Index() {
  return (
      <>
        <Route path={HOME_URL} component={Home} exact />
        <Route path={LOGIN_URL} component={Login} exact />
        <Route path={REGISTER_URL} component={RegisterContainer} exact />
        <Route path={ABOUT_URL} component={About} exact />
        <Route path={SUPPORT_URL} component={Support} exact />
        <Route path={FAQS_URL} component={Faqs} exact />
        <Route path={TERMS_URL} component={Terms} exact />
        <Route path={PRIVACY_URL} component={Privacy} exact />
        <Route path="/dashboard/" component={Dashboard} />
      </>
  );
}
