let city = document.querySelector("#city")
let submit = document.querySelector("#submit-city")

async function display_weather(place)
{
    let url = `https://goweather.xyz/v2/weather/${place}`
    try
    {
        let data = await fetch(url)
        let weather_data = data.json()
        console.log(weather_data)
        
    }
    catch (error)
    {
        console.log("Unable to fetch the weather data")
    }
}

function select_city()
{
    place = city.value
    place = place.trim()
    place = place.charAt(0).toUpperCase() + place.slice(1).toLowerCase()
    console.log(place)
    display_weather(place)
}

submit.addEventListener("click" , select_city)
city.addEventListener("keydown", (event)=>{
    if (event.key === "Enter")
    {
        select_city()
    }
})

// let url  = fetch(`https://goweather.xyz/v2/weather/${city}`)
// console.log(url)