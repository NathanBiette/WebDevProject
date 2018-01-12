var mediasInSlideshow = document.getElementsByClassName('slideshowMedia');
var numberMediaSlideshow= mediasInSlideshow.length;//3 Images
var currentImage = 0;


var mediaWidth = parseFloat(window.getComputedStyle( document.getElementsByClassName('slideshowMedia')[0]).getPropertyValue('width'));
var totalMediasWidth = mediaWidth*numberMediaSlideshow;
function initWebPage() { //all global var declarations and eventListeners...
  document.getElementById('connexionButton').addEventListener('click',connect);
}

initWebPage(); //init the page when the script is run

function connect(){
  var username = document.getElementById('username').value;
  if(username) document.getElementById('logInHeader').innerHTML = username;
}
//test

var translateButtons = document.getElementsByClassName('translate');
for(var iter=0;iter<translateButtons.length;iter++){
  var slideshow = document.getElementById('mainImageContainer');
  slideshow.style.transform='translateX(0px)';
  if(translateButtons[iter].className.split(' ')[1] == 'right') translateButtons[iter].addEventListener('click',function() {translateSlideshow(slideshow,'right')});
  else translateButtons[iter].addEventListener('click',function() {translateSlideshow(slideshow,'left')});
};

function translateSlideshow(slideshow,direction) {
  mediaWidth = parseFloat(window.getComputedStyle( document.getElementsByClassName('slideshowMedia')[0]).getPropertyValue('width'));
  totalMediasWidth = mediaWidth*numberMediaSlideshow;
  var new_angle;
  var currentTranslation= (slideshow.style.transform.split('(')[1]);
  currentTranslation= parseFloat(currentTranslation.slice(0,currentTranslation.length-3))

  if( (direction == 'left') && (currentImage>0)) {
    //new_angle = currentTranslation+mediaWidth;
    currentImage--;

  }
  else if((direction == 'right')&&(currentImage+1<numberMediaSlideshow)) {
    //new_angle = currentTranslation-mediaWidth;
    currentImage++;
  }
  //else new_angle= parseFloat(currentTranslation);
  new_angle = -currentImage*mediaWidth;
  slideshow.style.transform = 'translateX('+new_angle+'px)';
};
