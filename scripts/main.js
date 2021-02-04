
// console.log("Welcome to the main module")

import { ParksList } from "./parks/ParksProvider.js"
import {getAttractions, useAttractions} from "./attractions/AttractionsProvider.js"
import { getEateries, useEateries } from "./eateries/EateriesProvider.js";
getEateries()
useEateries()
getAttractions()
ParksList()

