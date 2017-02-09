var React = require('react');
var ReactDOM = require('react-dom');
var Turtle = React.createFactory(require('./turtle.jsx'));


class infoContainer  extends React.Component{


    render() {


			
    return (
      

     <div id="infoContainer">
			<Turtle />
			</div>

        )
    }
};



module.exports = infoContainer;