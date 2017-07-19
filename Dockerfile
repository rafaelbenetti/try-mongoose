FROM node:argon

RUN mkdir /app
WORKDIR /app

COPY package.json /app
RUN npm install
RUN npm install nodemon -g

COPY . /app

EXPOSE 3000

CMD ["npm", "start"]