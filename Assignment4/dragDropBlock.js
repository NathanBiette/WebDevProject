$(".contentContainer h4").on('mousedown.dragdrop',dragBlock)
$("#contentBlocksContainer").mouseup(function(){$(".contentBlockContainer").off('mouseenter.dragdrop')});
function dragBlock(){
 var blockToDrag = $(this).parent().parent().parent();
 console.log("Dragging");
 console.log($(this).attr("id"))
 unFocus();
 $(".contentBlockContainer").on('mouseenter.dragdrop',function() {
   console.log($(this).attr("id"));
   if(blockToDrag.attr("id") != blockToDrag){
     $(this).insertBefore(blockToDrag);
   };});
 };
 function unFocus() {
   if (document.selection) {
     document.selection.empty()
   } else {
     window.getSelection().removeAllRanges()
   }
 }
