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
  var showingMediaIndex = mediasContainer.data("showingMediaIndexInSLideshow");

  //Current translation
  var matrixString = mediasContainer.css("transform").split(',');
  var translateX = parseFloat(matrixString[matrixString.length-2]); //TranslationX

  var direction = translateButton.attr("class").split(' ')[1];


  if(direction=='right'){// && remainder==0){//+500px to transform left

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
    showingMediaIndex=numberMediaInContainer-1;
  }

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
$(window).on('load',resizeCaroussels);


function resizeCaroussels(){
  $(".slideshow").each(function(){
    resizeInnerCaroussel($(this).parent());
  });
}
