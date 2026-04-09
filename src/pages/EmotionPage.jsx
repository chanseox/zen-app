import '../styles/EmotionPage.css'
import ResultBubble from '../components/ResultBubble'
import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function EmotionPage () {
  const [bubbles, setBubbles] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const scrollRef = useRef(null)
  const navigate = useNavigate()

  const bubblesPerPage = 8
  const pages = []

  useEffect(() => {
    const stored = localStorage.getItem('bubbles')
    if (stored) {
      setBubbles(JSON.parse(stored))
    }
  }, [])

  for (let i = 0; i < bubbles.length; i += bubblesPerPage) {
    pages.push(bubbles.slice(i, i + bubblesPerPage))
  }

  const scrollToPage = (index) => {
    const el = scrollRef.current
    if (!el) return
    const pageWidth = el.offsetWidth
    el.scrollTo({ left: pageWidth * index, behavior: 'smooth' })
  }

  const handleScroll = () => {
    const el = scrollRef.current
    if (!el) return
    const pageWidth = el.offsetWidth
    const pageIndex = Math.round(el.scrollLeft / pageWidth)
    setCurrentPage(pageIndex)
  }

  // Emotion color → name lookup
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

  return (
    <div className='emotion-page'>
      <div className='emotion-page-background' />
      <div className='emotion-page-orb-2' />

      <div className='gallery-header'>
        <p className='gallery-title'>Session results</p>
        <button className='finished-button' onClick={() => navigate('/')}>Done</button>
      </div>

      {bubbles.length > 0 ? (
        <div
          className='bubbles-scroll-wrapper'
          ref={scrollRef}
          onScroll={handleScroll}
        >
          {pages.map((pageBubbles, pageIndex) => (
            <div className='bubble-page' key={pageIndex}>
              {pageBubbles.map((bubble, index) => (
                <div key={index} className='submitted-bubble'>
                  <ResultBubble
                    size={100}
                    emotions={bubble.emotions}
                    triggers={bubble.triggers}
                  />
                  <p className='bubble-name'>{bubble.name}</p>
                  <div className='bubble-tags'>
                    {bubble.triggers.slice(0, 2).map((trigger, i) => (
                      <span key={i} className='bubble-tag bubble-tag-trigger'>
                        {trigger}
                      </span>
                    ))}
                    {bubble.emotions.slice(0, 2).map((color, i) => (
                      <span key={i} className='bubble-tag bubble-tag-emotion'>
                        {emotionColorMap[color] || 'Emotion'}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <p className='empty-message'>No session results yet</p>
      )}

      <div className='page-indicator'>
        {pages.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentPage ? 'active' : ''}`}
            onClick={() => scrollToPage(index)}
          />
        ))}
      </div>
    </div>
  )
}
