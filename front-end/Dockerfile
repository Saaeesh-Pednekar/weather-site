# Use the ultra-lightweight Nginx web server
FROM nginx:alpine

# Copy all your HTML, CSS, and JS files directly into Nginx's public folder
COPY . /usr/share/nginx/html

# Expose port 80 for web traffic
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]