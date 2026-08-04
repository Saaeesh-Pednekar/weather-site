# 🌦️ Weather Analytics Platform

A full-stack weather application that allows users to search for real-time weather information by city name. The frontend is built using **HTML, CSS, and JavaScript** and is deployed on **Vercel** for fast global content delivery through its CDN. The backend is developed with **Django** and deployed on **Render**, where it securely communicates with a third-party Weather API to fetch live weather data.

The application is fully containerized using **Docker** and **Docker Compose**, ensuring a consistent development environment and simplified deployment workflow.

---

# 🚀 Live Demo

### Frontend (Vercel)

🔗 https://weather-site-app.vercel.app

### Backend API (Render)

🔗 https://weather-site-backend.onrender.com

---

# ✨ Features

- 🔍 Search weather by city name
- 🌤️ Fetch real-time weather information
- 🔒 Secure Weather API communication through the Django backend
- ⚡ Fast frontend delivery using Vercel's global CDN
- 💻 Responsive user interface
- 🐳 Dockerized frontend and backend
- ⚙️ Multi-container architecture using Docker Compose
- ☁️ Separate frontend and backend deployment
- 📦 Version control with Git and GitHub

---

# 🛠️ Tech Stack

## Frontend

- HTML5
- CSS3
- JavaScript (ES6)

## Backend

- Python
- Django
- Django REST API
- Third-Party Weather API

## DevOps & Deployment

- Docker
- Docker Compose
- Vercel
- Render
- Git
- GitHub

---

# 🏗️ Project Architecture

```text
                  +----------------------+
                  |      Browser         |
                  +----------+-----------+
                             |
                             |
                             v
                +---------------------------+
                | Frontend (Vercel CDN)     |
                | HTML • CSS • JavaScript   |
                +------------+--------------+
                             |
                      HTTPS Request
                             |
                             v
                +---------------------------+
                | Django Backend (Render)   |
                | REST API                  |
                +------------+--------------+
                             |
                  Secure API Request
                             |
                             v
             +----------------------------------+
             | Third-Party Weather API          |
             +----------------------------------+
```

---

# 🐳 Docker Architecture

The project follows a multi-container architecture.

```
+--------------------+
| Docker Compose     |
+---------+----------+
          |
   ---------------------
   |                   |
   |                   |
   v                   v
+-----------+    +----------------+
| Frontend  |    | Django Backend |
| Container |    |   Container    |
+-----------+    +----------------+
```

Docker Compose manages both services, enabling seamless communication during local development while maintaining environment consistency.

---

# 📂 Project Structure

```text
weather-site/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── Dockerfile
│   └── ...
│
├── backend/
│   ├── weather_project/
│   ├── weather/
│   ├── requirements.txt
│   ├── Dockerfile
│   └── ...
│
├── docker-compose.yml
├── README.md
└── .gitignore
```

---

# ⚙️ Getting Started

## Clone the Repository

```bash
git clone https://github.com/Saaeesh-Pednekar/weather-site.git

cd weather-site
```

---

## Configure Environment Variables

Create a `.env` file inside the backend directory.

```env
WEATHER_API_KEY=your_api_key
```

---

## Build and Run

```bash
docker-compose up --build
```

The application will be available locally after the containers start.

Frontend:

```
http://localhost
```

Backend:

```
http://localhost:8000
```

---

## Stop the Containers

```bash
docker-compose down
```

---

# ☁️ Deployment

## Frontend

- Hosted on **Vercel**
- Global CDN for low-latency content delivery
- Automatic deployments from GitHub

## Backend

- Hosted on **Render**
- Django REST API
- Secure environment variables
- Automatic deployments from GitHub

---

# 🔄 Application Workflow

```
User
   │
   ▼
Enter City Name
   │
   ▼
Frontend (Vercel)
   │
   ▼
HTTP Request
   │
   ▼
Django Backend (Render)
   │
   ▼
Weather API
   │
   ▼
Weather Data
   │
   ▼
Frontend
   │
   ▼
Display Weather
```

---

# 🚀 Future Enhancements

- 📅 5-Day Weather Forecast
- 📍 Current Location Weather
- ❤️ Favorite Cities
- 🕒 Search History
- 👤 User Authentication
- 📊 Weather Analytics Dashboard
- 🌡️ Temperature Unit Conversion (°C / °F)
- 🌙 Dark Mode
- 📱 Progressive Web App (PWA)
- 📈 Weather Trend Visualization

---

# 📦 Repository

GitHub

https://github.com/Saaeesh-Pednekar/weather-site

---

# 👨‍💻 Author

**Saaeesh Pednekar**

GitHub:

https://github.com/Saaeesh-Pednekar

---

# 📄 License

This project is intended for educational, learning, and portfolio purposes.