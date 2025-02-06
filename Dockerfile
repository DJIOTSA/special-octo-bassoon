# stage 1: Build the Node.js app


# Use the official Node.js image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Start the application
CMD ["node", "app.js"]



# Stage 2: Serve the app using Nginx


# Use the official Nginx image based on Alpine Linux for a lightweight container
FROM nginx:alpine  

# Copy the built application from the 'builder' stage to Nginx's default serving directory
# COPY --from=builder /app /usr/share/nginx/html  
COPY --from=builder /app/build /usr/share/nginx/html

# Copy the custom Nginx configuration file to the appropriate directory
COPY nginx/default.conf /etc/nginx/conf.d/default.conf  

# Expose port 80 to allow incoming HTTP traffic
EXPOSE 80  

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
