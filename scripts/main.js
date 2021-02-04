console.log("Welcome to the main module")

import { getParks, useParks } from "./parks/ParkProvider.js"

const ParkList = () => {
    getParks()
        .then(() => {
            const parks = useParks()
            parks.forEach(element => {
                console.log(parks.length +" "+ element.name +" "+ element.id)
            });
        })
}

ParkList()
