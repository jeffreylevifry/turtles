var React = require('react');
var ReactDOM = require('react-dom');

var ground = React.createClass({
    render: function() {
			
 var groundStyle = {
	 zIndex: "-2",
	position: "absolute",
	display: "block",
	 top:160,
	height: 1600,
	width: "100%",
	margin: 0,
	padding: 0,

      }
			
    return (
      

     
        <div id="ground"style={groundStyle}>
        </div>
        )
    }
});

module.exports = ground;