let forecast = []

export const useForecast = () => {
    return forecast.slice(0, 5)
    
}

export const getForecast = (lat,lon) => {
    //-94.037689
    //33.441792
    let fetchString=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,&appid=1ac1d497dbfbeb2b2bcdc56759028d67`
// 
    return fetch(fetchString)
        .then(response => response.json())
        .then(parsedForecast => {
            forecast = parsedForecast.daily
            console.log(forecast)
            } 
        )  
}

