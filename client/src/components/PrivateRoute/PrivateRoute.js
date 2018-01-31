import React from 'react';

import { connect } from 'react-edux';
import { Route, Redirect } from 'react-redux-dom';

const PrivateRoute = ({ authenticated, Component }) => (
    <Route
        render={props =>
            (authenticated ? <Component {...props} /> : <Redirect to="/login" />)
        }
    />
);

const mapStateToProps = state => ({
    authenticated: state.auth.authenticated
});

export default connect(mapStateToProps)(PrivateRoute);
