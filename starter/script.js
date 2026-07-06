const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchError = document.getElementById('search-error');

function showSearchError(message) {
    if (searchError) {
        searchError.textContent = message;
    }
}

function clearSearchError() {
    if (searchError) {
        searchError.textContent = "";
    }
}

if (searchButton) {
    fetchCountryData('Canada');

    searchButton.addEventListener('click', () => {
        // Challenge 1: Create a variable named countryName that stores the search input value with extra spaces removed.

        if (countryName) {
            clearSearchError();
            fetchCountryData(countryName);
        } else {
            showSearchError("Please enter a country name first.");
        }
    });
}

async function fetchCountryData(countryName) {
    // Challenge 2: Create a variable named url that stores the countries.dev API URL for countryName.

    try {
        // Challenge 3: Create a variable named response that stores the result of waiting for fetch(url).

        // Challenge 4: Write an if statement that checks whether the response failed. If it failed, throw a new Error that includes the response status.

        // Challenge 5: Create a variable named data that stores the JSON version of the response.

        if (data && data.length > 0) {
            // Challenge 6: Create a variable named exactMatch for the matching country, or use data[0] if no exact match exists.
        
            // Challenge 7: Create a variable named imgResponse that stores the result of waiting for searchUnsplash(exactMatch.name).

            // Challenge 8: Create a variable named imgUrl that stores the full URL from the first Unsplash result.
            
            displayCountryData(exactMatch, imgUrl);
        } else {
            showSearchError("Country not found. Try another search!");
        }
    } catch (error) {
        showSearchError("Country not found. Try another search!");
    }
}

async function searchUnsplash(countryName) {
    // Ask your facilitator for the Unsplash access key before testing image search.
    const accessKey = '';
    const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(countryName + " landmark")}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Client-ID ${accessKey}`
        }
    });
    
    return await response.json();
}

function displayCountryData(country, imgUrl) {
    // Challenge 9: Create a variable for the country name.

    // Challenge 10: Create a variable for the country capital.

    // Challenge 11: Create a variable for the country region.

    // Challenge 12: Create a variable for the country currency.

    // Challenge 13: Create a variable for the formatted population.
    
    const nameElement = document.getElementById('country-name');
    const capitalElement = document.getElementById('country-capital');
    const regionElement = document.getElementById('country-region');
    const populationElement = document.getElementById('country-population');
    const currencyElement = document.getElementById('country-currency');
    const imgElement = document.getElementById('featured-img');

    // Challenge 14: Use textContent to display the country name.
    if (nameElement) nameElement.textContent = ;

    // Challenge 15: Use textContent to display the country capital.
    if (capitalElement) capitalElement.textContent = ;

    // Challenge 16: Use textContent to display the country region.
    if (regionElement) regionElement.textContent = ;

    // Challenge 17: Use textContent to display the formatted population.
    if (populationElement) populationElement.textContent = ;

    // Challenge 18: Use textContent to display the currency.
    if (currencyElement) currencyElement.textContent = ;

    // Challenge 19: Use src to display the country image.
    if (imgElement) imgElement.src = ;
}
