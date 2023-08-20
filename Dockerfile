FROM node:18-alpine as development

# Create app directory
RUN mkdir /app && chown node:node /app
WORKDIR /app

USER node

# Copy the package.json and package-lock.json files to the working directory
COPY --chown=node:node package*.json ./

# Install application dependencies
RUN npm ci

# Copy the rest of the application code to the working directory
COPY --chown=node:node ./src ./src
COPY --chown=node:node ./tsconfig*.json ./
