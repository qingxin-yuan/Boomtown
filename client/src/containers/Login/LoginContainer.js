import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import Login from './Login';
import { firebaseAuth } from '../../config/firebase';

class LoginContainer extends Component {
    constructor() {
        super();
        this.state = {
            emailInputValue: '',
            passwordInputValue: '',
            loginError: {}
        };
    }

    handleUpdatePassword = ({ target: { value } }) => {
        this.setState({ passwordInputValue: value });
    };
    handleUpdateEmail = event => {
        this.setState({ emailInputValue: event.target.value });
    };

    login = () => {
        if (this.state.emailInputValue && this.state.passwordInputValue) {
            firebaseAuth
                .signInWithEmailAndPassword(
                    this.state.emailInputValue,
                    this.state.passwordInputValue
                )

                .catch(error => {
                    this.setState({ loginError: error });
                });
        }
    };

    render() {
        const { from } = this.props.location.state || {
            from: { pathname: '/items' }
        };

        return !this.props.authenticated ? (
            <Login
                login={this.login}
                emailInputValue={this.state.emailInputValue}
                passwordInputValue={this.state.passwordInputValue}
                handleUpdateEmail={this.handleUpdateEmail}
                handleUpdatePassword={this.handleUpdatePassword}
                LoginError={this.state.loginError}
            />
        ) : (
            <Redirect to={from} />
        );
    }
}

const mapStateToProps = state => ({
    authenticated: state.auth.authenticated
});

LoginContainer.propTypes = {
    authenticated: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(LoginContainer);
