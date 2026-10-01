import questions from './data/questions'
import useQuizStorage from './hooks/useQuizStorage'
import QuizCard from './components/QuizCard'
import ProgressBox from './components/ProgressBox'
import ProgressPage from './components/ProgressPage'
import ResultScreen from './components/ResultScreen'

export default function App() {
  const { screen, current, score, answered, answers, setScreen, markAnswer, advance, jumpTo, reset } = useQuizStorage(questions.length)

  return (
    <div className="app">
      {screen === 'quiz' && (
        <div className="quiz-wrap">
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
