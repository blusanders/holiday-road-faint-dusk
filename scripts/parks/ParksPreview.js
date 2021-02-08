import { getParksOne, useParksOne } from "./ParksProvider.js";
import { ParksSelect } from "./ParksSelect.js";

const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".parkPreview");
const modalTarget = document.querySelector(".parkModal");

// Listen for the custom event if Park was selected
eventHub.addEventListener("parkSelected", event => {
    // if parks is selected render name and detail button on DOM
    contentElement.innerHTML=`
    <h3>${event.detail.parkName}</h3>
    ${renderButton(event.detail.parkCode)}
    `
})

const renderButton = (parkCode) => {
    return`
    <button value="${parkCode}" id=detailsButton>Details</button>
    `
}

eventHub.addEventListener("click", event => {
    //if details is clicked, render details on DOM
    if (event.target.id === "detailsButton") {
        getParkDetails(event.target.value);
    }
        // eventHub.dispatchEvent(customEvent)
})

//get and use ONE park
export const getParkDetails = (parkCode) => {
    getParksOne(parkCode)       
    .then(() => {
        const parksArrayOne = useParksOne();
        console.log(parksArrayOne);
        render(parksArrayOne);
    })
}

//render park modal
const render = (renderArray) => {
    let htmlVar=""
    renderArray[0].images.forEach(x => {
        console.log(htmlVar)
            htmlVar += `<img alt=${x.altText} style="width:150px;height:150px;" class=detailImg src="${x.url}">`
    });

    modalTarget.innerHTML = `
    <div class=model--parent>
    <div class=model--content>
    <div class=modalName><h3>${renderArray[0].name}</div></b></div>
    <div class=modalDesc>${renderArray[0].description}</div>
    <div class=modalImg>${htmlVar}</div>
    </div>
    </div>
    `
}