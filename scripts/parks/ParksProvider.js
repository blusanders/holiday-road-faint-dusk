import {settings} from "./../Settings.js"

let parks = [];
let parksOne = [];

const npsFetchStringParksAll = "https://developer.nps.gov/api/v1/parks?limit=1000&api_key=" + settings.npsKey

export const useParks = () => parks.slice()
export const useParksOne = () => parksOne.slice()

export const getParks = () => {
    return fetch(npsFetchStringParksAll)
    .then(response => response.json())
    .then(parsedParks => {
        parks = parsedParks.data;
    })
}

export const getParksOne = (parkCode) => {
    const npsFetchStringParksOne = "https://developer.nps.gov/api/v1/parks?parkCode="+parkCode+"&api_key=" + settings.npsKey
    return fetch(npsFetchStringParksOne)
        .then(response => response.json())
        .then(parsedParks => {
            parksOne = parsedParks.data;
    })
}

