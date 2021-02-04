// set eateries to an array
// export a function for useEateries
// export a function for getEateries
// grab the fetch url and return it in "getEateries"
// use ".then" with response and ".then" twice
let eateries = []

export const useEateries = () => {
    return eateries.slice()
}

export const getEateries = () => {
    return fetch ("http://holidayroad.nss.team/eateries")
    .then(response => response.json())
    .then(eateriesArray => {
        eateries = eateriesArray
        console.log(eateries)
    })
 
}