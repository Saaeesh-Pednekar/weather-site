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
FROM python:3.11-slim

# Set environment variables to prevent Python from writing pyc files and buffering stdout/stderr
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set the working directory inside the container
WORKDIR /app

# Install system dependencies if needed (e.g., for PostgreSQL or image processing)
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Copy the requirements file and install Python packages
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of your Django project code into the container
COPY . /app/

# Expose the port Django runs on
# EXPOSE 8000

# # Run the development server
# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

# Dynamic port binding for Render
EXPOSE 10000

# Run using Gunicorn for production
CMD ["sh", "-c", "gunicorn weather_project.wsgi:application --bind 0.0.0.0:$PORT"]
