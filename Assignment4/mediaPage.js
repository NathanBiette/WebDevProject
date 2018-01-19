$('.addBlockButton').click(addBlock);
$('.hideBlock').click(hideBlock);
function addBlock(){
  var thisId = $(this).attr("id");
  $(this).parent().css("display","none");
  var type =thisId.split('Add')[0]
  var blockId = type+'Block';
  $('#'+blockId).css("display","block");
  var block = document.getElementById(blockId);
  var Blockscontainer = document.getElementById('contentBlocksContainer');
  Blockscontainer.insertBefore(block, (Blockscontainer.childNodes[0]));

  if(type=='tweets'){
    tweetContainer.innerHTML='<a class="twitter-timeline" data-tweet-limit="1"  data-chrome="noheader" href="https://twitter.com/HamillHimself">Tweets by Mark Hamill</a>';
    twttr.widgets.load();
  }
}
function hideBlock(){
  var thisId = $(this).attr("id");
  var type =thisId.split('hide')[1].toLowerCase();
  var blockId = type+'Block';
  $('#'+blockId).css("display","none");
  $('#'+type+'Add').parent().css("display","block"); /*Make the addd block buttno visible again*/
}
$('#navSideButton').click(openNav);
function openNav() {
    document.getElementById("sideNavContent").style.display="block";
    document.getElementById("sideNavContent").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("sideNavContent").style.width = "0";
}

//TWITTER
window.twttr = (function(d, s, id) {

  var js, fjs = d.getElementsByTagName(s)[0];
  t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));
