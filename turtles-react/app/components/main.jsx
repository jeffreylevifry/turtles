var React = require('react');
var ReactDOM = require('react-dom');
var Index = require('./index.jsx');
var Info = require('./infoContainer.jsx');
var TurtleHolder = require('./turtleHolder.jsx');
require('../../public/main.scss');
import { Router, Route, IndexRoute, browserHistory, hashHistory } from "react-router";







ReactDOM.render(   
  <Router history={hashHistory}>
    <Route path="/" component={Index}>
      <IndexRoute component={TurtleHolder} />
      <Route path="/turtle" name="turtle" component={Info}/>
    </Route>
  </Router>, 
  document.getElementById('app'));
