var React = require('react');
var ReactDOM = require('react-dom');
var name;



class titleStyler  extends React.Component{
	
	  constructor(props) {
    super(props);
		name = props.name;

		
		}

    render() {
		
  
				 var titleStyle = {
					 fontFamily: "Roboto Condensed",
fontWeight: 900,
 fontSize:"1.8vw",
	letterSpacing: ".25vw",
	paddingTop:"3vh",
	paddingBottom:".2vh"

      }

			
    return (
      

     
        <div style={titleStyle}>{name}
        </div>
        )
    }
};



module.exports = titleStyler;