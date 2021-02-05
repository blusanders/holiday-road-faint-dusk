
// import { ParksList } from "./parks/ParksProvider.js"
// import { getParks, useParks } from "./parks/ParkProvider.js"
// console.log("Welcome to the main module")
// import { getParks, useParks } from "./parks/ParkProvider.js"
import {getAttractions, useAttractions} from "./attractions/AttractionsProvider.js"
import { getEateries, useEateries } from "./eateries/EateriesProvider.js";
import { EaterySelect } from "./eateries/EateriesSelect.js";
import { AttractionSelect } from "./attractions/AttractionsSelect.js";
import { ForecastPreview } from "./weather/WeatherPreview.js"
getEateries()
useEateries()
getAttractions()
useAttractions()
ForecastPreview()
AttractionSelect()
// getParks()
// useParks()
EaterySelect()
// ParksList()
import {getAttractions, useAttractions} from "./attractions/AttractionsProvider.js"
import { EateriesSelect } from "./eateries/EateriesSelect.js";

// const ParkList = () => {
//     getParks()
//         .then(() => {
//             const parks = useParks()
//             parks.forEach(element => {
//                 console.log(parks.length +" "+ element.name +" "+ element.id)
//             });
//         })
// }


EateriesSelect()
ForecastPreview()
getEateries()
useEateries()
getAttractions()
AttractionSelect()


