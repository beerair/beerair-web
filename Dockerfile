FROM node:16

COPY . .

RUN yarn install

RUN yarn build

CMD ["yarn", "start"]