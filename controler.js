
window.onload = function(){
  controller = new Controller();
  controller.initialize();
};

function Controller(){

  this.initialize = function() {
    // Defintion des propri�t�s de la carte
    var mapProp = {
      mapTypeId: google.maps.MapTypeId.SATELLITE,
      disableDefaultUI: true,
      disableDoubleClickZoom: true,
      center: new google.maps.LatLng(50.6668,4.6203),
      zoom: 18
    };
    
    // Cr�ation de la carte sur base des propri�t�s d�finies juste avant dans l'�l�ments HTML avec l'ID "map"
    map = new google.maps.Map(document.getElementById("map"),mapProp);
    
    // Definition de variables globales pour le dessin de polygones
    layer = new PolygonsLayer(map);
    
    google.maps.event.addListener(map, 'click', controller.mapClicked);
    
  }

  this.mapClicked = function(e){
    if(selected===null){
      // Si aucun polygone n'est s�lectionn�
      // Creation d'un nouveau polygone
      layer.addPolygon(e);
      
      // Selection du polygone pour �dition
      layer.polygons[layer.polygons.length-1].select(layer.polygons.length-1);
      
      // Addition du premier vertex au polygone
      layer.polygons[selected].addVertex(e);
      
    }else{
      // Si un polygone est s�lectionn�
      // Ajout d'un vertex � la fin du polygone
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