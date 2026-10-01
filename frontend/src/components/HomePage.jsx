import DomainCard from './DomainCard'

export default function HomePage({ domains, onEnter }) {
  return (
    <div className="home-page">
      <div className="home-header">
        <h1 className="home-title">py<span>-</span>quiz</h1>
        <p className="home-subtitle">Pick a domain to practice</p>
      </div>

      <div className="domain-grid">
        {domains.map((d) => (
          <DomainCard key={d.id} domain={d} onClick={() => onEnter(d.id)} />
        ))}
      </div>
    </div>
  )
}
