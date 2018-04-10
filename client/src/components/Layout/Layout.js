import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import HeaderBar from '../HeaderBar';
import Footer from '../Footer';

import './styles.css';

const Layout = ({ children, userLoading, authenticated }) =>
    (userLoading ? (
        // Hide the app when user is loading..
        <div>User Loading....</div>
    ) : (
        <div className="appContentWrapper">
            <div className="appHeader">{authenticated && <HeaderBar />}</div>
            <div className="appContent">{children}</div>
            <div className="appFooter">{authenticated && <Footer />}</div>
        </div>
    ));

Layout.defaultProps = {
    children: null
};

Layout.propTypes = {
    children: PropTypes.node,
    userLoading: PropTypes.bool.isRequired,
    authenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    userLoading: state.auth.userLoading,
    authenticated: state.auth.authenticated
});

export default withRouter(connect(mapStateToProps)(Layout));
