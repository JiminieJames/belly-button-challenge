Belly Button Biodiversity Dashboard
This project creates an interactive dashboard to explore the Belly Button Biodiversity dataset. The dashboard visualizes bacterial data for various test subjects, allowing users to examine the microbial species found in human navels.

Overview
The dashboard is built using D3.js and Plotly.js to provide interactive visualizations. It includes:

A dropdown menu to select different test subjects.
A demographic information panel to display metadata for the selected subject.
A bar chart to show the top 10 bacterial species (OTUs) found in the selected subject.
A bubble chart to display all bacterial species found in the selected subject.
Features
Bar Chart
Initializes without error: The bar chart loads correctly when the page is first opened.
Updates with new selection: The bar chart updates to reflect the top 10 bacterial species when a new test subject is selected.
Displays top 10 sample values: The bar chart shows the 10 most prevalent bacterial species.
Uses OTU IDs as labels: The y-axis labels are the OTU IDs.
Uses OTU labels as tooltips: Hovering over the bars displays the OTU labels.
Bubble Chart
Initializes without error: The bubble chart loads correctly when the page is first opened.
Updates with new selection: The bubble chart updates to reflect all bacterial species when a new test subject is selected.
Uses OTU IDs for x values: The x-axis represents the OTU IDs.
Uses OTU IDs for marker colors: The colors of the bubbles correspond to OTU IDs.
Uses sample values for y values: The y-axis represents the sample values.
Uses sample values for marker size: The sizes of the bubbles represent the sample values.
Uses OTU labels for text values: Hovering over the bubbles displays the OTU labels.
Project Structure
HTML (index.html)
The HTML file sets up the structure of the dashboard with Bootstrap for styling and includes:

A header section with the title and description.
A dropdown menu for selecting test subjects.
A demographic info panel to display metadata.
Div elements for the bar chart and bubble chart.
JavaScript (app.js)
The JavaScript file contains the logic for fetching data, building visualizations, and updating the dashboard:

Data Fetching: Uses D3.js to fetch JSON data from the provided endpoint.
Building Metadata Panel: Displays the metadata for the selected test subject.
Building Charts: Creates and updates the bar chart and bubble chart based on the selected test subject.
Event Handling: Updates the dashboard when a new test subject is selected from the dropdown menu.
JSON Data (samples.json)
The JSON file contains the Belly Button Biodiversity dataset, including:

names: Array of test subject IDs.
metadata: Array of metadata objects for each test subject.
samples: Array of sample data objects for each test subject, containing OTU IDs, labels, and values.

Technologies Used
D3.js: For fetching data and manipulating the DOM.
Plotly.js: For creating interactive charts.
Bootstrap: For responsive and modern design.
HTML: For structuring the web page.
JavaScript: For implementing the interactive functionality.
