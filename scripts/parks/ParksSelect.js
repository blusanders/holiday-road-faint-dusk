import { getParks, useParks } from "./ParksProvider.js";

const contentTarget = document.querySelector(".parkSelect")
const eventHub = document.querySelector(".container")

//render park list to select on DOM
const render = parksCollection => {

    contentTarget.innerHTML = `
        <select class="parkSelect" id=parkSelect>
            <option value="0">Please select a park...</option>
            ${
                parksCollection.map(parkObj => {
                    const fullName = parkObj.name
                    return `<option value="${parkObj.id}">${fullName}</option>`
                }).join("")
            }
        </select>
    `
}

//get and use list of parks
export const ParksSelect = () => {
    getParks()
    .then( () => {
        const parksArray = useParks()
        render(parksArray)
    })
}


eventHub.addEventListener("change", event => {
    if (event.target.id === "parkSelect") {
        
        eventHub.dispatchEvent(customEvent)
    }
})



// debugger
//         const customEvent = new CustomEvent("parkSelected", {
//             detail: {
//                 parkLon: "criminals",
//                 parkLat: "criminals",
//                 parkID: event.target.value
//             }
//         })

//         // Dispatch to event hub