#Node/angular build
FROM node:latest as builder
WORKDIR /usr/src/app
COPY . .
RUN npm install -g @angular/cli
RUN ng build

#nginx build
FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /usr/src/app/dist/dndroller-frontend /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
