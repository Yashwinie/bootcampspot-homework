////STEP 1: PLOTLY////

//Use the D3 library to read in `samples.json`
//store samples.json file as variable
var url = "samples.json"
//function to read json metadata (need to get metadata first (since it's the first level/index) to then drill down to specific parts of samples)
function buildData(sample) {
d3.json(url).then(function(data) {
    var metadata = `/metadata/${sample}`;
    d3.json(metaData).then(function(sample) {
        //the information we have is going in the #sample-metadata id area of the html file
        var sampleData = d3.select(`#sample-metadata`);
        //clear existing metadata that might be in the #sample-metadata id area so that we can start with a clean slate
        sampleData.html("");
        //using d3 to append nwnew tags for values and keys in the metadata from the json file
        Object.entries(sample).forEach(function([key, value]) {
            var row = sampleData.append("p");
            row.text (`${key}:${value}`)
        });
    });
});
};

//Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
//use 'sample_values' as values for bar chart, 'otu_ids' as labels for bar chart, and 'otu_labels' as hovertext for the chart.

//make a function to have all teh variables with information we need to build the chart
function horizontalChart(sample) {
    var chartData = `/samples/${sample}`;
    d3.json(chartData).then(function(data) {
        var x_axis = data.otu_ids;
        var y_axis = data.sample_values;
        var text = data.oti_labels;
    });
};

var trace1 = {
    x: [x_axis],
    y: [y_axis],
    type: "bar"
};

var data =[trace1];

var layout = {
    title: "Top 10 OTUs found in individual",
    xaxis: { title: "OTU ID"},
    yaxis: { title: "Sample Values"}
};

Plotly.newPlot("plot", data, layout);