$(".checkAllButton").click(function() {$(".filterPostsButton").prop("checked","true")})
$(".filterPostsButton").on("change",function() {console.log($(this).attr("class"))})
