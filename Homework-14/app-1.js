// from data.js

//level 1
// Build the table
var tableDataUFO = data;

// YOUR CODE HERE!
// select the tbody element 
var tbody = d3.select("tbody");
// Build the table and clear the table from all the existing data from that table
function buildTable(data) {
    tbody.html("");
// looping from each data and append the row
data.forEach((dataRow) => {
    var row = tbody.append("tr");
// each value as data element
    Object.values(dataRow).forEach((val) => {
        var cell = row.append("td");
        cell.text(val);

    });
  });
}

 buildTable(tableDataUFO);



// whenthe filter buttom is click is going to call that function
function handleClick() {
    d3.event.preventDefault();

    var data = d3.select("#datetime").property("value");
    let filteredDataUFO = tableDataUFO;
    if (data) {
// filter the Data
    filteredDataUFO = filteredDataUFO.filter(row => row.datetime === date);
}
 buildTable(filteredDataUFO);
}
d3.selectAll("#filter-btn").on("click", handleClick);

// build the table whe the page is loaded
buildTable(tableDataUFO);



