var React = require('react');
var ReactDOM = require('react-dom');
var turtlePic;
var turtleMap;

var photoHolderStyle = {
  display: "table",
  width: "100%",
  tableLayout: "fixed"
};

var photoHolderImg = {
	margin:"0 auto",
	padding:"0",
maxWidth: "50%",
	height: "auto"
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
              <img style={photoHolderImg} src={turtleMap}></img>
    
    </div>
        
        )};
        }

module.exports = photoHolder;