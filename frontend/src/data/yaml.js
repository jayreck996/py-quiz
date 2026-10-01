const questions = [
  // --- BEGINNER ---
  {
    id: 1, level: 'Beginner',
    code: 'name: John\nage: 30\nactive: true',
    choices: ['A. It defines three variables in a script', 'B. It creates a YAML mapping with three key-value pairs', 'C. It declares a JSON object', 'D. It creates an array of three items'],
    answer: 'B',
  },
  {
    id: 2, level: 'Beginner',
    code: 'fruits:\n  - apple\n  - banana\n  - cherry',
    choices: ['A. It creates a nested mapping under fruits', 'B. It defines three separate variables', 'C. It defines a key fruits with a list of three items', 'D. It imports three modules'],
    answer: 'C',
  },
  {
    id: 3, level: 'Beginner',
    code: 'server:\n  host: localhost\n  port: 5432',
    choices: ['A. It defines a flat list of server properties', 'B. It creates a nested mapping with host and port under server', 'C. It starts a server on localhost', 'D. It declares two environment variables'],
    answer: 'B',
  },
  {
    id: 4, level: 'Beginner',
    code: 'enabled: true\ncount: 42\nlabel: "42"',
    choices: ['A. All three values are strings', 'B. enabled is boolean, count is integer, label is string', 'C. All three values are integers', 'D. YAML cannot distinguish between 42 and "42"'],
    answer: 'B',
  },
  {
    id: 5, level: 'Beginner',
    code: 'timeout: null\nretries: ~',
    choices: ['A. Both values are set to zero', 'B. Both values represent null — null and ~ are equivalent in YAML', 'C. ~ means an empty string in YAML', 'D. This is invalid YAML syntax'],
    answer: 'B',
  },
  // --- INTERMEDIATE ---
  {
    id: 6, level: 'Intermediate',
    code: 'description: |\n  Line one\n  Line two\n  Line three',
    choices: ['A. It creates a list of three lines', 'B. It defines a literal block scalar preserving newlines', 'C. It joins all lines into a single string without newlines', 'D. It creates three separate keys'],
    answer: 'B',
  },
  {
    id: 7, level: 'Intermediate',
    code: 'defaults: &defaults\n  timeout: 30\n  retries: 3\n\nproduction:\n  <<: *defaults\n  timeout: 60',
    choices: ['A. It copies defaults into production and overrides timeout', 'B. It creates two independent configurations', 'C. It merges production into defaults', 'D. It raises an error for duplicate timeout'],
    answer: 'A',
  },
  {
    id: 8, level: 'Intermediate',
    code: 'services:\n  db:\n    image: postgres\n    environment:\n      POSTGRES_DB: mydb\n      POSTGRES_PASSWORD: secret',
    choices: ['A. It defines a Docker Compose service with environment variables', 'B. It creates a Kubernetes ConfigMap', 'C. It defines environment variables for the host system', 'D. It starts a PostgreSQL server directly'],
    answer: 'A',
  },
  {
    id: 9, level: 'Intermediate',
    code: 'items:\n  - id: 1\n    name: Widget\n  - id: 2\n    name: Gadget',
    choices: ['A. It defines a list of two flat strings', 'B. It defines a list of two mappings each with id and name', 'C. It creates two separate YAML documents', 'D. It defines two nested lists'],
    answer: 'B',
  },
  {
    id: 10, level: 'Intermediate',
    code: 'message: >-\n  This is a very long\n  single line message',
    choices: ['A. It preserves newlines in the string', 'B. It folds the text into a single line and strips the trailing newline', 'C. It creates a list of two strings', 'D. It is invalid because of the dash after >'],
    answer: 'B',
  },
  // --- ADVANCED ---
  {
    id: 11, level: 'Advanced',
    code: 'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: myapp\nspec:\n  replicas: 3',
    choices: ['A. It defines a Docker Compose service', 'B. It defines a Kubernetes Deployment with 3 replicas', 'C. It creates a Helm chart', 'D. It configures a GitHub Actions job'],
    answer: 'B',
  },
  {
    id: 12, level: 'Advanced',
    code: 'on:\n  push:\n    branches:\n      - main\n      - \'release/**\'',
    choices: ['A. It triggers on pushes to main only', 'B. It triggers on pushes to main or any release/* branch', 'C. It triggers on all branches except main', 'D. It creates two separate GitHub Actions workflows'],
    answer: 'B',
  },
  {
    id: 13, level: 'Advanced',
    code: '---\ndocument: one\n---\ndocument: two',
    choices: ['A. It is invalid YAML with two root keys', 'B. It defines two separate YAML documents in a single file', 'C. It creates a list with two items', 'D. It comments out the second document'],
    answer: 'B',
  },
  {
    id: 14, level: 'Advanced',
    code: 'volumes:\n  - name: config-vol\n    configMap:\n      name: app-config\n      items:\n        - key: config.yaml\n          path: app.yaml',
    choices: ['A. It mounts a secret as a volume', 'B. It creates a ConfigMap from a file', 'C. It mounts a specific ConfigMap key as a file at a custom path', 'D. It creates a PersistentVolumeClaim'],
    answer: 'C',
  },
  {
    id: 15, level: 'Advanced',
    code: 'matrix:\n  include:\n    - os: ubuntu\n      node: 18\n    - os: windows\n      node: 20',
    choices: ['A. It runs jobs in sequence for each combination', 'B. It defines explicit matrix combinations for parallel CI runs', 'C. It creates two separate workflow files', 'D. It excludes ubuntu and windows from the matrix'],
    answer: 'B',
  },
]

export default questions
