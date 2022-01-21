FROM node:16.13.0-alpine
# Install Global Module
RUN npm install yarn --g --force

# Create Work Directory
WORKDIR /app


COPY ./package*.json ./
COPY ./yarn.lock ./

RUN yarn install

# Copy Source Files
ADD ./src ./src
COPY ./tsconfig.json ./
COPY ./tsconfig.build.json ./

# Build
RUN yarn run build

# Mapping Port
EXPOSE 3000

# Start Server
CMD ["yarn", "run", "start:dist"]
