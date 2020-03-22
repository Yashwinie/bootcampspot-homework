// Store our endpoint inside queryUrl and platesURL
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"
var platesURL = "../data/PB2002_boundaries.json"

// Perform a GET request to the query URL
d3.json(queryUrl, function(data) {
    // Once we get a response, send the data.features object to the createFeatures function --- FEATURES IS SOMETHING SPECIFIC TO GEOJSON AND LAYERS
    createFeatures(data.features);
});

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
    };
  };

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
    };

// Perform a GET request to the platesURL
d3.json(platesURL, function(platesdata) {
  // Once we get a response, send the data.features object to the createFeatures function --- FEATURES IS SOMETHING SPECIFIC TO GEOJSON AND LAYERS
  L.geoJSON(platesdata, {
    style: {
      "color": "yellow",
      "weight": 3,
      "opacity": 1
    }
  });
});
  
    // Create a GeoJSON layer containing the features array on the earthquakeData object
    // Run the onEachFeature function once for each piece of data in the array
    var earthquakes = L.geoJSON(earthquakeData, {
      onEachFeature: onEachFeature
    });

    var plates = L.geojason(platesData, {
      oneEachFeature: onEachFeature
    });

    // Sending our earthquakes layer to the createMap function
  createMap(earthquakes);
  createMap(plates);


  // Create a layer control
  // Pass in our baseMaps and overlayMaps
  // Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
    }).addTo(myMap);
  };