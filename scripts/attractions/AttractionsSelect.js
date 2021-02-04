import { useAttractions, getAttractions} from "./AttractionsProvider.js"

const eventHub = document.querySelector(".container")

const contentTarget = document.querySelector(".attractionSelect")

eventHub.addEventListener("change", changeEvent =>{
    if (changeEvent.target.id === "attractionSelect"){
        const customEvent = new CustomEvent("attractionChosen", {
            detail:{
                chosenAttraction: changeEvent.target.value
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})






const render = (attractionsCollection) => {

    contentTarget.innerHTML = `
        <h3>Select a Bizarre Attraction</h3>
        <select class="dropdown" id="attractionSelect">
            <option value="0">Please select a crime...</option>
            ${attractionsCollection.map(attractionsObject =>`<option value="${attractionsObject.id}">${attractions.name}</option>`).join("")
            }
        </select>
    `
}