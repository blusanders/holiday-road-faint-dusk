import ".Settings.js"

let parks = [];

export const useParks = () => parks.slice()

export const getParks = () => {
    const fetchKey=
    return fetch(fetchKey)
    .then(response => response.json())
    .then(parsedParks => {
        parks = parsedParks.data;
    })
}

