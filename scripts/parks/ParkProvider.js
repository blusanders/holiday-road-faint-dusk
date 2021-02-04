// import ".Settings.js"

<<<<<<< HEAD
// let parks = [];

// export const useParks = () => parks.slice()

// export const getParks = () => {
//     const fetchKey=
//     return fetch(fetchKey)
//     .then(response => response.json())
//     .then(parsedParks => {
//         parks = parsedParks.data;
//     })
// }
=======
let parks = [];
export const useParks = () => parks.slice()

export const getParks = () => {
    const fetchKey="https://developer.nps.gov/api/v1/parks?limit=1000&api_key=fpZ1GrXHJMbCsrBwtjjtXi5iHCz90F3HsHJ5B4c9"
    return fetch(fetchKey)
    .then(response => response.json())
    .then(parsedParks => {
        parks = parsedParks.data;
    })
}
>>>>>>> main

