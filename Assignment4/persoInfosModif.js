var map;
var geocoder;
var marker;
var coords;

$(function() {
    // Retrieve the values in the local storage
    retrieveAllInfos();
    // Event listeners in jQuery
    $("#modifyInfosButton").click(showPersoInfosModif);
    $("#cancelPersoInfoModif").click(hidePersoInfosModif);
    $("#validatePersoInfoModif").click(validatePersoInfoModif);
});

// Functions

function showPersoInfosModif() {
  $("#persoInfos").css("display", "none");
  $("#persoInfosModif").css("display", "block");
}
function hidePersoInfosModif() {
  $("#persoInfos").css("display", "block");
  $("#persoInfosModif").css("display", "none");
}

function retrieveAllInfos() {
  $("#usernameOutput").html(localStorage.username);

  if(localStorage.age) $("#ageOutput").html(localStorage.age + " years old");
  $("#age").val(localStorage.age);

  if (localStorage.gender) {
    if (localStorage.gender == "female") {
      $("#genderOutput").html("&#9792;");
      $("#genderOutput").parent().css("color","magenta");
      $("#female").attr("checked", "checked"); //form for modif
    } else if (localStorage.gender == "male") {
      $("#genderOutput").html("&#9794;");
      $("#genderOutput").parent().css("color","blue");
      $("#male").attr("checked", "checked"); //form for modif
    }
  }

  if(localStorage.location) $("#locationOutput").html(localStorage.location);
  $("#location").val(localStorage.location);

  $("#showMap").val(localStorage.showMap);
  if (localStorage.showMap === "true") {
    $("#locationMap").css("display","block");
    $("#showMap").prop("checked",true);
    initMap();
  } else {
    $("#locationMap").css("display","none");
    $("#showMap").prop("checked",false);
  }
  if(localStorage.profilePicSrc){
    document.getElementById('profilePicture').src = localStorage.profilePicSrc;
  }
  else{
    document.getElementById('profilePicture').src = '../images/avatar.jpg';
  }
  $('#profilePicture').css("display","block");
  $('#niceButtonChangePic').css("display","block");
}

function validatePersoInfoModif() {
  localStorage.age = $("#age").val();
  localStorage.gender = $('input[name=gender]:checked').attr('value');
  localStorage.location = $("#location").val();
  localStorage.showMap = $("#showMap").is(":checked");

  retrieveAllInfos();
  hidePersoInfosModif();
}

function initMap() {
  try{
    if (! map) map = new google.maps.Map(document.getElementById('locationMap'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 4
      });
    if (! geocoder) geocoder = new google.maps.Geocoder();

    geocoder.geocode( { 'address': localStorage.location }, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        coords = results[0].geometry.location;
        if (marker) {
          marker.setPosition({lat: coords.lat(), lng: coords.lng()});
        } else {
          marker = new google.maps.Marker({position:coords});
        }
        map.setCenter(coords);
        marker.position = coords;
        marker.setMap(map);
      } else {
        alert("Le geocodage n\'a pu etre effectue pour la raison suivante: " + status);
      }
    });
  } catch(err) {
  }
}

function changeProfilePic(evt){
  var file =evt.target.files[0];
  var button = evt.target;
  if(!file.type.match('image.*')){
    return;
  }
  else{
    var reader = new FileReader();
    reader.onload = (function(theFile){
      return function(e) {
        var src = e.target.result;
        localStorage.profilePicSrc = src;
        document.getElementById('profilePicture').src = src;
        }
    })(file);
    reader.readAsDataURL(file)
  }
}
document.getElementById('modifyPic').addEventListener('change', changeProfilePic);
$('.niceButtonChangePic').click(function() {document.getElementById('modifyPic').click()})
