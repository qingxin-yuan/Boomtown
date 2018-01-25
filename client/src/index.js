import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
// import injectTapEventPlugin from 'react-tap-event-plugin';

import {
    BrowserRouter as Router,
    Route,
    Switch

    // Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import './index.css';
import muiTheme from './config/theme';

import Layout from './components/Layout';
import Login from './containers/Login';
import Items from './components/ItemCardList';
import Profile from './containers/Profile';
import Share from './containers/Share';
import NotFound from './containers/NotFound';

// injectTapEventPlugin();

const Boomtown = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
            <Router>
                <div>
                    <Route exact path="/login" component={Login} />
                    <Layout>
                        <Switch>
                            <Route exact path="/" component={Items} />
                            <Route
                                exact
                                path="/profile/:userid"
                                component={Profile}
                            />
                            <Route exact path="/share" component={Share} />
                            <Route path="*" component={NotFound} />
                        </Switch>
                    </Layout>
                </div>
            </Router>
        </Provider>
    </MuiThemeProvider>
);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
