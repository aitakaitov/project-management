FROM node

WORKDIR /app

ADD package.json .
RUN npm install

ADD . .

EXPOSE 5173
CMD ["npm", "run", "dev"]