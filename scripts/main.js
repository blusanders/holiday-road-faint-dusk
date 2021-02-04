// console.log("Welcome to the main module")
import { getParks, useParks } from "./parks/ParkProvider.js"
import {getAttractions, useAttractions} from "./attractions/AttractionsProvider.js"
import { getEateries, useEateries } from "./eateries/EateriesProvider.js";
getEateries()
useEateries()
getAttractions()

// const ParkList = () => {
//     getParks()
//         .then(() => {
//             const parks = useParks()
//             parks.forEach(element => {
//                 console.log(parks.length +" "+ element.name +" "+ element.id)
//             });
//         })
// }

// ParkList()








