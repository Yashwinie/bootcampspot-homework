////STEP 1: PLOTLY////

//Use the D3 library to read in `samples.json`
//store samples.json file as variable
d3.json("samples.json").then(function(data) {
    cleanData(data)
})

function cleanData(data){
    //put all your code here
    var individual = data.samples[0]
    console.log(individual.otu_ids)
}


function unpack (rows, index) {
    return rows.map(function(row) {
        return row[index];
    });
};

//Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
//use 'sample_values' as values for bar chart, 'otu_ids' as labels for bar chart, and 'otu_labels' as hovertext for the chart.



/*function buildPlots() {
    d3.json(chartData).then(function(data) {
        var individual = data.samples.id;
        var sampleValues = unpack(data.samples.sample_values, 10);
        var otuIDs = unpack(data.samples.otu_ids, 10);
        var otuLabels = unpack(data.samples.otu_labels, 10);
    });
};*/

//console.log(individual)
//buildPlots();

//Create a bubble chart that displays each sample.


//Display the sample metadata, i.e., an individual's demographic information.


//Display each key-value pair from the metadata JSON object somewhere on the page.


//Update all of the plots any time that a new sample is selected.