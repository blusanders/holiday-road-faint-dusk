import { getEateries, useEateries } from "./EateriesProvider.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".eateriesSelect")

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

// import both functions from Provider
// query select into main container
// set contentTarget to correct file
// add listner to eventHub with correct parameters of "change" with "changeEvent"
// then add if conditional for listener