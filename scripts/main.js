// import { getParks, useParks } from "./parks/ParkProvider.js"
// import {getAttractions, useAttractions} from "./attractions/AttractionsProvider.js"
// import { ParksList } from "./parks/ParksProvider.js"
import { ForecastPreview } from "./weather/WeatherPreview.js"
import {getAttractions, useAttractions} from "./attractions/AttractionsProvider.js"
import { getEateries, useEateries } from "./eateries/EateriesProvider.js";
import { AttractionSelect } from "./attractions/AttractionsSelect.js";

ForecastPreview()]
getEateries()
useEateries()
getAttractions()
AttractionSelect()

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
// getAttractions()
// ParksList()