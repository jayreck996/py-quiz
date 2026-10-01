import questions from './data/questions'
import useQuizStorage from './hooks/useQuizStorage'
import HomePage from './components/HomePage'
import { House } from 'lucide-react'
import QuizCard from './components/QuizCard'
import ProgressBox from './components/ProgressBox'
import ProgressPage from './components/ProgressPage'
import ResultScreen from './components/ResultScreen'

const DOMAINS = (answered, total, score, current) => [
  {
    id: 'python',
    name: 'Python',
    icon: '🐍',
    description: 'Zero to Hero',
    tag: 'Beginner → Advanced',
    total,
    answered,
    score,
    current,
  },
]

export default function App() {
  const { screen, current, score, answered, answers, setScreen, markAnswer, advance, jumpTo, reset } = useQuizStorage(questions.length)

  const domains = DOMAINS(answered, questions.length, score, current)

  return (
    <div className="app">
      {screen === 'home' && (
        <HomePage
          domains={domains}
          onEnter={() => setScreen('quiz')}
        />
      )}

      {screen === 'quiz' && (
        <div className="quiz-wrap">
          <button className="btn-home" onClick={() => setScreen('home')} title="Home"><House size={16} /></button>
          <QuizCard
            key={current}
            question={questions[current]}
            index={current}
            total={questions.length}
            savedAnswer={answers[current]?.selected ?? null}
            onMark={markAnswer}
            onNext={advance}
          />
          <ProgressBox
            domain="Python"
            answered={answered}
            total={questions.length}
            score={score}
            current={current}
            onClick={() => setScreen('progress')}
          />
        </div>
      )}

      {screen === 'progress' && (
        <ProgressPage
          answers={answers}
          current={current}
          onJump={jumpTo}
          onBack={() => setScreen('quiz')}
        />
      )}

      {screen === 'result' && (
        <ResultScreen
          score={score}
          total={questions.length}
          answers={answers}
          onRetry={reset}
          onJump={jumpTo}
        />
      )}
    </div>
  )
}
