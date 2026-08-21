# Use the ultra-lightweight Nginx web server
FROM nginx:alpine

# Copy all your HTML, CSS, and JS files directly into Nginx's public folder
COPY . /usr/share/nginx/html

# Expose port 80 for web traffic
# EXPOSE 80

# # Start Nginx
# CMD ["nginx", "-g", "daemon off;"]

# Dynamic port binding for Render's infrastructure
CMD ["sh", "-c", "sed -i 's/listen       80;/listen '\"$PORT\"';/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]