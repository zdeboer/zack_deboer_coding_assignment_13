FROM node:20-alpine AS build

WORKDIR /deboer_zack_ui_garden

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build



FROM node:20-alpine

WORKDIR /deboer_zack_ui_garden

RUN npm install -g serve

COPY --from=build /deboer_zack_ui_garden/build ./build

EXPOSE 8083

CMD ["serve", "-s", "build", "-l", "8083"]