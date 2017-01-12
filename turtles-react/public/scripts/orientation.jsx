	function setOrientationVariables() {
	  if (window.screen.height > (window.screen.width) * 1.2) {	
      //portrait

	    localStorage.setItem("turtleWidth", "31%");
      localStorage.setItem("groundTop", "18%");
      localStorage.setItem("groundHeight", "88%");
	    console.log("portrait");
      
	  } else {
	    //landscape = 0

	    localStorage.setItem("turtleWidth", "21%");
      localStorage.setItem("groundTop", "25%");
      localStorage.setItem("groundHeight", "78%");
	    console.log("landscape");
	  }
	}


setOrientationVariables();



window.addEventListener("orientationchange", function() {
    console.log("the orientation of the device is now " + screen.orientation.angle);
  setOrientationVariables();
});