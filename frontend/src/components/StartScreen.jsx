export default function StartScreen({ total, answered, current, onStart, onResume }) {
  const hasProgress = answered > 0

  return (
    <div className="start-screen">
      <div className="logo">
        py<span>-</span>python
      </div>
      <p className="tagline">Zero to Hero Python Programmer</p>

      <div className="levels">
        <span className="level-badge beginner">Beginner</span>
        <span className="level-badge intermediate">Intermediate</span>
        <span className="level-badge advanced">Advanced</span>
      </div>

      <p style={{ color: '#8b949e', marginBottom: '28px', fontSize: '0.95rem' }}>
        Read each Python snippet and pick the comment that best describes what it does.
        <br />
        <strong style={{ color: '#e6edf3' }}>{total} questions</strong> across 3 levels.
      </p>

      {hasProgress && (
        <div className="resume-box">
          <p className="resume-info">
            You are on question <strong>{current + 1}</strong> — {answered} of {total} answered.
          </p>
          <div className="start-actions">
            <button className="btn-primary" onClick={onResume}>Resume Quiz</button>
            <button className="btn-ghost" onClick={onStart}>Start Over</button>
          </div>
        </div>
      )}

      {!hasProgress && (
        <button className="btn-primary" onClick={onStart}>Start Quiz</button>
      )}
    </div>
  )
}
