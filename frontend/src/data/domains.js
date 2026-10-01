import python from './questions'
import typescript from './typescript'

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
}

export default DOMAINS
