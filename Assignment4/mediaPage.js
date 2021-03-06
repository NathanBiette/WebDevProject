//Add or remve blocks thanks to asides
$(function() {
  var stringTwitter = $('#tweetContainer').html();//'<a class="twitter-timeline" data-tweet-limit="1"  data-chrome="noheader" href="https://twitter.com/HamillHimself">Tweets by Mark Hamill</a>';
  var map;
  var geocoder;
  var markers;
  $('.addBlockButton').click(addBlock);
  $('.hideBlock').click(hideBlock);
  $('.followPageButton').click(followThePage);
  if (localStorage.SW8 && localStorage.SW8 == "followed"){
    $('.followPageButton').addClass("followed");
    $('.followPageButton').val("Followed");
  }
});

function followThePage(){
  if (!localStorage.SW8 || localStorage.SW8 == "not followed"){
    $(this).addClass("followed");
    $('.followPageButton').val("Followed");
    localStorage.SW8 = "followed";
  } else if (localStorage.SW8 == "followed"){
    $(this).removeClass("followed");
    $('.followPageButton').val("Follow the page");
    localStorage.SW8 = "not followed";
  }

}

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
  resizeCaroussels();
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
//$('.global').click(closeNav);
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
  resizeCaroussels();
}

//Add media buttons
$('.addMediaButton').click(function() {$(this).parent().parent().siblings(".addLocalMediaButton").click()})
$('.addLocalMediaButton').on('change',addMediaInCaroussel);
function addMediaInCaroussel(event){
  var file = event.target.files[0];
  if(!file.type.match('image.*')){
    return;
  }
  else{
    var reader = new FileReader();
    reader.onload = (function(theFile,elmt){
      return function(e){
        var contentBlock =elmt.parent().parent().parent();
        var userImSrc = e.target.result;
        addContrib(userImSrc);
        var newContainer = contentBlock.find('.mediaContainer').first().clone();

        newContainer.find(".media").attr("src",userImSrc);
        contentBlock.find(".mediasContainer").prepend(newContainer);
        }
      }) (file,$(this));
    reader.readAsDataURL(file);
  }
}

$('.submitMediaUrl').on('click',addMediaURL);

function addMediaURL() {
  var newMedSrc = $(this).siblings(".addURLBox").val();
  var contentBlock =$(this).parent().parent().parent().parent().parent();
  var newContainer = contentBlock.find('.mediaContainer').first().clone();
  newContainer.find(".media").attr("src",newMedSrc);
  contentBlock.find(".mediasContainer").prepend(newContainer);

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



/*for contributions*/



function addContrib(urlImage){

  contribut.push({"category": "poster","img":urlImage, "page":"./HTML/StarWars8Page.html", "offOrFan":"official", "from" : "star wars 8 page"});
  var new_json = JSON.stringify(contribut);
  localStorage.setItem('contribDone', new_json);

  // Retrieve the object from storage
  var retrievedObject = localStorage.getItem('contribDone');

  console.log('retrievedObject: ', JSON.parse(retrievedObject));

}

document.getElementById("submitAddMediaUrl").addEventListener("click", function(){

  contribut.push({"category": "poster","img":document.getElementById("boxUrl").value, "page":"./StarWars8Page.html", "offOrFan":"official", "from":"star wars 8 page"});

  var new_json = JSON.stringify(contribut);
  localStorage.setItem('contribDone', new_json);

  // Retrieve the object from storage
  var retrievedObject = localStorage.getItem('contribDone');

  console.log('retrievedObject: ', JSON.parse(retrievedObject));

});
