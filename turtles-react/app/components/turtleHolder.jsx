var React = require('react');
var ReactDOM = require('react-dom');
var Turtle = require('./turtle.jsx');
var TurtleMaker = require('./turtleMaker.jsx');
var Hills = require('./hills.jsx');
var Ground = require('./ground.jsx');
var Title = require('./title.jsx');

class turtleHolder  extends React.Component{


    render() {


			
    return (
      <div id="turtleHolder">
      <Ground/>
     
      <TurtleMaker/>
			
			</div>

        )
    }
};



module.exports = turtleHolder;