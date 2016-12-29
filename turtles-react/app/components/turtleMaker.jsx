var React = require('react');
var ReactDOM = require('react-dom');


var turtlesInfo = React.createClass({
    render: function() {
      
						      var container = {
//	zIndex:1,

width: "100%",
				height: "100%",
				
};
			
      
     var turtleStyle = {
			 position: "relative",
       display:"inline-block",
       	zIndex:1,
        marginLeft: "2%",
			 marginRight: "2%",
     //   backgroundColor: "#ffde00",
        width: "19%",
        height: "auto",
        float: "left",
			 
			 
       
		 };
			 

      
           var imageStyle  = {
        width: "100%",
        height: "auto"

      };
      
      var turtleContainer1 = {
//	zIndex:1,
				position:"relative",
width: "100%",
		
				height: "20%",
				display:"table-cell",
				verticalAlign: "bottom"
				
};
			      var turtleContainer2 = {
//	zIndex:1,
							position: "relative",

				height: "20%",
				display:"table-cell",
				verticalAlign: "bottom"
				
};
			      var turtleContainer3 = {
//	zIndex:1,
position:"relative",
width: "100%",
				height: "20%",
				display:"table-cell",
				verticalAlign: "bottom"
				
};
      
        var names = ['painted', 'spotted', 'softshell','redbelly'];
			var names2 = ['wood', 'bog', 'blandings','map'];
			var names3 = ['mud', 'snapping', 'box','musk'];
          

    return (
      <div className="container">

<div className="turtleContainer1"style={turtleContainer1}>
        {names.map(function(turtle){
          

          
          var turtleImgConcat = 'images/'+turtle+'.gif';
          return (
            
            <div key = {turtle.name} className="turtle" style={turtleStyle}>
              <img style={imageStyle}src={turtleImgConcat}></img>
							</div>
             
              
          )
        })}
       
 </div>
				
				<div className="turtleContainer2"style={turtleContainer2}>
        {names2.map(function(turtle){
          

          
          var turtleImgConcat = 'images/'+turtle+'.gif';
          return (
            
            <div key = {turtle.name} className="turtle" style={turtleStyle}>
              <img style={imageStyle}src={turtleImgConcat}></img>
							</div>
             
              
          )
        })}
       
 </div>
				
				<div className="turtleContainer3"style={turtleContainer3}>
        {names3.map(function(turtle){
          

          
          var turtleImgConcat = 'images/'+turtle+'.gif';
          return (
            
            <div key = {turtle.name} className="turtle" style={turtleStyle}>
              <img style={imageStyle}src={turtleImgConcat}></img>
							</div>
             
              
          )
        })}
       
 </div>

      </div>
        )
          
        
    }
});





module.exports = turtlesInfo;