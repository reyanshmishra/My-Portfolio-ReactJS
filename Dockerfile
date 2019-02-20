FROM node:alpine

WORKDIR '/app'

COPY package.json .
RUN npm install

COPY . .

CMD if [ ${NODE_ENV} = production ]; \
    then \
    npm install -g http-server && \
    npm run build && \
    cd build && \
    hs -p 3000; \
    else \
    npm run start; \
    fi

EXPOSE 8080

