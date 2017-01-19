var React = require('react');
var ReactDOM = require('react-dom');



class title  extends React.Component{
	
	  constructor(props) {
    super(props);


		
		}

    render() {
		
  
				 var scriptStyle = {
				 
				 	letterSpacing: 1,
					fontSize: "5.5vw",
				 	color: "#fff",
					 paddingLeft: "1%",
					 paddingRight: "1%",

				 	fontFamily: "Oleo Script",


				 }

				 var divStyle = {

					paddingTop: 10,
					paddingBottom: 10,
					 paddingLeft: 20,
					 paddingRight: 20,
					 lineHeight: "92%",
				 	letterSpacing: 8,
				 	color: "#fff",

				 	fontFamily: "silkscreennormal",
				 	textAlign: "center"

				 }
			
    return (
      

     
        <div id="title"style={divStyle}>Turtles<span style={scriptStyle}> of </span> Pennsylvania
        </div>
        )
    }
};



module.exports = title;