var React = require('react');
var ReactDOM = require('react-dom');
var Turtle = require('./turtle.jsx');
var TurtleMaker = require('./turtleMaker.jsx');
var Hills = require('./hills.jsx');
var Ground = require('./ground.jsx');
var Title = require('./title.jsx');

class index  extends React.Component{


    render() {


			
    return (
      

     <div id="index">
      <Title/>
      <Hills/>
{this.props.children}
			
			</div>

        )
    }
};



module.exports = index;