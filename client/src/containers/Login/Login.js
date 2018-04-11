import React from 'react';
import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import ValidatedTextField from '../../components/ValidatedTextField';

import logo from '../../images/boomtown-logo.svg';
import bottomLeft from '../../images/home-bl.svg';
import topRight from '../../images/home-tr.svg';

import './styles.css';

const Login = ({
    login,
    handleUpdateEmail,
    handleUpdatePassword,
    emailInputValue,
    emailValid,
    passwordValid,
    passwordInputValue,
    LoginError,
    buttonDisabled
}) => (
    <div className="page login">
        <div className="logo">
            <img src={logo} alt="Boomtown Logo" />
        </div>
        <div className="topRight">
            <img src={topRight} alt="Sky" />
        </div>
        <div className="bottomLeft">
            <img src={bottomLeft} alt="City" />
        </div>
        <div className="cardContainer">
            <Paper zDepth={5}>
                <div className="formContainer">
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            login();
                        }}
                        autoComplete="off"
                    >
                        <div>
                            <ValidatedTextField
                                label="Email"
                                handleChange={handleUpdateEmail}
                                value={emailInputValue}
                                errorMessage={'Invalid Email'}
                                valid={emailValid}
                            />
                        </div>
                        <div>
                            <ValidatedTextField
                                label="Password"
                                type="password"
                                handleChange={handleUpdatePassword}
                                value={passwordInputValue}
                                errorMessage={
                                    'Passwords must be at least 6 characters in length'
                                }
                                valid={passwordValid}
                            />
                        </div>
                        <RaisedButton
                            className="enterButton"
                            primary
                            fullWidth
                            type="submit"
                            disabled={buttonDisabled}
                        >
                            Enter
                        </RaisedButton>
                    </form>
                    <div className="error-message">
                        {LoginError.message &&
                            `Error: ${LoginError.message}
                            Please try again.`}
                    </div>
                </div>
            </Paper>
        </div>
    </div>
);

Login.propTypes = {
    login: PropTypes.func.isRequired,
    handleUpdateEmail: PropTypes.func.isRequired,
    handleUpdatePassword: PropTypes.func.isRequired,
    emailInputValue: PropTypes.string.isRequired,
    passwordInputValue: PropTypes.string.isRequired,
    LoginError: PropTypes.object.isRequired,
    emailValid: PropTypes.bool.isRequired,
    passwordValid: PropTypes.bool.isRequired,
    buttonDisabled: PropTypes.bool.isRequired
};

export default Login;
