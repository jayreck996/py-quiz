export default function ProgressBox({ domain, answered, total, score, current, onClick }) {
  const wrong = answered - score
  const remaining = total - answered
  const pct = Math.round((answered / total) * 100)

  return (
    <div className="progress-box progress-box-clickable" onClick={onClick} title="View full progress"  role="button" tabIndex={0} onKeyDown={e => e.key === 'Enter' && onClick()}>
      <div className="progress-box-row">
        {domain && <span className="pb-domain">{domain}</span>}
        <span className="pb-label">Q</span>
        <span className="pb-value">{current + 1} <span className="pb-muted">/ {total}</span></span>
      </div>
      <div className="pb-divider" />
      <div className="progress-box-row">
        <span className="pb-correct">{score} correct</span>
        <span className="pb-wrong">{wrong} wrong</span>
        <span className="pb-muted">{remaining} left</span>
      </div>
      <div className="pb-bar-wrap">
        <div className="pb-bar-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}
