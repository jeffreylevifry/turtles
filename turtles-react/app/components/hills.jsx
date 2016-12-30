var React = require('react');
var ReactDOM = require('react-dom');

var hills = React.createClass({
    render: function() {
			
 var hillStyle = {
  zIndex:"-1",
	position: "absolute",
	top: "12%",
	height: "26%",
	width: "100%",
//	marginBottom: "-20",
	padding: 0,
	backgroundImage: "url(./images/hills_darker.png)",
	backgroundRepeat: "repeat-x",
//	backgroundPosition: "calc(100% - 10px) calc(100% - 10px)"
      }
 
			
    return (
      

     
        <div id="hills"style={hillStyle}>
        </div>
        )
    }
});

module.exports = hills;