FROM node:12
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run-script build
EXPOSE 8080
CMD [ "node", "server.js" ]