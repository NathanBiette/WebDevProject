var stringTwitter = $('#tweetContainer').html();
$(".contentContainer h4").on('mousedown.dragdrop',dragBlock)
$("#contentBlocksContainer").mouseup(drop);
function dragBlock(){
 var blockToDrag = $(this).parent().parent().parent();

 $('#tweetContainer').css("pointer-events",'none'); //The twitter widgets withdraw hover event disable while hdragging
 var mouseClone = blockToDrag.clone(); //Creating block that stays with mouse
 var initPos = blockToDrag.position();
 var widthInit = blockToDrag.css("width");
 mouseClone.appendTo("#contentBlocksContainer");
 mouseClone.addClass("contentBlockContainerDragged");
 mouseClone.children(".contentBlock").addClass("contentBlockDragged");
 mouseClone.css("top",initPos.top);
 mouseClone.css("left",initPos.left);
 mouseClone.attr("id",mouseClone.attr("id")+"Dragged");
 mouseClone.css("width",widthInit);
 dragClone(mouseClone);


//Dealing with inplace block
 blockToDrag.addClass("contentBlockFixedContainerDragged");
 blockToDrag.children(".contentBlock").addClass("contentBlockFixedDragged");
 $(".contentBlockContainer").on('mouseenter.dragdrop',function() {
   if(blockToDrag.attr("id") != blockToDrag){
     blockToDrag.insertBefore($(this));
   };});
 };

function dragClone(elmnt){
  var pos1 = 0;
  var pos3 = 0;
  var pos2 = 0;
  var pos4 = 0;
  pos3 = window.event.clientX;
  pos4 = window.event.clientY;
  $('.global').on('mousemove.dragging',draggingClone);
  function draggingClone() {
    var initPos = elmnt.position()
    pos1 = pos3 - window.event.clientX;
    pos2 = pos4 - window.event.clientY;
    pos3 = window.event.clientX;
    pos4 = window.event.clientY;
    elmnt.css("left",initPos.left - pos1+"px");
    elmnt.css("top",initPos.top - pos2+"px");

  }
}
function drop(){
  var tweetContainer = $('#tweetContainer');
  if(tweetContainer.parent().parent().hasClass("contentBlockFixedDragged")){
    tweetContainer.html(stringTwitter);
    twttr.widgets.load();
  }
  //document.onmousemove = null;
  $('#tweetContainer').css("pointer-events",'auto');
  $('.contentBlockContainerDragged').remove();
  $('.global').off('mousemove.dragging');
  $(".contentBlockContainer").off('mouseenter.dragdrop');
  $(".contentBlockFixedDragged").removeClass("contentBlockFixedDragged");
  $(".contentBlockFixedContainerDragged").removeClass("contentBlockFixedContainerDragged");
}
