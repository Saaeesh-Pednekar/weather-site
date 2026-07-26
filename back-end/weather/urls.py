from django.urls import path
from . import views

urlpatterns = [
    # path('forecast/', views.get_weather_forecast, name='forecast'),
    # path('history/', views.get_weather_history, name='history'),
    # path('', views.home, name='home'),
    path('api/forecast/', views.get_city_forecast, name='city_forecast'),
]
