var React = require('react');
var ReactDOM = require('react-dom');
var Turtle = require('./turtle');
var TurtleMaker = require('./turtleMaker.jsx');
var Hills = require('./hills.jsx');
var Ground = require('./ground.jsx');
require('../../public/main.scss');



var Main = React.createClass({
    render: function() {
    return (
      <div>
              <h2>
            Turtles of Pennsylvania
      </h2>
      <Hills/>
      <Ground/>

      <TurtleMaker/>
        
      <Turtle/>
      </div>
        )
    }
});




ReactDOM.render(<Main />, document.getElementById('app'));
