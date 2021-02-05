const ParkList = () => {
    getParks()
        .then(() => {
            const parks = useParks()
            parks.forEach(element => {
                console.log(parks.length +" "+ element.name +" "+ element.id)
            });
        })
}
