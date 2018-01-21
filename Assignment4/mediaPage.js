//Add or remve blocks thanks to asides
var stringTwitter = $('#tweetContainer').html();//'<a class="twitter-timeline" data-tweet-limit="1"  data-chrome="noheader" href="https://twitter.com/HamillHimself">Tweets by Mark Hamill</a>';
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
    tweetContainer.innerHTML=stringTwitter;
    twttr.widgets.load();
  }
  initCarousels();
}
function hideBlock(){
  var thisId = $(this).attr("id");
  var type =thisId.split('hide')[1].toLowerCase();
  var blockId = type+'Block';
  $('#'+blockId).css("display","none");
  $('#'+type+'Add').parent().css("display","block"); /*Make the addd block buttno visible again*/
}

//Side navigation Bar
$('#sideNavButton').click(toggleNav);
$('.global').click(closeNav);
document.getElementById("sideNavContent").style.width = "0px";
function toggleNav() {
    if(document.getElementById("sideNavContent").style.width == "0px"){
      document.getElementById("sideNavContent").style.width = "250px";
    }
    else{
      document.getElementById("sideNavContent").style.width = "0px";
    }
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("sideNavContent").style.width = "0";
}


//expandButton
$('.expandButton').click(expand)
$('.downsizeButton').click(downsize)

function expand() {
  var contentBlock = $(this).parent().parent().parent(); //grandparent of the button (header +)
  contentBlock.insertBefore($('#contentBlocksContainer'));
  contentBlock.addClass('expanded');
  contentBlock.removeClass('contentBlockContainer');
  $(this).css("display","none");
  $(this).siblings('.downsizeButton').css("display","block");
  if(contentBlock.attr("id")=="tweetsBlock"){
    contentBlock.find("#tweetContainer").html(stringTwitter);
    twttr.widgets.load();
  }
  resizeCaroussels();
}

function downsize(){
  var contentBlock = $(this).parent().parent().parent();
  contentBlock.insertBefore($('.contentBlockContainer').first());
  contentBlock.removeClass('expanded');
  contentBlock.addClass('contentBlockContainer');
  $(this).css("display","none");
  $(this).siblings('.expandButton').css("display","block");
  if(contentBlock.attr("id")=="tweetsBlock"){
    contentBlock.find("#tweetContainer").html(stringTwitter);
    twttr.widgets.load();
  }
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
$(".slideshow").each(function(){
  resizeInnerCaroussel($(this).parent());
});
$(window).on('resize',resizeCaroussels);
function resizeCaroussels(){
  $(".slideshow").each(function(){
    resizeInnerCaroussel($(this).parent());
  });
}
