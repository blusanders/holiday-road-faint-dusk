import { getParksOne, useParksOne } from "./ParksProvider.js";
import { ParksSelect } from "./ParksSelect.js";

const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".parkPreview");

// Listen for the custom event if Park was selected
eventHub.addEventListener("parkSelected", event => {
    // debugger
    contentElement.innerHTML=event.detail.parkName;
    contentElement.innerHTML += renderButton(event.detail.parkCode);
})

const renderButton = (parkCode) => {
    return`
    <button value="${parkCode}" id=detailsButton>Details</button>
    `
}

eventHub.addEventListener("click", event => {
    if (event.target.id === "detailsButton") {
        // debugger
        console.log(event.target.value);
        getParkDetails(event.target.value);
    }
        // eventHub.dispatchEvent(customEvent)
})

//get and use list of parks
export const getParkDetails = (parkCode) => {
    getParksOne(parkCode)       
    .then(() => {
        const parksArrayOne = useParksOne();
        render(parksArrayOne);
    })
}

const render = (renderArray) => {
    contentElement.innerHTML += "<br>"+renderArray[0].description
}