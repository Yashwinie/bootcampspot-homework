// from data.js
var tableData = data;

//PART 1 - APPEND TABLE WITH DATA INTO THE HTML PAGE

//reference to the table body
var tbody = d3.select("tbody")

//Loop through the data and console.log each object to check data
data.forEach(function(sighting) {
    console.log(sighting);
    //use d3 to append a table row 'tr' for each data object
    var row = tbody.append("tr");
    
    //use Object.entries to console.log each data value
    Object.entries(sighting).forEach(function([key, value]) {
        console.log(key, value);
        //use d3 to append 1 cell per value
        var cell = row.append("td");
        //use d3 to update each cell's text with values
        cell.text(value);
    });
});

//PART 2 - LISTEN TO EVENT TO RETURN INFORMATION FOR USER SEARCH
