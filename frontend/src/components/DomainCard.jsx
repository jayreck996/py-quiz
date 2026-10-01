import { ArrowRight, CheckCircle, XCircle } from 'lucide-react'

export default function DomainCard({ domain, onClick, ctaOverride }) {
  const { name, icon, description, tag, id, total, answered, score, current } = domain
  const wrong = answered - score
  const pct = Math.round((answered / total) * 100)

  const cta = ctaOverride ?? (
    answered === 0 ? 'Start Quiz' : answered === total ? 'Review' : `Resume — Q${current + 1}`
  )

  return (
    <button className="domain-card" onClick={onClick}>
      <div className="dc-top">
        <span className="dc-icon">{icon}</span>
        <div>
          <div className="dc-name">{name}</div>
          <div className="dc-desc">{description}</div>
        </div>
        <span className={`level-badge ${id}`}>{tag}</span>
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
        {cta}
        <ArrowRight size={15} style={{ verticalAlign: 'middle', marginLeft: 6 }} />
      </div>
    </button>
  )
}
