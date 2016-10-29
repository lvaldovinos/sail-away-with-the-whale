FROM node:6
RUN mkdir /application 
WORKDIR /application
COPY package.json .
COPY bower.json .
RUN npm install && \
    npm run bower-install
COPY . /application
EXPOSE 3000
CMD ["node", "server.js"]
