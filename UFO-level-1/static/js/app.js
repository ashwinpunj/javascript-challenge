// from data.js
var tableData = data;

// define tbody
var tbody = d3.select("tbody");

// append a row to tbody for every value in data
data.forEach(function(UFO) {
    var row = tbody.append("tr");
    Object.entries(UFO).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});

// define button
var button = d3.select("#filter-btn");

// define form
var form = d3.select("#form");

// define event handlers 
button.on("click", UFO);
form.on("submit", UFO);

// finish the event handler function for the form
function UFO() {

    // prevent page from refreshing
    d3.event.preventDefault();
    
    // select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // retrieve value property of the input element
    var inputValue = inputElement.property("value");
   
    // set input value in line with datetime
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    
    // check new data
    console.log(filteredData);
    
    // make tbody blank
    tbody.html("");

    // rerun through UFO function again with filteredData
    filteredData.forEach(function(UFO) {
        var row = tbody.append("tr");
        Object.entries(UFO).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};