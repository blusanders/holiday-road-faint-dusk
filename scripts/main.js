
import { getEateries, useEateries } from "./eateries/EateriesProvider.js";
import { AttractionSelect } from "./attractions/AttractionsSelect.js";
import { ForecastPreview } from "./weather/WeatherPreview.js"
import {getAttractions, useAttractions} from "./attractions/AttractionsProvider.js"
import { EateriesSelect } from "./eateries/EateriesSelect.js";


EateriesSelect()
ForecastPreview()
getEateries()
useEateries()
getAttractions()
AttractionSelect()


