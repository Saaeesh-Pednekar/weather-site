document.addEventListener("DOMContentLoaded", () => {

    let city = document.querySelector("#city")
    let submit = document.querySelector("#submit-city")
    let resultBox = document.querySelector("#weather-result")


    // const API_BASE_URL = 'https://weather-site-backend.onrender.com'

    // Automatically swaps between local Docker and production Render based on your browser URL
    const API_BASE_URL = window.location.hostname === 'localhost'
    ? 'http://localhost:8000'                           // Local Docker container backend
    : 'https://weather-site-backend.onrender.com';      // Live production backend on Render


    async function display_weather(place)
    {
        // 🌟 1. Route the network call directly to your Django backend port
        let url = `${API_BASE_URL}/weather/api/forecast/?city=${encodeURIComponent(place)}`;
        resultBox.innerHTML = `<p role="status">Fetching data for <mark>${place}</mark>...</p>`


    try
    {
        let response = await fetch(url)
        let weather_data = await response.json() // 🌟 2. Added missing 'await' here
        console.log(weather_data)
        if (weather_data.error) {
            resultBox.innerHTML = `<p style="color: #ff8888;" role="alert">${weather_data.error}</p>`
            return;
        }

        // Semantic Elements Upgrade: Added <section>, <header>, <time>, <dl>, <dt>, and <dd>
        resultBox.innerHTML = `
            <article class="weather-card">
                <header>
                    <h2>Current Weather in ${weather_data.search_city}</h2>
                    <p><small>Report generated on: <time datetime="${new Date().toISOString()}">${new Date().toLocaleDateString()}</time></small></p>
                </header>
                
                <section class="weather-details">
                    <dl>
                        <dt>Temperature</dt>
                        <dd><strong>${weather_data.temperature || "N/A"}</strong></dd>
                        
                        <dt>Wind Speed</dt>
                        <dd><strong>${weather_data.wind || "N/A"}</strong></dd>
                        
                        <dt>Condition</dt>
                        <dd><mark>${weather_data.description || "N/A"}</mark></dd>
                    </dl>
                </section>
            </article>`
    }
    catch (error)
    {
        console.log("Unable to fetch the weather data from Django backend", error)
        resultBox.innerHTML = `<p style="color: #ff8888;" role="alert">Unable to reach the server.</p>`
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