/*--------------------------------------------Jquery version--------------------------------------*/
function initCarousels(){
  $(".translate").click(function(event){
    event.stopPropagation();
    translateSlideshow($(this));});
  function translateSlideshow(translateButton){
    var slideshowClass = translateButton.parent().parent().attr("class").split(' ')[1];
    var mediasContainer = translateButton.siblings(".mediasContainer");
    var mediaContainer = translateButton.siblings(".mediasContainer").children(".mediaContainer")
    var mediaWidth =parseFloat(mediaContainer.css("width"));
    var numberMediaSlideshow = mediaContainer.length;
    var matrixString = mediasContainer.css("transform").split(',');
    var translateX = parseFloat(matrixString[matrixString.length-2]); //TranslationX
    direction = translateButton.attr("class").split(' ')[1];
    var remainder = Math.floor(translateX%mediaWidth);
    if(remainder==0){
      if(direction=='left' && remainder==0){//+500px to transform left
        if(translateX<0){
          translateX += mediaWidth;
        }
        else{
          translateX = -mediaWidth*(numberMediaSlideshow-1);
        }
      }
      if(direction=='right' && remainder==0){//-500px to transforfm right
        if(translateX> -mediaWidth*(numberMediaSlideshow-1)){
          translateX -=mediaWidth;
        }
        else{
          translateX = 0;
        }
      }
      matrixString[matrixString.length-2] = ' '+translateX;
      mediasContainer.css("transform",matrixString.join(',')) ;
    }
  };



  function intializeTimers(){
    var rightTranslate=$(".right");
    var timers = [];
    for(var button=0;button<rightTranslate.length;button++){
      var element = rightTranslate[button];
      timers.concat(setInterval(fakeClick.bind(null,element),5000));
    }
    for(var button=0;button<rightTranslate.length;button++){
      var element = rightTranslate[button];
      element.addEventListener('change',function(){clearInterval(timers[button])});
    }
  }

  function fakeClick(element){
    element.click();
  }
  intializeTimers();
}
initCarousels();
$('video').click(function(){
  this.paused ? this.play() : this.pause();
});

function resizeCaroussel(caroussel,width,height){
  //We assume the caroussel structure as in carousel.css
  caroussel.css("max-width",width); //ex width = "500px"
  caroussel.css("max-height",height);
  var mediaContainer = caroussel.find(".mediaContainer");
  mediaContainer.css("height",height);
  mediaContainer.css("width",width);
}
function resizeInnerCaroussel(carousselParent){
  console.log(carousselParent.attr("class"));
  resizeCaroussel(carousselParent.children($(".slideshow")),carousselParent.css("width"),carousselParent.css("height"));
}


/*---------------JS only version ----------------------*/


/*var mediasInSlideshow = document.getElementsByClassName('slideshowMedia');
var numberMediaSlideshow=0;// mediasInSlideshow.length;//3 Images
var currentImage = 0;

var mediaWidth = parseFloat(window.getComputedStyle( document.getElementsByClassName('slideshowMedia')[0]).getPropertyValue('width'));
var totalMediasWidth = mediaWidth*numberMediaSlideshow;

function initWebPage() { //all global var declarations and eventListeners...

}

initWebPage(); //init the page when the script is run


var translateButtons = document.getElementsByClassName('translate');
for(var iter=0;iter<translateButtons.length;iter++){
  var slideshow = document.getElementById('mainMediaContainer1');
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
    //new_angle = currentTranslation+mediaWidth;
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
*/
