# inspired by https://github.com/vercel/next.js/blob/canary/docs/deployment.md#docker-image
# TODO: deactive https://nextjs.org/docs/api-reference/next.config.js/compression when using nginx
ARG node_version=14.15.4
ARG node_image=node:${node_version}-alpine
ARG pm2_version=4.5.1

FROM $node_image as devDep
WORKDIR /app/
COPY .npmrc package.json yarn.lock ./
RUN yarn install --frozen-lockfile --no-progress

FROM $node_image as deps
WORKDIR /app/
COPY .npmrc package.json yarn.lock ./
RUN yarn install --frozen-lockfile --no-progress --production=true 

# STAGE BUILDER
FROM $node_image as builder
# https://nextjs.org/telemetry
ENV NEXT_TELEMETRY_DISABLED=1

WORKDIR /app/

# package.json and dependency handling
COPY --from=devDep /app/node_modules ./node_modules
COPY package.json ./

# files for building the app
COPY babel.config.js tsconfig.json ./
COPY next.config.js postcss.config.js tailwind.config.js ./

# source code of the app
COPY public ./public/
COPY src ./src/
COPY version.js ./

# build the bundles (codegen -> ts -> js -> bundled)
RUN yarn build

# STAGE APP
FROM $node_image
LABEL "maintainer"="natterstefan"

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

WORKDIR /app/

# set timezone
RUN apk --no-cache add tzdata
RUN ln -sf /usr/share/zoneinfo/Europe/Vienna /etc/localtime

RUN npm install pm2@${pm2_version} -g
COPY docker-entrypoint.sh process.yml ./

# copy files
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/version.js ./

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
RUN chown -R nextjs:nodejs /app/.next
USER nextjs

EXPOSE 3000

ENTRYPOINT ["./docker-entrypoint.sh"]