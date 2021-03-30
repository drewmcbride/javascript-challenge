// from data.js
var tableData = data;

// Reference for the table body
function buildTable(ufoData) {
    var tbody = d3.select("tbody");
    tbody.html("");
    ufoData.forEach((rowData) => {
        var row = tbody.append("tr");
        Object.values(rowData).forEach((value) => {
            var cells = row.append("td");
            cells.text(value);
        });
    });
};

buildTable(tableData);
// return filtered datetime
function clickButton() {
    var dateTime = d3.select("#datetime").property("value");
    var filterData = tableData.filter(record => record.datetime === dateTime);
    buildTable(filterData);
}
// on click
d3.selectAll("#filter-btn").on("click", clickButton);
