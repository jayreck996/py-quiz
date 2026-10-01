const questions = [
  // --- BEGINNER ---
  {
    id: 1, level: 'Beginner',
    code: `name: Deploy StreamBox API

on:
  push:
    branches:
      - main`,
    choices: [
      'A. It runs the workflow on all branch pushes',
      'B. It triggers the workflow only when code is pushed to main',
      'C. It runs the workflow on pull requests to main',
      'D. It schedules the workflow to run daily',
    ],
    answer: 'B',
  },
  {
    id: 2, level: 'Beginner',
    code: `jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm install
      - run: npm test`,
    choices: [
      'A. It builds and pushes a Docker image',
      'B. It checks out the code, installs dependencies, and runs tests on Ubuntu',
      'C. It deploys the app to production',
      'D. It raises an error — npm commands require Node.js setup step',
    ],
    answer: 'B',
  },
  {
    id: 3, level: 'Beginner',
    code: `- name: Set up Node.js
  uses: actions/setup-node@v4
  with:
    node-version: "20"`,
    choices: [
      'A. It installs Node.js 20 globally on the runner',
      'B. It configures the runner to use Node.js 20 for subsequent steps',
      'C. It raises an error — Node.js is pre-installed on ubuntu-latest',
      'D. It caches the Node.js installation',
    ],
    answer: 'B',
  },
  {
    id: 4, level: 'Beginner',
    code: `- name: Log in to Docker Hub
  uses: docker/login-action@v3
  with:
    username: \${{ secrets.DOCKER_USERNAME }}
    password: \${{ secrets.DOCKER_TOKEN }}`,
    choices: [
      'A. It stores Docker credentials as plain text in the workflow',
      'B. It authenticates to Docker Hub using encrypted repository secrets',
      'C. It creates a new Docker Hub account',
      'D. It raises an error — secrets cannot be used in action inputs',
    ],
    answer: 'B',
  },
  {
    id: 5, level: 'Beginner',
    code: `on:
  schedule:
    - cron: "0 3 * * *"`,
    choices: [
      'A. It runs the workflow every 3 minutes',
      'B. It runs the workflow daily at 3:00 AM UTC',
      'C. It runs the workflow on the 3rd of every month',
      'D. It raises an error — schedules require a specific branch',
    ],
    answer: 'B',
  },
  // --- INTERMEDIATE ---
  {
    id: 6, level: 'Intermediate',
    code: `jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci && npm test

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: docker build -t streambox/api .`,
    choices: [
      'A. It runs test and build jobs in parallel',
      'B. It runs build only after test passes successfully',
      'C. It raises an error — needs cannot reference same-workflow jobs',
      'D. It skips the build job if tests fail silently',
    ],
    answer: 'B',
  },
  {
    id: 7, level: 'Intermediate',
    code: `- name: Cache node modules
  uses: actions/cache@v4
  with:
    path: ~/.npm
    key: \${{ runner.os }}-node-\${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      \${{ runner.os }}-node-`,
    choices: [
      'A. It caches the entire repository for faster checkout',
      'B. It caches npm packages and restores the cache on subsequent runs',
      'C. It raises an error — cache keys cannot use hashFiles',
      'D. It permanently stores node_modules in the runner',
    ],
    answer: 'B',
  },
  {
    id: 8, level: 'Intermediate',
    code: `strategy:
  matrix:
    node-version: [18, 20, 22]
    os: [ubuntu-latest, windows-latest]`,
    choices: [
      'A. It runs the job once with all combinations sequentially',
      'B. It runs the job for each Node/OS combination — 6 jobs in parallel',
      'C. It raises an error — matrix cannot combine versions and OS',
      'D. It picks the fastest combination and skips the rest',
    ],
    answer: 'B',
  },
  {
    id: 9, level: 'Intermediate',
    code: `- name: Build and push encoder image
  uses: docker/build-push-action@v5
  with:
    context: .
    push: true
    tags: |
      streambox/encoder:latest
      streambox/encoder:\${{ github.sha }}`,
    choices: [
      'A. It builds the image locally without pushing',
      'B. It builds and pushes the encoder image tagged with both latest and the commit SHA',
      'C. It raises an error — two tags cannot be specified',
      'D. It only pushes if the image changed since the last build',
    ],
    answer: 'B',
  },
  {
    id: 10, level: 'Intermediate',
    code: `- name: Deploy to Kubernetes
  run: |
    echo "\${{ secrets.KUBECONFIG }}" | base64 -d > kubeconfig.yaml
    kubectl --kubeconfig kubeconfig.yaml set image \
      deployment/streambox-api \
      api=streambox/api:\${{ github.sha }}`,
    choices: [
      'A. It creates a new Kubernetes cluster on each deploy',
      'B. It decodes the kubeconfig secret and updates the API deployment image to the new commit',
      'C. It raises an error — kubectl cannot be used in GitHub Actions',
      'D. It rolls back the deployment to the previous commit',
    ],
    answer: 'B',
  },
  // --- ADVANCED ---
  {
    id: 11, level: 'Advanced',
    code: `jobs:
  deploy:
    environment:
      name: production
      url: https://streambox.io
    runs-on: ubuntu-latest
    steps:
      - name: Deploy
        run: ./deploy.sh`,
    choices: [
      'A. It skips deployment approval and deploys directly',
      'B. It requires manual approval via the production environment protection rules before deploying',
      'C. It raises an error — environment URLs must point to the runner',
      'D. It creates the production environment automatically',
    ],
    answer: 'B',
  },
  {
    id: 12, level: 'Advanced',
    code: `- name: Run E2E tests
  uses: ./.github/actions/e2e-test
  with:
    base_url: \${{ vars.STAGING_URL }}
    timeout: "300"
  env:
    TEST_USER_TOKEN: \${{ secrets.E2E_TOKEN }}`,
    choices: [
      'A. It runs a third-party E2E testing action from the marketplace',
      'B. It runs a local composite action defined in the repository',
      'C. It raises an error — local actions require the uses: local prefix',
      'D. It skips the step if STAGING_URL is not set',
    ],
    answer: 'B',
  },
  {
    id: 13, level: 'Advanced',
    code: `- name: Notify Slack on failure
  if: failure()
  uses: slackapi/slack-github-action@v1
  with:
    payload: |
      {
        "text": "StreamBox deploy failed on \${{ github.ref }}",
        "channel": "#ops-alerts"
      }
  env:
    SLACK_BOT_TOKEN: \${{ secrets.SLACK_BOT_TOKEN }}`,
    choices: [
      'A. It always sends a Slack notification regardless of job status',
      'B. It sends a Slack alert only when the job has failed',
      'C. It raises an error — if: failure() cannot be used on individual steps',
      'D. It sends the notification before the job completes',
    ],
    answer: 'B',
  },
  {
    id: 14, level: 'Advanced',
    code: `jobs:
  canary:
    runs-on: ubuntu-latest
    outputs:
      version: \${{ steps.tag.outputs.version }}
    steps:
      - id: tag
        run: echo "version=\${{ github.sha }}" >> \$GITHUB_OUTPUT

  deploy:
    needs: canary
    runs-on: ubuntu-latest
    steps:
      - run: echo "Deploying version \${{ needs.canary.outputs.version }}"`,
    choices: [
      'A. It raises an error — job outputs cannot be strings',
      'B. It passes the commit SHA from the canary job to the deploy job via outputs',
      'C. It only runs the deploy job in parallel with canary',
      'D. It stores the version in the workflow environment permanently',
    ],
    answer: 'B',
  },
  {
    id: 15, level: 'Advanced',
    code: `on:
  workflow_call:
    inputs:
      image_tag:
        required: true
        type: string
    secrets:
      kubeconfig:
        required: true

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo "\${{ secrets.kubeconfig }}" | base64 -d > kube.yaml
          kubectl --kubeconfig kube.yaml set image \
            deployment/api api=streambox/api:\${{ inputs.image_tag }}`,
    choices: [
      'A. It creates a standalone workflow that triggers on pull requests',
      'B. It defines a reusable workflow that other workflows can call with an image tag and kubeconfig',
      'C. It raises an error — workflow_call cannot accept secrets',
      'D. It runs the deploy step only when image_tag matches a semver pattern',
    ],
    answer: 'B',
  },
]

export default questions
