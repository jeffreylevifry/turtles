var React = require('react');
var ReactDOM = require('react-dom');
var setHeight;

var hills = React.createClass({
		
		getInitialState() {
  	return { state: 0 };
		
  },
	
	updateDimensions(){
		/*
		    const height = document.getElementById('turtleContainer').clientHeight;
		setHeight =  height+'px';
	//	var numHeight = height.slice(0, -2);
    this.setState({ height });
		*/
	},

	 componentDidMount() {
		 /*
		 window.addEventListener("resize", this.updateDimensions);
		 
    const height = document.getElementById('turtleContainer').clientHeight;
		setHeight =  height+'px';
	//	var numHeight = height.slice(0, -2);
    this.setState({ height });
		 */
  },
	
	
	
    render() {
			
 var hillStyle = {
  zIndex:"-1",
	position: "absolute",
	height: 44,
	width: "100%",
	padding: 0,
//	bottom: ((this.state.height).slice(0,-2)-7),
	 bottom: (this.state.height - 9),
	backgroundImage: "url(./images/hills_darker.png)",
	backgroundRepeat: "repeat-x",
	 bottom: "75%"
//	backgroundPosition: "calc(100% - 10px) calc(100% - 10px)"
      }
 
			
    return (
      

     
        <div id="hills"style={hillStyle}>
        </div>
        )
    }
});



module.exports = hills;