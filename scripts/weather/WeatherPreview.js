import {getForecast, useForecast} from "./WeatherProvider.js"

const weatherPreview = document.querySelector(".weatherPreview")

export const ForecastPreview = () => {
    getForecast()
    .then(() => {
      const forecastArray = useForecast()
      renderToDOM(forecastArray)
    })
  }

  const Forecast = (forecastObj) => {
      return `
      <div class="forecastCard"> 
        <div>${forecastObj.weather[0].dt}</div>
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