const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".attractionPreview")
const modalTarget = document.querySelector(".attractionModal")

eventHub.addEventListener("attractionChosen", event =>{
    console.log("do it work")
    let [attractionId, attractionName] = event.detail.chosenAttraction.split("--")
    contentTarget.innerHTML = `
    <h3>${attractionName}</h3>
    <button id="attractionDetailButton" value="${attractionId}">Details</button>
    `
})

eventHub.addEventListener("click", clickEvent =>  {
    if(clickEvent.target.id === "attractionDetailButton") {
        renderDetail(clickEvent.target.value)
    }
})

let attractions = []

const renderDetail = (tacoBell) => {
    return fetch("http://holidayroad.nss.team/bizarreries/"+tacoBell)
        .then(response => response.json())
        .then(parsedAttractions =>{
            attractions = parsedAttractions

            modalTarget.innerHTML = `
            <div class="attractions">
                <h3 class="attractions__name">${attractions.name}</h3>
                <div class="attractions__description">${attractions.description}</div>
                <div class="attractions__city">Location: ${attractions.city}, ${attractions.state}</div>
                <div class="attractions__souvenirs">Souvenirs: ${attractions.ameneties.souvenirs}</div>
                <div class="attractions__restrooms">Restrooms: ${attractions.ameneties.restrooms}</div>
            </div>
            `
        })

}

// let attractionHTMLRepresentation = ""

// const Attraction =  `
// <div class="attraction"
// `