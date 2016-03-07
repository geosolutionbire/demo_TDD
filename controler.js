
window.onload = function(){
  controller = new Controller();
  controller.initialize();
};

function Controller(){

  this.initialize = function() {
    // Defintion des propriétés de la carte
    var mapProp = {
      mapTypeId: google.maps.MapTypeId.SATELLITE,
      disableDefaultUI: true,
      disableDoubleClickZoom: true,
      center: new google.maps.LatLng(50.6668,4.6203),
      zoom: 18
    };
    
    // Création de la carte sur base des propriétés définies juste avant dans l'éléments HTML avec l'ID "map"
    map = new google.maps.Map(document.getElementById("map"),mapProp);
    
  }
}