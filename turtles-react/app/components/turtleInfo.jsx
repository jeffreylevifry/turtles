var React = require('react');
var ReactDOM = require('react-dom');
import data from 'json!../../public/turtleInfo.json';
var turtleId;
var name;
var sciName;
var size;
var status;
var habitat;
var description;
var info;
var photoLink;
var photoAuthor;
var infoLink;

var nameStyle = {
	fontFamily: "silkscreennormal",
	fontSize:"4vw",
	paddingBottom:"2vh",
	paddingTop:"2vh"
};

var sciNameStyle = {
 fontStyle: "italic"
};

class turtleInfo extends React.Component {


  constructor(props) {

    super(props);

    setTurtle(props);


  }


  componentWillReceiveProps(nextProps) {

    setTurtle(nextProps);


  }




  render() {
    
 

    return (

			<div id = "infoCard" >
      <div id = "name" style={nameStyle}> {name} </div> 
      <div id = "sciName" > {sciName} </div> 
      <div id = "size" > Size: {size} </div> 
      <div id = "status" > Status: { status} </div> 
      <div id = "habitat" > Habitat: {habitat} </div> 
      <div id = "description"> Description: {description}  </div>
      <div id = "info" > Info: {info} </div>
      <div id = "photoLink" > {photoLink } </div>
      <div id = "photoAuthor" > {photoAuthor} </div> 
      <div id = "infoLink" > {infoLink} </div> 
      </div>
    );
  }
}

const setTurtle = (props) => {

  data.map((data) => {


    if (props.id.localeCompare(data.id) === 0) {
      turtleId = data.id;
      name = data.fullName;
      sciName = data.sciName;
      size = data.size;
      status = data.status;
      habitat = data.habitat;
      description = data.description;
      info = data.info;
      photoLink = data.photoLink;
      photoAuthor = data.photoAuthor;
      infoLink = data.infoLink;

    }
  })
}
module.exports = turtleInfo;