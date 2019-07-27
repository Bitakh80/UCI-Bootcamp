//Level-2
// we need to change the HTML page

var tableDataUFO = data;

var tbody = d3.select("tbody");
function buildTable(data) {
    tbody.html("");

data.forEach((dataRow) => {
    var row = tbody.append("tr");

    Object.values(dataRow).forEach((val) => {
        var cell = row.append("td");
        cell.text(val);

    });
  });
}
// keep track of all the filters and creat list of object
var filters = {};
// update filters anf creat new variables
function updateFilters() {
    var changedElement = d3.select(this).select("input");
    var elementValue = changedElement.property("value");
    var filterId = changedElement.attr("id");
// add the value to the filter list
    if (elementValue) {
        filters[filterId] = elementValue;
    }
    else {
        delete filters[filterId];
    }
    filterTable();
}

function filterTable() {
    let filteredDataUFO = tableDataUFO;

    Object.defineProperties(filters).forEach([key, value]) => {
        filteredDataUFO = filteredDataUFO.filter(row => row[key] === value);
    });
    buildTable(filteredDataUFO);
}
// change the code for event listner 
d3.selectAll("#filter").on("change", updateFilters);
buildTable(tableDataUFO);
