FROM  node:22-alpine

WORKDIR /uzwal

COPY   ./package.json ./package.json
COPY   ./package-lock.json ./package-lock.json

RUN   npm install

COPY  . . 
ENV DBURL=${DBURL}
RUN  npm  run build 

EXPOSE 3000

CMD [ "node", "dist/index.js" ]