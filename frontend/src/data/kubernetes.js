const questions = [
  // --- BEGINNER ---
  {
    id: 1, level: 'Beginner',
    code: 'kubectl get pods',
    choices: ['A. It creates a new pod', 'B. It lists all running pods in the current namespace', 'C. It shows logs for all pods', 'D. It deletes all pods'],
    answer: 'B',
  },
  {
    id: 2, level: 'Beginner',
    code: 'kubectl apply -f deployment.yaml',
    choices: ['A. It validates the YAML file without applying it', 'B. It deletes the resource defined in the file', 'C. It creates or updates resources defined in the manifest', 'D. It runs the deployment in dry-run mode'],
    answer: 'C',
  },
  {
    id: 3, level: 'Beginner',
    code: 'kubectl logs my-pod --tail=50',
    choices: ['A. It shows the last 50 lines of the pod logs', 'B. It saves the last 50 log lines to a file', 'C. It streams all logs from the last 50 minutes', 'D. It deletes old log entries'],
    answer: 'A',
  },
  {
    id: 4, level: 'Beginner',
    code: 'kubectl describe pod my-pod',
    choices: ['A. It shows only the pod IP address', 'B. It edits the pod configuration', 'C. It shows detailed info including events and status', 'D. It restarts the pod'],
    answer: 'C',
  },
  {
    id: 5, level: 'Beginner',
    code: 'kubectl delete pod my-pod',
    choices: ['A. It stops the pod without removing it', 'B. It removes the pod and Kubernetes recreates it if managed by a Deployment', 'C. It permanently removes the Deployment', 'D. It drains the node running the pod'],
    answer: 'B',
  },
  // --- INTERMEDIATE ---
  {
    id: 6, level: 'Intermediate',
    code: 'kubectl scale deployment myapp --replicas=5',
    choices: ['A. It restarts 5 pods of the deployment', 'B. It sets the desired number of running pods to 5', 'C. It creates 5 new deployments', 'D. It limits the deployment to 5 CPU cores'],
    answer: 'B',
  },
  {
    id: 7, level: 'Intermediate',
    code: 'livenessProbe:\n  httpGet:\n    path: /healthz\n    port: 8080\n  initialDelaySeconds: 10',
    choices: ['A. It routes traffic only after the pod is healthy', 'B. It restarts the container if /healthz fails', 'C. It exposes /healthz on port 8080 externally', 'D. It logs health check results to stdout'],
    answer: 'B',
  },
  {
    id: 8, level: 'Intermediate',
    code: 'kubectl exec -it my-pod -- /bin/sh',
    choices: ['A. It copies files into the pod', 'B. It opens an interactive shell session inside the running pod', 'C. It runs a one-off command and exits', 'D. It attaches to the pod main process'],
    answer: 'B',
  },
  {
    id: 9, level: 'Intermediate',
    code: 'envFrom:\n  - configMapRef:\n      name: app-config',
    choices: ['A. It mounts the ConfigMap as a file', 'B. It injects all ConfigMap keys as environment variables', 'C. It creates a new ConfigMap named app-config', 'D. It imports secrets from the ConfigMap'],
    answer: 'B',
  },
  {
    id: 10, level: 'Intermediate',
    code: 'kubectl port-forward pod/my-pod 8080:80',
    choices: ['A. It exposes port 80 to the public internet', 'B. It forwards host port 8080 to the pod port 80 locally', 'C. It creates a Service exposing port 80', 'D. It maps pod port 80 to node port 8080'],
    answer: 'B',
  },
  // --- ADVANCED ---
  {
    id: 11, level: 'Advanced',
    code: 'resources:\n  requests:\n    memory: "128Mi"\n    cpu: "250m"\n  limits:\n    memory: "256Mi"\n    cpu: "500m"',
    choices: ['A. It sets the minimum and maximum node size', 'B. It defines CPU and memory requests and hard limits for the container', 'C. It allocates a dedicated node for the pod', 'D. It sets disk I/O limits'],
    answer: 'B',
  },
  {
    id: 12, level: 'Advanced',
    code: 'kubectl rollout undo deployment/myapp',
    choices: ['A. It deletes the current deployment', 'B. It rolls back the deployment to the previous revision', 'C. It pauses the current rollout', 'D. It restarts all pods in the deployment'],
    answer: 'B',
  },
  {
    id: 13, level: 'Advanced',
    code: 'kind: HorizontalPodAutoscaler\nspec:\n  maxReplicas: 10\n  metrics:\n  - type: Resource\n    resource:\n      name: cpu\n      target:\n        averageUtilization: 70',
    choices: ['A. It limits the cluster to 10 nodes', 'B. It scales pods automatically based on CPU usage', 'C. It sets a fixed replica count of 10', 'D. It throttles CPU usage to 70 percent'],
    answer: 'B',
  },
  {
    id: 14, level: 'Advanced',
    code: 'kind: PersistentVolumeClaim\nspec:\n  accessModes: [ReadWriteOnce]\n  resources:\n    requests:\n      storage: 5Gi',
    choices: ['A. It creates a 5GB disk on the node', 'B. It requests 5GB of persistent storage for a pod', 'C. It mounts a 5GB host directory', 'D. It limits pod storage to 5GB'],
    answer: 'B',
  },
  {
    id: 15, level: 'Advanced',
    code: 'kubectl taint nodes node1 key=value:NoSchedule',
    choices: ['A. It labels the node for scheduling preference', 'B. It prevents pods without a matching toleration from being scheduled on node1', 'C. It drains the node and marks it unschedulable', 'D. It assigns the node to a specific namespace'],
    answer: 'B',
  },
]

export default questions
