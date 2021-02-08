// listen for selection of eatery select
// then take the value of line 1 and put it on the dom as selected item
// then put it on the page

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".eateriesPreview")
const modalTarget = document.querySelector(".eateriesModal")

eventHub.addEventListener("eateriesSelected", event => {
    let [eatId, eatName] = event.detail.selectedEateryName.split("--")
    contentTarget.innerHTML = `<h3> ${eatName}</h3> 
    <button id=detailButton value="${eatId}">Details</button>`
    modalTarget.innerHTML = ""
})

eventHub.addEventListener("click", event =>{
    if(event.target.id === "detailButton") {
        renderDetail(event.target.value)
    }
    
})

let eateries = []

const renderDetail = (tacoBell) => {
    console.log(tacoBell)
         return fetch ("http://holidayroad.nss.team/eateries/"+tacoBell)
        .then(response => response.json())
        .then(eateriesArray => {
            eateries = eateriesArray
            console.log(eateries)

            modalTarget.innerHTML = `
            <div class="eatery">
                <h3 class="eatery__businessName">${eateries.businessName}</h3>
                <div class="eatery__description">${eateries.description}</div>
                <div class="eatery__city">Location: ${eateries.city}, ${eateries.state}</div>
                <div class="eatery__wifi">Wifi: ${eateries.ameneties.wifi}</div>
                <div class="eatery__restrooms">Restrooms: ${eateries.ameneties.restrooms}</div>
            </div>
                
            `
        })
     
}




