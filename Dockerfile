FROM node:alpine

WORKDIR /app
COPY package*.json  ./
RUN npm install
RUN npm i -g @angular/cli

COPY . .

RUN npm run build

FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/sites-available.conf /etc/nginx/conf.d/
EXPOSE 80
COPY /dist/homepage /usr/share/nginx/html


CMD ["nginx", "-g", "daemon off;"]