const questions = [
  // --- BEGINNER ---
  {
    id: 1, level: 'Beginner',
    code: `FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node", "server.js"]`,
    choices: [
      'A. It builds a Python-based streaming API image',
      'B. It builds a Node.js image that installs dependencies and starts server.js',
      'C. It runs the container immediately after building',
      'D. It copies the image to a registry',
    ],
    answer: 'B',
  },
  {
    id: 2, level: 'Beginner',
    code: `docker build -t streambox/encoder:latest .`,
    choices: [
      'A. It pulls the streambox/encoder image from Docker Hub',
      'B. It builds a Docker image tagged as streambox/encoder:latest from the current directory',
      'C. It runs the encoder container in the background',
      'D. It removes the existing encoder image',
    ],
    answer: 'B',
  },
  {
    id: 3, level: 'Beginner',
    code: `docker run -d -p 8080:3000 streambox/api:latest`,
    choices: [
      'A. It builds and starts the API container on port 3000',
      'B. It runs the API container in the background, mapping host 8080 to container 3000',
      'C. It stops any running API containers',
      'D. It pulls the API image and exits',
    ],
    answer: 'B',
  },
  {
    id: 4, level: 'Beginner',
    code: `docker ps`,
    choices: [
      'A. It shows all images on the host',
      'B. It lists all currently running containers',
      'C. It stops all running containers',
      'D. It displays container resource usage',
    ],
    answer: 'B',
  },
  {
    id: 5, level: 'Beginner',
    code: `docker logs -f streambox-api`,
    choices: [
      'A. It exports the container logs to a file',
      'B. It streams live logs from the streambox-api container',
      'C. It clears the container logs',
      'D. It restarts the container and shows startup logs',
    ],
    answer: 'B',
  },
  // --- INTERMEDIATE ---
  {
    id: 6, level: 'Intermediate',
    code: `FROM python:3.12-slim AS builder
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

FROM python:3.12-slim
WORKDIR /app
COPY --from=builder /usr/local/lib/python3.12 /usr/local/lib/python3.12
COPY . .
CMD ["python", "recommender.py"]`,
    choices: [
      'A. It builds two separate images for production and development',
      'B. It uses a multi-stage build to keep the final image slim',
      'C. It raises an error — two FROM statements are not allowed',
      'D. It caches Python packages between builds',
    ],
    answer: 'B',
  },
  {
    id: 7, level: 'Intermediate',
    code: `version: "3.9"
services:
  api:
    image: streambox/api:latest
    ports:
      - "8080:3000"
    environment:
      - DATABASE_URL=postgres://db:5432/streambox
  db:
    image: postgres:15
    volumes:
      - pgdata:/var/lib/postgresql/data
volumes:
  pgdata:`,
    choices: [
      'A. It runs the API container only — db is ignored',
      'B. It starts an API and a Postgres database with a named volume for persistence',
      'C. It raises an error — services cannot reference each other by name',
      'D. It builds images from source before starting',
    ],
    answer: 'B',
  },
  {
    id: 8, level: 'Intermediate',
    code: `docker exec -it streambox-api sh`,
    choices: [
      'A. It restarts the streambox-api container',
      'B. It opens an interactive shell inside the running streambox-api container',
      'C. It copies files from the container to the host',
      'D. It streams the container logs',
    ],
    answer: 'B',
  },
  {
    id: 9, level: 'Intermediate',
    code: `HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1`,
    choices: [
      'A. It restarts the container every 30 seconds',
      'B. It checks the health endpoint every 30s and marks the container unhealthy after 3 failures',
      'C. It exposes port 3000 for health monitoring',
      'D. It raises an error — HEALTHCHECK requires root privileges',
    ],
    answer: 'B',
  },
  {
    id: 10, level: 'Intermediate',
    code: `docker system prune -af --volumes`,
    choices: [
      'A. It stops all running containers',
      'B. It removes all stopped containers, unused images, networks, and volumes',
      'C. It removes only dangling images',
      'D. It raises an error — --volumes requires sudo',
    ],
    answer: 'B',
  },
  // --- ADVANCED ---
  {
    id: 11, level: 'Advanced',
    code: `FROM ubuntu:22.04 AS ffmpeg-base
RUN apt-get update && apt-get install -y ffmpeg

FROM python:3.12-slim
COPY --from=ffmpeg-base /usr/bin/ffmpeg /usr/bin/ffmpeg
COPY --from=ffmpeg-base /usr/lib/x86_64-linux-gnu/libav* /usr/lib/x86_64-linux-gnu/
WORKDIR /app
COPY . .
CMD ["python", "encoder_worker.py"]`,
    choices: [
      'A. It installs ffmpeg in the final image using apt-get',
      'B. It copies only the ffmpeg binary and its libraries from a build stage into the slim final image',
      'C. It raises an error — COPY --from requires the same base image',
      'D. It builds two separate encoder images',
    ],
    answer: 'B',
  },
  {
    id: 12, level: 'Advanced',
    code: `docker run --rm \
  --memory="512m" \
  --cpus="1.5" \
  --read-only \
  --tmpfs /tmp \
  streambox/encoder:latest encode.sh`,
    choices: [
      'A. It runs the encoder with unlimited resources',
      'B. It runs the encoder with memory/CPU limits, a read-only filesystem, and a tmpfs for /tmp',
      'C. It raises an error — --read-only and --tmpfs cannot be combined',
      'D. It runs the encoder in privileged mode',
    ],
    answer: 'B',
  },
  {
    id: 13, level: 'Advanced',
    code: `docker buildx build \
  --platform linux/amd64,linux/arm64 \
  -t streambox/api:latest \
  --push .`,
    choices: [
      'A. It builds the image for the current platform only',
      'B. It builds a multi-platform image for amd64 and arm64 and pushes to the registry',
      'C. It raises an error — buildx requires Docker Desktop',
      'D. It builds two separate images with different tags',
    ],
    answer: 'B',
  },
  {
    id: 14, level: 'Advanced',
    code: `version: "3.9"
services:
  encoder:
    image: streambox/encoder:latest
    deploy:
      replicas: 4
      resources:
        limits:
          cpus: "2"
          memory: 1G
      restart_policy:
        condition: on-failure
        max_attempts: 3`,
    choices: [
      'A. It runs one encoder container and ignores the deploy section',
      'B. It defines a Docker Swarm service running 4 encoder replicas with resource limits',
      'C. It raises an error — replicas require Kubernetes',
      'D. It starts 4 containers and stops all on first failure',
    ],
    answer: 'B',
  },
  {
    id: 15, level: 'Advanced',
    code: `docker secret create db_password /run/secrets/db_password

version: "3.9"
services:
  api:
    image: streambox/api:latest
    secrets:
      - db_password
secrets:
  db_password:
    external: true`,
    choices: [
      'A. It stores the password as a plain environment variable',
      'B. It creates a Docker secret and mounts it into the API container securely',
      'C. It raises an error — secrets require TLS certificates',
      'D. It exposes the password through an API endpoint',
    ],
    answer: 'B',
  },
]

export default questions
