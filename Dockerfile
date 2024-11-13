# Step 1: Build the frontend application using Node.js
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application files
COPY . .

# Build the frontend app for production
RUN npm run build

# Step 2: Use NGINX to serve the built app
FROM nginx:alpine

# Copy the build directory from the previous stage to NGINX
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for NGINX to listen on
EXPOSE 80

# Start NGINX to serve the React app
CMD ["nginx", "-g", "daemon off;"]
