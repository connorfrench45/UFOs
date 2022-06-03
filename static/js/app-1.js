// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select('tbody');

// Making a function to fill a table with data
function buildTable(data) {
    
    // Clear any existing data
    tbody.html('');
    
    // Loop through each object in the data and append a new row
    data.forEach(dataRow => {
        let row = tbody.append('tr');
        
        // Fill a cell with data for each value in every row
        Object.values(dataRow).forEach((val) => {
            let cell = row.append('td');
            cell.text(val);
        });
    });
}

// Create a function that filters on a button click
function handleClick() {

    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    
    // If a date was entered, filter the data with that value
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    // Build table with the new filtered data
    buildTable(filteredData);
}

// Run handleClick on filter-btn click
d3.selectAll('#filter-btn').on('click', handleClick);

// load the full table on webpage load
buildTable(tableData);
