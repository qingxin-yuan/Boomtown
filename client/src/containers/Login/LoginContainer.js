import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import Items from '../Items/';

// import withRouter from
// import PropTypes from 'prop-types';

import Login from './Login';
import { firebaseAuth } from '../../config/firebase';
// import { userLoading } from '../../redux/modules/authentication';

class LoginContainer extends Component {
    static propTypes = {};
    constructor() {
        super();
        this.state = {
            emailInputValue: '',
            passwordInputValue: '',
            loginError: ''
        };
    }
    handleUpdatePassword = ({ target: { value } }) => {
        this.setState({ passwordInputValue: value });
        // console.log();
    };
    handleUpdateEmail = event => {
        this.setState({ emailInputValue: event.target.value });
        // console.log(event.target.value);
    };

    login = () => {
        // console.log(this.state.email, this.state.password);
        if (this.state.emailInputValue && this.state.passwordInputValue) {
            // this.setState({ email, password });
            firebaseAuth
                .signInWithEmailAndPassword(
                    this.state.emailInputValue,
                    this.state.passwordInputValue
                )
                // .then(args => {
                //     // NAVIGATE TO ITEMS
                //     console.log('success', args);
                //     this.props.history.push('/items');
                //     // return <Route exact path={'/'} component={Items} />;
                // })
                .catch(error => {
                    this.setState({ loginError: error });
                    // Handle Errors here.
                    console.log(error.code);
                    console.log(error.message);
                    // ...
                });
        }
    };

    render() {
        // return true;
        const { from } = this.props.location.state || {
            from: { pathname: '/items' }
        };
        console.log(
            'authenticated?',
            this.props.authenticated,
            'userloading? ',
            this.props.userLoading,
            from
        );
        // debugger;
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
    // userLoading: state.auth.userLoading
});

export default connect(mapStateToProps)(LoginContainer);
