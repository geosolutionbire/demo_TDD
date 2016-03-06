function PolygonsLayer(map){
  
  this.polygons = [];
  selected = null;
    
  // Method to add a new polygon to the map
  this.addPolygon = function(){
    
    // Creation d'un nouveau polygone
    var polygon = new google.maps.Polygon({
      map: map,
      strokeColor: "#0000FF",
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: "#0000FF",
      fillOpacity: 0.4
    });
    
    // Set polygon ID
    polygon.id = this.polygons.length;
  
    // Create a method to add vertexes in the polygon
    polygon.addVertex = function(e){
      polygon.getPath().insertAt(polygon.getPath().getLength(), e.latLng);
    };
    
    // Method to delete the polygon
    polygon.delete = function(){
      polygon.setMap(null);
      selected = null;
    };
    
    polygon.select = function (){
      selected = this.id;
      polygon.setOptions({strokeColor: "#00FF00"});
      polygon.setOptions({fillColor: "#00FF00"});
      polygon.setOptions({strokeWeight: 4});
    };

    polygon.deselect = function(){
      polygon.setOptions({strokeColor: "#0000FF"});
      polygon.setOptions({fillColor: "#0000FF"});
      polygon.setOptions({strokeWeight: 1});
      selected = null;
  };
    
    // Add an event listener for when the polygon is double clicked
    polygon.dblclick = new google.maps.event.addListener(polygon, 'dblclick', controller.doubleClicked);
    
    // Add an event listener for when the polygon is right clicked
    polygon.rightclick = new google.maps.event.addListener(polygon, 'rightclick', controller.rightClicked);
    
    // Ajout du polygone à la liste des polygones
    this.polygons.push(polygon);
    
  
  };
}