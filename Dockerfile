FROM node:17.6-alpine3.14 AS bundler
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:17.6-alpine3.14

COPY --from=bundler /app/dist ./dist
COPY --from=bundler /app/node_modules ./
COPY package.json package-lock.json ./


EXPOSE 3001
CMD npm run start
