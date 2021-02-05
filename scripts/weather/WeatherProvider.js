let forecast = []

export const useForecast = () => {
    return forecast.slice(0, 5)
    
}

export const getForecast = () => {
    return fetch("https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=minutely,hourly,&appid=1ac1d497dbfbeb2b2bcdc56759028d67")
        .then(response => response.json())
        .then(parsedForecast => {
            forecast = parsedForecast.daily
            console.log(forecast)
            } 
        )  
}