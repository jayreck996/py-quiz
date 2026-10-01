import { useState } from 'react'

const KEY = 'py-quiz'

function load() {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    // discard stale data from old format (had "score" instead of "answers")
    if (!parsed.answers) return null
    return parsed
  } catch {
    return null
  }
}

function save(state) {
  localStorage.setItem(KEY, JSON.stringify(state))
}

function clear() {
  localStorage.removeItem(KEY)
}

export default function useQuizStorage(totalQuestions) {
  const saved = load()

  const [screen, setScreenState] = useState(() => {
    const s = saved?.screen
    if (!s || s === 'start') return 'home'
    return s
  })
  const [current, setCurrentState] = useState(() => saved?.current ?? 0)
  const [answers, setAnswersState] = useState(() => saved?.answers ?? {})

  const score = Object.values(answers).filter(a => a.correct).length
  const answered = Object.keys(answers).length

  const setScreen = (s) => {
    setScreenState(s)
    save({ screen: s, current, answers })
  }

  const markAnswer = (index, selectedLetter, isCorrect) => {
    const newAnswers = { ...answers, [index]: { selected: selectedLetter, correct: isCorrect } }
    setAnswersState(newAnswers)
    save({ screen, current, answers: newAnswers })
  }

  const advance = () => {
    const newCurrent = current + 1
    const allDone = newCurrent >= totalQuestions

    if (allDone) {
      setScreenState('result')
      save({ screen: 'result', current: newCurrent, answers })
    } else {
      setCurrentState(newCurrent)
      save({ screen: 'quiz', current: newCurrent, answers })
    }
  }

  const jumpTo = (index) => {
    setCurrentState(index)
    setScreenState('quiz')
    save({ screen: 'quiz', current: index, answers })
  }

  const removeAnswer = (index) => {
    const newAnswers = { ...answers }
    delete newAnswers[index]
    setAnswersState(newAnswers)
    save({ screen, current, answers: newAnswers })
  }

  const reset = () => {
    clear()
    setScreenState('home')
    setCurrentState(0)
    setAnswersState({})
  }

  return { screen, current, score, answered, answers, totalQuestions, setScreen, markAnswer, advance, jumpTo, removeAnswer, reset }
}
