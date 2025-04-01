FROM node:22
WORKDIR /app
COPY package.json package-lock.json tsconfig.json ./
RUN npm ci
COPY . .

CMD [ "npm", "run", "start" ]