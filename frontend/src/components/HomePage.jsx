import DomainCard from './DomainCard'

export default function HomePage({ domains, onEnter }) {
  return (
    <div className="home-page">
      <div className="home-header">
        <h1 className="home-title">py<span>-</span>quiz</h1>
        <p className="home-subtitle">Pick a domain to practice</p>
      </div>

      <div className="company-brief">
        <p className="company-brief-label">Scenario</p>
        <p className="company-brief-text">
          You are a DevOps engineer at <strong>StreamBox</strong> — a video streaming platform
          serving 50M+ subscribers globally. The platform runs microservices for encoding,
          CDN delivery, recommendations, and billing on AWS and Kubernetes. Every quiz
          question is drawn from real day-to-day tasks on the StreamBox engineering team.
        </p>
      </div>

      <div className="domain-grid">
        {domains.map((d) => (
          <DomainCard key={d.id} domain={d} onClick={() => onEnter(d.id)} />
        ))}
      </div>
    </div>
  )
}
