import '../styles/EmotionPage.css'
import ResultBubble from '../components/ResultBubble'
import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

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

export default function EmotionPage () {
  const [bubbles, setBubbles] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [editingIndex, setEditingIndex] = useState(null)
  const [editForm, setEditForm] = useState({})
  const scrollRef = useRef(null)
  const navigate = useNavigate()

  const bubblesPerPage = 8
  const pages = []

  useEffect(() => {
    const stored = localStorage.getItem('bubbles')
    if (stored) setBubbles(JSON.parse(stored))
  }, [])

  for (let i = 0; i < bubbles.length; i += bubblesPerPage) {
    pages.push(bubbles.slice(i, i + bubblesPerPage))
  }

  const scrollToPage = (index) => {
    const el = scrollRef.current
    if (!el) return
    el.scrollTo({ left: el.offsetWidth * index, behavior: 'smooth' })
  }

  const handleScroll = () => {
    const el = scrollRef.current
    if (!el) return
    setCurrentPage(Math.round(el.scrollLeft / el.offsetWidth))
  }

  const openEdit = (globalIndex) => {
    setEditingIndex(globalIndex)
    setEditForm({ ...bubbles[globalIndex] })
  }

  const closeEdit = () => {
    setEditingIndex(null)
    setEditForm({})
  }

  const handleEditChange = (field, value) => {
    setEditForm(prev => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    const updated = bubbles.map((b, i) => i === editingIndex ? { ...b, ...editForm } : b)
    setBubbles(updated)
    localStorage.setItem('bubbles', JSON.stringify(updated))
    closeEdit()
  }

  const handleDelete = () => {
    if (!window.confirm('Delete this session?')) return
    const updated = bubbles.filter((_, i) => i !== editingIndex)
    setBubbles(updated)
    localStorage.setItem('bubbles', JSON.stringify(updated))
    closeEdit()
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
        <div className='bubbles-scroll-wrapper' ref={scrollRef} onScroll={handleScroll}>
          {pages.map((pageBubbles, pageIndex) => (
            <div className='bubble-page' key={pageIndex}>
              {pageBubbles.map((bubble, index) => {
                const globalIndex = pageIndex * bubblesPerPage + index
                return (
                  <div
                    key={index}
                    className='submitted-bubble'
                    onClick={() => openEdit(globalIndex)}
                    title='Click to edit'
                  >
                    <ResultBubble size={100} emotions={bubble.emotions} triggers={bubble.triggers} />
                    <p className='bubble-name'>{bubble.name}</p>
                    <div className='bubble-tags'>
                      {bubble.triggers.slice(0, 2).map((trigger, i) => (
                        <span key={i} className='bubble-tag bubble-tag-trigger'>{trigger}</span>
                      ))}
                      {bubble.emotions.slice(0, 2).map((color, i) => (
                        <span key={i} className='bubble-tag bubble-tag-emotion'>
                          {emotionColorMap[color] || 'Emotion'}
                        </span>
                      ))}
                    </div>
                    <span className='bubble-edit-hint'>Edit</span>
                  </div>
                )
              })}
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

      {/* Edit modal */}
      {editingIndex !== null && (
        <div className='edit-modal-overlay' onClick={closeEdit}>
          <div className='edit-modal' onClick={e => e.stopPropagation()}>
            <div className='edit-modal-header'>
              <p className='edit-modal-title'>Edit session</p>
              <button className='edit-modal-close' onClick={closeEdit}>✕</button>
            </div>

            <div className='edit-modal-bubble'>
              <ResultBubble
                size={80}
                emotions={editForm.emotions || []}
                triggers={editForm.triggers || []}
              />
            </div>

            <div className='edit-modal-fields'>
              <div className='edit-field'>
                <label className='edit-label'>Name</label>
                <input
                  className='edit-input'
                  value={editForm.name || ''}
                  onChange={e => handleEditChange('name', e.target.value)}
                />
              </div>
              <div className='edit-field'>
                <label className='edit-label'>Date</label>
                <input
                  className='edit-input'
                  value={editForm.date || ''}
                  onChange={e => handleEditChange('date', e.target.value)}
                />
              </div>
              <div className='edit-field'>
                <label className='edit-label'>Plant name</label>
                <input
                  className='edit-input'
                  value={editForm.plantName || ''}
                  onChange={e => handleEditChange('plantName', e.target.value)}
                />
              </div>
              <div className='edit-field'>
                <label className='edit-label'>Plant status</label>
                <input
                  className='edit-input'
                  value={editForm.plantStatus || ''}
                  onChange={e => handleEditChange('plantStatus', e.target.value)}
                />
              </div>
              <div className='edit-field'>
                <label className='edit-label'>Journal entry</label>
                <textarea
                  className='edit-textarea'
                  value={editForm.journal || ''}
                  onChange={e => handleEditChange('journal', e.target.value)}
                  rows={4}
                />
              </div>
            </div>

            <div className='edit-modal-actions'>
              <button className='edit-delete-btn' onClick={handleDelete}>Delete</button>
              <button className='edit-save-btn' onClick={handleSave}>Save changes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}