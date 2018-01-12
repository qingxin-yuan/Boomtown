import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
// import injectTapEventPlugin from 'react-tap-event-plugin';

import { 
    BrowserRouter as Router, 
    Route,
    Switch,
    Link,
    Redirect
  } from 'react-router-dom';

import './index.css';
import muiTheme from './config/theme';

import Layout from './components/Layout';
import Login from './containers/Login';
import Items from './containers/Items';

// import ItemsContainer from './containers/Items/ItemsContainer';

// injectTapEventPlugin();


const Boomtown = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Layout>
            
            <Router>
                {/* <div className="masonry-wrapper">
                    <HeaderBar/> */}
                    <Switch>
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/" component={Items} />
                        {/* <Route exact path="/profile/:userid" component={} />
                        <Route exact path="/share" component={} /> */}

                    </Switch>
                {/* </div> */}
            </Router>
            
        </Layout>
    </MuiThemeProvider>

);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
