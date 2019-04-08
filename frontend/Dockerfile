FROM keymetrics/pm2:latest-alpine

COPY server /server
COPY client /client
COPY package.json next.config.js pm2.json .babelrc .env ./

RUN npm install --production
RUN npm run build

EXPOSE 3000

CMD ["pm2-runtime", "start", "pm2.json", "--env", "production"]
