export default function ResultScreen({ score, total, onRetry }) {
  const pct = Math.round((score / total) * 100)

  const message = () => {
    if (pct === 100) return 'Perfect score! You are a Python hero.'
    if (pct >= 80) return 'Great work — you have a solid Python foundation.'
    if (pct >= 60) return 'Good effort! Keep practising to level up.'
    return 'Keep going — every attempt makes you better.'
  }

  return (
    <div className="result-screen">
      <h2>Quiz Complete</h2>

      <div className="score-display">
        {score}<span> / {total}</span>
      </div>

      <p style={{ color: '#58a6ff', fontWeight: 600, marginBottom: 12 }}>
        {pct}% correct
      </p>

      <p className="result-message">{message()}</p>

      <button className="btn-retry" onClick={onRetry}>
        Try Again
      </button>
    </div>
  )
}
