# Step 1: Build stage using a Node.js environment
FROM node:18-alpine AS build

WORKDIR /usr/src/app

# Copy package.json and package-lock.json, then install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire project and build the React app
COPY . .
RUN npm run build

# Step 2: Use Nginx to serve the build
FROM nginx:alpine

# Copy the custom nginx.conf file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built React files from the build stage
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose port 8083
EXPOSE 8083

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
