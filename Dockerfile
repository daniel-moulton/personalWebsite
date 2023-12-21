# Use the official Apache image as the base image
FROM httpd:latest

# Copy the website files to the container
COPY ./ /usr/local/apache2/htdocs/

# Set a default ServerName
RUN echo "ServerName www.danielmoulton.me" >> /usr/local/apache2/conf/httpd.conf