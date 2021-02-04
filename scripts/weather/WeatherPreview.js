// import {getForecast, useForecast} from "./WeatherProvider.js"

// const weatherPreview = document.querySelector(".weatherPreview")

// export const ForecastPreview = () => {
//     getForecast()
//     .then(() => {
//       const forecastArray = useForecast()
//       renderToDOM(forecastArray)
//     })
//   }

//   const renderToDOM = forecastArray => {
//     let forecastHTML = ""
//         for (const forecastObj of forecastArray) {
//           forecastHTML += Forecast(forecastObj)
//         }
      
//         weatherPreview.innerHTML = `
//           <h3>5 Day Forecast:</h3>
//           <section class="forecast">
//           ${criminalHTML}
//           </section>`
//   }