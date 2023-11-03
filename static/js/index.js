pageLoader();



function pageLoader(){
    console.log("Loading the page...")

    // Add the country finder when the form submits
    const findCountryForm = document.querySelector('#find-country-form')
    findCountryForm.addEventListener('submit', findCountries)
}



function findCountries(e){
    e.preventDefault();
    // Get value from Country input
    const countryName = document.getElementsByName('country')[0].value
    console.log(`Looking for data on ${countryName}`);

    const url = `https://restcountries.com/v3.1/name/${countryName}`;
    console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => displayCountries(data))
        .catch(err => console.error(err))


    e.target.country.value = '';
}


// Callback function for findCountries that will insert country data into the table
function displayCountries(data){
    let table = document.getElementById('country-table');

    // Clear out the table of any current data
    table.innerHTML = '';

    // Create country table headers
    const thead = document.createElement('thead');
    table.append(thead);
    let tr = document.createElement('tr');
    thead.append(tr);
    const tableHeadings = ['Name', 'Currencies', 'Capital', 'Languages'];
    tableHeadings.forEach( heading => {
        let th = document.createElement('th');
        th.scope = 'col';
        th.innerHTML = heading;
        tr.append(th)
    })

    let tbody = document.createElement('tbody');
    table.append(tbody);
    for (let country of data){
        let tr = document.createElement('tr');
        tbody.append(tr);

        newDataCell(tr, country.name.common)
        newDataCell(tr, Object.keys(country.currencies))
        newDataCell(tr, country.capital)
        newDataCell(tr, Object.values(country.languages))
    }
}


// Function to create a new data cell for the table
function newDataCell(tr, value){
    let td = document.createElement('td');
    td.innerHTML = value ?? '-';
    tr.append(td)
}