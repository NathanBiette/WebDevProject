$(function() {

  $(".checkAllButton").click(function() {
    $(".filterPostsButton").prop("checked",true);
  });
  $(".uncheckAllButton").click(function() {
    $(".filterPostsButton").prop("checked",false);
  });

  $(".filterPostsButton").on("change",function() {
    console.log($(this).attr("class"));
  });

  $("#addMediaNewPost").click(function(){
    if ($(".addMediaNewPostContainer").css("display") == "none") {
      $(".addMediaNewPostContainer").css("display", "block");
    } else {
      $(".addMediaNewPostContainer").css("display", "none");
    }
  })

  $('.localFileNewPostButton').click(function() {
    $(".searchForFile").click();
  })

  $('.searchForFile').on('change',retrieveFile);

  $('.submitMediaUrl').on('click',addMediaURL);

  $('#sendNewPost').click(sendNewPost);
});


function retrieveFile(event){
  var file = event.target.files[0];
  if(!file.type.match('image.*') && !file.type.match('video.*') && !file.type.match('audio.*')){
    return;
  } else {


    var reader = new FileReader();
    reader.onload = (function(theFile,elmt){
      return function(e){
        var localMediaAddress = e.target.result;
        var addressMediaOutput = $("#outputMediaNewPost");

        var fileType;
        if (file.type.match('image.*')) {
          type = "img";
          addressMediaOutput.html("<img class='outputMediaNewPost' src='"+localMediaAddress+"' alt='localMedia'/>");
        } else if (file.type.match('video.*')) {
          type = "video";
          addressMediaOutput.html("<video class='outputMediaNewPost' autoplay><source src='"+localMediaAddress+"'></source></video>");
        } else if (file.type.match('audio.*')) {
          type = "audio";
        }

      }
    }) (file,$(this));
    reader.readAsDataURL(file);
  }
}

function isImage(url) {
  return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}
function isVideo(url) {
  return(url.match(/\.(ogg|mp4)$/) != null);
}
function isAudio(url) {
  return(url.match(/\.(mp3|mpeg)$/) != null);
}

function addMediaURL() {
  var newMediaURL = $(".mediaURL").val();
  var addressMediaOutput = $("#outputMediaNewPost");
  if (isImage(newMediaURL)) {
    addressMediaOutput.html("<img class='outputMediaNewPost' src='"+newMediaURL+"' alt='localMedia'/>");
  } else if (isVideo(newMediaURL)){
    addressMediaOutput.html("<video class='outputMediaNewPost' autoplay><source src='"+newMediaURL+"'></source></video>");
  } else if (isAudio(newMediaURL)){

  }


}




$('.upvote').on("click",upVote)
$('.downvote').on("click",downVote)
function upVote(){
  var numberOfVotes = parseFloat($(this).html().split(' ')[1]);
  numberOfVotes++;
  $(this).html("✚ "+numberOfVotes)
}
function downVote(){
  var numberOfVotes = parseFloat($(this).html().split(' ')[1]);
  numberOfVotes++;
  $(this).html("&#8210; "+numberOfVotes)
}
$('#inputCommentButton').on("click",addComment);

function addComment(){
  var commentText = $(this).siblings('.textPost').val()
  var commentsContainer = $(this).parent().parent().parent();
  var firstComment = commentsContainer.children(".comment").first()
  var newComment = firstComment.clone();
  newComment.find(".commentText").html(commentText);
  var commentsContainer = $(this).parent().parent().parent();
  console.log(commentsContainer.attr("class"));
  commentsContainer.css("height","1px");
  newComment.insertBefore(firstComment);
  commentsContainer.css("height","auto");
  if(localStorage.profilePicSrc){
    newComment.find(".avatarComment").attr("src",localStorage.profilePicSrc)
  }
  if(localStorage.username){
    newComment.find(".username").html(localStorage.username+' - ')

  }

}

$(window).on("load",intializeAvatar)

function intializeAvatar(){
  if(localStorage.profilePicSrc){
    $(".avatar").attr("src",localStorage.profilePicSrc)
  }
}
