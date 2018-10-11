FROM node:9
MAINTAINER FHIRD UP
# make a working directory
RUN mkdir -p /usr/src/app
# set the working directory
WORKDIR /usr/src/app
# copy dependency definitions
COPY package.json /usr/src/app
#RUN npm cache clean
RUN npm install
RUN npm install -g @angular/cli
COPY . /usr/src/app
EXPOSE 4200
#ENV NODE_ENV production
CMD ["npm", "start", "--host 0.0.0.0"]
#CMD ["npm", "start"]
#CMD ng serve --host 0.0.0.0 --port 4200
#CMD ["ng", "serve", "--host 0.0.0.0", "--port 4200"]
#on prompt go to app root folder, then issue following command docker build -t cernerscheduleapp .
# then run docker run --rm -p 4200:4200 --name "CernerSchApp" cernerscheduleapp
# docker run -it -v ${PWD}:/usr/src/app -p 4200:4200 cernerschedule app
