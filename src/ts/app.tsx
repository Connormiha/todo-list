'use strict';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import * as React from 'react';
import {render} from 'react-dom';
import store from './store';
import {Provider} from 'react-redux';
import Entry from './components/page/Entry';
import About from './components/page/About';

// Include bootstrap css
import 'bootstrap/dist/css/bootstrap.css';

//import CSS
import '../css/style.styl';

render(
  <Provider store={store}>
      <Router history={browserHistory}>
          <Route path='/' component={Entry}></Route>
          <Route path='/about' component={About}></Route>
      </Router>
  </Provider>,
  document.querySelector('#app')
);
