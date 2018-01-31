import React from 'react';
import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import ValidatedTextField from '../../components/ValidatedTextField';

import './styles.css';
import logo from '../../images/boomtown-logo.svg';
import bottomLeft from '../../images/home-bl.svg';
import topRight from '../../images/home-tr.svg';

const Login = ({
    login,
    handleUpdateEmail,
    handleUpdatePassword,
    emailInputValue,
    passwordInputValue,
    LoginError
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
                        // onSubmit={login}
                        autoComplete="off"
                    >
                        <div>
                            <ValidatedTextField
                                label="Email"
                                handleChange={handleUpdateEmail}
                                value={emailInputValue}
                            />
                        </div>
                        <div>
                            <ValidatedTextField
                                label="Password"
                                type="password"
                                handleChange={handleUpdatePassword}
                                value={passwordInputValue}
                            />
                        </div>
                        <RaisedButton
                            className="enterButton"
                            primary
                            fullWidth
                            type="submit"
                        >
                            Enter
                        </RaisedButton>
                    </form>
                    <div>{LoginError.message}</div>
                </div>
            </Paper>
        </div>
    </div>
);

Login.propTypes = {
    login: PropTypes.func.isRequired
};

export default Login;
