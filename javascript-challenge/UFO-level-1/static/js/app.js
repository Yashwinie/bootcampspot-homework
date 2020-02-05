// from data.js
var tableData = data;

//PART 1 - APPEND TABLE WITH DATA INTO THE HTML PAGE

//reference to the table body
var tbody = d3.select("tbody")/7

//loop through the data
data.forEach(function(sighting) {
    //use d3 to append a table row 'tr' for each data object
    var row = tbody.append("tr");
    //use Object.entries to console.log each data value
    Object.entries(sighting).forEach(function([key, value]) {
        //console.log(key, value);
        //use d3 to append 1 cell per value
        var cell = row.append("td");
        //use d3 to update each cell's text with values
        cell.text(value);
    });
});

tbody = ""

//PART 2 - LISTEN TO EVENT TO RETURN INFORMATION FOR USER SEARCH (FOR DATES 1/1/2010 TO 1/13/2010

//Select the filter button
var filterButton = d3.select("#filter-btn");

//Filter Button handler
filterButton.on("click", function() {
  //prevent the page from refreshing
  d3.event.preventDefault();
  //select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  //get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  //build the filtered table with the requested date
  filteredData = data.filter(a => a.datetime === inputValue);
  console.log(filteredData);

  var result = filterTable(filteredData)

  //reference to the table body
});


//here is our filter table function rthat takes in data and plots
//reference to the table body
function filterTable(data) {

  var tbody = d3.select("tbody")
  tbody.html("")
  //loop through the data
  data.forEach(function(sighting) {
  //use d3 to append a table row 'tr' for each data object
  var row = tbody.append("tr");
      //use Object.entries to console.log each data value
      Object.entries(sighting).forEach(function([key, value]) {
          //console.log(key, value);
          //use d3 to append 1 cell per value
          var cell = row.append("td");
          //use d3 to update each cell's text with values
          cell.text(value);
    });
})
};
//handleFilter();

//Add event listener for filter button
//d3.select("#filter-btn").on("click", handleFilter);