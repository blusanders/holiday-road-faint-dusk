// console.log("Welcome to the main module")
import "./Settings.js"
import { ParksSelect } from "./parks/ParksSelect.js"
import {getAttractions, useAttractions} from "./attractions/AttractionsProvider.js"
import { getEateries, useEateries } from "./eateries/EateriesProvider.js"
getEateries()
useEateries()
getAttractions()
ParksSelect()

