# Build Frontend

FROM node:14-alpine AS client_build

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install dependencies
RUN npm install

COPY . .

# Build the application
RUN ng build

EXPOSE 80

CMD ["npx", "http-server", "dist/gratitideFrontend", "-p", "80"]
