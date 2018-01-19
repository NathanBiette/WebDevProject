$('.addBlockButton').click(addBlock);
function addBlock(){
  var thisId = $(this).attr("id");
  var type =thisId.split('Add')[0]
  var blockId = type+'Block';
  var block = document.getElementById(blockId);
  var Blockscontainer = document.getElementById('contentBlocksContainer');
  Blockscontainer.insertBefore(block, (Blockscontainer.childNodes[0]));
  $(this).attr("display","none");
}
