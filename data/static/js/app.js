// Loading sample.js data through its given URL by using d3.json()
let url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json'

//To double check d3.json() worked.
// d3.json(url).then(data => console.log(data)) 

d3.json(url).then(function(data) {
    let samples = data.samples
    let sampleNames = data.name
    let sampleMetadata = data.metadata
    let sampleNumber = 940

    let resultsArray = samples.filter(sampleObj => sampleObj.id == sampleNumber)

    let firstResult = resultsArray[0]

    let otu_labels = firstResult.otu_labels;
    let otu_ids = firstResult.otu_ids;
    let sample_values = firstResult.sample_values;

    let barData = [
        {
            x: sample_values.slice(0, 10).reverse(),
            y: otu_ids.slice(0,10).reverse(),
            text: otu_labels.slice(0, 10),
            type: 'bar',
            orientation: 'h'
        }
    ]

    let barLayout = {
        title: "Bar Graph",
    }

    Plotly.newPlot("bar", barData, barLayout)

})

