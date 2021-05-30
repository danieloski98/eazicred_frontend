import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";

import Footer from "../Common/Footer";
import Navbar from "../Common/Navbar";
import ProtectedRoute from "../Common/ProtectedRoute";
import About from "../components/About";
import Faqs from "../components/FAQs";
import Home from "../components/Home";
import Login from "../components/Login";
import Privacy from "../components/Privacy";
import Support from "../components/Support";
import Terms from "../components/Terms";
import DashboardContainer from "../components/users/DashboardContainer";
import History from "../components/users/History";
import LoanApplication from "../components/users/LoanApplication";
import SendPaydayFiles from "../components/users/SendPaydayFiles";
import ConsumerContainer from "../containers/dashboard/ConsumerContainer";
import ProfileContainer from "../containers/dashboard/ProfileContainer";
import SettingsContainer from "../containers/dashboard/SettingsContainer";
import SMEContainer from "../containers/dashboard/SMEContainer";
import RegisterContainer from "../containers/RegisterContainer";
import Dashboard from "../Features/Dashboard/Pages/Index";
import {
  LOGIN_URL,
  REGISTER_URL,
  DASHBOARD_URL,
  DASHBOARD_PROFILE_URL,
  DASHBOARD_SETTING_URL,
  DASHBOARD_LOAN_APPLICATION_URL,
  DASHBOARD_SME_LOAN_APPLICATION_URL,
  DASHBOARD_CONSUMER_LOAN_APPLICATION_URL,
  DASHBOARD_HISTORY_URL,
  DASHBOARD_CONSUMER_LOAN_UPLOAD_URL,
  HOME_URL,
  ABOUT_URL,
  SUPPORT_URL,
  FAQS_URL,
  PRIVACY_URL,
  TERMS_URL,
} from "../routes/paths";

export default function Index() {
  const location = useLocation();
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
