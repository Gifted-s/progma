FROM node:12-alpine
WORKDIR /darey-project-management-service
COPY package.json /darey-project-management-service
RUN  npm install
COPY . /darey-project-management-service
RUN cd build
EXPOSE 3000
CMD ["node", "./index.js"]