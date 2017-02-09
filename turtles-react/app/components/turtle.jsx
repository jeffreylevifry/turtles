var React = require('react');
var ReactDOM = require('react-dom');
import data from 'json!../../public/turtleInfo.json';
var PhotoHolder = React.createFactory(require('./photoHolder.jsx'));
var TurtleInfo = React.createFactory(require('./turtleInfo.jsx'));
var Link = require('react-router').Link;
var turtleId;



var infoStyle = {
  background: "#fff",
  height: "100%",
  width:"auto",
  zIndex: 2,
  position: "absolute",
	overflowY: "scroll"
	
};

var dismissButton = {

	position: "absolute",
	top:"10px",
	right:"10px",
	zIndex: 2

};
  
var dismissButtonImg = {

	maxWidth:"100%",
	maxHeight:"100%"
};
var dismissBar = {

  width:"100%",
  zIndex: 2,
			textDecoration:"none",
			fontFamily: "Roboto Condensed",
			fontSpacing: "3vw",
	textAlign: "center"
	
};


class turtle extends React.Component {


  constructor(props) {

    super(props);
	turtleId =localStorage.getItem("currentTurtle");


  }


  componentDidMount() {

  }



  render() {
    
   

    return (

      <div id = "infoDiv" style={infoStyle} >
				<Link to='/'>
            <div className="dismissButton" style={dismissButton}   >
              <img style={dismissButtonImg} src="./images/dismiss-yellow.png"></img>
    </div>
				</Link>
        <PhotoHolder id ={turtleId} />
     		<TurtleInfo id={turtleId}/>
								<Link to='/'>
            <div className="dismissBar" style={dismissBar}   >
              CLICK TO CLOSE
    </div>
				</Link>
      </div>
    );
  }
}


module.exports = turtle;