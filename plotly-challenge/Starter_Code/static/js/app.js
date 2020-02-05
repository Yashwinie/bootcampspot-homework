////STEP 1: PLOTLY////

//Use the D3 library to read in `samples.json`
//store samples.json file as variable
var url = "samples.json"

//Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
//use 'sample_values' as values for bar chart, 'otu_ids' as labels for bar chart, and 'otu_labels' as hovertext for the chart.

//make a function to have all teh variables with information we need to build the chart
function horizontalChart(sample) {
    var chartData = `/samples/${sample}`;
    d3.json(chartData).then(function(data) {
        var x_axis = data.otu_ids.slice(0,10);
        var y_axis = data.sample_values.slice(0,10);
        var hover_text = data.otu_labels.slice(0,10);
    });
};

var trace1 = {
    x: x_axis,
    y: y_axis,
    text: hover_text,
    type: "bar"
};

var data =[trace1];

var layout = {
    title: "Top 10 OTUs found in individual",
    xaxis: { title: "OTU ID"},
    yaxis: { title: "Sample Values"}
};

Plotly.newPlot("plot", data, layout);


//Create a bubble chart that displays each sample.


//Display the sample metadata, i.e., an individual's demographic information.


//Display each key-value pair from the metadata JSON object somewhere on the page.


//Update all of the plots any time that a new sample is selected.