describe("A controller",function(){
  beforeAll(function(){
    controller = new Controller();
  });
  
  it("should have an initialize method",function(){
    expect(controller.initialize).toBeDefined();
  });
  
  it("should have an mapClicked method",function(){
    expect(controller.mapClicked).toBeDefined();
  });
  
  it("should have an doubleClicked method",function(){
    expect(controller.doubleClicked).toBeDefined();
  });
  it("should have an rightClicked method",function(){
    expect(controller.rightClicked).toBeDefined();
  });
});

describe("Calling initialize",function(){
  
});

describe("Calling mapClicked",function(){
  beforeAll(function(){
    controller = new Controller();
    map = "tuti fruti"; 
    layer = new PolygonsLayer(map);
    e = {latLng: new google.maps.LatLng(-34.397, 150.644)};
    spyOn(controller,"mapClicked").and.callThrough();
    controller.mapClicked(e);
  });
  
  it("should mark it as called",function(){
    expect(controller.mapClicked).toHaveBeenCalled();
  });
  
  it("once should add a new polygon to the layer",function(){
    expect(layer.polygons.length).toEqual(1);
  });
  
  it("once should select the new polygon",function(){
    expect(selected).toEqual(layer.polygons[0].id);
  });
  it("once should add a new vertex",function(){
    expect(layer.polygons[0].getPath().getAt(0)).toEqual(e.latLng);
  })
  it("twice should add a new vertex to the polygon path",function(){
    f = {latLng: new google.maps.LatLng(-32.397, 148.644)};
    controller.mapClicked(f);
    expect(layer.polygons[0].getPath().getAt(1)).toEqual(f.latLng);
  });
});

describe("Calling doubleClicked",function(){
});

describe("Calling rightClicked",function(){
});

