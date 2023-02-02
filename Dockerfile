# Use an official Node.js image as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install the app's dependencies in the container
RUN npm install

# Copy the app's code to the container
COPY . .

# Specify the command to run the app when the container starts
CMD ["npm", "start"]
