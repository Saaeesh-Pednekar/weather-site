import requests
from django.http import JsonResponse

def get_city_forecast(request):
    # 1. Grab the city name sent out by your frontend script.js file
    city_name = request.GET.get('city', '').strip()
    
    if not city_name:
        return JsonResponse({"error": "No city provided"}, status=400)
        
    # 2. Make the background server call out to the third-party weather API
    external_url = f"https://goweather.xyz/v2/weather/{city_name}"
    
    try:
        response = requests.get(external_url, timeout=5)
        
        if response.status_code == 200:
            weather_data = response.json()
            # Add the city name into the response payload for clarity
            weather_data["search_city"] = city_name
            return JsonResponse(weather_data)
        else:
            return JsonResponse({"error": "City not found in weather registry"}, status=404)
            
    except requests.exceptions.RequestException:
        return JsonResponse({"error": "External weather service is currently down"}, status=503)
