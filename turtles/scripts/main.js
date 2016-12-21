/*

require(["dojo/dom-construct", "dojo/dom-attr", "dojo/dom", "dojo/on", "dojo/domReady!"],
function(domConstruct, domAttr, dom, on){
  var n = 0;
  on(dom.byId("box"), "click", function(){
    domConstruct.place("<div id='paintedHolder'>", "painted", "replace");
    domAttr.set("box", "disabled", "disabled");
  });
});
*/


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
  
  
  
  ///////////////////////////////////////////
  /////TURTLE FREEZE / UNFREEZE ///////
  /*////////////////////////////////////////
  
  
  $(".turtle").mousedown(function() {
    var id = $(this).attr("id");
    freezeSetup(id);
  });
  $(".turtle2").mousedown(function() {
    var id = $(this).attr("id");
    freezeSetup(id);
  });

  $(".turtle3").mousedown(function() {
    var id = $(this).attr("id");
    freezeSetup(id);
  });

  $("body").mouseup(function() {
    unfreezeSetup();
  });
  
  
  
  *////////////////////

});
///////////////////////////////////////////
/////////TURTLE FREEZER / UNFREEZER SETUP///////////////
////////////////////////////////////////////
function freezeSetup(id){
  
  var freezeArray = turtleArrayChopper(id);
   for (i=0; i<freezeArray.length; i++) {
var tc = turtleClassFinder(freezeArray[i]);
    freezeTurtle(freezeArray[i],tc);  }

localStorage.setItem('tempArray',  JSON.stringify(freezeArray));
  
}

function unfreezeSetup(){

  var unfreezeArray = JSON.parse(localStorage.getItem("tempArray"));
  console.log(unfreezeArray);
   for (i=0; i<unfreezeArray.length; i++) {
     var tc = turtleClassFinder(unfreezeArray[i]);


    unfreezeTurtle(unfreezeArray[i],tc);  }


  
}


function turtleClassFinder(turtle){
  var tc;
       if (turtle.localeCompare("painted" === 0||"spotted" === 0||"redbelly" === 0||"softshell" === 0)){
         tc = 1;
         }
         if (turtle.localeCompare("bog" === 0||"wood" === 0||"blandings" === 0||"map" === 0)){
         tc = 2;
         }
         if (turtle.localeCompare("musk" === 0||"mud" === 0||"snapping" === 0||"box" === 0)){
         tc = 3;
         }
  
  return tc;
}


/////////////////////////////////////
////////////TURTLE UNFREEZER/////////////
////////////////////////////////////////

function unfreezeTurtle(turtle, container) {



  var div = document.getElementById(turtle+'Holder');
  if (div) {
    div.parentNode.removeChild(div);
  }

  var turtleClass;

  if (container == 1) {
    turtleClass = "turtle";
  }
  if (container == 2) {
    turtleClass = "turtle2";
  }
  if (container == 3) {
    turtleClass = "turtle3";
  }
  






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


  var containerHeight1 = (Math.floor(0.42 * $(window).height()));
  var containerHeight2 = (Math.floor(0.59 * $(window).height()));
  var containerHeight3 = (Math.floor(0.78 * $(window).height()));

  var cHeight;
  

  if (container == 1) {
    cHeight = containerHeight1;
  }
  if (container == 2) {
    cHeight = containerHeight2;
  }
  if (container == 3) {
    cHeight = containerHeight3;
  }
  
  console.log(cHeight);
    var msgContainer = document.createElement('div');
  msgContainer.id = turtle; // No setAttribute required
  msgContainer.className = turtleClass // No setAttribute required, note it's "className" to avoid conflict with JavaScript reserved word
  msgContainer.appendChild(document.createTextNode(""));
  
  $('<turtleContainer'+container+'>').append(msgContainer);
  
  
  
  $(msgContainer).throwable({
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
    height: cHeight
  });
}


//////////////////////////////////////
///////////////TURTLE FREEZER//////
/////////////////////////////////////

function freezeTurtle(turtle, container) {
  
    var turtleClass;

  if (container == 1) {
    turtleClass = "turtle";
  }
  if (container == 2) {
    turtleClass = "turtle2";
  }
  if (container == 3) {
    turtleClass = "turtle3";
  }


    var div = document.getElementById(turtle);

    if (div) {
      div.parentNode.removeChild(div);
    }
    var msgContainer = document.createElement('div');
    msgContainer.id = turtle+'Holder'; // No setAttribute required
    msgContainer.className = turtleClass // No setAttribute required, note it's "className" to avoid conflict with JavaScript reserved word
    msgContainer.appendChild(document.createTextNode(""));
    document.body.appendChild(msgContainer);



  


}


////////////////////////////////////////
///////REMOVE TURTLE FROM ARRAY////////
///////////////////////////////////////

function turtleArrayChopper(turtle){

var turtleArray = ["painted", "spotted", "redbelly", "softshell", "map", "bog", "snapping",
                   "musk", "mud", "wood", "box", "blandings"];
  
for (var i=turtleArray.length-1; i>=0; i--) {
    if (turtleArray[i] === turtle) {
        turtleArray.splice(i, 1);
        // break;       //<-- Uncomment  if only the first term has to be removed
    }
}
return turtleArray;
}




//////////////////////////////////////
////////////ANIMATIONS////////////////
//////////////////////////////////////


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




//////////////////////////////////////////
///////////////SETUP SCREEN///////////////
//////////////////////////////////////////
function isHighDensity() {
  return ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)').matches)) || (window.devicePixelRatio && window.devicePixelRatio > 1.3));
}

function setupScreen() {
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
  console.log(Math.floor(0.42 * $(document).height()));
  console.log(Math.floor(0.67 * $(document).height()));
  console.log(Math.floor(0.80 * $(document).height()));

  var containerHeight1 = (Math.floor(0.42 * $(window).height()));
  var containerHeight2 = (Math.floor(0.59 * $(window).height()));
  var containerHeight3 = (Math.floor(0.78 * $(window).height()));

  if (isHighDensity() === true && screen.height > 1023) {
    containerHeight1 = (Math.floor(0.34 * $(window).height()));
    containerHeight2 = (Math.floor(0.54 * $(window).height()));
    containerHeight3 = (Math.floor(0.78 * $(window).height()));
  }

  if (screen.width > screen.height) {
    containerHeight1 = (Math.floor(0.54 * $(window).height()));
    containerHeight2 = (Math.floor(0.69 * $(window).height()));
    containerHeight3 = (Math.floor(0.88 * $(window).height()));

    if (screen.width > 1023 && isHighDensity() === true) {
      console.log(screen.width);
      containerHeight1 = (Math.floor(0.34 * $(window).height()));
      containerHeight2 = (Math.floor(0.54 * $(window).height()));
      containerHeight3 = (Math.floor(0.78 * $(window).height()));
    }

  }




  if (containerHeight1 > 350) {

    $("#turtleContainer1").css("height", containerHeight1 + "px");
    $("#turtleContainer2").css("height", containerHeight2 + "px");
    $("#turtleContainer3").css("height", containerHeight3 + "px");
  } else {
    containerHeight1 = 350;
    containerHeight2 = 470;
    containerHeight3 = 600;
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
  $("body").css("display", "none");
  // Announce the new orientation number

  setupScreen();
  window.location.reload();
}, false);