import {settings} from "./../Settings.js"

let parks = [];

const npsFetchString = "https://developer.nps.gov/api/v1/parks?limit=1000&api_key=" + settings.npsKey

export const useParks = () => parks.slice()

export const getParks = () => {
    return fetch(npsFetchString)
    .then(response => response.json())
    .then(parsedParks => {
        parks = parsedParks.data;
    })
}

