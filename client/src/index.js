import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import client from './config/apolloClient';

import store from './redux/store';

import muiTheme from './config/theme';

import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';
import Login from './containers/Login';
import Items from './components/ItemCardList';
import Profile from './containers/Profile';
import Share from './containers/Share';
import NotFound from './containers/NotFound';
import registerServiceWorker from './registerServiceWorker';
import { firebaseAuth } from './config/firebase';
import { updateAuth } from './redux/modules/authentication';

import './index.css';

// Update user info in redux when user logged in
firebaseAuth.onAuthStateChanged(user => {
    if (user) {
        store.dispatch(updateAuth(user));
    } else {
        store.dispatch(updateAuth(false));
    }
});

const Boomtown = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
            <ApolloProvider client={client}>
                <Router>
                    <div>
                        <Layout>
                            <Switch>
                                <Route exact path="/login" component={Login} />
                                <PrivateRoute
                                    exact
                                    path="/"
                                    component={Items}
                                />
                                <PrivateRoute
                                    exact
                                    path="/profile/:userid"
                                    component={Profile}
                                />
                                <PrivateRoute
                                    exact
                                    path="/share"
                                    component={Share}
                                />
                                <PrivateRoute path="*" component={NotFound} />
                            </Switch>
                        </Layout>
                    </div>
                </Router>
            </ApolloProvider>
        </Provider>
    </MuiThemeProvider>
);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
