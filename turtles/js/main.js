$(document).ready(function() {
 $(".draggable").draggable().css("position", "absolute");
  


})



$(function() {
  $(".draggable").draggable();
});


$("#draggable").draggable({
  revert: 'invalid'
});

$("#droppable").droppable({
  accept: '#draggable'
});

$("#droppable").droppable({
  accept: function(dropElem) {
    //dropElem was the dropped element, return true or false to accept/refuse it
  }
});

$(".draggable").throwable({
                        containment:[0,0,500,500],
                        drag:true,
                        gravity:{x:0,y:0},
                        impulse:{
                            f:52,
                            p:{x:1,y:1}
                        },
                        shape:"circle",
                        autostart:false,
                        bounce:0.5,
                        damping:100,
                        areaDetection:[[0,0,300,300]],
                        collisionDetection: true
                    });