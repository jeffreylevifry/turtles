var React = require('react');
var ReactDOM = require('react-dom');
import data from 'json!../../public/turtleInfo.json';
var name;
var photoLink;
var photoAuthor;
var infoLink;
var turtleId;



class attribution  extends React.Component{
	
  constructor(props) {

    super(props);

    setTurtle(props);



  }


  componentWillReceiveProps(nextProps) {

    setTurtle(nextProps);


  }

    render() {
			

		var attributionStyle = {
			marginTop: 50,
			marginBottom: 50
			
		}

		var linkStyle={
			textDecoration:"none",
			fontFamily: "Roboto Condensed",
			fontSize:"2vw",
			fontSpacing: "3vw"
		}

			
    return (
      

     
   <div id ="attribution" style ={attributionStyle}>
      <div style={linkStyle}>PHOTO BY <a style={linkStyle} rel="nofollow" target="_blank" href={photoLink}>{photoAuthor}</a></div>
        {'\n'}<div style={linkStyle}>DISTRIBUTION INFORMATION FROM 
    <a style={linkStyle} rel="nofollow" target="_blank"  href="HTTP://PAHERPSURVEY.ORG/"> PAHERPSURVEY.ORG </a> AND  
    <a style={linkStyle} rel="nofollow" target="_blank" href="HTTP://WWW.PAHERPS.COM/"> PAHERPS.COM</a>
				</div>
{'\n'} <div style={linkStyle}> ADDITIONAL INFORMATION FROM
  <a style={linkStyle} rel="nofollow"  target="_blank" href={infoLink}> WIKIPEDIA </a>
				</div>
			
	

			</div>
        )
    }
};

const setTurtle = (props) => {

  data.map((data) => {


    if (props.id.localeCompare(data.id) === 0) {
      photoLink = data.photoLink;
      photoAuthor = data.photoAuthor;
      infoLink = data.infoLink;

    }
  })
}

module.exports = attribution;