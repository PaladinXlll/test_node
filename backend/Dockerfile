FROM node:24-alpine
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
# про порт чисто как комментарий
EXPOSE 3000 
CMD [ "npm", "start" ]