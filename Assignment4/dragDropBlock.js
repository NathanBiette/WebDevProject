$(".contentBlockContainer").on('mousedown.dragdrop',dragBlock)
$("#contentBlocksContainer").mouseup(function(){$(".contentBlockContainer").off('mouseenter.dragdrop')});
function dragBlock(){
 var blockToDrag = $(this);
 console.log("Dragging");
 console.log($(this).attr("id"))
 unFocus();
 $(".contentBlockContainer").on('mouseenter.dragdrop',function() {
   console.log(blockToDrag.attr("id"));
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
