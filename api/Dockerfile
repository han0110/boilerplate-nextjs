FROM keymetrics/pm2:latest-alpine

COPY server /server
COPY db /db
COPY package.json pm2.json .env ./

RUN npm install --production

EXPOSE 3000

CMD ["pm2-runtime", "start", "pm2.json", "--env", "production"]
