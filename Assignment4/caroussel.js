/*--------------------------------------------Jquery version--------------------------------------*/
function initCarousels(){
  $(".mediasContainer").data("showingMediaIndexInSLideshow",0);
  $(".mediasContainer").data("showingContainerIndex",0);
  $(".translate").on('click',function(event){
  event.stopPropagation();
  translateSlideshow($(this));});
}
function translateSlideshow(translateButton){
  var mediasContainer = translateButton.siblings(".mediasContainer");
  var numberOfMediaContainer = mediasContainer.children(".mediaContainer").length;
  var showingContainerIndex = mediasContainer.data("showingContainerIndex");

  var mediaContainer = translateButton.siblings(".mediasContainer").children().eq(showingContainerIndex)
  var numberMediaInContainer = mediaContainer.find(".media").length;
  //console.log(numberMediaInContainer);
  var showingMediaIndex = mediasContainer.data("showingMediaIndexInSLideshow");

  //Current translation
  var matrixString = mediasContainer.css("transform").split(',');
  var translateX = parseFloat(matrixString[matrixString.length-2]); //TranslationX

  var direction = translateButton.attr("class").split(' ')[1];

  //Caluclating the transition value to next media
  //console.log("Translation");
  //console.log(showingContainerIndex);

  if(direction=='right'){// && remainder==0){//+500px to transform left
    //console.log("Test1");
    //console.log(showingMediaIndex);
    //console.log(numberMediaInContainer);
    if(showingMediaIndex==(numberMediaInContainer-1)){ //To the right of the slideshow
      if(showingContainerIndex==(numberOfMediaContainer-1)){
        showingContainerIndex=0;// to the full begining of the slideshow
        showingMediaIndex=0;
      }
      else{
        showingContainerIndex++;
        showingMediaIndex=0;
      }
    }
    else{
      showingMediaIndex++;
    }

  }
  if(direction=='left'){// && remainder==0){//+500px to transform left
    if(showingMediaIndex==0){ //To the left of the slideshow

      if(showingContainerIndex==0){
        showingContainerIndex=numberOfMediaContainer-1;// to the full begining of the slideshow
        showingMediaIndex=0;
      }
      else{
        showingContainerIndex--;
        showingMediaIndex=-1;
      }
    }
    else{
      showingMediaIndex--;
    }
  }

  showingContainer = mediasContainer.children().eq(showingContainerIndex);
  //In the case left to several media -> last media to be shown
  if(showingMediaIndex==-1){
    numberMediaInContainer = showingContainer.find(".media").length;
    //console.log(numberMediaInContainer);
    showingMediaIndex=numberMediaInContainer-1;
  }
  //console.log(showingContainerIndex);
  //console.log(showingMediaIndex);
  //html objects to be shown

  showingMedia = showingContainer.find(".media").eq(showingMediaIndex);
  //Caluclating the new translation
  translateX = -showingContainerIndex*parseFloat(showingContainer.css("width"));

  var siblingsMedia = showingContainer.find(".media");

  for(var iter=0;iter<showingMediaIndex;iter++){
    console.log(parseFloat(siblingsMedia.eq(iter).css("width")));
    translateX-=parseFloat(siblingsMedia.eq(iter).css("width"));
  }


  matrixString[matrixString.length-2] = ' '+translateX;
  mediasContainer.css("transform",matrixString.join(','));
  mediasContainer.data("showingMediaIndexInSLideshow", showingMediaIndex);
  mediasContainer.data("showingContainerIndex", showingContainerIndex);

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
$(function() {
  //intializeTimers();
  initCarousels();
});
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
