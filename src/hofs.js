/***
 * Selected countries with populations in millions
 ***/

const countries = [
    { name: 'Brazil', capital: 'Brasília', population: 216 },
    { name: 'Cuba', capital: 'Havana', population: 11 },
    { name: 'Germany', capital: 'Berlin', population: 83 },
    { name: 'Jamaica', capital: 'Kingston', population: 3 },
    { name: 'Malaysia', capital: 'Kuala Lumpur', population: 34 },
    { name: 'Mexico', capital: 'Mexico City', population: 128 },
    { name: 'Nigeria', capital: 'Abuja', population: 224 },
    { name: 'Poland', capital: 'Warsaw', population: 41 },
    { name: 'Portugal', capital: 'Lisbon', population: 10 },
    { name: 'South Africa', capital: 'Pretoria', population: 60 },
    { name: 'Spain', capital: 'Madrid', population: 48 },
    { name: 'United States', capital: 'Washington, DC', population: 340 },
    { name: 'Vietnam', capital: 'Hanoi', population: 99 }
];


 
/***
 * #1
 * Return the sum of the populations of the first 'count' countries in the array above.
 ***/
// 1- Firstly, get the first count - the sub-array
// 2- Secondly, add the populations of those countries.

function sumSomePops(count) {
   let selectedCountries = countries.slice(0, count); //1
   let sum = selectedCountries.reduce((acc, country) => acc + country.population, 0); //

   return sum;
}


/***
 * #2
 * Find all countries with populations of at least 100 million.
 * Return an array of strings in this format:
 * "Brazil has a population of 216 million"
 ***/

// Firstly, use filter to get only the countries wihth >= 100m people
// Secondly, use map to convert country to strings.
function bigCountries() {
    let largeCountries = countries.filter(c => c.population >= 100);
    let strings = largeCountries.map(c => `${c.name} has a population of ${c.population} million.`);
    return strings;  
}

// the array return the 4 countries twice instead of once so it failed.



/***
 * ¡Bonus!
 * Copy/paste the lines from your bigCountries() solution into bigCountriesSorted().
 * Can you sort the countries from highest to lowest population?
 * Hint: Do a web search for: javascript sort
 ***/

// The sort() method sorts and returns the elements of an array in ascendinf order
// converted into strings

function bigCountriesSorted() {
    let largeCountries = countries.filter(c => c.population >= 100);
    largeCountries.sort((a, b) => b.population - a.population);
    let strings = largeCountries.map(c => `${c.name} has a population of ${c.population} million`);

    return strings;
}



module.exports = {
    bigCountries,
    bigCountriesSorted,
    sumSomePops
}