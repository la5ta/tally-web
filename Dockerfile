#
# ---- Base Node ----
FROM alpine:3.12 AS base
# install node
RUN apk add --no-cache nodejs-current tini nodejs-npm yarn
# set working directory
WORKDIR /root/app
# Set tini as entrypoint
ENTRYPOINT ["/sbin/tini", "--"]
# copy project file
COPY package*.json .
COPY yarn.lock ./

#
# ---- Dependencies ----
FROM base AS dependencies
# install node packages
RUN npm config set unsafe-perm true
RUN npm set progress=false && npm config set depth 0
RUN yarn install --production
# copy production node_modules aside
RUN cp -R node_modules prod_node_modules
# install ALL node_modules, including 'devDependencies'
RUN yarn install

#
# ---- Test ----
# run linters, setup and tests
FROM dependencies AS test
COPY . .
RUN yarn lint && yarn test && yarn build

#
# ---- Release ----
FROM base AS release
# copy production node_modules
COPY --from=dependencies /root/app/prod_node_modules ./node_modules
# copy app sources
COPY . .
# expose port and define CMD
EXPOSE 3000
CMD yarn dev
