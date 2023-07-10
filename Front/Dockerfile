FROM node:18-alpine3.17 as build
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build

FROM nginx:latest
COPY --from=build /app/dist /var/www/html/
COPY /nginx/default.conf /etc/nginx/conf.d/default.conf
CMD ["nginx","-g","daemon off;"]

