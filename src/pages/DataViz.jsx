import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/DataViz.css'

const emotionColorMap = {
  '#ED6841': 'Acceptance',
  '#9ED6F4': 'Calm',
  '#ED5073': 'Excited',
  '#F37EC6': 'Grateful',
  '#FADD4E': 'Happy',
  '#6466D4': 'Hopeful',
  '#F2C0DE': 'Loved',
  '#9FEAD6': 'Relaxed',
  '#2F78F6': 'Relieved',
  '#FFB800': 'Satisfied',
  '#B24C47': 'Angry',
  '#7E9AA9': 'Anxious',
  '#2A5A8D': 'Bored',
  '#CCC3FA': 'Detached',
  '#48A8F8': 'Helpless',
  '#6ED89C': 'Restless',
  '#113576': 'Sad',
  '#95387C': 'Stressed',
  '#71CAC3': 'Tired',
  '#F19795': 'Worried',
}

const STOP_WORDS = new Set(['the','and','a','to','of','in','i','my','is','it','was','for','on','that','this','with','have','had','but','so','as','at','be','are','me','we','just','felt','feel','today','day','really','very','got','did','went','been','its','about','more','some','not','do','an','he','she','they','them','their','our','your'])

export default function DataViz () {
  const [bubbles, setBubbles] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const stored = localStorage.getItem('bubbles')
    if (stored) setBubbles(JSON.parse(stored))
  }, [])

  // --- Emotion frequency ---
  const emotionCounts = {}
  bubbles.forEach(b => {
    b.emotions?.forEach(color => {
      const name = emotionColorMap[color] || color
      emotionCounts[name] = (emotionCounts[name] || 0) + 1
      emotionCounts[name + '__color'] = color
    })
  })
  const emotionEntries = Object.entries(emotionCounts)
    .filter(([k]) => !k.endsWith('__color'))
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
  const maxEmotion = emotionEntries[0]?.[1] || 1

  // --- Emotion wheel ---
  const total = emotionEntries.reduce((s, [, v]) => s + v, 0) || 1
  const circumference = 2 * Math.PI * 40
  let offset = 0
  const wheelSlices = emotionEntries.map(([name, count]) => {
    const pct = count / total
    const dash = pct * circumference
    const slice = { name, count, pct, dash, offset, color: emotionCounts[name + '__color'] || '#818cf8' }
    offset += dash
    return slice
  })

  // --- Mood over time ---
  const positiveEmotions = new Set(['Calm','Happy','Hopeful','Grateful','Relaxed','Loved','Relieved','Satisfied','Acceptance','Excited'])
  const moodByDate = {}
  bubbles.forEach(b => {
    const date = b.date || 'Unknown'
    if (!moodByDate[date]) moodByDate[date] = { positive: 0, total: 0 }
    b.emotions?.forEach(color => {
      const name = emotionColorMap[color]
      moodByDate[date].total++
      if (positiveEmotions.has(name)) moodByDate[date].positive++
    })
  })
  const moodPoints = Object.entries(moodByDate)
    .slice(-8)
    .map(([date, { positive, total }]) => ({
      date: date.replace(/,.*/, '').replace('April ', 'Apr '),
      score: total ? Math.round((positive / total) * 100) : 50
    }))

  // --- Plant tracker ---
  const plantEntries = bubbles
    .filter(b => b.plantName)
    .slice(0, 6)
    .map(b => ({
      date: (b.date || '').replace(/,.*/, '').replace('April ', 'Apr '),
      name: b.plantName,
      status: b.plantStatus || '—'
    }))

  const getPlantStatusClass = (status) => {
    const s = status.toLowerCase()
    if (s.includes('thriv') || s.includes('health') || s.includes('grow') || s.includes('good') || s.includes('great')) return 'dv-status-good'
    if (s.includes('water') || s.includes('ok') || s.includes('fine') || s.includes('alright')) return 'dv-status-ok'
    if (s.includes('wilt') || s.includes('bad') || s.includes('poor') || s.includes('die') || s.includes('sick')) return 'dv-status-bad'
    return 'dv-status-ok'
  }

  // --- Word cloud ---
  const wordCounts = {}
  bubbles.forEach(b => {
    if (!b.journal) return
    b.journal.toLowerCase()
      .replace(/[^a-z\s]/g, '')
      .split(/\s+/)
      .filter(w => w.length > 3 && !STOP_WORDS.has(w))
      .forEach(w => { wordCounts[w] = (wordCounts[w] || 0) + 1 })
  })
  const wordEntries = Object.entries(wordCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20)
  const maxWord = wordEntries[0]?.[1] || 1
  const wordColors = ['#6366f1','#a855f7','#0ea5e9','#c084fc','#818cf8','#38bdf8']

  const totalSessions = bubbles.length
  const uniqueDays = new Set(bubbles.map(b => b.date)).size
  const uniquePlants = new Set(bubbles.map(b => b.plantName).filter(Boolean)).size

  const isEmpty = bubbles.length === 0

  return (
    <div className='dv-page'>
      <div className='dv-orb1' />
      <div className='dv-orb2' />

      <div className='dv-header'>
        <p className='dv-title'>Data viz</p>
        <button className='dv-back-btn' onClick={() => navigate('/')}>← Home</button>
      </div>

      {isEmpty ? (
        <div className='dv-empty'>
          <p className='dv-empty-text'>No session data yet</p>
          <p className='dv-empty-sub'>Complete a meditation session to see your insights here</p>
          <button className='dv-start-btn' onClick={() => navigate('/')}>Start meditating</button>
        </div>
      ) : (
        <>
          {/* Stats row */}
          <div className='dv-stats'>
            <div className='dv-stat-card'>
              <div className='dv-stat-num'>{totalSessions}</div>
              <div className='dv-stat-label'>Sessions</div>
            </div>
            <div className='dv-stat-card'>
              <div className='dv-stat-num'>{uniqueDays}</div>
              <div className='dv-stat-label'>Days</div>
            </div>
            <div className='dv-stat-card'>
              <div className='dv-stat-num'>{uniquePlants}</div>
              <div className='dv-stat-label'>Plants</div>
            </div>
          </div>

          <div className='dv-grid'>

            {/* Emotion frequency */}
            <div className='dv-card'>
              <p className='dv-card-title'>Emotion frequency</p>
              {emotionEntries.length === 0 && <p className='dv-no-data'>No emotion data yet</p>}
              {emotionEntries.map(([name, count]) => (
                <div className='dv-bar-row' key={name}>
                  <span className='dv-bar-label'>{name}</span>
                  <div className='dv-bar-track'>
                    <div
                      className='dv-bar-fill'
                      style={{
                        width: `${(count / maxEmotion) * 100}%`,
                        background: emotionCounts[name + '__color'] || '#818cf8'
                      }}
                    />
                  </div>
                  <span className='dv-bar-count'>{count}</span>
                </div>
              ))}
            </div>

            {/* Emotion wheel */}
            <div className='dv-card'>
              <p className='dv-card-title'>Emotion wheel</p>
              {wheelSlices.length === 0 && <p className='dv-no-data'>No emotion data yet</p>}
              {wheelSlices.length > 0 && (
                <div className='dv-wheel-wrap'>
                  <svg width="110" height="110" viewBox="0 0 110 110">
                    {wheelSlices.map((s, i) => (
                      <circle
                        key={i}
                        cx="55" cy="55" r="40"
                        fill="none"
                        stroke={s.color}
                        strokeWidth="18"
                        strokeDasharray={`${s.dash} ${circumference}`}
                        strokeDashoffset={-s.offset}
                        style={{ transform: 'rotate(-90deg)', transformOrigin: '55px 55px' }}
                      />
                    ))}
                  </svg>
                  <div className='dv-wheel-legend'>
                    {wheelSlices.map((s, i) => (
                      <div className='dv-legend-item' key={i}>
                        <div className='dv-legend-dot' style={{ background: s.color }} />
                        {s.name} — {Math.round(s.pct * 100)}%
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Mood over time */}
            <div className='dv-card dv-card-wide'>
              <p className='dv-card-title'>Mood over time</p>
              {moodPoints.length < 2 && <p className='dv-no-data'>Need at least 2 sessions to show trend</p>}
              {moodPoints.length >= 2 && (
                <svg width="100%" height="90" viewBox="0 0 700 90" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="moodgrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#818cf8" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="#818cf8" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  {(() => {
                    const n = moodPoints.length
                    const xs = moodPoints.map((_, i) => (i / (n - 1)) * 680 + 10)
                    const ys = moodPoints.map(p => 75 - (p.score / 100) * 60)
                    const pathD = xs.map((x, i) => `${i === 0 ? 'M' : 'L'}${x},${ys[i]}`).join(' ')
                    const areaD = pathD + ` L${xs[n-1]},85 L${xs[0]},85 Z`
                    return (
                      <>
                        <path d={areaD} fill="url(#moodgrad)" stroke="none"/>
                        <path d={pathD} fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round"/>
                        {moodPoints.map((p, i) => (
                          <g key={i}>
                            <circle cx={xs[i]} cy={ys[i]} r="3" fill="#818cf8"/>
                            <text x={xs[i]} y="88" fontSize="9" fill="#9b8ec4" fontFamily="Inter" textAnchor="middle">{p.date}</text>
                          </g>
                        ))}
                      </>
                    )
                  })()}
                </svg>
              )}
            </div>

            {/* Plant tracker */}
            <div className='dv-card'>
              <p className='dv-card-title'>Plant health tracker</p>
              {plantEntries.length === 0 && <p className='dv-no-data'>No plant data yet</p>}
              {plantEntries.map((p, i) => (
                <div className='dv-plant-row' key={i}>
                  <span className='dv-plant-date'>{p.date}</span>
                  <span className='dv-plant-name'>{p.name}</span>
                  <span className={`dv-plant-status ${getPlantStatusClass(p.status)}`}>{p.status}</span>
                </div>
              ))}
            </div>

            {/* Word cloud */}
            <div className='dv-card'>
              <p className='dv-card-title'>Journal word cloud</p>
              {wordEntries.length === 0 && <p className='dv-no-data'>No journal entries yet</p>}
              <div className='dv-wordcloud'>
                {wordEntries.map(([word, count], i) => (
                  <span
                    key={word}
                    className='dv-word'
                    style={{
                      fontSize: `${12 + (count / maxWord) * 18}px`,
                      color: wordColors[i % wordColors.length],
                      opacity: 0.6 + (count / maxWord) * 0.4
                    }}
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </>
      )}
    </div>
  )
}
