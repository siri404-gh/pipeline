FROM node:boron
WORKDIR /usr/src/app
COPY package.json .
RUN npm install --silent
COPY . .
EXPOSE 5000
CMD [ "npm", "start" ]
CMD [ "echo",  "hello"]