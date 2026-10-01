const questions = [
  // --- BEGINNER ---
  {
    id: 1, level: 'Beginner',
    code: `kubectl get pods -n streambox`,
    choices: [
      'A. It deletes all pods in the streambox namespace',
      'B. It lists all running pods in the streambox namespace',
      'C. It restarts all pods in the namespace',
      'D. It shows pod resource usage',
    ],
    answer: 'B',
  },
  {
    id: 2, level: 'Beginner',
    code: `kubectl apply -f deployment.yaml`,
    choices: [
      'A. It deletes the resources defined in deployment.yaml',
      'B. It creates or updates Kubernetes resources defined in deployment.yaml',
      'C. It validates the YAML without applying changes',
      'D. It rolls back to the previous deployment',
    ],
    answer: 'B',
  },
  {
    id: 3, level: 'Beginner',
    code: `kubectl scale deployment streambox-api --replicas=5`,
    choices: [
      'A. It deletes 5 pods from the deployment',
      'B. It scales the streambox-api deployment to 5 replicas',
      'C. It restarts the deployment with 5 new pods',
      'D. It limits the deployment to 5 concurrent requests',
    ],
    answer: 'B',
  },
  {
    id: 4, level: 'Beginner',
    code: `kubectl logs streambox-encoder-7d4f9b-xk2pq`,
    choices: [
      'A. It deletes the pod logs',
      'B. It prints the logs from the specified encoder pod',
      'C. It streams live metrics from the pod',
      'D. It exports logs to a file',
    ],
    answer: 'B',
  },
  {
    id: 5, level: 'Beginner',
    code: `kubectl describe service streambox-cdn`,
    choices: [
      'A. It deletes the streambox-cdn service',
      'B. It shows detailed information about the streambox-cdn service',
      'C. It restarts all pods behind the service',
      'D. It exposes the service to the internet',
    ],
    answer: 'B',
  },
  // --- INTERMEDIATE ---
  {
    id: 6, level: 'Intermediate',
    code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: streambox-api
spec:
  replicas: 3
  selector:
    matchLabels:
      app: streambox-api
  template:
    metadata:
      labels:
        app: streambox-api
    spec:
      containers:
      - name: api
        image: streambox/api:v2.4.0
        ports:
        - containerPort: 3000`,
    choices: [
      'A. It creates a single pod running the StreamBox API',
      'B. It deploys 3 replicas of the API container and manages pod recreation',
      'C. It raises an error — containerPort must match the service port',
      'D. It creates a StatefulSet for the API',
    ],
    answer: 'B',
  },
  {
    id: 7, level: 'Intermediate',
    code: `kubectl rollout undo deployment/streambox-api`,
    choices: [
      'A. It deletes the streambox-api deployment',
      'B. It rolls back the deployment to the previous revision',
      'C. It pauses the current rollout',
      'D. It restarts all pods without changing the image',
    ],
    answer: 'B',
  },
  {
    id: 8, level: 'Intermediate',
    code: `apiVersion: v1
kind: ConfigMap
metadata:
  name: streambox-config
data:
  CDN_URL: "https://cdn.streambox.io"
  MAX_BITRATE: "8000"
  REGION: "us-east-1"`,
    choices: [
      'A. It stores secrets encrypted in etcd',
      'B. It stores non-sensitive configuration as key-value pairs for pods to consume',
      'C. It raises an error — ConfigMap values must be integers',
      'D. It creates environment variables directly on the node',
    ],
    answer: 'B',
  },
  {
    id: 9, level: 'Intermediate',
    code: `resources:
  requests:
    memory: "256Mi"
    cpu: "250m"
  limits:
    memory: "512Mi"
    cpu: "1000m"`,
    choices: [
      'A. It sets a hard cap on the number of pods',
      'B. It defines resource requests for scheduling and limits to prevent overconsumption',
      'C. It raises an error — memory and cpu cannot be defined together',
      'D. It allocates dedicated nodes for the container',
    ],
    answer: 'B',
  },
  {
    id: 10, level: 'Intermediate',
    code: `livenessProbe:
  httpGet:
    path: /health
    port: 3000
  initialDelaySeconds: 10
  periodSeconds: 15
readinessProbe:
  httpGet:
    path: /ready
    port: 3000
  initialDelaySeconds: 5
  periodSeconds: 10`,
    choices: [
      'A. It exposes port 3000 to external traffic',
      'B. It configures liveness and readiness checks to manage pod health and traffic routing',
      'C. It raises an error — two probes cannot use the same port',
      'D. It restarts the pod every 15 seconds',
    ],
    answer: 'B',
  },
  // --- ADVANCED ---
  {
    id: 11, level: 'Advanced',
    code: `apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: streambox-encoder-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: streambox-encoder
  minReplicas: 2
  maxReplicas: 20
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70`,
    choices: [
      'A. It always runs 20 encoder pods',
      'B. It auto-scales the encoder between 2 and 20 pods based on 70% CPU utilization',
      'C. It raises an error — HPA cannot target Deployments',
      'D. It scales down to 0 when CPU is below 70%',
    ],
    answer: 'B',
  },
  {
    id: 12, level: 'Advanced',
    code: `apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: streambox-api-policy
spec:
  podSelector:
    matchLabels:
      app: streambox-api
  policyTypes:
  - Ingress
  ingress:
  - from:
    - podSelector:
        matchLabels:
          app: streambox-gateway
    ports:
    - port: 3000`,
    choices: [
      'A. It allows all pods to reach the API on port 3000',
      'B. It restricts API ingress to only the streambox-gateway pods on port 3000',
      'C. It raises an error — NetworkPolicy requires Calico CNI',
      'D. It exposes port 3000 to the internet',
    ],
    answer: 'B',
  },
  {
    id: 13, level: 'Advanced',
    code: `kubectl top pods -n streambox --sort-by=memory | head -5`,
    choices: [
      'A. It restarts the 5 pods using the most memory',
      'B. It lists the top 5 pods by memory consumption in the streambox namespace',
      'C. It raises an error — top requires the metrics-server to be installed',
      'D. It deletes pods exceeding the memory limit',
    ],
    answer: 'B',
  },
  {
    id: 14, level: 'Advanced',
    code: `apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: streambox-api-pdb
spec:
  minAvailable: 2
  selector:
    matchLabels:
      app: streambox-api`,
    choices: [
      'A. It ensures at most 2 API pods are running at any time',
      'B. It guarantees at least 2 API pods remain available during voluntary disruptions',
      'C. It raises an error — PDB requires cluster-admin role',
      'D. It restarts pods if fewer than 2 are running',
    ],
    answer: 'B',
  },
  {
    id: 15, level: 'Advanced',
    code: `kubectl debug -it streambox-encoder-abc123 \
  --image=busybox \
  --target=encoder \
  --copy-to=debug-pod`,
    choices: [
      'A. It deletes the encoder pod and replaces it with a busybox pod',
      'B. It creates a debug copy of the pod with a busybox sidecar for live troubleshooting',
      'C. It raises an error — kubectl debug requires cluster-admin',
      'D. It attaches a shell to the existing encoder container',
    ],
    answer: 'B',
  },
]

export default questions
