FROM contenedoresdesafiotripulacionesg3.azurecr.io/alpinesecuredesafio:latest

USER root

ENV APP_PORT=5173

WORKDIR /app/server

COPY . .

RUN npm install

EXPOSE $APP_PORT

CMD ["sh", "-c", "npm start"]
