#Node/angular build
FROM node:latest as builder
COPY . .
RUN npm install -g @angular/cli
RUN ng build

EXPOSE 80 8080 9000

CMD ["sbt", "run"]
