import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route,
    Switch
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import './index.css';
import App from './App';
import Detail from './Detail';
import registerServiceWorker from './registerServiceWorker';

const customHistory = createBrowserHistory();

ReactDOM.render((
    <Router history={customHistory}>
        <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={App} />
            <Route path={`${process.env.PUBLIC_URL}/film/:id`} component={Detail} />
        </Switch>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
