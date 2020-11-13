// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function displayData(data) {
    tbody.text("")
    data.forEach(function (ufo_sighting) {
        var row = tbody.append("tr");
        Object.entries(ufo_sighting).forEach(function ([key, value]) {
            var cell = row.append("td").text(value);
        });
    })
}

displayData(tableData)

var inputField = d3.select("#datetime");
var button = d3.select("filter-btn");

function clickSelect() {
    console.log(inputField.property("value"));
    var newTable = tableData.filter(ufo_sighting =>
        ufo_sighting.datetime == inputField.property("value"))
    displayData(newTable);
}

inputField.on("change", clickSelect);