const questions = [
  // --- BEGINNER ---
  {
    id: 1, level: 'Beginner',
    code: 'docker run -d -p 80:8080 nginx',
    choices: ['A. It builds an nginx image on port 80', 'B. It runs nginx in the foreground on port 8080', 'C. It runs nginx in the background and maps host 80 to container 8080', 'D. It stops an nginx container on port 80'],
    answer: 'C',
  },
  {
    id: 2, level: 'Beginner',
    code: 'docker ps',
    choices: ['A. It lists all images on the system', 'B. It shows all currently running containers', 'C. It displays Docker system resource usage', 'D. It lists all stopped containers'],
    answer: 'B',
  },
  {
    id: 3, level: 'Beginner',
    code: 'docker build -t myapp:1.0 .',
    choices: ['A. It pulls an image called myapp version 1.0', 'B. It runs the app from the current directory', 'C. It builds an image tagged myapp:1.0 from the current directory', 'D. It pushes the image to Docker Hub'],
    answer: 'C',
  },
  {
    id: 4, level: 'Beginner',
    code: 'FROM node:18-alpine',
    choices: ['A. It installs Node.js 18 on the host machine', 'B. It sets the base image for the container', 'C. It runs a Node.js 18 container', 'D. It copies files from a Node.js image'],
    answer: 'B',
  },
  {
    id: 5, level: 'Beginner',
    code: 'docker stop abc123\ndocker rm abc123',
    choices: ['A. It pauses and then deletes the image', 'B. It kills the container immediately', 'C. It stops the running container then removes it', 'D. It restarts the container with a new ID'],
    answer: 'C',
  },
  // --- INTERMEDIATE ---
  {
    id: 6, level: 'Intermediate',
    code: 'COPY package*.json ./\nRUN npm install\nCOPY . .',
    choices: ['A. It copies all files before installing dependencies', 'B. It runs npm install on the host then copies the result', 'C. It copies package files first to cache the install layer', 'D. It installs npm before copying any files'],
    answer: 'C',
  },
  {
    id: 7, level: 'Intermediate',
    code: 'docker exec -it mycontainer bash',
    choices: ['A. It creates a new container running bash', 'B. It opens an interactive bash session inside a running container', 'C. It runs bash as the container entry point', 'D. It copies bash into the container'],
    answer: 'B',
  },
  {
    id: 8, level: 'Intermediate',
    code: 'docker volume create pgdata\ndocker run -v pgdata:/var/lib/postgresql/data postgres',
    choices: ['A. It mounts a host directory into the container', 'B. It creates a named volume and mounts it for persistent data', 'C. It backs up the PostgreSQL data', 'D. It shares the volume between two containers'],
    answer: 'B',
  },
  {
    id: 9, level: 'Intermediate',
    code: 'ENV NODE_ENV=production\nENV PORT=3000',
    choices: ['A. It sets environment variables on the host', 'B. It creates two files in the container', 'C. It bakes environment variables into the image', 'D. It overrides the container entry point'],
    answer: 'C',
  },
  {
    id: 10, level: 'Intermediate',
    code: 'docker-compose up -d --build',
    choices: ['A. It stops all running services', 'B. It starts services in the foreground and rebuilds images', 'C. It starts services in the background and rebuilds images', 'D. It updates docker-compose to the latest version'],
    answer: 'C',
  },
  // --- ADVANCED ---
  {
    id: 11, level: 'Advanced',
    code: 'FROM node:18 AS builder\nRUN npm run build\n\nFROM nginx:alpine\nCOPY --from=builder /app/dist /usr/share/nginx/html',
    choices: ['A. It runs two containers simultaneously', 'B. It uses multi-stage build to copy only the build output into nginx', 'C. It creates two separate images', 'D. It builds the app and then deletes the source code'],
    answer: 'B',
  },
  {
    id: 12, level: 'Advanced',
    code: 'HEALTHCHECK --interval=30s --timeout=5s \\\n  CMD curl -f http://localhost/health || exit 1',
    choices: ['A. It exposes a health endpoint on port 80', 'B. It restarts the container every 30 seconds', 'C. It defines a health check Docker runs every 30 seconds', 'D. It logs health status to a file'],
    answer: 'C',
  },
  {
    id: 13, level: 'Advanced',
    code: 'docker network create --driver bridge mynet\ndocker run --network mynet myapp',
    choices: ['A. It connects the container to the host network', 'B. It creates a custom bridge network and runs a container on it', 'C. It exposes the container to the internet', 'D. It links two containers with environment variables'],
    answer: 'B',
  },
  {
    id: 14, level: 'Advanced',
    code: 'docker system prune -a --volumes',
    choices: ['A. It removes only stopped containers', 'B. It removes unused images, containers, networks, and volumes', 'C. It resets Docker to factory defaults', 'D. It removes only dangling images'],
    answer: 'B',
  },
  {
    id: 15, level: 'Advanced',
    code: 'ENTRYPOINT ["node", "server.js"]\nCMD ["--port", "3000"]',
    choices: ['A. It runs two separate processes in the container', 'B. It sets a fixed command that cannot be overridden', 'C. It sets a fixed entry point with overridable default arguments', 'D. It runs node only if server.js exists'],
    answer: 'C',
  },
]

export default questions
