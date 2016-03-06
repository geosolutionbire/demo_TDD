describe("A PolygonsLayer", function() {
  beforeAll(function() {
    controller = new Controller();
    map = "tuti fruti"; 
    layer = new PolygonsLayer(map);
  });
  
  it("contains an empty array of polygons and has no selected polygon", function() {
    expect(layer.polygons).toBeDefined();
    expect(layer.polygons.length).toBe(0);
    expect(selected).toBe(null);
  });
  
  it("contains a method to add polygons to the map",function(){
    expect(layer.addPolygon).toBeDefined();
  });
});


describe("When a polygon is created by addPolygon",function() {
  controller = new Controller();
  beforeAll(function() {
    map = "tuti fruti";
    layer = new PolygonsLayer(map);
    layer.addPolygon();
  });
  
  it("should be in the array of polygons which has a length of one", function() {
    expect(layer.polygons[0]).toBeDefined();
    expect(layer.polygons.length).toEqual(1);
  });
  
  it("should have the default settings of an unselected polygon", function(){
    expect(layer.polygons[0].get('strokeColor')).toEqual("#0000FF");
    expect(layer.polygons[0].get('strokeOpacity')).toEqual(0.8);
    expect(layer.polygons[0].get('strokeWeight')).toEqual(1);
    expect(layer.polygons[0].get('fillColor')).toEqual("#0000FF");
    expect(layer.polygons[0].get('fillOpacity')).toEqual(0.4);
  });
  
  it("should have an ID equivalent to the length of polygons minus 1",function(){
    expect(layer.polygons[0].id).toEqual(layer.polygons.length-1);
  });
  
  it("contains a method to add vertices",function(){
    expect(layer.polygons[0].addVertex).toBeDefined();
  });
  
  it("contains a method to delete the polygon",function(){
    expect(layer.polygons[0].delete).toBeDefined();
  });
  
  it("contains a method to select the polygon",function(){
    expect(layer.polygons[0].select).toBeDefined();
  });
  it("contains a method to deselect the polygon",function(){
    expect(layer.polygons[0].deselect).toBeDefined();
  });
  
  it("should have an event listerner defined for double click",function(){
    expect(layer.polygons[0].dblclick).toBeDefined();
  });
  it("should have an event listerner defined for right click",function(){
    expect(layer.polygons[0].rightclick).toBeDefined();
  });
});

describe("Calling addVertex",function(){
  controller = new Controller();
  beforeAll(function() {
    map = "tuti fruti";
    layer = new PolygonsLayer(map);
    layer.addPolygon();
    e = {latLng: new google.maps.LatLng(-34.397, 150.644)};
    spyOn(layer.polygons[0],'addVertex').and.callThrough();
    layer.polygons[0].addVertex(e);
  });
  
  it("should mark addVertex as been called",function(){
    expect(layer.polygons[0].addVertex).toHaveBeenCalled();
  });
  
  it("once should add a vertex to the polygon path",function() {
    expect(layer.polygons[0].getPath().getLength()).toEqual(1);
    expect(layer.polygons[0].getPath().getAt(0)).toEqual(e.latLng);
  });

});

describe("Calling delete",function(){
  beforeAll(function() {
    controller = new Controller();
    map = "tuti fruti";
    layer = new PolygonsLayer(map);
    layer.addPolygon();
    spyOn(layer.polygons[0],'delete').and.callThrough();
    layer.polygons[0].delete();
  });
  
  it("should mark delete as been called",function(){
    expect(layer.polygons[0].delete).toHaveBeenCalled();
  });
  
  it("should set the polygon map to null",function(){
    expect(layer.polygons[0].get('map')).toBe(null);
  });
  
  it("should set the selected polygon to null",function() {
    expect(selected).toBe(null);
  });
});

describe("When a polygon is selected, the polygon",function(){
  beforeAll(function() {
    controller = new Controller();
    map = "tuti fruti";
    layer = new PolygonsLayer(map);
    layer.addPolygon();
    spyOn(layer.polygons[0],'select').and.callThrough();
    layer.polygons[0].select();
  });
  
  it("select method should have been called",function(){
    expect(layer.polygons[0].select).toHaveBeenCalled();
  });
  
  it("id should be equal to the selected global variable",function() {
    expect(selected).toEqual(layer.polygons[0].id);
  });
  
  it("properties should be set to the selected style",function(){
    expect(layer.polygons[0].get('strokeColor')).toEqual("#00FF00");
    expect(layer.polygons[0].get('strokeWeight')).toEqual(4);
    expect(layer.polygons[0].get('fillColor')).toEqual("#00FF00");
  });
});

describe("When a polygon is deselected, the polygon",function(){
  beforeAll(function() {
    controller = new Controller();
    map = "tuti fruti";
    layer = new PolygonsLayer(map);
    layer.addPolygon();
    spyOn(layer.polygons[0],'deselect').and.callThrough();
    layer.polygons[0].deselect();
  });
  
  it("deselect method should have been called",function(){
    expect(layer.polygons[0].deselect).toHaveBeenCalled();
  });
  
  it("id should not be equal to the selected global variable which should be null",function() {
    expect(selected).toBe(null);
  });
  
  it("properties should be set to the unselected style",function(){
    expect(layer.polygons[0].get('strokeColor')).toEqual("#0000FF");
    expect(layer.polygons[0].get('strokeWeight')).toEqual(1);
    expect(layer.polygons[0].get('fillColor')).toEqual("#0000FF");
  });
});

describe("Double clicking on a polygon",function(){
});

describe("Right clicking on a polygon",function(){
});
