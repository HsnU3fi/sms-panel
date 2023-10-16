FROM node:19.0.0

RUN mkdir -p /usr/src/smspanel-frontend
WORKDIR /usr/src/smspanel-frontend

#RUN apk update && apk upgrade
#RUN apk add git

COPY . /usr/src/smspanel-frontend/
#RUN npm install -D @element-plus/nuxt@1.0.4
RUN npm install
RUN npm run build
#RUN npm run dev &

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "npm", "run", "dev" ]
