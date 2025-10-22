# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# No build step needed for plain Express
# RUN npm run build  # only for transpiling or Next.js

# Stage 2: Production image
FROM node:20-alpine

WORKDIR /app

# Copy installed node_modules from builder
COPY --from=builder /app/node_modules ./node_modules

# Copy app source files
COPY --from=builder /app/* ./

# Expose port and start the app
EXPOSE 4000
CMD ["node", "index.js"]
