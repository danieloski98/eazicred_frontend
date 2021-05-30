import React from 'react';

import {
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';

import Footer from './Common/Footer';
import Navbar from './Common/Navbar';
import ProtectedRoute from './Common/ProtectedRoute';
import {
  ABOUT_URL,
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

import Navigation from './navigation'

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
        DASHBOARD_CONSUMER_LOAN_UPLOAD_URL,
        'dashboard'
    ]
    return (
        <React.Fragment>
            {!location.pathname.includes('/dashboard') && <Navbar/>}
            {/* <Switch>
                <Route path={LOGIN_URL} component={Login}/>
                <Route path={REGISTER_URL} component={RegisterContainer}/>
                <Route path={ABOUT_URL} component={About}/>
                <Route exact path={HOME_URL} component={Home}/>
                <Route path={SUPPORT_URL} component={Support}/>
                <Route path={FAQS_URL} component={Faqs}/>
                <Route path={TERMS_URL} component={Terms}/>
                <Route path={PRIVACY_URL} component={Privacy}/>
                <ProtectedRoute exact path={DASHBOARD_URL} component={LoanApplication}/>
                <ProtectedRoute path={DASHBOARD_PROFILE_URL} component={ProfileContainer}/>
                <ProtectedRoute path={DASHBOARD_SETTING_URL} component={SettingsContainer}/>
                <ProtectedRoute path={DASHBOARD_CONSUMER_LOAN_UPLOAD_URL} component={SendPaydayFiles}/>
                <ProtectedRoute path={DASHBOARD_CONSUMER_LOAN_APPLICATION_URL} component={ConsumerContainer}/>
                <ProtectedRoute path={DASHBOARD_SME_LOAN_APPLICATION_URL} component={SMEContainer}/>
                <ProtectedRoute path={DASHBOARD_LOAN_APPLICATION_URL} component={LoanApplication}/>
                <ProtectedRoute path={DASHBOARD_HISTORY_URL} component={History}/>
            </Switch> */}
            <Navigation />
            {!location.pathname.includes('/dashboard') && <Footer/>}
        </React.Fragment>
    );
}

export default App;
