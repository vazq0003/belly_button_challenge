# belly_button_challenge
This is my Module 14 Challenge submission.

Overview

For this assignment, I created an interactive dashboard to explore the Belly Button Biodiversity dataset. It offers dynamic visualizations, including a bar chart and a bubble chart, along with demographic information for each individual within the dataset toggled with a dropdown filter.

Code Structure

Data Retrieval:
The code begins by defining a constant url containing the URL to the dataset. It utilizes d3.json to get the data and logs it to the console for reference.

Initialization:
The init function is responsible for initializing the dashboard with default data.
It selects the dropdown menu element using D3.js and populates it with sample names from the dataset.
The first sample's data is used to generate the initial bar chart, bubble chart, and demographic information.

Demographic Information:
The demographicInfo function grabs metadata for the selected sample and filters it based on the chosen sample name.
The metadata is displayed on the page, with key-value pairs.
The function ensures that the metadata div is cleared before appending new information.

Bar Chart:
The barChart function creates a horizontal bar chart.
It filters sample data based on the selected sample name.
The chart displays the top 10 OTUs based on sample values.
The chart is plotted using Plotly.

Bubble Chart:
The bubbleChart function generates a bubble chart.
Sample data is filtered based on the selected sample name.
The chart visualizes OTU data using markers.
The chart uses Plotly to create the interactive bubble plot.

Sample Selection:
The changeSample function is triggered when a new sample is selected from the dropdown menu.
It updates the bar chart, bubble chart, and demographic information based on the chosen sample.
The init function is called initially to set up the default dashboard.

References:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer


references:
http://robdunnlab.com/projects/belly-button-biodiversity/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

