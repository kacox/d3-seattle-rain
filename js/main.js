// Create title
d3.select("body")
  .append("div")
  .attr("id", "title")
  .style("padding", "0px 0px 0px 20px")
  .append("h1")
  .text("Mean Number of Days With or Without Rain in Seattle");

// Subtitle for context
d3.select("div")
  .append("p")
  .text("Based on data ranging from 1948 to 2017, summer months typically" +
        " experience less rain than winter months.");

// Create svg element that will contain chart
var width = 1000;
var height = 600;

var svg = d3.select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("class", "barplot");

// Create footer with addn'l information
d3.select("body")
  .append("div")
  .attr("id", "footer")
  .attr("width", width)
  .append("p")
  .style("font-size", "small")
  .text("**original dataset contains weather information for 25,551 " +
        "consecutive days spanning from 1948 to 2017")
  .append("p")
  .style("font-size", "small")
  .text("**each day in the original dataset has only one data point")
  .append("p")
  .style("font-size", "small")
  .text("**a rain day is any day with precipitation more than 0.00 inches");


// Callback function to draw the barplot
function drawBarplot(csvData) {

  // Dimple.js chart code
  var myChart = new dimple.chart(svg, csvData);
  myChart.setBounds(60, 30, width - 100, height - 100)

  // Create x axis
  var x = myChart.addCategoryAxis("x", ["month", "rain"]);
  x.title = "Month";
  x.fontSize = "12px";
  x.addOrderRule(["January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November",
                  "December"]);

  // Create y axis
  var y = myChart.addMeasureAxis("y", "mean_num_days");
  y.title = "Number of Days";
  y.fontSize = "12px";

  // Tie 2 or more axes together and render a graphic
  var chartSeries = myChart.addSeries("rain", dimple.plot.bar);

  // Override default mouse on and mouse off behavior
  chartSeries.addEventHandler("mouseover", mouseOn);
  chartSeries.addEventHandler("mouseleave", mouseOff);

  // Customize chart
  chartSeries.barGap = 0.3;
  var chartLegend = myChart.addLegend(450, 10, 510, 20, "right");
  chartLegend.fontSize = "14px";
  myChart.defaultColors = [
    new dimple.color("orange"),
    new dimple.color("blue")
  ];

  // Draw
  myChart.draw();

  // Custom event handlers (functions)
  function mouseOn(evn) {

    // Highlight selected bar
    evn.selectedShape.attr("fill-opacity", "0.6")
                      .attr("stroke-opacity", "0.6");

    // Get max precipitation and date for a given month
    function filterCriteria(d) {
      if (d.month === evn.xValue) {
        if (d.rain == evn.seriesValue) {
          return d;
        }
      }
    }

    var eventData = csvData.filter(filterCriteria);


    // Get location of event
    var xEvent = parseFloat(evn.selectedShape.attr("x"));
    var yEvent = parseFloat(evn.selectedShape.attr("y"));

    // Create infobox
    infobox = svg.append("g");

    // Create box for infobox
    infobox.append("rect")
          .attr("x", xEvent - 40)
          .attr("y", yEvent - 28)
          .attr("width", 114)
          .attr("height", 24)
          .attr("rx", 5)
          .attr("ry", 5)
          .style("fill", "white")
          .style("stroke", "black")
          .style("stroke-width", 1.5);

    // Create text for infobox
    infobox.append("text")
            .attr("x", xEvent - 36)
            .attr("y", yEvent - 10)
            .text(eventData[0].max_date + "; " + eventData[0].max_prcp + " in")
            .style("font-size", "16px");
  }

  // Mouse off behavior
  function mouseOff(evn2) {
    // Remove bar highlight
    evn2.selectedShape.attr("fill-opacity", "1.0")
                      .attr("stroke-opacity", "1.0");

    // Clear info above bar
    if (infobox !== null) {
      infobox.remove();
    }
  }

}

// MAIN: Load data and draw
d3.csv("data/mean_rain_days.csv", drawBarplot)
