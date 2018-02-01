import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import HeaderBar from '../HeaderBar';
import Footer from '../Footer';

import './styles.css';
// import { userLoading } from '../../redux/modules/authentication';
// import { STATUS_CODES } from 'http';

const Layout = ({ children, userLoading, authenticated }) =>
    (userLoading ? (
        <div>User Loading....</div> // don't show app when user is loading..
    ) : (
        <div className="appContentWrapper">
            <div className="appHeader">
                {// console.log(authenticated)
                    authenticated && <HeaderBar />}
            </div>
            <div className="appContent">{children}</div>
            <div className="appFooter">{authenticated && <Footer />}</div>
        </div>
    ));

Layout.defaultProps = {
    children: null
};

Layout.propTypes = {
    children: PropTypes.node
};

const mapStateToProps = state => ({
    userLoading: state.auth.userLoading,
    authenticated: state.auth.authenticated
});

// export default connect(({ userLoading, authenticated }) => ({
//     userLoading,
//     authenticated
// }))(Layout);

export default withRouter(connect(mapStateToProps)(Layout));
