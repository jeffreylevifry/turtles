var React = require('react');
var ReactDOM = require('react-dom');
var Turtle = require('./turtle.jsx');
var TurtleMaker = require('./turtleMaker.jsx');
var Hills = require('./hills.jsx');
var Ground = require('./ground.jsx');
var Title = require('./title.jsx');
var Info = require('./infoContainer.jsx');
require('../../public/main.scss');



var Main = React.createClass({
    render: function() {
    return (
      <div>

      <Title/>
      <Hills/>
      <Ground/>
     <Info/>
      <TurtleMaker/>
        </div>
      
        )
    }
});




ReactDOM.render(<Main />, document.getElementById('app'));
