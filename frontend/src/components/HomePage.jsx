import { ArrowRight, CheckCircle, XCircle } from 'lucide-react'

export default function HomePage({ domains, onEnter }) {
  return (
    <div className="home-page">
      <div className="home-header">
        <h1 className="home-title">py<span>-</span>quiz</h1>
        <p className="home-subtitle">Pick a domain to practice</p>
      </div>

      <div className="domain-grid">
        {domains.map((d) => (
          <button key={d.id} className="domain-card" onClick={() => onEnter(d.id)}>
            <div className="dc-top">
              <span className="dc-icon">{d.icon}</span>
              <div>
                <div className="dc-name">{d.name}</div>
                <div className="dc-desc">{d.description}</div>
              </div>
              <span className={`level-badge ${d.id}`}>{d.tag}</span>
            </div>

            <div className="dc-stats">
              <span className="dc-stat">
                <span className="dc-stat-val">{d.answered}</span>
                <span className="dc-stat-label"> / {d.total} answered</span>
              </span>
              <span className="dc-stat">
                <CheckCircle size={13} style={{ verticalAlign: 'middle', marginRight: 4 }} />
                <span className="dc-stat-correct">{d.score}</span>
                {d.answered - d.score > 0 && (
                  <>
                    <XCircle size={13} style={{ verticalAlign: 'middle', margin: '0 4px 0 10px' }} />
                    <span className="dc-stat-wrong">{d.answered - d.score}</span>
                  </>
                )}
              </span>
            </div>

            <div className="dc-bar-wrap">
              <div className="dc-bar-fill" style={{ width: `${Math.round((d.answered / d.total) * 100)}%` }} />
            </div>

            <div className="dc-cta">
              {d.answered === 0 ? 'Start Quiz' : d.answered === d.total ? 'Review' : `Resume — Q${d.current + 1}`}
              <ArrowRight size={15} style={{ verticalAlign: 'middle', marginLeft: 6 }} />
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
