/**
 * Author:    Alexis Sanchez
 * Created:   1.29.21
 *
 **/

var myTransport = ["Bus", "Ride From Friends", "Bike"]
myMainRide = {
  make: "BMW",
  model:"325i",
  color: "Grey",
  year: 2006,
  age: function(){
    return 2021 - year;
  }
}

document.writeln("Getting around: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
