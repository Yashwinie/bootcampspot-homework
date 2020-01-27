// from data.js
var tableData = data;

//PART 1 - APPEND TABLE WITH DATA INTO THE HTML PAGE

//reference to the table body
var tbody = d3.select("tbody")

//loop through the data
data.forEach(function(sighting) {
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

//PART 2 - LISTEN TO EVENT TO RETURN INFORMATION FOR USER SEARCH (FOR DATES 1/1/2010 TO 1/13/2010

//Filter Button handler
function handleFilter() {
  //prevent the page from refreshing
  d3.event.preventDefault();
  //select the input value from the form
  var input = d3.select("#datetime").node().value;
  console.log(input);
  //clear the input value
  d3.select("#datetime").node().value = "";
  //build the filtered table with the requested date
  buildTable(input);
};

//build function to filter table by search parameters
function buildTable() {
  return 

    console.log("The filter button was clicked.");
    console.log(d3.event.target);
};


//Add event listener for filter button
d3.select("#filter-btn").on("click", handleFilter);