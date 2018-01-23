var dataListArticles = ["Star Wars 8",
                        "Game of Thrones",
                        "Mario Odyssey"];
var listLinkArticles = ["StarWars8Page.html",
                        "StarWars8Page.html",
                        "StarWars8Page.html"];

$(function() {
  for (articleNb in dataListArticles) {
    $('#dataListArticles').append('<option value="'+dataListArticles[articleNb]+'"></option>');
    if(document.title == "Hyper VideoGames"){
      $('#dataListArticles2').append('<option value="'+dataListArticles[articleNb]+'"></option>');
    }
  }
  $("#searchButton").click(goToPage);
  if(document.title == "Hyper VideoGames"){
    $("#searchButton2").click(goToPage);
  }
});

function goToPage() {
  for (articleNb in listLinkArticles) {
    if ($("#searchBar").val() == dataListArticles[articleNb]) {
      window.location.href = listLinkArticles[articleNb];
    }
    if (document.title == "Hyper VideoGames" && $("#bigSearchBar").val() == dataListArticles[articleNb]) {
      window.location.href = listLinkArticles[articleNb];
    }

  }
}

