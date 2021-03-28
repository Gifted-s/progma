FROM node:12-alpine
WORKDIR /darey-project-management-service
COPY package.json /darey-project-management-service
COPY . /darey-project-management-service
EXPOSE 3000
CMD ["npm", "start"]