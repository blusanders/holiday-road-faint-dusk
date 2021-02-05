const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".parkPreview");

// Listen for the custom event if Park was selected
eventHub.addEventListener("parkSelected", event => {
    debugger
    console.log("123");
    contentElement.innerHTML="Selected Park"
})

