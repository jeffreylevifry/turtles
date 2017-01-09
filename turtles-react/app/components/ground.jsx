var React = require('react');
var ReactDOM = require('react-dom');
var orientation;
var groundTop;
var groundHeight;


class ground  extends React.Component{
	
	  constructor(props) {
    super(props);
		setOrientation();

		
		}

    render() {
		
  
				 var groundStyle = {
	 zIndex: "-2",
	position: "absolute",
	display: "block",
	 top:groundTop,
	height: groundHeight,
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

const setOrientation = (
) => {
				if (window.screen.height > (window.screen.width)*1.3){
			//portrait =1			
			orientation = 1;
			groundTop="18%";
				groundHeight= "88%";
			localStorage.setItem("orientation", 1);
		}else{
			//landscape = 0
			orientation = 0;
						groundTop="25%";
				groundHeight= "78%";
			localStorage.setItem("orientation", 0);
		}
	
}

module.exports = ground;