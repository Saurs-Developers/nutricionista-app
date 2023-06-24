FROM node:18.16

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm

ENV VITE_BASE_URL=$VITE_BASE_URL

RUN pnpm install

COPY . .

RUN pnpm run build

RUN npm install -g serve

EXPOSE 5173

CMD serve dist -s -n -L -p 5173