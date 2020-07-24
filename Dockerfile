#
# ---- Base Node ----
FROM alpine:3.12 AS base
# Env vars
ENV WEBROOT /webroot/default
ENV PORT 9999
ENV NODE_ENV production
# install node
RUN apk add --no-cache nodejs-current tini nodejs-npm yarn
# set working directory
WORKDIR ${WEBROOT}
# Set tini as entrypoint
ENTRYPOINT ["/sbin/tini", "--"]
# copy project file
COPY package*.json ${WEBROOT}
COPY yarn.lock ${WEBROOT}

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
# TODO: fix the build step
# RUN yarn lint && yarn test && yarn build
RUN yarn lint && yarn test

#
# ---- Release ----
FROM base AS release
# copy production node_modules
COPY --from=dependencies ${WEBROOT}/prod_node_modules ${WEBROOT}/node_modules
# copy app sources
COPY . .
# expose port and define CMD
EXPOSE ${PORT}
CMD yarn dev
