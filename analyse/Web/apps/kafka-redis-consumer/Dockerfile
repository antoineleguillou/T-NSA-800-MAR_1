FROM --platform=linux/amd64 node:18-slim 

# add curl for healthcheck
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    curl \
    tini \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./

RUN npm ci \
    && npm cache clean --force 

COPY . .

ENTRYPOINT ["/usr/bin/tini", "--"]
CMD ["node", "main.js"]