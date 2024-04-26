FROM node:18.0.0-alpine as base

WORKDIR /usr/src/app/frontend

COPY ./package.json .
# COPY ./package-lock.json .

RUN yarn install

COPY . .

EXPOSE 5173

CMD ["yarn", "run", "dev-exposed"]
