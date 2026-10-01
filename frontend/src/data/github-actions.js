const questions = [
  // --- BEGINNER ---
  {
    id: 1, level: 'Beginner',
    code: 'on:\n  push:\n    branches: [main]',
    choices: ['A. It runs the workflow on all branches', 'B. It triggers the workflow only when pushing to main', 'C. It creates the main branch automatically', 'D. It blocks pushes to main'],
    answer: 'B',
  },
  {
    id: 2, level: 'Beginner',
    code: 'jobs:\n  build:\n    runs-on: ubuntu-latest',
    choices: ['A. It builds on the latest Ubuntu server you own', 'B. It runs the job on a GitHub-hosted Ubuntu runner', 'C. It requires Ubuntu to be installed locally', 'D. It creates an Ubuntu Docker container'],
    answer: 'B',
  },
  {
    id: 3, level: 'Beginner',
    code: 'steps:\n  - uses: actions/checkout@v4',
    choices: ['A. It downloads the action source code', 'B. It creates a new branch for the workflow', 'C. It checks out the repository code so the workflow can access it', 'D. It commits changes made during the workflow'],
    answer: 'C',
  },
  {
    id: 4, level: 'Beginner',
    code: '- name: Install deps\n  run: npm install',
    choices: ['A. It installs npm on the runner', 'B. It runs npm install as a shell command in the workflow', 'C. It caches npm dependencies', 'D. It uploads node_modules as an artifact'],
    answer: 'B',
  },
  {
    id: 5, level: 'Beginner',
    code: 'on:\n  workflow_dispatch:',
    choices: ['A. It runs the workflow on every commit', 'B. It disables automatic triggers', 'C. It allows the workflow to be triggered manually from GitHub UI', 'D. It schedules a daily workflow run'],
    answer: 'C',
  },
  // --- INTERMEDIATE ---
  {
    id: 6, level: 'Intermediate',
    code: 'env:\n  NODE_ENV: production\n  API_URL: https://api.example.com',
    choices: ['A. It sets environment variables available only to that step', 'B. It sets environment variables for all steps in the job', 'C. It creates GitHub repository secrets', 'D. It stores values in the GitHub cache'],
    answer: 'B',
  },
  {
    id: 7, level: 'Intermediate',
    code: '- uses: actions/cache@v3\n  with:\n    path: ~/.npm\n    key: ${{ runner.os }}-node-${{ hashFiles(\'package-lock.json\') }}',
    choices: ['A. It uploads npm packages as a build artifact', 'B. It caches npm packages to speed up future runs', 'C. It installs packages from a private registry', 'D. It backs up the node_modules folder'],
    answer: 'B',
  },
  {
    id: 8, level: 'Intermediate',
    code: '- name: Deploy\n  if: github.ref == \'refs/heads/main\'',
    choices: ['A. It always runs the Deploy step', 'B. It skips the step on pull requests', 'C. It runs the step only when on the main branch', 'D. It creates the main branch ref'],
    answer: 'C',
  },
  {
    id: 9, level: 'Intermediate',
    code: '- name: Send token\n  run: echo ${{ secrets.API_TOKEN }}\n  env:\n    API_TOKEN: ${{ secrets.API_TOKEN }}',
    choices: ['A. It prints the secret value to the logs', 'B. It passes a repository secret as an environment variable to the step', 'C. It creates a new secret called API_TOKEN', 'D. It encrypts the output of the step'],
    answer: 'B',
  },
  {
    id: 10, level: 'Intermediate',
    code: 'on:\n  schedule:\n    - cron: \'0 2 * * *\'',
    choices: ['A. It runs the workflow every 2 minutes', 'B. It runs the workflow every day at 2 AM UTC', 'C. It runs the workflow every 2 hours', 'D. It schedules a deployment on the 2nd of every month'],
    answer: 'B',
  },
  // --- ADVANCED ---
  {
    id: 11, level: 'Advanced',
    code: 'strategy:\n  matrix:\n    node: [16, 18, 20]',
    choices: ['A. It runs the job three times in sequence', 'B. It runs the job in parallel for each Node.js version', 'C. It creates three separate workflows', 'D. It installs all three Node versions on one runner'],
    answer: 'B',
  },
  {
    id: 12, level: 'Advanced',
    code: 'jobs:\n  test:\n    runs-on: ubuntu-latest\n  deploy:\n    needs: test\n    runs-on: ubuntu-latest',
    choices: ['A. It runs test and deploy at the same time', 'B. It runs deploy only after test completes successfully', 'C. It skips test if deploy succeeds', 'D. It merges the test and deploy jobs into one'],
    answer: 'B',
  },
  {
    id: 13, level: 'Advanced',
    code: '- name: Set version\n  id: version\n  run: echo "tag=v1.0.0" >> $GITHUB_OUTPUT\n\n- name: Use version\n  run: echo ${{ steps.version.outputs.tag }}',
    choices: ['A. It creates a GitHub release at v1.0.0', 'B. It passes an output value between steps in the same job', 'C. It writes the version to a file', 'D. It tags the current commit as v1.0.0'],
    answer: 'B',
  },
  {
    id: 14, level: 'Advanced',
    code: '- uses: actions/upload-artifact@v3\n  with:\n    name: build-output\n    path: dist/',
    choices: ['A. It deploys the dist folder to a server', 'B. It uploads the dist folder so other jobs or runs can download it', 'C. It caches the dist folder for faster builds', 'D. It commits dist back to the repository'],
    answer: 'B',
  },
  {
    id: 15, level: 'Advanced',
    code: 'permissions:\n  contents: read\n  id-token: write',
    choices: ['A. It grants the workflow admin access to the repo', 'B. It sets least-privilege permissions for OIDC authentication', 'C. It allows the workflow to write files to the repo', 'D. It creates a deploy key with write access'],
    answer: 'B',
  },
]

export default questions
