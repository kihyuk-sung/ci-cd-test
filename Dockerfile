FROM node:16-alpine3.11
# Install Global Module
RUN npm install yarn --g --force

# Create Work Directory
WORKDIR /app

# Copy Source Files
ADD ./src ./src
COPY ./package*.json ./
COPY ./yarn.lock ./
COPY ./tsconfig.json ./
COPY ./tsconfig.build.json ./

RUN yarn install

# Build
RUN yarn run build

# Mapping Port
EXPOSE 3000

# Start Server
CMD ["yarn", "run", "start:prod"]
