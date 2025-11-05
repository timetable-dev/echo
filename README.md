> [!IMPORTANT]
> This project is outdated because the official timetable website switched to a different schema in September 2025. This repo may be updated in the future but will be archived for now.

This repo contains a Hono API server that imitates MSLU backend to use in development and testing. We host it on Yandex Serverless Containers (same as Google Cloud Run) using Docker.

# Install and run locally

```
npm install
npm run dev
```

```
open http://localhost:3000
```

## Build and push to Yandex CR

```
docker build . -t cr.yandex/<идентификатор_реестра>/mslu-echo:latest
```

```
docker push cr.yandex/<идентификатор_реестра>/mslu-echo:latest
```

## Useful links

1. Auth: https://yandex.cloud/ru/docs/container-registry/operations/authentication
1. Build: https://yandex.cloud/ru/docs/container-registry/operations/docker-image/docker-image-create
1. Push: https://yandex.cloud/ru/docs/container-registry/operations/docker-image/docker-image-push
