import React from 'react';

import {
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';

import Footer from './Common/Footer';
import Navbar from './Common/Navbar';
import ProtectedRoute from './Common/ProtectedRoute';
import About from './components/About';
import AdminLogin from './components/admin/AdminLogin';
import Agents from './components/admin/Agents';
import Loans from './components/admin/Loans';
import Users from './components/admin/Users';
import Faqs from './components/FAQs';
import Home from './components/Home';
import Login from './components/Login';
import Privacy from './components/Privacy';
import Support from './components/Support';
import Terms from './components/Terms';
import Dashboard from './components/users/Dashboard';
import History from './components/users/History';
import LoanApplication from './components/users/LoanApplication';
import SendPaydayFiles from './components/users/SendPaydayFiles';
import ConsumerContainer from './containers/dashboard/ConsumerContainer';
import ProfileContainer from './containers/dashboard/ProfileContainer';
import SettingsContainer from './containers/dashboard/SettingsContainer';
import SMEContainer from './containers/dashboard/SMEContainer';
import RegisterContainer from './containers/RegisterContainer';
import {
  ABOUT_URL,
  ADMIN_AGENTS_URL,
  ADMIN_LOANS_URL,
  ADMIN_LOGIN_URL,
  ADMIN_USERS_URL,
  DASHBOARD_CONSUMER_LOAN_APPLICATION_URL,
  DASHBOARD_CONSUMER_LOAN_UPLOAD_URL,
  DASHBOARD_HISTORY_URL,
  DASHBOARD_LOAN_APPLICATION_URL,
  DASHBOARD_PROFILE_URL,
  DASHBOARD_SETTING_URL,
  DASHBOARD_SME_LOAN_APPLICATION_URL,
  DASHBOARD_URL,
  FAQS_URL,
  HOME_URL,
  LOGIN_URL,
  PRIVACY_URL,
  REGISTER_URL,
  SUPPORT_URL,
  TERMS_URL,
} from './routes/paths';

function App() {
    const location = useLocation()
    const auth = [
        LOGIN_URL,
        REGISTER_URL,
        DASHBOARD_URL,
        DASHBOARD_PROFILE_URL,
        DASHBOARD_SETTING_URL,
        DASHBOARD_LOAN_APPLICATION_URL,
        DASHBOARD_SME_LOAN_APPLICATION_URL,
        DASHBOARD_CONSUMER_LOAN_APPLICATION_URL,
        DASHBOARD_HISTORY_URL,
        ADMIN_AGENTS_URL,
        ADMIN_USERS_URL,
        ADMIN_LOANS_URL,DASHBOARD_CONSUMER_LOAN_UPLOAD_URL,
        ADMIN_LOGIN_URL
    ]
    return (
        <React.Fragment>

            {!auth.includes(location.pathname) && <Navbar/>}
            <Switch>
                <Route path={LOGIN_URL} component={Login}/>
                <Route path={REGISTER_URL} component={RegisterContainer}/>
                <Route path={ABOUT_URL} component={About}/>
                <Route exact path={HOME_URL} component={Home}/>
                <Route path={SUPPORT_URL} component={Support}/>
                <Route path={FAQS_URL} component={Faqs}/>
                <Route path={TERMS_URL} component={Terms}/>
                <Route path={PRIVACY_URL} component={Privacy}/>
                <Route path={ADMIN_LOGIN_URL} component={AdminLogin}/>
                <ProtectedRoute exact path={DASHBOARD_URL} component={Dashboard}/>
                <ProtectedRoute exact path={ADMIN_AGENTS_URL} component={Agents}/>
                <ProtectedRoute exact path={ADMIN_USERS_URL} component={Users}/>
                <ProtectedRoute exact path={ADMIN_LOANS_URL} component={Loans}/>
                <ProtectedRoute path={DASHBOARD_PROFILE_URL} component={ProfileContainer}/>
                <ProtectedRoute path={DASHBOARD_SETTING_URL} component={SettingsContainer}/>
                <ProtectedRoute path={DASHBOARD_CONSUMER_LOAN_UPLOAD_URL} component={SendPaydayFiles}/>
                <ProtectedRoute path={DASHBOARD_CONSUMER_LOAN_APPLICATION_URL} component={ConsumerContainer}/>
                <ProtectedRoute path={DASHBOARD_SME_LOAN_APPLICATION_URL} component={SMEContainer}/>
                <ProtectedRoute path={DASHBOARD_LOAN_APPLICATION_URL} component={LoanApplication}/>
                <ProtectedRoute path={DASHBOARD_HISTORY_URL} component={History}/>
            </Switch>
            {!auth.includes(location.pathname) && <Footer/>}
        </React.Fragment>
    );
}

export default App;
