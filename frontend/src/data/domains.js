import python from './questions'
import typescript from './typescript'
import bash from './bash'
import git from './git'
import docker from './docker'
import kubernetes from './kubernetes'
import terraform from './terraform'
import githubActions from './github-actions'
import sql from './sql'
import yaml from './yaml'

const DOMAINS = {
  python: {
    id: 'python',
    name: 'Python',
    icon: '🐍',
    description: 'Zero to Hero',
    tag: 'Beginner → Advanced',
    questions: python,
  },
  typescript: {
    id: 'typescript',
    name: 'TypeScript',
    icon: '🔷',
    description: 'Types & Beyond',
    tag: 'Beginner → Advanced',
    questions: typescript,
  },
  bash: {
    id: 'bash',
    name: 'Bash',
    icon: '💻',
    description: 'Shell Scripting',
    tag: 'Beginner → Advanced',
    questions: bash,
  },
  git: {
    id: 'git',
    name: 'Git',
    icon: '🌿',
    description: 'Version Control',
    tag: 'Beginner → Advanced',
    questions: git,
  },
  docker: {
    id: 'docker',
    name: 'Docker',
    icon: '🐳',
    description: 'Containers',
    tag: 'Beginner → Advanced',
    questions: docker,
  },
  kubernetes: {
    id: 'kubernetes',
    name: 'Kubernetes',
    icon: '☸️',
    description: 'Container Orchestration',
    tag: 'Beginner → Advanced',
    questions: kubernetes,
  },
  terraform: {
    id: 'terraform',
    name: 'Terraform',
    icon: '🏗️',
    description: 'Infrastructure as Code',
    tag: 'Beginner → Advanced',
    questions: terraform,
  },
  'github-actions': {
    id: 'github-actions',
    name: 'GitHub Actions',
    icon: '⚙️',
    description: 'CI/CD Pipelines',
    tag: 'Beginner → Advanced',
    questions: githubActions,
  },
  sql: {
    id: 'sql',
    name: 'SQL',
    icon: '🗄️',
    description: 'Database Queries',
    tag: 'Beginner → Advanced',
    questions: sql,
  },
  yaml: {
    id: 'yaml',
    name: 'YAML',
    icon: '📄',
    description: 'Config & Manifests',
    tag: 'Beginner → Advanced',
    questions: yaml,
  },
}

export default DOMAINS
