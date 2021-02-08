// console.log("Welcome to the main module")
import { ParksSelect } from "./parks/ParksSelect.js"
import {getAttractions, useAttractions} from "./attractions/AttractionsProvider.js"
import { getEateries, useEateries } from "./eateries/EateriesProvider.js";
import { EaterySelect } from "./eateries/EateriesSelect.js";
import { AttractionSelect } from "./attractions/AttractionsSelect.js";
import { ForecastPreview } from "./weather/WeatherPreview.js"
import "./parks/ParksPreview.js"
import "./eateries/EateriesPreview.js";
import "./attractions/AttractionPreview.js"

getEateries()
useEateries()
getAttractions()
useAttractions()
ForecastPreview()
AttractionSelect()
EaterySelect()
ParksSelect()