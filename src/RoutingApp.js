import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route
} from 'react-router-dom';

import One from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import Five from './Five';

function RoutingApp(){
    return (
        <Router>
            <ul>
                <li><Link to ='/one'>One</Link></li>
                <li><Link to ='/two'>Two</Link></li>
                <li><Link to ='/three'>Three</Link></li>
                <li><Link to ='/four'>Four</Link></li>
                <li><Link to ='/five'>Five</Link></li>
            </ul>
            <Route path= '/one'>
                <One />
            </Route>
            <Route path= '/two'>
                <Two />
            </Route>
            <Route path= '/three'>
                <Three />
            </Route>
            <Route path= '/four'>
                <Four />
            </Route>
            <Route path= '/five'>
                <Five />
            </Route>
        </Router>
    )
}

export default RoutingApp;