// Create title
d3.select("body")
  .append("h2")
  .text("Mean Number of Days With or Without Rain in Seattle");

// Create svg element that will contain chart
var width = 1000;
var height = 600;

var svg = d3.select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("class", "barplot");

// Callback function to draw the barplot
function drawBarplot(csvData) {
  debugger;

  // Dimple.js chart code
  var myChart = new dimple.chart(svg, csvData);
  myChart.setBounds(60, 30, width - 100, height - 100)
  var x = myChart.addCategoryAxis("x", "month");
  x.addOrderRule(["January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November",
                  "December"]);
  myChart.addMeasureAxis("y", "mean_num_days");
  myChart.addSeries("rain", dimple.plot.bar);
  myChart.addLegend(60, 10, 510, 20, "right");
  myChart.draw();
}

// Load data and draw
d3.csv("data/mean_rain_days.csv", drawBarplot)
