// Create title
d3.select("body")
  .append("div")
  .attr("id", "title")
  .style("padding", "0px 0px 0px 140px")
  .append("h2")
  .text("Mean Number of Days With or Without Rain in Seattle")
  .append("p")
  .text("1948 to 2017")
  .style("font-size", "medium")
  .style("padding", "0px 0px 0px 320px");


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
  x.title = "Month";
  x.fontSize = "12px";
  x.addOrderRule(["January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November",
                  "December"]);
  var y = myChart.addMeasureAxis("y", "mean_num_days");
  y.title = "Number of Days";
  y.fontSize = "12px";
  myChart.addSeries("rain", dimple.plot.bar);
  // Customize chart
  var chartLegend = myChart.addLegend(450, 10, 510, 20, "right");
  chartLegend.fontSize = "14px";
  myChart.defaultColors = [
    new dimple.color("orange"),
    new dimple.color("blue")
  ];
  myChart.draw();
}

// Load data and draw
d3.csv("data/mean_rain_days.csv", drawBarplot)
