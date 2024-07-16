// Function to build the metadata panel
function buildMetadataPanel(sampleID) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    // Get the metadata field from the dataset
    let metadata = data.metadata;
    // Filter the metadata for the object with the desired sample ID
    let filteredMetadata = metadata.filter(sample => sample.id == sampleID)[0];
    // Select the panel with id `#sample-metadata`
    let metadataPanel = d3.select("#sample-metadata");

    // Clear any existing metadata
    metadataPanel.html("");

    // Append new tags for each key-value pair in the filtered metadata
    Object.entries(filteredMetadata).forEach(([key, value]) => {
      metadataPanel.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });
  });
}

// Function to build the charts
function buildCharts(sampleID) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    // Get the samples field from the dataset
    let samples = data.samples;
    // Filter the samples for the object with the desired sample ID
    let filteredSample = samples.filter(sample => sample.id == sampleID)[0];

    // Get the OTU IDs, OTU labels, and sample values
    let otuIDs = filteredSample.otu_ids;
    let otuLabels = filteredSample.otu_labels;
    let sampleValues = filteredSample.sample_values;

    // Build a Bubble Chart
    let bubbleChartLayout = {
      title: "Bacteria Cultures Per Sample",
      margin: { t: 0 },
      hovermode: "closest",
      xaxis: { title: "OTU ID" },
      margin: { t: 30 }
    };
    let bubbleChartData = [{
      x: otuIDs,
      y: sampleValues,
      text: otuLabels,
      mode: "markers",
      marker: {
        size: sampleValues,
        color: otuIDs,
        colorscale: "Earth"
      }
    }];

    // Render the Bubble Chart
    Plotly.newPlot("bubble", bubbleChartData, bubbleChartLayout);

    // Build a Bar Chart
    let barChartData = [{
      y: otuIDs.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
      x: sampleValues.slice(0, 10).reverse(),
      text: otuLabels.slice(0, 10).reverse(),
      type: "bar",
      orientation: "h"
    }];
    let barChartLayout = {
      title: "Top 10 Bacteria Cultures Found",
      margin: { t: 30, l: 150 }
    };

    // Render the Bar Chart
    Plotly.newPlot("bar", barChartData, barChartLayout);
  });
}

// Function to initialize the dashboard
function initializeDashboard() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    // Get the sample names (IDs) from the dataset
    let sampleIDs = data.names;

    // Select the dropdown element with id `#selDataset`
    let dropdownMenu = d3.select("#selDataset");

    // Populate the dropdown menu with sample IDs
    sampleIDs.forEach((id) => {
      dropdownMenu
        .append("option")
        .text(id)
        .property("value", id);
    });

    // Build the initial charts and metadata panel with the first sample
    let firstSampleID = sampleIDs[0];
    buildCharts(firstSampleID);
    buildMetadataPanel(firstSampleID);
  });
}

// Function to handle the change in selected sample
function optionChanged(newSampleID) {
  // Build charts and metadata panel with the selected sample
  buildCharts(newSampleID);
  buildMetadataPanel(newSampleID);
}

// Initialize the dashboard on page load
initializeDashboard();
