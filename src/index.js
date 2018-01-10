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
    <Router basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/film/:id' component={Detail} />
        </Switch>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
