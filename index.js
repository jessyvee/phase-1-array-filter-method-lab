// Code your solution here

function findMatching(drivers, name) {
    return drivers.filter(driver => {
    return driver.toLowerCase() === name.toLowerCase();
    });
    }
    
    // example usage
    const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
    console.log(findMatching(drivers, 'bobby')); // ['Bobby', 'Bobby']
    console.log(findMatching(drivers, 'SaLlY')); // ['Sally']
    console.log(findMatching(drivers, 'jim')); // []

    function fuzzyMatch(drivers, queryString) {
        return drivers.filter(driver => driver.startsWith(queryString));
        }
        
        // Example usage:
        const driver = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
        console.log(fuzzyMatch(drivers, 'Bo'));
        // Output: ['Bobby', 'Bobby']

        function matchName(drivers, string) {
            return drivers.filter(driver => driver.name === string);
            }
            
            // Example usage:
            matchName(drivers, 'Bobby');
            // Returns:
            // [{ name: 'Bobby', hometown: 'Pittsburgh' }, { name: 'Bobby', hometown: 'Tampa Bay' }]