FROM node:17-alpine3.14 AS bundler
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --registry=http://registry.npm.taobao.org
COPY . .
RUN npm run build

FROM node:17-alpine3.14

COPY --from=bundler /app/dist ./dist
COPY --from=bundler /app/node_modules ./
COPY package.json package-lock.json ./


EXPOSE 8081
CMD npm run start
