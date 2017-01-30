var React = require('react');
var ReactDOM = require('react-dom');
var turtlePic;
var turtleMap;

var photoHolderStyle = {
  display: "table",
  width: "100%",
	height: 0,
  tableLayout: "fixed",
	paddingTop:"50%"
};

var photoHolderImg = {
	position:"absolute",
	margin:"0 auto",
	padding:"0",
maxWidth: "50%",
	height: "auto",
	top: 0
};
var mapHolderImg = {
	position:"absolute",
	margin:"0 auto",
	padding:"0",
maxWidth: "50%",
	height: "auto",
	top: 0,
	left:"50%"
};
class photoHolder extends React.Component {



  constructor(props) {

    super(props);
     turtlePic = "./images/"+props.id+"Photo.jpg";
     turtleMap = "./images/"+props.id+"Map.png";
   
  }
render() {
    



    return (

 
            <div className="photoHolder" style={photoHolderStyle}  >
        
              <img style={photoHolderImg} src={turtlePic}></img>
              <img style={mapHolderImg} src={turtleMap}></img>
    
    </div>
        
        )};
        }

module.exports = photoHolder;