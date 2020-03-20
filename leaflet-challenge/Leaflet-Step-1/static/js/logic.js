// Store our endpoint inside queryUrl
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

// Perform a GET request to the query URL
d3.json(queryUrl, function(data) {
    // Once we get a response, send the data.features object to the createFeatures function --- FEATURES IS SOMETHING SPECIFIC TO GEOJSON AND LAYERS
    createFeatures(data.features);
});

// Loop through the json and create a circle market for each earthquake object
// for (var i = 0; i < features.length; i++) {

//   // Conditionals for countries points
//   var color = "";
//   if (features[i].mag > 200) {
//     color = "yellow";
//   }
//   else if (countries[i].points > 100) {
//     color = "blue";
//   }
//   else if (countries[i].points > 90) {
//     color = "green";
//   }
//   else {
//     color = "red";
//   }

function createFeatures(earthquakeData) {
    // Define a function we want to run once for each feature in the features array
    //markers based on magnitude size
  for (var i = 0; i < feature.length; i++) {
    // Conditionals for points
    var color = "";
    if (feature[i].properties.mag > 4) {
      color = "blue";
    }
    else if (countries[i].points > 3) {
      color = "green";
    }
    else if (countries[i].points > 2) {
      color = "red";
    }
    else if (countries[i].points > 1) {
      color = "orange";
    }
    else {
      color = "yellow";
    }
    // Give each feature a popup describing the place and time of the earthquake
    function onEachFeature(feature, layer) {
      L.circle({
        fillOpacity:0.75,
        color: color,
        fillColor: color,
        // Adjust radius
        radius: feature[i].properties.mag * 1000
      }).bindPopup("<h3>" + feature.properties.place +
        "</h3><hr><p>" + new Date(feature.properties.time) + "</p>");
    }
  
    // Create a GeoJSON layer containing the features array on the earthquakeData object
    // Run the onEachFeature function once for each piece of data in the array
    var earthquakes = L.geoJSON(earthquakeData, {
      onEachFeature: onEachFeature
    });

    // Sending our earthquakes layer to the createMap function
  createMap(earthquakes);
}

function createMap(earthquakes) {

  // Define streetmap and darkmap layers
  var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  });

  var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.dark",
    accessToken: API_KEY
  });

  // Define a baseMaps object to hold our base layers
  var baseMaps = {
    "Street Map": streetmap,
    "Dark Map": darkmap
  };

  // Create overlay object to hold our overlay layer
  var overlayMaps = {
    Earthquakes: earthquakes
  };

  // Create our map, giving it the streetmap and earthquakes layers to display on load
  var myMap = L.map("map", {
    center: [
      38.85, -19.61
    ],
    zoom: 3,
    layers: [streetmap, earthquakes]
  });

  // Create a layer control
  // Pass in our baseMaps and overlayMaps
  // Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
}
