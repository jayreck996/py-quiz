import { useState } from 'react'

const KEY = 'py-quiz'

function load() {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (!parsed.domains) return null
    return parsed
  } catch {
    return null
  }
}

function save(state) {
  localStorage.setItem(KEY, JSON.stringify(state))
}

export default function useQuizStorage(domainIds) {
  const saved = load()

  const [screen, setScreenState] = useState(() => {
    const s = saved?.screen
    if (!s || s === 'start') return 'home'
    return s
  })

  const [activeDomain, setActiveDomainState] = useState(() => saved?.activeDomain ?? domainIds[0])

  const [domains, setDomainsState] = useState(() => {
    const d = {}
    domainIds.forEach(id => {
      d[id] = saved?.domains?.[id] ?? { current: 0, answers: {} }
    })
    return d
  })

  const current = domains[activeDomain]?.current ?? 0
  const answers = domains[activeDomain]?.answers ?? {}
  const score   = Object.values(answers).filter(a => a.correct).length
  const answered = Object.keys(answers).length

  const persist = (s, ad, ds) => save({ screen: s, activeDomain: ad, domains: ds })

  const setScreen = (s) => {
    setScreenState(s)
    persist(s, activeDomain, domains)
  }

  // Go to a domain's progress list (used by home page cards)
  const goToDomain = (domainId) => {
    setActiveDomainState(domainId)
    setScreenState('progress')
    persist('progress', domainId, domains)
  }

  const enterDomain = (domainId) => {
    setActiveDomainState(domainId)
    setScreenState('quiz')
    persist('quiz', domainId, domains)
  }

  const markAnswer = (index, selectedLetter, isCorrect) => {
    const newDomains = {
      ...domains,
      [activeDomain]: {
        ...domains[activeDomain],
        answers: { ...answers, [index]: { selected: selectedLetter, correct: isCorrect } },
      },
    }
    setDomainsState(newDomains)
    persist(screen, activeDomain, newDomains)
  }

  const advance = (total) => {
    const newCurrent = current + 1
    const done = newCurrent >= total
    const newDomains = {
      ...domains,
      [activeDomain]: { ...domains[activeDomain], current: newCurrent },
    }
    setDomainsState(newDomains)
    if (done) {
      setScreenState('result')
      persist('result', activeDomain, newDomains)
    } else {
      persist('quiz', activeDomain, newDomains)
    }
  }

  const jumpTo = (index) => {
    const newDomains = {
      ...domains,
      [activeDomain]: { ...domains[activeDomain], current: index },
    }
    setDomainsState(newDomains)
    setScreenState('quiz')
    persist('quiz', activeDomain, newDomains)
  }

  const getDomainStats = (domainId) => {
    const d = domains[domainId] ?? { current: 0, answers: {} }
    return {
      current: d.current,
      score: Object.values(d.answers).filter(a => a.correct).length,
      answered: Object.keys(d.answers).length,
    }
  }

  const resetDomain = () => {
    const newDomains = { ...domains, [activeDomain]: { current: 0, answers: {} } }
    setDomainsState(newDomains)
    setScreenState('home')
    persist('home', activeDomain, newDomains)
  }

  return {
    screen, activeDomain, current, score, answered, answers,
    setScreen, goToDomain, enterDomain, markAnswer, advance, jumpTo, getDomainStats, resetDomain,
  }
}
