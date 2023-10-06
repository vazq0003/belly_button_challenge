//constant of url with belly button data
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

d3.json(url).then(function(data) {
    console.log(data);
});

//initialize the page with default
function init() {

    //select dropdown
    let dropdownMenu = d3.select("#selDataset");

    //get the sample names to populate the dropdown
    d3.json(url).then(function(data) {

        let sampleNames = data.names;
        
        sampleNames.forEach(function(name) {
            console.log(name);
            dropdownMenu.append("option").text(name).property("value", name);
        });

        let nameOne = name[0];
        console.log(nameOne)

        //take first sample and build charts
        barChart(nameOne);
        bubbleChart(nameOne);
        demographicInfo(nameOne);
    });
};

//function for demographic info
function demographicInfo(sample) {

    //get the metadata and filter
    d3.json(url).then(function(data) {
        console.log(data);
        let metadata = data.metadata;
        let filterMetadata = metadata.filter(result => result.name == sample);
        let demographicData = filterMetadata[0];

        //clear the metadata in the div
        d3.select("#sample-meadata").html("");

        let entries = Object.entries(demographicData);

        entries.forEach(([key, value]) => {
            d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);
        });

        console.log(entries);
    });
};

// function to create the bar chart
function barChart(sample) {

    //get the sample data and filter
    d3.json(url).then(function(data) {
        console.log(data);
        let samples = data.samples;
        let filterSample = samples.filter(result => result.name == sample);
        let sampleData = filterSample[0];

        //trace for the bar chart
        let trace = [{
            x: sampleData.sample_values.slice(0,10).reverse(),
            y: sampleData.otu_ids.slice(0,10).map(otu_id => `otu ${otu_id}`).reverse(),
            text: sampleData.otu_labels.slice(0,10).reverse(),
            type: "bar",
            marker: {
                color: "rgb(34,97,37)"
            },
            orientation: "h"
        }];

        //create bar plot with plotly
        Plotly.newPlot("bar",trace);
    });
};

//function for the bubble chart
function bubbleChart(sample) {

    // get the sample data and filter
    d3.json(url).then(function(data) {
        let samples = data.samples;
        let filterSample = samples.filter(result => result.name == sample);
        let sampleData = filterSample[0];
        
        // trace for the bubble chart
        let trace = [{
            x: sampleData.otu_ids,
            y: sampleData.sample_values,
            text: sampleData.otu_labels,
            mode: "markers",
            marker: {
                size: sampleData.sample_values,
                color: sampleData.otu_ids,
                colorscale: "Earth"
            }
        }];
    
        // create bubble plot with plotly
        Plotly.newPlot("bubble", trace);
    });
};

//function to update visuals when changing sample
function changeSample(sample) {
    barChart(sample);
    bubbleChart(sample);
    demographicInfo(sample);
};

init();
