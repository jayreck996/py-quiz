import { useState, useCallback } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Copy, Check, RotateCcw, ArrowRight, CheckCircle, XCircle } from 'lucide-react'

const LEVEL_CLASS = {
  Beginner: 'beginner',
  Intermediate: 'intermediate',
  Advanced: 'advanced',
}

export default function QuizCard({ question, index, total, savedAnswer, onMark, onNext }) {
  const [selected, setSelected] = useState(savedAnswer ?? null)
  const [revisiting, setRevisiting] = useState(!!savedAnswer)
  const [copied, setCopied] = useState(false)

  const handleSelect = (letter) => {
    if (selected) return
    setSelected(letter)
    onMark(index, letter, letter === question.answer)
  }

  const handleReset = () => {
    setSelected(null)
    setRevisiting(false)
  }

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(question.code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }, [question.code])

  const getClass = (letter) => {
    if (!selected) return 'choice-btn'
    if (letter === question.answer) return 'choice-btn correct'
    if (letter === selected) return 'choice-btn wrong'
    return 'choice-btn'
  }

  const letters = ['A', 'B', 'C', 'D']
  const isCorrect = selected === question.answer

  return (
    <div className="quiz-card">
      <div className="quiz-header">
        <span className={`level-badge ${LEVEL_CLASS[question.level]}`}>
          {question.level}
        </span>
        <span className="progress-text">{index + 1} / {total}</span>
      </div>

      <div className="code-block" style={{ position: 'relative' }}>
        <button className={`btn-copy${copied ? ' copied' : ''}`} onClick={handleCopy} title="Copy code">
          {copied ? <Check size={13} /> : <Copy size={13} />}
        </button>
        <SyntaxHighlighter
          language="python"
          style={vscDarkPlus}
          customStyle={{ background: 'transparent', margin: 0, padding: 0, fontSize: '0.92rem', lineHeight: '1.7' }}
          codeTagProps={{ style: { fontFamily: "'Fira Code', monospace" } }}
        >
          {question.code}
        </SyntaxHighlighter>
      </div>

      <p className="question-label">What does this code do?</p>

      <div className="choices">
        {question.choices.map((choice, i) => (
          <button
            key={i}
            className={getClass(letters[i])}
            onClick={() => handleSelect(letters[i])}
            disabled={!!selected}
          >
            {choice}
          </button>
        ))}
      </div>

      {selected && (
        <>
          <div className={`feedback ${isCorrect ? 'correct' : 'wrong'}`}>
            {isCorrect
              ? <><CheckCircle size={15} style={{ verticalAlign: 'middle', marginRight: 6 }} />Correct! Well done.</>
              : <><XCircle size={15} style={{ verticalAlign: 'middle', marginRight: 6 }} />Not quite — the answer is {question.answer}.</>
            }
          </div>
          <div className="card-actions">
            <button className="btn-reset" onClick={handleReset} title="Reset selection">
              <RotateCcw size={15} />
            </button>
            {!revisiting && (
              <button className="btn-next" onClick={onNext}>
                {index + 1 < total ? 'Next' : 'Results'} <ArrowRight size={15} style={{ verticalAlign: 'middle' }} />
              </button>
            )}
          </div>
        </>
      )}
    </div>
  )
}
