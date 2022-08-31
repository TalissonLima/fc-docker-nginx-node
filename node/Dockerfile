FROM node:latest AS build

RUN apt-get update && apt-get install -y wget

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

FROM node:alpine

WORKDIR /usr/src/app
COPY ./ /usr/src/app
COPY --from=build /usr/local/bin/dockerize /usr/local/bin/

RUN npm install

EXPOSE 3000

#ENTRYPOINT [ "dockerize -wait tcp://db:3306 -timeout 20s docker-entrypoint.sh"]

#CMD ["index.js"]