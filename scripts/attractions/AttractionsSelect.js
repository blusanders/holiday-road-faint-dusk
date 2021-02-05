import { useAttractions, getAttractions} from "./AttractionsProvider.js"

const eventHub = document.querySelector(".container")

const contentTarget = document.querySelector(".itinerarySelect__activities")

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

export const AttractionSelect = () => {
    getAttractions()
        .then( () => {
            const attractions = useAttractions()
            render(attractions)
        })
}





const render = (attractionsCollection) => {

    contentTarget.innerHTML = `
        <h3>Select a Bizarre Attraction</h3>
        <select class="dropdown" id="attractionSelect">
            <option value="0">Please select an attraction...</option>
            ${attractionsCollection.map(attractionsObject =>`<option value="${attractionsObject.id}">${attractionsObject.name}</option>`).join("")
            }
        </select>
    `
}