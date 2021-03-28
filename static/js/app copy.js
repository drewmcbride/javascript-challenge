// from data.js
var tableData = data;

// Reference for the table body
var tbody = d3.select("tbody");

tableData.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
    //   console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runTablefilter);
form.on("submit",runTablefilter);

// Complete the event handler function for the form
function runTablefilter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(record => record.datetime === inputValue);

    console.log(filteredData);

    // filteredData.forEach(function(filteredufoReport) {
    //     // console.log(ufoReport);
    //     var row = tbody.append("tr");
    //     Object.entries(filteredufoReport).forEach(function([key, value]) {
    //     console.log(key, value);
    //     // Append a cell to the row for each value
    //     // in the weather report object
    //     var cell = row.append("td");
    //     cell.text(value);
    //     });
    // });
};