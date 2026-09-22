FROM node:22-bookworm-slim

RUN npm install -g omniroute

WORKDIR /app
VOLUME ["/app/data"]
EXPOSE 20128

CMD ["omniroute", "--no-open"]
