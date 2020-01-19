// from data.js
var tableData = data;

//PART 1 - APPEND TABLE WITH DATA INTO THE HTML PAGE

//reference to the table body
var tbody = d3.select("tbody")

//loop through the data and console.log each object to check data
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

//PART 2 - LISTEN TO EVENT TO RETURN INFORMATION FOR USER SEARCH (FOR DATES 1/1/2010 TO 1/13/2010)

//reference to the button on the page with the id property set to `filter-btn`
var button = d3.select("#filter-btn");

//use the `on` function in d3 to attach an event to the handler function
button.on("click", handleClick);

//define the click handler inline
button.on("click", function() {
  console.log("The filter button was clicked.");
  console.log(d3.event.target);
});

button.on("click", function() {
  var input, filter, found, table, tr, td, i, j;
  input = document.getElementsByTagName("input");
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
});


/* Event handlers are just normal functions that can do anything you want
button.on("click", function() {
  d3.select(".giphy-me").html("<img src='https://gph.to/2Krfn0w' alt='giphy'>");
});

// Input fields can trigger a change event when new text is entered.
inputField.on("change", function() {
  var newText = d3.event.target.value;
  console.log(newText);
});

