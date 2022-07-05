FROM node:18-alpine

RUN mkdir -p /home/app/ && chown -R node:node /home/app/

WORKDIR /home/app/

COPY --chown=node:node . .

USER node 

RUN yarn install --frozen-lockfile

EXPOSE 5007

CMD [ "yarn", "server" ]