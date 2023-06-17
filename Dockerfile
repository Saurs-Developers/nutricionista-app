FROM node:18.16

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm

ENV VITE_BASE_URL="https://nutricionista-api-dev.up.railway.app/api"

RUN pnpm install

COPY . .

RUN pnpm run build

RUN npm install -g serve

EXPOSE 5173

# Set the command to start the app using Serve and reference the PORT environment variable
CMD serve dist -s -n -L -p 5173