// from data.js
var tableData = data;

// Reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo data from data.js
console.log(data);

// Append data to table
data.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Select the submit button
var submit = d3.select('#filter-btn');

submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    var inputElementCity = d3.select("#city");
    var inputElementState = d3.select("#state");
    var inputElementCountry = d3.select("#country");
    var inputElementShape = d3.select("#shape");

    // Get the value property of the input elements
    var inputValue = inputElement.property("value");
    var inputValueCity = inputElementCity.property("value");
    var inputValueState = inputElementState.property("value");
    var inputValueCountry = inputElementCountry.property("value");
    var inputValueShape = inputElementShape.property("value");

    // console.log(tableData);

  filteredData = tableData  
  if(inputValueCity){var filteredData = filteredData.filter(city => city.city === inputValueCity.trim())}
  if(inputValue){var filteredData = filteredData.filter(date => date.datetime === inputValue)}
  if(inputValueState){var filteredData = filteredData.filter(state => state.state === inputValueState.trim())}
  if(inputValueCountry){var filteredData = filteredData.filter(country => country.country === inputValueCountry.trim())}
  if(inputValueShape){var filteredData = filteredData.filter(shape => shape.shape === inputValueShape.trim())}
  ;
    console.log(filteredData);
    
    tbody.html("")

    filteredData.forEach((ufoReport) => {
      var row = tbody.append("tr");
      Object.entries(ufoReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  });  
