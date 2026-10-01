import DOMAINS from './data/domains'
import useQuizStorage from './hooks/useQuizStorage'
import HomePage from './components/HomePage'
import QuizCard from './components/QuizCard'
import QuizFooter from './components/QuizFooter'
import ProgressPage from './components/ProgressPage'
import ResultScreen from './components/ResultScreen'
import { House } from 'lucide-react'

const DOMAIN_IDS = Object.keys(DOMAINS)

export default function App() {
  const {
    screen, activeDomain, current, score, answered, answers,
    setScreen, goToDomain, markAnswer, advance, jumpTo, getDomainStats, resetDomain,
  } = useQuizStorage(DOMAIN_IDS)

  const domain = DOMAINS[activeDomain]
  const questions = domain?.questions ?? []

  const homeDomains = DOMAIN_IDS.map(id => {
    const d = DOMAINS[id]
    const stats = getDomainStats(id)
    return { ...d, ...stats, total: d.questions.length }
  })

  return (
    <div className="app">
      {screen === 'home' && (
        <HomePage domains={homeDomains} onEnter={goToDomain} />
      )}

      {screen === 'quiz' && (
        <div className="quiz-wrap">
          <button className="btn-home" onClick={() => setScreen('home')} title="Home">
            <House size={16} />
          </button>
          <QuizCard
            key={`${activeDomain}-${current}`}
            question={questions[current]}
            index={current}
            total={questions.length}
            savedAnswer={answers[current]?.selected ?? null}
            onMark={markAnswer}
            onNext={() => advance(questions.length)}
          />
          <QuizFooter
            domain={domain}
            answered={answered}
            score={score}
            total={questions.length}
            onViewProgress={() => setScreen('progress')}
          />
        </div>
      )}

      {screen === 'progress' && (
        <ProgressPage
          questions={questions}
          answers={answers}
          current={current}
          onJump={jumpTo}
          onBack={() => setScreen('home')}
        />
      )}

      {screen === 'result' && (
        <ResultScreen
          score={score}
          total={questions.length}
          answers={answers}
          onRetry={resetDomain}
          onJump={jumpTo}
        />
      )}
    </div>
  )
}
