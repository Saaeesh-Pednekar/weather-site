# Weather Analytics Platform

A full-stack weather application that allows users to search for weather information by entering a city name. The application uses a Django backend to securely fetch weather data from a third-party Weather API and displays the results through a responsive web interface. The project is containerized using Docker, making deployment and development consistent across environments.

## Features

- Search weather by city name
- Fetch real-time weather data using a third-party Weather API
- Responsive and interactive user interface
- Backend API integration using Django
- Dockerized frontend and backend services
- Version control using Git and GitHub

## Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript (ES6)

### Backend
- Django
- Python
- REST API Integration

### DevOps & Tools
- Docker
- Docker Compose
- Git
- GitHub

## Project Architecture

```
                +----------------+
                |     Browser    |
                +--------+-------+
                         |
                         v
                +----------------+
                | Frontend        |
                | HTML/CSS/JS     |
                +--------+--------+
                         |
                  HTTP Request
                         |
                         v
                +----------------+
                | Django Backend |
                +--------+--------+
                         |
            Fetch Weather Data
                         |
                         v
          +-------------------------+
          | Third-Party Weather API |
          +-------------------------+
```

## Docker Setup

The application is divided into separate containers:

- Frontend
- Backend (Django)

Docker Compose is used to orchestrate both containers, enabling seamless communication and simplified deployment.

## Getting Started

### Clone the repository

```bash
git clone https://github.com/Saaeesh-Pednekar/weather-site.git
cd weather-analytics-platform
```

### Build and start the containers

```bash
docker-compose up --build
```

### Stop the application

```bash
docker-compose down
```

## Future Enhancements

- 5-day weather forecast
- Current location weather using Geolocation API
- Search history
- User authentication
- Weather charts and analytics
- Unit conversion (°C / °F)

## Author

**Saaeesh Pednekar**

GitHub: https://github.com/Saaeesh-Pednekar