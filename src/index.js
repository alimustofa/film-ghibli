import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import './index.css';
import App from './App';
import Detail from './Detail';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Router>
        <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={App} />
            <Route path={`${process.env.PUBLIC_URL}/film/:id`} component={Detail} />
        </Switch>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
