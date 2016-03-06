
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
    
    // Definition de variables globales pour le dessin de polygones
    layer = new PolygonsLayer(map);
    
    google.maps.event.addListener(map, 'click', controller.mapClicked);
    
  }

  this.mapClicked = function(e){
    if(selected===null){
      // Si aucun polygone n'est sélectionné
      // Creation d'un nouveau polygone
      layer.addPolygon(e);
      
      // Selection du polygone pour édition
      layer.polygons[layer.polygons.length-1].select(layer.polygons.length-1);
      
      // Addition du premier vertex au polygone
      layer.polygons[selected].addVertex(e);
      
    }else{
      // Si un polygone est sélectionné
      // Ajout d'un vertex à la fin du polygone
      layer.polygons[selected].addVertex(e);
      
    }
    //alert("selected = " + selected + "\n" + polygons[selected].getPath().length);
  }

  this.doubleClicked = function(){
    if (selected == this.id){
      layer.polygons[selected].deselect();
    }else{
      if(selected != null){
        layer.polygons[selected].deselect();
      }
      this.select();
    }
  }

  this.rightClicked = function(e){
    this.delete();
  }
}