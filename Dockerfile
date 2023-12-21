# Use the official Apache image as the base image
FROM httpd:latest

# Copy the website files to the container
COPY ./ /usr/local/apache2/htdocs/
