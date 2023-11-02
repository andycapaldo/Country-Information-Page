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
    const countryName = e.target.country.value;
    console.log(`Looking for data on ${countryName}`);

    const url = `https://restcountries.com/v3.1/name/Argentina`;

    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))


    e.target.country.value = ''
}