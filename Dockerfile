# syntax=docker/dockerfile:1
FROM node:18-alpine as build_image

WORKDIR /build

COPY . .

RUN npm install
RUN npm run build
#-------------------------------------------------------------------------------
FROM nginx:1.21.3 as app_image

# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*

COPY --from=build_image /build/dist .

# Copy static assets over
#COPY ./* ./

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
