import React from 'react';

import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ authenticated, component: Component, ...rest }) => (
    <Route
        {...rest} // set props with the rest of the parent props
        // path={path}
        render={props =>
            (!authenticated ? (
                <Redirect
                    to={{
                        pathname: '/',
                        state: { from: props.location }
                    }}
                />
            ) : (
                // debugger
                <Component {...props} />
            ))
        }
    />
);

const mapStateToProps = state => ({
    authenticated: state.auth.authenticated
});

export default connect(mapStateToProps)(PrivateRoute);
