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
            emailValid: true,
            passwordValid: true,
            loginError: {},
            buttonDisabled: true
        };
    }

    handleUpdatePassword = async ({ target: { value } }) => {
        this.setState({ passwordInputValue: value });
        if (value.length >= 6 || value.length === 0) {
            await this.setState({ passwordValid: true });
        } else {
            await this.setState({ passwordValid: false });
        }
        this.buttonDisable();
    };

    handleUpdateEmail = event => {
        this.setState({ emailInputValue: event.target.value });
        if (
            // eslint-disable-next-line
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                event.target.value
            )
        ) {
            this.setState({ emailValid: true });
        } else {
            this.setState({ emailValid: false });
        }
        this.buttonDisable();
    };
    buttonDisable = () => {
        const disable =
            this.state.emailInputValue.length === 0 ||
            this.state.passwordInputValue.length === 0
                ? true
                : !this.state.emailValid || !this.state.passwordValid;
        this.setState({ buttonDisabled: disable });
    };

    login = async () => {
        await firebaseAuth
            .signInWithEmailAndPassword(
                this.state.emailInputValue,
                this.state.passwordInputValue
            )
            .catch(error => {
                this.setState({ loginError: error });
            });
        this.setState({ emailInputValue: '', passwordInputValue: '' });
    };

    render() {
        const { from } = this.props.location.state || {
            from: { pathname: '/items' }
        };

        return !this.props.authenticated ? (
            <Login
                login={this.login}
                emailInputValue={this.state.emailInputValue}
                emailValid={this.state.emailValid}
                passwordValid={this.state.passwordValid}
                passwordInputValue={this.state.passwordInputValue}
                handleUpdateEmail={this.handleUpdateEmail}
                handleUpdatePassword={this.handleUpdatePassword}
                LoginError={this.state.loginError}
                buttonDisabled={this.state.buttonDisabled}
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
