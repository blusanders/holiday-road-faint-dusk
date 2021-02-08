import {settings} from "./../Settings.js"

let itins = [];

export const useItin = () => itin.slice()

export const getItin = () => {
    return fetch("http://localhost:8088/itineraries")
    .then(response => response.json())
    .then(parsedItins => {
        itins = parsedItins.data;
    })
}

export const saveItin = itin => {
    // debugger
    return fetch('http://localhost:8088/itineraries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(itin)
    })
    .then(itinList)
}

export const deleteItin = (id) => {
    return fetch('http://localhost:8088/itineraries'+${id}, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(itinList)
}

//fetches entry, uses a slice of the entry array, renders to DOM
cont itinList = () => {
    getItin()
    .then(() => {
        const itinArray = useItin()
        render(itinArray)
    })
}

//renders entry list to DOM 
const render = itinArray => {

    let htmlRep = ""

    entryArray.forEach(entryOjb => {
        htmlRep += JournalEntryComponent(entryOjb);
    });

    contentElement.innerHTML = htmlRep;
}

