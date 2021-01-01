# base image
FROM node:15.5.0-alpine3.12

# set working directory
WORKDIR /srv/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /srv/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY ./app/package.json /srv/app/package.json
COPY ./app/package-lock.json /srv/app/package-lock.json
RUN npm install --silent
RUN npm install react-scripts@4.0.1 -g --silent

# start app
CMD ["npm", "start"]
