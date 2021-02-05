import { getEateries, useEateries } from "./EateriesProvider.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".eaterySelect")

eventHub.addEventListener("change", changeEvent => {
    if(changeEvent.target.id === "eateriesSelected") {
        const selectedEatery = changeEvent.target.value
        const eateriesSelectedCustomEvent = new CustomEvent("eateriesSelected", {
            detail:{
                selectedEateryName: selectedEatery
            }
        })
        eventHub.dispatchEvent(eateriesSelectedCustomEvent)
    }
})

export const EaterySelect = () => {
    getEateries()
    .then(() => {
        const eateries = useEateries()
        render(eateries)
       })
}

const render = eateriesCollection => {
        contentTarget.innerHTML =  `
        <h3>Select An Eatery</h3>
        <select class="dropdown" class="eaterySelect">
            <option value="0">Please select an eatery...</option>
            ${eateriesCollection.map(eateries => `<option value="${eateries.id}">${eateries.businessName}</option>`).join("")
        }
        </select>
    `
}

// import both functions from Provider
// query select into main container
// set contentTarget to correct file
// add listner to eventHub with correct parameters of "change" with "changeEvent"
// then add if conditional for listener