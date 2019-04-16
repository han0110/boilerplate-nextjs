# Dependencies stage
FROM node:10 AS deps

WORKDIR /api

COPY ./package.json /api/package.json
COPY ./package-lock.json /api/package-lock.json

RUN npm i --production

# Final stage
FROM node:10-alpine

WORKDIR /api

COPY --from=deps /api/node_modules /api/node_modules
COPY . /api

EXPOSE 3000

CMD ["npm", "run", "start"]
