const eventHub = document.querySelector(".container")
const parksTarget = document.querySelector(".parkSelect")
const eateryTarget = document.querySelector(".eaterySelect")
const attractionTarget = document.querySelector(".attractionSelect")

eventHub.addEventListener("click", event => {
    if (parksTarget.value !== 0 && eateryTarget.value !== 0 && eateryTarget.value !== 0) {
        const customEvent = new CustomEvent("itineraryCreated")
        console.log("we are ready to save")
        eventHub.dispatchEvent(customEvent)
    }
})

