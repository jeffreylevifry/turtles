var React = require('react');
var ReactDOM = require('react-dom');
var Turtle = React.createFactory(require('./turtle.jsx'));
var orientation;
var turtleWidth;
var turtleHeight;

class turtleMaker extends React.Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

  }

	handleClick(id) {
		console.log('turtleMaker handleClick(id) is:', id);
		localStorage.setItem("currentTurtle", id);
		ReactDOM.render(<Turtle id ={id} />, document.getElementById('infoContainer'));
	}
  componentWillReceiveProps(nextProps) {


  }
	



	render() {
		
		

		var turtleStyle = {
			position: "relative",
			display: "inline-block",
			zIndex: 1,
			paddingTop: "2vh",
			paddingBottom: "2vh",
			paddingRight: "1vw",
			paddingLeft: "1vw",
			float: "left"

		};

		var imageStyle = {
			width: "100%",
			height: "auto"

		};

		var turtleContainer = {
			//	zIndex:1,
			position: "absolute",
			paddingTop: "1%",
			width: "100%",
			margin: "auto",
			top: "25%",
			height: "74%",
			display: "table-cell",
			verticalAlign: "bottom"

		};


		var names = ['painted', 'spotted', 'softshell', 'redbelly', 'wood', 'bog', 'blandings', 'map',
			'mud', 'snapping', 'box', 'musk'
		];


		return ( 

			
			<div id="turtleContainer" className = "turtleContainer"style = {turtleContainer} > {
				names.map(function(turtle) {

					var turtleImgConcat = ('images/' + turtle + '.gif').toString();
					var turtleString = (turtle).toString();
					return (
						<div id={turtleString} key={turtleImgConcat} className = "turtle" style = {turtleStyle}
						onClick={() => this.handleClick(turtleString)}   >
						<img style = {imageStyle} src = {turtleImgConcat}></img> 
						</div>


					)
				},this)
			}

			</div>


		)
	}
}



module.exports = turtleMaker;