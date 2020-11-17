FROM node:10.20.0-jessie
RUN mkdir -p /usr/src/tekiserver
WORKDIR /usr/src/tekiserver
COPY package.json /usr/src/tekiserver/
COPY package-lock.json /usr/src/tekiserver/
#RUN npm install
COPY . /usr/src/tekiserver
RUN mkdir server/logs
RUN npm install
#EXPOSE 4000
#EXPOSE 6000
CMD [ "npm", "start" ]

