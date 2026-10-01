import { CheckCircle, XCircle, ArrowRight } from 'lucide-react'

export default function QuizFooter({ domain, answered, score, total, onViewProgress }) {
  const wrong = answered - score
  const pct = Math.round((answered / total) * 100)

  return (
    <button className="domain-card" onClick={onViewProgress}>
      <div className="dc-top">
        <span className="dc-icon">{domain.icon}</span>
        <div>
          <div className="dc-name">{domain.name}</div>
          <div className="dc-desc">{domain.description}</div>
        </div>
      </div>

      <div className="dc-stats">
        <span className="dc-stat">
          <span className="dc-stat-val">{answered}</span>
          <span className="dc-stat-label"> / {total} answered</span>
        </span>
        <span className="dc-stat">
          <CheckCircle size={13} style={{ verticalAlign: 'middle', marginRight: 4 }} />
          <span className="dc-stat-correct">{score}</span>
          {wrong > 0 && (
            <>
              <XCircle size={13} style={{ verticalAlign: 'middle', margin: '0 4px 0 10px' }} />
              <span className="dc-stat-wrong">{wrong}</span>
            </>
          )}
        </span>
      </div>

      <div className="dc-bar-wrap">
        <div className="dc-bar-fill" style={{ width: `${pct}%` }} />
      </div>

      <div className="dc-cta">
        View Progress
        <ArrowRight size={15} style={{ verticalAlign: 'middle', marginLeft: 6 }} />
      </div>
    </button>
  )
}
