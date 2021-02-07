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
        console.log(parksArrayOne)
        render(parksArrayOne);
    })
}

const render = (renderArray) => {
    let htmlVar=""
    renderArray[0].images.forEach(x => {
        console.log(htmlVar)    
        htmlVar += `<img alt=${x.altText} style="max-width:200px;max-height:200px;" class=detailImg src="${x.url}">`
    });

    contentElement.innerHTML += `
    <br>
    <b>${renderArray[0].name}</b>
    <br>
    ${renderArray[0].description}
    <br>
    ${htmlVar}
    `
}