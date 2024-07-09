# Use an official Node.js image as the base
FROM node:20.15

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files
COPY . .

# Build the React app
RUN npm run build

# Specify the command to run when the container starts
#CMD ["npm", "run", "preview"]
