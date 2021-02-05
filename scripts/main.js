// console.log("Welcome to the main module")
import { ParksSelect } from "./parks/ParksSelect.js"
import { getEateries, useEateries } from "./eateries/EateriesProvider.js";
import { AttractionSelect } from "./attractions/AttractionsSelect.js";
import { ForecastPreview } from "./weather/WeatherPreview.js"
import {getAttractions, useAttractions} from "./attractions/AttractionsProvider.js"

ForecastPreview()
getEateries()
useEateries()
getAttractions()
AttractionSelect()
ParksSelect()
