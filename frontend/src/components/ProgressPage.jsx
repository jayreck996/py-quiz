import questions from '../data/questions'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

const LEVEL_CLASS = { Beginner: 'beginner', Intermediate: 'intermediate', Advanced: 'advanced' }

export default function ProgressPage({ answers, current, onJump, onBack }) {
  return (
    <div className="progress-page">
      <div className="progress-page-header">
        <button className="btn-home" onClick={onBack}>← Back to Quiz</button>
        <h2 className="progress-page-title">Quiz Progress</h2>
      </div>

      <div className="progress-list">
        {questions.map((q, i) => {
          const ans = answers[i]
          const isCurrent = i === current
          let statusClass = 'prow-status unanswered'
          let statusLabel = '—'
          if (ans?.correct) { statusClass = 'prow-status correct'; statusLabel = '✓' }
          else if (ans && !ans.correct) { statusClass = 'prow-status wrong'; statusLabel = '✗' }

          return (
            <button
              key={q.id}
              className={`progress-row${isCurrent ? ' prow-current' : ''}`}
              onClick={() => onJump(i)}
            >
              <span className="prow-num">{i + 1}</span>
              <span className={`level-badge ${LEVEL_CLASS[q.level]}`}>{q.level}</span>
              <span className="prow-code">
                <SyntaxHighlighter
                  language="python"
                  style={vscDarkPlus}
                  customStyle={{ background: 'transparent', margin: 0, padding: 0, fontSize: '0.8rem', display: 'inline' }}
                  codeTagProps={{ style: { fontFamily: "'Fira Code', monospace" } }}
                  PreTag="span"
                >
                  {q.code.split('\n')[0]}
                </SyntaxHighlighter>
              </span>
              <span className={statusClass}>{statusLabel}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
