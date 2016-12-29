var React = require('react');
var ReactDOM = require('react-dom');

var hills = React.createClass({
    render: function() {
			
 var hillStyle = {
  zIndex:"-2",
	position: "relative",
	display: "block",
	height: 100,
	width: "100%",
	margin: 0,
	padding: 0,
	 top:"2%",
	backgroundImage: "url(./images/hills_darker.png)",
	backgroundRepeat: "repeat-x",
	backgroundPosition: "calc(100% - 10px) calc(100% - 10px)"
      }
			
    return (
      

     
        <div id="hills"style={hillStyle}>
        </div>
        )
    }
});

module.exports = hills;