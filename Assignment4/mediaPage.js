//Add or remve blocks thanks to asides
$(function() {
  var stringTwitter = $('#tweetContainer').html();//'<a class="twitter-timeline" data-tweet-limit="1"  data-chrome="noheader" href="https://twitter.com/HamillHimself">Tweets by Mark Hamill</a>';
  var map;
  var geocoder;
  var markers;
  $('.addBlockButton').click(addBlock);
  $('.hideBlock').click(hideBlock);
  $('.showShootingLocationsButton').click(toggleMap);
  //initMap();

});

/*
function initMap(){

  try{
    var locationPlaces = $("#locationPlaces").children().html();
    console.log("in the try");
    if (! map) map = new google.maps.Map(document.getElementById('shootingLocationMap'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 4
      });

    if (! geocoder) geocoder = new google.maps.Geocoder();
    alert('')

    console.log(locationPlaces);


    geocoder.geocode( { 'address': localStorage.location }, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        coords = results[0].geometry.location;
        if (marker) {
          marker.setPosition({lat: coords.lat(), lng: coords.lng()});
        } else {
          marker = new google.maps.Marker({position:coords});
        }
        map.setCenter(coords);
        marker.position = coords;
        marker.setMap(map);
      } else {
        alert("Le geocodage n\'a pu etre effectue pour la raison suivante: " + status);
      }
    });
  } catch(err) {
    alert('google not defined');
  }
}
*/
function toggleMap(){
  if ($(".shootingLocationMap").css("display")=="none"){
    $(".shootingLocationMap").css("display","block");
  } else {
    $(".shootingLocationMap").css("display","none");
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
        //console.log(contentBlock.attr("class"));
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
  console.log(newMedSrc);
  var contentBlock =$(this).parent().parent().parent().parent().parent();
  console.log(contentBlock.attr("class"));
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


/*for Contributions*/
//json file for Contributions

var obj = {
   table: []
};
var contribut;
if(localStorage.contribDone){
  contribut=JSON.parse(localStorage.contribDone);
}
else{
  contribut=JSON.parse(contrib);
  console.log(contribut);
}


document.getElementById("buttonAddLocalFile").addEventListener("click", function(){

  contribut.push({"category": "poster","img":"images/flash.jpg", "page":"./HTML/StarWars8Page.html"});

  var new_json = JSON.stringify(contribut);
  localStorage.setItem('contribDone', new_json);

  // Retrieve the object from storage
  var retrievedObject = localStorage.getItem('contribDone');

  console.log('retrievedObject: ', JSON.parse(retrievedObject));
});

document.getElementById("submitAddMediaUrl").addEventListener("click", function(){

  contribut.push({"category": "poster","img":document.getElementById("boxUrl").value, "page":"./HTML/StarWars8Page.html"});

  var new_json = JSON.stringify(contribut);
  localStorage.setItem('contribDone', new_json);

  // Retrieve the object from storage
  var retrievedObject = localStorage.getItem('contribDone');

  console.log('retrievedObject: ', JSON.parse(retrievedObject));
});
