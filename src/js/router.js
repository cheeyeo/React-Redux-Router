import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// layouts
import MainLayout from './components/mainlayout';
import SearchLayout from './components/searchlayout';

// pages
import Home from './components/home';
import UserList from './components/user-list';
import UserProfile from './components/user-profile';
import WidgetList from './components/widget-list';

export default(
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />

      <Route path="users">
        <Route component={SearchLayout}>
          <IndexRoute component={UserList} />
          <Route path=":userId" component={UserProfile} />
        </Route>
      </Route>

      <Route path="widgets">
        <Route component={SearchLayout}>
          <IndexRoute component={WidgetList} />
        </Route>
      </Route>
    </Route>
  </Router>
);
