/* VERSION PLUS RAPIDE A ECRIRE */

var onglets = [$("#ong1"),$("#ong2"),$("#ong3"),$("#ong4")];
var ongletsContent = [$("#ong1Content"),$("#ong2Content"),$("#ong3Content"),$("#ong4Content")];
if (localStorage.onglet) {
  onglets[localStorage.onglet - 1].addClass("active");
  onglets[localStorage.onglet - 1].siblings().removeClass("active");
  ongletsContent[localStorage.onglet - 1].css("display","block");
  ongletsContent[localStorage.onglet - 1].siblings().css("display","none");
}

$(".tab").click(changeOnglet);

function changeOnglet() {
  $(this).addClass("active");
  $(this).siblings().removeClass("active");
  $("#"+$(this).attr("id")+"Content").css("display","block");
  $("#"+$(this).attr("id")+"Content").siblings().css("display","none");
  localStorage.onglet = $(this).attr("id")[3];
}
