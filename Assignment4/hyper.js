$(function() {
  var mediasInSlideshow = document.getElementsByClassName('slideshowMedia');
  var numberMediaSlideshow= mediasInSlideshow.length;//3 Images
  var currentImage = 0;

  var mediaWidth = parseFloat(window.getComputedStyle( document.getElementsByClassName('slideshowMedia')[0]).getPropertyValue('width'));
  var totalMediasWidth = mediaWidth*numberMediaSlideshow;
});

var translateButtons = document.getElementsByClassName('translate');
for(var iter=0;iter<translateButtons.length;iter++){
  var slideshow = document.getElementById('mainMediaContainer');
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

  if(direction == 'left') {
    currentImage--;
    if(currentImage==-1) currentImage=numberMediaSlideshow-1;
  }
  else if(direction == 'right') {
    //new_angle = currentTranslation-mediaWidth;
    currentImage++;
    if(currentImage>=numberMediaSlideshow) currentImage=0;
  }
  //else new_angle= parseFloat(currentTranslation);
  new_angle = -currentImage*mediaWidth;
  slideshow.style.transform = 'translateX('+new_angle+'px)';
};
