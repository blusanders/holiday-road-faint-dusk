import { getParks, useParks } from "./ParksProvider.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".parkSelect")
const contentTargetPreview = document.querySelector(".parkPreview")

//render park list to select on DOM
//only render parks with activities
const render = parksCollection => {
    let counter=0

    contentTarget.innerHTML = `
        <h3>Select A Park</h3>
        <select class="dropdown" id=parkSelect>
            <option value="0">Please select a park...</option>
            ${
                parksCollection.map(parkObj => {
                    if (parkObj.activities.length>0){
                    const fullName = parkObj.name
                    return `<option value="${parkObj.latitude}&${parkObj.longitude}&${parkObj.parkCode}&${fullName}">${fullName}</option>`
                }
                }).join("")
            }
        </select>
    `
}

//Test

//get and use list of parks
export const ParksSelect = () => {
    getParks()
    .then( () => {
        const parksArray = useParks()
        console.log(parksArray)
        render(parksArray)
    })
}

//send change event for select with lat and lon and ParkID
eventHub.addEventListener("change", event => {
    // debugger
    if (event.target.id === "parkSelect" && event.target.value!=0) {
        const [lat,lon,parkCode,parkName] = event.target.value.split("&")
        const customEvent = new CustomEvent("parkSelected", {
            detail: {
                parkLat: lat,
                parkLon: lon,
                parkCode: parkCode,
                parkName: parkName
            }
        })
        console.log(customEvent);
        eventHub.dispatchEvent(customEvent)
    }
})