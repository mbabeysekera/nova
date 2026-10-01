FROM mcr.microsoft.com/devcontainers/typescript-node:4-24-trixie

RUN apt-get update \
    && export DEBIAN_FRONTEND=noninteractive \
    && apt-get install -y --no-install-recommends docker.io docker-compose \
    && rm -rf /var/lib/apt/lists/* \
    && groupadd -f docker \
    && usermod -aG docker node
