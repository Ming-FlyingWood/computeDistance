function computeDistance(startCoords, destCoords) {
  var startLatRads = degreesToRadians(startCoords.latitude);
	var startLongRads = degreesToRadians(startCoords.longitude);
	var destLatRads = degreesToRadians(destCoords.latitude);
	var destLongRads = degreesToRadians(destCoords.longitude);
	
	var Radius = 6371; //radius of the Earth in km
	var distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) +
	                Math.cos(startLatRads) * Math.cos(destLatRads) *
									Math.cos(startLongRads - destLongRads)) * Radius;
  
	return distance;
}

function degreesToRadians(degrees) {
  var radians = (degrees * Math.PI)/180;
	return radians;
}

var ourCoords = {
  latitude: 47.624851,
	longitude: -122.52099
};

var myCoords = {
  latitude: 10,
	longitude: 10
};

window.onload = displayLocation;

function displayLocation() {	
	var km = computeDistance(myCoords, ourCoords);
	var distance = document.getElementById("distance");
	distance.innerHTML = "You are " + km + " km from the WickedlySmart HQ";
}