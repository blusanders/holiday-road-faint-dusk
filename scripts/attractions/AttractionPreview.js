const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".attractionPreview")

eventHub.addEventListener("attractionChosen", event =>{
    console.log("do it work")
    contentTarget.innerHTML= event.detail.chosenAttraction
})

// // pull api 
// let attractionHTMLRepresentation = ""

// const Attraction =  `
// <div class="attraction"
// `