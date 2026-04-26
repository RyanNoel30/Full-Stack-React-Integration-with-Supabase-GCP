# Use the official Nginx image to serve the static files
FROM nginx:alpine

# Copy the built app to Nginx's html directory
COPY dist/ /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]