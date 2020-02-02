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
        //console.log(key, value);
        //use d3 to append 1 cell per value
        var cell = row.append("td");
        //use d3 to update each cell's text with values
        cell.text(value);
    });
});


//
function buildTable(input) {

    console.log("this we are interested in");
    console.log(input);
    
    var filter, found, table, tr, td, i, j;
    //input = document.getElementsByTagName("input");
    filter = input.value.toUpperCase();
    table = document.getElementById("ufo-table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
        if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
        found = true;
        }
      }
      if (found) {
        tr[i].style.display = "";
        found = false;
      } else {
        tri[i].style.display = "none";
      };
  
  
console.log("button was clickefd[=]==")  

};



//PART 2 - LISTEN TO EVENT TO RETURN INFORMATION FOR USER SEARCH (FOR DATES 1/1/2010 TO 1/13/2010

//Filter Button handler
function handleFilter() {
  //prevent the page from refreshing
  d3.event.preventDefault();
  //select the input value from the form
  var input = d3.select("#datetime").node().value;
  //console.log(input);
  //clear the input value
  d3.select("#datetime").node().value = "";
  //build the filtered table with the requested date
  console.log("test");
  buildTable(input);
};

//build function to filter table by search parameters



//Add event listener for filter button
d3.select("#filter-btn").on("click", handleFilter);