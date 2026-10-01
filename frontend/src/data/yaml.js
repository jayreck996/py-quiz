const questions = [
  // --- BEGINNER ---
  {
    id: 1, level: 'Beginner',
    code: `app: streambox
version: "2.4.0"
region: us-east-1`,
    choices: [
      'A. It defines a YAML array of three items',
      'B. It defines three key-value pairs for the StreamBox app config',
      'C. It raises a parse error — values must be quoted',
      'D. It defines a nested YAML object',
    ],
    answer: 'B',
  },
  {
    id: 2, level: 'Beginner',
    code: `services:
  - encoding
  - cdn
  - metadata
  - billing`,
    choices: [
      'A. It defines a YAML object with four keys',
      'B. It defines a list of four StreamBox service names under the services key',
      'C. It raises a parse error — lists must use [] syntax',
      'D. It defines nested service objects',
    ],
    answer: 'B',
  },
  {
    id: 3, level: 'Beginner',
    code: `database:
  host: db.streambox.io
  port: 5432
  name: streambox_prod`,
    choices: [
      'A. It defines a flat list of database properties',
      'B. It defines a nested mapping with host, port, and name under database',
      'C. It raises a parse error — integers must be quoted',
      'D. It defines an array of database connections',
    ],
    answer: 'B',
  },
  {
    id: 4, level: 'Beginner',
    code: `# StreamBox CDN configuration
cdn:
  url: https://cdn.streambox.io
  ttl: 86400  # 24 hours in seconds`,
    choices: [
      'A. It raises a parse error — comments are not allowed in YAML',
      'B. It defines a CDN config with comments — the # lines are ignored by the parser',
      'C. It includes the comment text as part of the ttl value',
      'D. It requires the comment to match the value exactly',
    ],
    answer: 'B',
  },
  {
    id: 5, level: 'Beginner',
    code: `enabled: true
max_bitrate: 8000
use_hdr: false`,
    choices: [
      'A. It defines all values as strings',
      'B. It defines a boolean, integer, and boolean using native YAML types',
      'C. It raises a parse error — booleans must be 0 or 1',
      'D. It requires quotes around true and false',
    ],
    answer: 'B',
  },
  // --- INTERMEDIATE ---
  {
    id: 6, level: 'Intermediate',
    code: `apiVersion: v1
kind: ConfigMap
metadata:
  name: streambox-config
  namespace: production
data:
  CDN_URL: "https://cdn.streambox.io"
  MAX_CONCURRENT_STREAMS: "500"
  ENABLE_4K: "true"`,
    choices: [
      'A. It creates a Kubernetes Secret for sensitive configuration',
      'B. It defines a Kubernetes ConfigMap with three environment variable values',
      'C. It raises an error — ConfigMap values must be integers',
      'D. It defines a Deployment manifest with environment variables',
    ],
    answer: 'B',
  },
  {
    id: 7, level: 'Intermediate',
    code: `resolutions:
  - name: SD
    height: 480
    bitrate: 1000
  - name: HD
    height: 720
    bitrate: 3000
  - name: FHD
    height: 1080
    bitrate: 6000`,
    choices: [
      'A. It defines a flat list of resolution names',
      'B. It defines a list of objects each with name, height, and bitrate properties',
      'C. It raises a parse error — lists cannot contain mappings',
      'D. It defines three separate YAML documents',
    ],
    answer: 'B',
  },
  {
    id: 8, level: 'Intermediate',
    code: `defaults: &defaults
  timeout: 30
  retries: 3
  log_level: info

encoding_service:
  <<: *defaults
  timeout: 120
  workers: 8`,
    choices: [
      'A. It creates two completely independent service configs',
      'B. It uses YAML anchors to inherit defaults, then overrides timeout and adds workers',
      'C. It raises a parse error — << merge keys are not valid YAML',
      'D. It ignores the defaults block entirely',
    ],
    answer: 'B',
  },
  {
    id: 9, level: 'Intermediate',
    code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: streambox-cdn
spec:
  replicas: 3
  template:
    spec:
      containers:
        - name: cdn
          image: streambox/cdn:latest
          env:
            - name: ORIGIN_BUCKET
              valueFrom:
                configMapKeyRef:
                  name: streambox-config
                  key: ORIGIN_BUCKET`,
    choices: [
      'A. It hard-codes the ORIGIN_BUCKET value in the manifest',
      'B. It injects the ORIGIN_BUCKET env variable from a ConfigMap into the container',
      'C. It raises an error — env cannot use valueFrom in Deployments',
      'D. It creates a ConfigMap named streambox-config automatically',
    ],
    answer: 'B',
  },
  {
    id: 10, level: 'Intermediate',
    code: `volumes:
  - name: video-storage
    persistentVolumeClaim:
      claimName: streambox-videos-pvc
containers:
  - name: encoder
    image: streambox/encoder:latest
    volumeMounts:
      - name: video-storage
        mountPath: /mnt/videos`,
    choices: [
      'A. It creates an ephemeral volume that is deleted when the pod restarts',
      'B. It mounts a PersistentVolumeClaim into the encoder container at /mnt/videos',
      'C. It raises an error — volumes must be defined inside the container spec',
      'D. It creates the PVC automatically if it does not exist',
    ],
    answer: 'B',
  },
  // --- ADVANCED ---
  {
    id: 11, level: 'Advanced',
    code: `apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: streambox-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
    nginx.ingress.kubernetes.io/ssl-redirect: "true"
spec:
  rules:
    - host: api.streambox.io
      http:
        paths:
          - path: /videos
            pathType: Prefix
            backend:
              service:
                name: streambox-video-service
                port:
                  number: 80`,
    choices: [
      'A. It creates a load balancer that routes all traffic to one service',
      'B. It defines an Nginx ingress that routes /videos traffic to the video service with SSL redirect',
      'C. It raises an error — annotations cannot control SSL behavior',
      'D. It exposes port 443 directly on the pod',
    ],
    answer: 'B',
  },
  {
    id: 12, level: 'Advanced',
    code: `---
apiVersion: v1
kind: Service
metadata:
  name: streambox-api
spec:
  selector:
    app: streambox-api
  ports:
    - port: 80
      targetPort: 3000
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: streambox-api`,
    choices: [
      'A. It raises a parse error — multiple documents in one file are not allowed',
      'B. It defines two Kubernetes resources in a single YAML file separated by ---',
      'C. It creates a service that points to a deployment in a different file',
      'D. It merges the Service and Deployment into one resource',
    ],
    answer: 'B',
  },
  {
    id: 13, level: 'Advanced',
    code: `apiVersion: v1
kind: Secret
metadata:
  name: streambox-db-secret
type: Opaque
data:
  DB_PASSWORD: c3RyZWFtYm94c2VjcmV0
  DB_USER: c3RyZWFtYm94`,
    choices: [
      'A. It stores passwords in plain text inside Kubernetes',
      'B. It stores base64-encoded credentials as a Kubernetes Secret',
      'C. It raises an error — Secrets must use AES encryption',
      'D. It automatically rotates the credentials every 30 days',
    ],
    answer: 'B',
  },
  {
    id: 14, level: 'Advanced',
    code: `affinity:
  nodeAffinity:
    requiredDuringSchedulingIgnoredDuringExecution:
      nodeSelectorTerms:
        - matchExpressions:
            - key: gpu
              operator: In
              values:
                - "true"
  podAntiAffinity:
    preferredDuringSchedulingIgnoredDuringExecution:
      - weight: 100
        podAffinityTerm:
          labelSelector:
            matchLabels:
              app: streambox-encoder
          topologyKey: kubernetes.io/hostname`,
    choices: [
      'A. It schedules the pod on any available node',
      'B. It requires GPU nodes and prefers spreading encoder pods across different hosts',
      'C. It raises an error — nodeAffinity and podAntiAffinity cannot be combined',
      'D. It only applies affinity rules at pod creation, not during rescheduling',
    ],
    answer: 'B',
  },
  {
    id: 15, level: 'Advanced',
    code: `apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

resources:
  - deployment.yaml
  - service.yaml

images:
  - name: streambox/api
    newTag: "2.4.0"

configMapGenerator:
  - name: streambox-config
    envs:
      - config.env`,
    choices: [
      'A. It applies Helm chart values to the manifests',
      'B. It uses Kustomize to patch the image tag and generate a ConfigMap from an env file',
      'C. It raises an error — configMapGenerator requires a Kubernetes cluster connection',
      'D. It merges all YAML files into a single manifest',
    ],
    answer: 'B',
  },
]

export default questions
