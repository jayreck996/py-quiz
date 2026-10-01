export default function QuizNav({ total, current, answers, onJump }) {
  return (
    <div className="quiz-nav">
      {Array.from({ length: total }, (_, i) => {
        const ans = answers[i]
        const isCurrent = i === current
        let cls = 'nav-dot'
        if (isCurrent) cls += ' nav-current'
        else if (ans?.correct) cls += ' nav-correct'
        else if (ans && !ans.correct) cls += ' nav-wrong'
        return (
          <button key={i} className={cls} onClick={() => onJump(i)} title={`Question ${i + 1}`}>
            {i + 1}
          </button>
        )
      })}
    </div>
  )
}
