const fetch = require('node-fetch');

async function getUniversityNames() {
    const response = await fetch('https://api.data.gov/ed/collegescorecard/v1/schools?school.degrees_awarded.predominant=3&_fields=school.name&per_page=100&api_key=Vr8dYpXDu80nboScUJRd307w2Z31nHKyDPLG3Lt3');
    const data = await response.json();
    
    const universityNames = data.results.map(result => result['school.name']);
    
    return universityNames;
}

// Example usage:
getUniversityNames()
    .then(names => console.log(names))
    .catch(error => console.error('Error fetching university names:', error));
