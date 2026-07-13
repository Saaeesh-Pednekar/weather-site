let city = document.querySelector("#city")
let submit = document.querySelector("#submit-city")

function select_city()
{
    place = city.value
    place = place.trim()
    place = place.charAt(0).toUpperCase() + place.slice(1).toLowerCase()
    console.log(place)
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