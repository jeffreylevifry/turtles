$(document).ready(function() {


  //get dimensions and location of infodropper
  var height = $("#infodropper").height();
  var width = $("#infodropper").width();
  var documentWidth = $(document).width();
  var position = $("#infodropper").position();
  var positionLeft = Math.floor(position.left);
  var widthTotal = width + positionLeft;

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

if( isMobile.any() ) {
  console.log('Mobile')}
  else{console.log('Desktop')}

  //throwable parameters for three turtle levels

  $(".turtle").throwable({
    containment: "parent",
    //containment:[0,0,1200,600],
    drag: true,
    gravity: {
      x: 0,
      y: 8
    },
    shape: "box",
    autostart: false,
    bounce: 0,
    damping: 200,
    areaDetection: [
      [positionLeft, 0, widthTotal, height]
    ],
    collisionDetection: true
  });


  $(".turtle2").throwable({
    containment: "parent",
    //  containment:[0,0,1200,450],
    drag: true,
    gravity: {
      x: 0,
      y: 2
    },
    shape: "box",
    autostart: true,
    bounce: 0.11,
    damping: 40,
    areaDetection: [
      [positionLeft, 0, widthTotal, height]
    ],
    collisionDetection: false
  });
  $(".turtle3").throwable({
    containment: "parent",
    //    containment:[0,0,1200,350],
    drag: true,
    gravity: {
      x: 0,
      y: 2
    },
    shape: "box",
    autostart: true,
    bounce: 0.11,
    damping: 40,
    areaDetection: [
      [positionLeft, 0, widthTotal, height]
    ],
    collisionDetection: false
  });


  /*

    $(document).on("collision", function(event, e1, e2) {
      $(e1).css("background-color", "black");
      $(e2).css("background-color", "black");
      $("#notification").text("Collision between circle and box");

    });
    
      $(document).on("outarea", function(event, data) {
      $("#area").css("background-color", "green");
      $("#notification").text($(data[0]).text() + " exit the area");
    });
    
    */

  $(document).on("inarea", function(event, e1) {
    var id = $(e1).attr('id');
    if (id.localeCompare("painted") === 0) {
      alert("PAINTED TURTS")
    }

    console.log(id);


  });


  $(document).on("nocollision", function() {
    //    $("#circle,#box").css("background-color", "red");
  });




});