$(document).ready(function() {




  
  var turtlesLoaded = 0;
  
  setupScreen();
  
  $("#infodropper").hide();
  setTimeout(
    function() {
      $("#infodropper").css({
        "background-color": "#fff"
      });
      $("#infodropper").fadeIn();
      turtlesLoaded = 1;

    }, 1600);




  /*

    $(document).on("collision", function(event, e1, e2) {
      $(e1).css("background-color", "black");
      $(e2).css("background-color", "black");
      $("#notification").text("Collision between circle and box");

    });
    

    
    */

  var currentTurtle;

  $(document).on("inarea", function(event, e1) {
    if (turtlesLoaded > 0) {
      var id = $(e1).attr('id');
      currentTurtle = id;


      $("#infoDiv").css("visibility", "visible");
      infoDivId = "#" + currentTurtle + "InfoDiv";
      divId = "#" + currentTurtle + "Info";

      divOutAnimation(infoDivId, divId);
      console.log(currentTurtle);
    }
  });

  $(document).on("outarea", function(event, data) {
    if (turtlesLoaded > 0) {
      //    divInAnimation();
    }
  });


  $(document).on("nocollision", function() {

  });


  $(".dismissButton").click(function() {
    $("#" + currentTurtle + "info").css("display", "none");
    $("#" + currentTurtle + "infoDiv").css("display", "none");

    divInAnimation();


  });



  $(".turtle3").click(function(event) {
var id = $(this).attr('id');
//  console.log("turtleClicked!!");
//    turnOffTurtles(id);
});
  
});




function divOutAnimation(divId, infoDivId) {


  $("#infoDiv").fadeIn()

  .animate({
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    top: '70px'
  }, 300)
  setTimeout(
    function() {
      $(divId).css("display", "inline");
      $(infoDivId).css("display", "inline");
      $(".dismissButton").css("display", "inline");
    }, 420);



}

function divInAnimation() {

  $(".dismissButton").css("display", "none");

  $(".infoCard").fadeOut();
  $("#infoDiv")
    .animate({
      height: '100',
      width: '100',
      borderTopLeftRadius: '50%',
      borderTopRightRadius: '50%',
      borderBottomLeftRadius: '50%',
      borderBottomRightRadius: '50%',
      top: '110px'
    }, 400)
  $("#infoDiv").fadeOut()
  $('#infodropper')
    .fadeIn();

}

function turnOffTurtles(turtle){
  if (turtle.localeCompare("box" === 0) ){
    
    console.log("fired");
    $("#painted, #spotted, #redbelly, #softshell, #map, #bog, #snapping, #musk, #mud, #wood").css("height","0px");
    $("#painted, #spotted, #redbelly, #softshell, #map, #bog, #snapping, #musk, #mud, #wood").css("width","0px");

    
    
      $(".turtle1, .turtle2").throwable({
    containment: "parent",
    //containment:[0,0,1200,600],
    drag: false,
    gravity: {
      x: 0,
      y: 1000
    },

    shape: "box",
    damping: 2235,

  });
    
 }
  
  
}

function hideAllTurtles() {

  $("#paintedInfo").css("display", "none");
  $("#paintedInfoDiv").css("display", "none");
  $("#spottedInfo").css("display", "none");
  $("#spottedInfoDiv").css("display", "none");
  $("#softshellInfo").css("display", "none");
  $("#redbellyInfo").css("display", "none");
  $("#woodInfo").css("display", "none");
  $("#bogInfo").css("display", "none");
  $("#blandingsInfo").css("display", "none");
  $("#mapInfo").css("display", "none");
  $("#paintedInfo").css("display", "none");
  $("#spottedInfo").css("display", "none");
  $("#paintedInfo").css("display", "none");
  $("#spottedInfo").css("display", "none");


}
function isHighDensity(){
    return ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)').matches)) || (window.devicePixelRatio && window.devicePixelRatio > 1.3));
}


function setupScreen(){
    //get dimensions and location of infodropper
  var topMargin = $("#infodropper").css("top").replace('px', '');
  var height = ($("#infodropper").height() + Math.floor(topMargin));
  var width = $("#infodropper").width();
  var documentWidth = $(document).width();
  var position = $("#infodropper").position();
  var positionLeft = (documentWidth / 2) - (width / 2);
  var positionRight = positionLeft + width;
  var positionTop = Math.floor(position.top);
  var positionBottom = Math.floor(position.bottom);
  var widthTotal = width + positionLeft;
    console.log(Math.floor(0.42*$(document).height()));
  console.log(Math.floor(0.67*$(document).height()));
  console.log(Math.floor(0.80*$(document).height()));
  
  var containerHeight1 = (Math.floor(0.42*$(window).height()));
  var containerHeight2 =(Math.floor(0.59*$(window).height()));
  var containerHeight3 =(Math.floor(0.78*$(window).height()));
  
  if (isHighDensity()===true&&screen.height>1023){
                  containerHeight1 = (Math.floor(0.34*$(window).height()));
   containerHeight2 =(Math.floor(0.54*$(window).height()));
   containerHeight3 =(Math.floor(0.78*$(window).height()));
}
  
  if (screen.width > screen.height){
         containerHeight1 = (Math.floor(0.54*$(window).height()));
   containerHeight2 =(Math.floor(0.69*$(window).height()));
   containerHeight3 =(Math.floor(0.88*$(window).height()));
   
    if(screen.width>1023&&isHighDensity()===true){
      console.log(screen.width);
               containerHeight1 = (Math.floor(0.34*$(window).height()));
   containerHeight2 =(Math.floor(0.54*$(window).height()));
   containerHeight3 =(Math.floor(0.78*$(window).height()));
    }
    
}
  
  
  

  if (containerHeight1>350){

  $("#turtleContainer1").css("height",containerHeight1+"px");
$("#turtleContainer2").css("height",containerHeight2+"px");
  $("#turtleContainer3").css("height",containerHeight3+"px");
  }
  

  //x1,y1,x2,y2

  //throwable parameters for three turtle levels

  $(".turtle").throwable({
    containment: "parent",
    //containment:[0,0,1200,600],
    drag: true,
    gravity: {
      x: 0,
      y: 1
    },
    impulse: {
      f: 52,
      p: {
        x: 0,
        y: 6
      }
    },
    shape: "box",
    damping: 35,
    areaDetection: [
      [positionLeft, positionTop, positionRight, height]
    ],
    height: containerHeight1
  });


  $(".turtle2").throwable({
    containment: "parent",
    //  containment:[0,0,1200,450],
    drag: true,
    gravity: {
      x: 0,
      y: 1
    },
        impulse: {
      f: 52,
      p: {
        x: 0,
        y: 12
      }
    },
    shape: "box",
    damping: 35,
    areaDetection: [
      [positionLeft, positionTop, positionRight, height]
    ],

    height: containerHeight2
  });

  $(".turtle3").throwable({
    containment: "parent",
    //containment:[0,0,1200,600],
    drag: true,
    gravity: {
      x: 0,
      y: 1
    },
    impulse: {
      f: 52,
      p: {
        x: 0,
        y: 18
      }
    },
    shape: "box",
    damping: 35,
    areaDetection: [
      [positionLeft, positionTop, positionRight, height]
    ],

    height: containerHeight3
  });
}


// Listen for orientation changes
window.addEventListener("orientationchange", function() {
  $("body").css("display","none");
  // Announce the new orientation number
  console.log("orientation changed");
  setupScreen();
window.location.reload(); 
}, false);

