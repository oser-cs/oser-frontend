FROM node:10
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
EXPOSE 4200
CMD  "npm run build"
ENTRYPOINT ["npm", "run", "start"]

