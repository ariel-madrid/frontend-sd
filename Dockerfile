FROM node as build
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 5173
RUN npm run build

FROM nginx
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html