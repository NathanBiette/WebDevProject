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

});

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

}

$(window).on("load",intializeAvatar)

function intializeAvatar(){
  console.log(localStorage.profilePicSrc);
  if(localStorage.profilePicSrc){
    $(".avatar").attr("src",localStorage.profilePicSrc)
  }
}
