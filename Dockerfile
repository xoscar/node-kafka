FROM node:8-alpine

RUN apk --no-cache add \
      bash \
      g++ \
      ca-certificates \
      lz4-dev \
      musl-dev \
      cyrus-sasl-dev \
      openssl-dev \
      make \
      python

RUN apk add --no-cache --virtual .build-deps gcc zlib-dev libc-dev bsd-compat-headers py-setuptools bash

RUN npm install pm2 -g && yarn global add yarn

WORKDIR /usr/src/app

COPY . .

RUN yarn add node-rdkafka
RUN yarn

CMD ["npm", "start"]
