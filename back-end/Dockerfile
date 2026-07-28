FROM python:3.11-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# FIXED: Explicitly pull requirements from the weatherapp directory
COPY weatherapp/requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# FIXED: Only copy the django project folder into the runtime environment
COPY weatherapp/ /app/

# Gunicorn start string remains optimal for Render's environment router
CMD ["sh", "-c", "gunicorn weather_project.wsgi:application --bind 0.0.0.0:$PORT"]
