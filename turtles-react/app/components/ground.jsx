var React = require('react');
var ReactDOM = require('react-dom');
var orientation;
var groundTop;
var groundHeight;


class ground  extends React.Component{
	
	  constructor(props) {
    super(props);


		
		}

    render() {
		
  
				 var groundStyle = {
	 zIndex: "-2",
	position: "absolute",
	display: "block",
	width: "100%",
	margin: 0,
	padding: 0,

      }

			
    return (
      

     
        <div id="ground"style={groundStyle}>
        </div>
        )
    }
};



module.exports = ground;