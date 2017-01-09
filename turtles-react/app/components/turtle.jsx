var React = require('react');
var ReactDOM = require('react-dom');
import data from 'json!../../public/turtleInfo.json';
var PhotoHolder = React.createFactory(require('./photoHolder.jsx'));
var TurtleInfo = React.createFactory(require('./turtleInfo.jsx'));
var turtleId;



var infoStyle = {
  background: "#fff",
  height: "100%",
  width:"auto",
  zIndex: 2,
  position: "absolute",
  textAlign: "center",
	color: "#000",
	fontSize: "2vw",
	fontFamily: "Roboto",
	wordWrap: "break-word",
	lineHeight: "160%"
};

var dismissButton = {

	position: "absolute",
	width:"35px",
	height:"35px",
	top:"10px",
	right:"10px",

};
  
var dismissButtonImg = {

	maxWidth:"100%",
	maxHeight:"100%"
};



class turtle extends React.Component {


  constructor(props) {

    super(props);

  turtleId =props.id;


  }


  componentWillReceiveProps(nextProps) {




  }

	buttonClick() {
		ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this).parentNode);

	}


  render() {
    
   

    return (

      <div id = "infoDiv" style={infoStyle} >
            <div className="dismissButton" style={dismissButton} onClick={() => this.buttonClick()}   >
              <img style={dismissButtonImg} src="./images/dismiss-button.png"></img>
    </div>
        <PhotoHolder id ={turtleId} />
     <TurtleInfo id={turtleId}/>
      </div>
    );
  }
}


module.exports = turtle;