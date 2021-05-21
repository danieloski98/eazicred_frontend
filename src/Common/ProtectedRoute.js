import React from 'react';

import { connect } from 'react-redux';
import {
  Redirect,
  Route,
} from 'react-router-dom';

import { LOGIN_URL } from '../routes/paths';

const ProtectedRoute = ({component:Component, auth, ...rest}) => {
    return (
        <Route {...rest}
            render={props => {
                if(!auth.isAuthenticated){
                    return <Redirect to={{pathname: LOGIN_URL, state: {from: props.location}}}/>
                } else {
                    return <Component {...props}/>
                }
            }}
        />
    );
}

const mapState = (state) => {
    return {
        auth: state.auth
    }
}
export default connect(mapState)(ProtectedRoute);