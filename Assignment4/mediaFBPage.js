$(".checkAllButton").click(function() {
  $(".filterPostsButton").prop("checked",true);
});
$(".uncheckAllButton").click(function() {
  $(".filterPostsButton").prop("checked",false);
});

$(".filterPostsButton").on("change",function() {
  console.log($(this).attr("class"));
});
