# 🌦️ Weather Analytics Platform

A full-stack weather application that enables users to search for real-time weather information by entering a city name. The frontend provides a clean and responsive interface, while the Django backend securely communicates with a third-party Weather API to retrieve weather data. The application is containerized using Docker and Docker Compose for consistent development and deployment, and is hosted on Render.

---

## 🚀 Live Demo

🔗 https://your-render-url.onrender.com

---

## Features

- 🔍 Search weather by city name
- 🌤️ Fetch real-time weather data using a third-party Weather API
- 🔒 Secure API requests handled by the Django backend
- 💻 Responsive user interface built with HTML, CSS, and JavaScript
- 🐳 Dockerized frontend and backend services
- ⚙️ Multi-container setup using Docker Compose
- ☁️ Deployed on Render
- 📦 Version control using Git and GitHub

---

## Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript (ES6)

### Backend
- Python
- Django
- Third-Party Weather API Integration

### DevOps & Deployment
- Docker
- Docker Compose
- Render
- Git
- GitHub
---

## Project Architecture

```
                    +----------------+
                    |     Browser    |
                    +--------+-------+
                             |
                             |
                             v
                 +------------------------+
                 | Frontend               |
                 | HTML • CSS • JavaScript|
                 +-----------+------------+
                             |
                       HTTP Request
                             |
                             v
                 +------------------------+
                 | Django Backend         |
                 | REST API               |
                 +-----------+------------+
                             |
                 Secure API Request
                             |
                             v
             +------------------------------+
             | Third-Party Weather API      |
             +------------------------------+
```

---

## Docker Architecture

The application is containerized into separate services:

- Frontend
- Django Backend

Docker Compose orchestrates both containers, enabling seamless communication between services while ensuring a consistent development and deployment environment.

---

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/Saaeesh-Pednekar/weather-site.git
cd weather-site
```

### Configure Environment Variables

Create a `.env` file in the backend directory and add your Weather API key:

```env
WEATHER_API_KEY=your_api_key
```

### Build and Run

```bash
docker-compose up --build
```

The application will be available at:

```
https://weather-site-app.onrender.com
```

### Stop the Containers

```bash
docker-compose down
```

---

## Deployment

The application is deployed on **Render**.

Deployment includes:

- Django backend hosting
- Automatic builds from GitHub
- Environment variable management
- Continuous deployment on every push to the main branch

---

## Future Enhancements

- 📅 5-day weather forecast
- 📍 Weather based on current location using Geolocation API
- 🕒 Search history
- 👤 User authentication
- 📊 Weather analytics and charts
- 🌡️ Temperature unit conversion (°C / °F)
- ❤️ Favorite cities
- 🌙 Dark mode

---

## Repository

GitHub: https://github.com/Saaeesh-Pednekar/weather-site

---

## Author

**Saaeesh Pednekar**

- GitHub: https://github.com/Saaeesh-Pednekar

---

## License

This project is intended for educational and portfolio purposes.