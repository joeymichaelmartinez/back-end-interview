# Use an official Node.js image
FROM node:18
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npx", "tsx", "src/app.ts"]
