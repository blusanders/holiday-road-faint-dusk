import {getForecast, useForecast} from "./WeatherProvider.js"

const weatherPreview = document.querySelector(".weatherPreview")

export const ForecastPreview = (lat,lon) => {
    getForecast(lat,lon)
    .then(() => {
      const forecastArray = useForecast()
      renderToDOM(forecastArray)
    })
  }

  const Forecast = (forecastObj) => {
      return `
      <div class="forecastCard"> 
        <div>${convertDt(forecastObj.dt)}</div>
        <div><img src="http://openweathermap.org/img/wn/${forecastObj.weather[0].icon}@2x.png"></div>
        <div>${forecastObj.weather[0].main}</div>
        <div>${forecastObj.weather[0].description}</div>
      </div>
      `
  }

  const renderToDOM = (weatherArray) => {
    let forecastHTML = ""
        for (const forecastObj of weatherArray) {
          forecastHTML += Forecast(forecastObj) 
        }
        weatherPreview.innerHTML = `
          <h3>5 Day Forecast:</h3>
          <section class="forecast">
          ${forecastHTML}
          </section>`
  }



//dt UNIX time, convert to 
const convertDt = (dt) => {
// debugger
  //const unixTimestamp = dt
  const milliseconds = dt * 1000
  const dateObject = new Date(milliseconds)
  const humanDateFormat = dateObject.toLocaleString() //2019-12-9 10:30:15
  let dayText = dateObject.toLocaleString("en-US", {weekday: "long"}) // Monday
  let monthText = dateObject.toLocaleString("en-US", {month: "long"}) // December
  let dayNumText = dateObject.toLocaleString("en-US", {day: "numeric"}) // 9
  let dayLongText = dateObject.toLocaleString("en-US", {timeZoneName: "short"}) // 12/9/2019, 10:30:15 AM CST

  return `${dayText} ${monthText}, ${dayNumText} `

  // dateObject.toLocaleString("en-US", {year: "numeric"}) // 2019
  // dateObject.toLocaleString("en-US", {hour: "numeric"}) // 10 AM
  // dateObject.toLocaleString("en-US", {minute: "numeric"}) // 30
  // dateObject.toLocaleString("en-US", {second: "numeric"}) // 15
}
