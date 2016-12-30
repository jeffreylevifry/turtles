var React = require('react');
var ReactDOM = require('react-dom');



var turtlesInfo = React.createClass({

	
	
	handleClick: function() {
		console.log('this is:', this);
		return {};
	},



	render: function() {




		var turtleStyle = {
			position: "relative",
			display: "inline-block",
			zIndex: 1,
			paddingTop: "2vh",
			paddingBottom: "2vh",
			paddingRight: "1vw",
			paddingLeft: "1vw",
			//   backgroundColor: "#ffde00",
			width: "21%",
			height: "20%",
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
			

			<div className = "turtleContainer"style = {turtleContainer} > {
				names.map(function(turtle) {



					var turtleImgConcat = 'images/' + turtle + '.gif';
					return (

						<div key = {turtle.name} className = "turtle" style = {turtleStyle}
						onClick = {() => this.handleClick.bind()} >
						<img style = {imageStyle} src = {turtleImgConcat}></img> 
						</div>


					)
				})
			}

			</div>



		)


	}
});






module.exports = turtlesInfo;