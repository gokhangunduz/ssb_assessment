FROM node:alpine as build-stage
COPY . /app
WORKDIR /app
RUN npm install -s
RUN npm run build
RUN rm -rf /app/build/static/js/*.map
FROM nginx:alpine as production-stage
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 80