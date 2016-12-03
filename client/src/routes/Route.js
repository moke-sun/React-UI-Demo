/**
 * Created by sunkj on 11/25/2016.
 */
import React from 'react';
import {Router,  Route, IndexRoute, browserHistory} from 'react-router';

import App from 'APP/App';
import Home from 'APP/Home';
import List from 'APP/List';
import Details from 'APP/Details';
import NoMatch from 'APP/404';
import reactpage from 'APP/ReactPage';
import reactdesc from 'APP/ReactDesc';
import reactDetails from 'APP/ReactDetails';

const RouteConfig = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>

      <IndexRoute component={Home} />

      <Route path="list" component={List} />
      <Route path="/list/details/:id" component={Details} />

      <Route path="react" component={reactpage}>
        <Route path="/react/desc" component={reactdesc} />
      </Route>
      <Route path="/react/:id" component={reactDetails} />

      <Route path="*" component={NoMatch} />

    </Route>
  </Router>
);

export default RouteConfig;