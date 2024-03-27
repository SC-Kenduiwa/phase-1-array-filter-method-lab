function findMatching(driversArray, query) {
    return driversArray.filter(driver => driver.toLowerCase() === query.toLowerCase());
}

// Test
//console.log(findMatching(['John', 'Jane', 'Jack', 'Jason'], 'jane')); // Output: ['Jane']//
function fuzzyMatch(driversArray, query) {
    return driversArray.filter(driver =>driver.startsWith(query) );
}
function matchName(driversArray, query) {
    return driversArray.filter(driver => driver.name === query);
}
//Test
console.log(fuzzyMatch(['John', 'Jane', 'Jack', 'Jason'], 'Ja')); // Output: ['Jane', 'Jack', 'Jason']
console.log(matchName(drivers, 'John')); //Output: [{ name: 'John', hometown: 'New York' }]