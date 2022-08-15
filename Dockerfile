FROM node:16.16.0

COPY index.js package.json package-lock.json /root/

WORKDIR /root/
RUN npm ci

ENTRYPOINT ["node", "/root/index.js"]