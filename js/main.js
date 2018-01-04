// Create title
d3.select("body")
  .append("h2")
  .text("Mean Number of Days With or Without Rain in Seattle");

// Create svg element that will contain chart
var width = 800;
var height = 600;

var svg = d3.select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("class", "barplot");

// Callback function to draw the barplot
function drawBarplot(csvData) {}

// Load data and draw
// d3.csv(csv file path, drawBarplot)
