// listen for selection of eatery select
// then take the value of line 1 and put it on the dom as selected item
// then put it on the page

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".eateriesPreview")

eventHub.addEventListener("eateriesSelected", event => {
    let [eatId, eatName] = event.detail.selectedEateryName.split("--")
    contentTarget.innerHTML = eatName
})
