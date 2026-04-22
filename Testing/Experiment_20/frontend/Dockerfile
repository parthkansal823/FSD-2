FROM node:20

WORKDIR /app

# better caching
COPY package*.json ./
RUN npm install

COPY . .

# build project
RUN npm run build

# expose port
EXPOSE 5173

# IMPORTANT: allow external access
CMD ["npm", "run", "preview", "--", "--host"]