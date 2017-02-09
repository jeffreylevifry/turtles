var React = require('react');
var ReactDOM = require('react-dom');
var Attribution = require('./attribution.jsx');
import data from 'json!../../public/turtleInfo.json';
var turtleId;
var name;
var sciName;
var size;
var status;
var habitat;
var description;
var info;


var nameStyle = {
	fontFamily: "silkscreennormal",
	fontSize:"5vw",
	paddingBottom:"2vh",
	paddingTop:"2vh"
};

var infoCard = {
	paddingLeft: "1vw",
	paddingRight: "1vw",
	  textAlign: "center",
	color: "#000",
	fontSize: "1.95vw",
	fontFamily: "Roboto",
	wordWrap: "break-word",
	lineHeight: "160%",
	
}

var sciNameStyle = {
 fontStyle: "italic",
 fontSize:"2.5vw",
	paddingTop:"1vh",
	paddingBottom:"1vh"
};
				 
var titleStyle = {
fontFamily: "Roboto Condensed",
fontWeight: 900,
 fontSize:"1.8vw",
	letterSpacing: ".25vw",
	paddingTop:"3vh",
	paddingBottom:".2vh"

      }


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

			<div id = "infoCard" style={infoCard} >
      <div id = "name" style={nameStyle}> {name} </div> 
			<div id = "sciName" style={sciNameStyle} > {sciName} </div> 
				<div id = "size" > <span style={titleStyle}><br/> SIZE:<br/> </span> {size} </div> 
      <div id = "status" ><span style={titleStyle}><br/> STATUS:<br/> </span>  { status} </div> 
      <div id = "habitat" ><span style={titleStyle}><br/> HABITAT:<br/> </span>  {habitat} </div> 
      <div id = "description"> <span style={titleStyle}><br/> DESCRIPTION:<br/> </span>  {description}  </div>
      <div id = "info" > <span style={titleStyle}><br/> INFO:<br/> </span> {info} </div>
			<div ><Attribution id={turtleId} /> </div> 
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


    }
  })
}
module.exports = turtleInfo;