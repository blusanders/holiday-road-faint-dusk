import { getParks, useParks } from "./ParksProvider.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".parkSelect")

//render park list to select on DOM
const render = parksCollection => {

    contentTarget.innerHTML = `
        <select class="dropdown" id=parkSelect>
            <option value="0">Please select a park...</option>
            ${
                parksCollection.map(parkObj => {
                    const fullName = parkObj.name
                    return `<option value="${parkObj.latitude}&${parkObj.longitude}&${parkObj.id}">${fullName}</option>`
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
        render(parksArray)
    })
}

//send change event for select with lat and lon and ParkID
eventHub.addEventListener("change", event => {
    if (event.target.id === "parkSelect" && event.target.value!=0) {
        const [lat,lon,parkID] = event.target.value.split("&")
        const customEvent = new CustomEvent("parkSelected", {
            detail: {
                parkLon: lat,
                parkLat: lon,
                parkID: parkID
            }
        })
        console.log(customEvent);
        eventHub.dispatchEvent(customEvent)
    }
})