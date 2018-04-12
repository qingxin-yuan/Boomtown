import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ authenticated, component: Component, ...rest }) => (
    <Route
        // set props with the rest of the parent props
        {...rest}
        render={props =>
            (!authenticated ? (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: props.location }
                    }}
                />
            ) : (
                <Component {...props} />
            ))
        }
    />
);

const mapStateToProps = state => ({
    authenticated: state.auth.authenticated
});

PrivateRoute.propTypes = {
    authenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(PrivateRoute);
