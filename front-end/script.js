// let city = document.querySelector("#city")
// let submit = document.querySelector("#submit-city")

// async function display_weather(place)
// {
//     let url = `https://goweather.xyz/v2/weather/${place}`
//     try
//     {
//         let data = await fetch(url)
//         let weather_data = data.json()
//         console.log(weather_data)
        
//     }
//     catch (error)
//     {
//         console.log("Unable to fetch the weather data")
//     }
// }

// function select_city()
// {
//     place = city.value
//     place = place.trim()
//     place = place.charAt(0).toUpperCase() + place.slice(1).toLowerCase()
//     console.log(place)
//     display_weather(place)
// }

// submit.addEventListener("click" , select_city)
// city.addEventListener("keydown", (event)=>{
//     if (event.key === "Enter")
//     {
//         select_city()
//     }
// })

document.addEventListener("DOMContentLoaded", () => {

    let city = document.querySelector("#city")
    let submit = document.querySelector("#submit-city")
    let resultBox = document.querySelector("#weather-result")




    async function display_weather(place)
    {
        // 🌟 1. Route the network call directly to your Django backend port
        let url = `http://localhost:8000/weather/api/forecast/?city=${place}`
        resultBox.innerHTML = `<p>Fetching data for ${place}...</p>`


    try
    {
        let response = await fetch(url)
        let weather_data = await response.json() // 🌟 2. Added missing 'await' here
        console.log(weather_data)
        if (weather_data.error) {
            resultBox.innerHTML = `<p style="color: #ff8888;">${weather_data.error}</p>`
            return;
        }

        resultBox.innerHTML = `
            <h2>${weather_data.search_city}</h2>
            <p><strong>Temperature:</strong> ${weather_data.temperature || "N/A"}</p>
            <p><strong>Wind speed:</strong> ${weather_data.wind || "N/A"}</p>
            <p><strong>Condition:</strong> ${weather_data.description || "N/A"}</p>`
        
        // You can now manipulate your DOM here to show weather_data on screen!
    }
    catch (error)
    {
        console.log("Unable to fetch the weather data from Django backend", error)
        resultBox.innerHTML = `<p style="color: #ff8888;">Unable to reach the server.</p>`
    }
    }

    function select_city()
    {
    let place = city.value.trim()
    if (!place) return; // Prevent empty searches

    place = place.charAt(0).toUpperCase() + place.slice(1).toLowerCase()
    console.log("Searching for:", place)
    display_weather(place)
    }

    submit.addEventListener("click" , select_city)
    city.addEventListener("keydown", (event)=>{
    if (event.key === "Enter")
    {
        select_city()
    }
    })

});
