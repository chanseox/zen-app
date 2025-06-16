import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import '../styles/EmotionSelection.css'

const emotionOptions = [
  { title: 'Acceptance', color: '#ED6841' },
  { title: 'Calm', color: '#9ED6F4' },
  { title: 'Excited', color: '#ED5073' },
  { title: 'Grateful', color: '#F37EC6' },
  { title: 'Happy', color: '#FADD4E' },
  { title: 'Hopeful', color: '#6466D4' },
  { title: 'Loved', color: '#F2C0DE' },
  { title: 'Relaxed', color: '#9FEAD6' },
  { title: 'Relieved', color: '#2F78F6' },
  { title: 'Satisfied', color: '#FFB800' },
  { title: 'Angry', color: '#B24C47' },
  { title: 'Anxious', color: '#7E9AA9' },
  { title: 'Bored', color: '#2A5A8D' },
  { title: 'Detached', color: '#CCC3FA' },
  { title: 'Helpless', color: '#48A8F8' },
  { title: 'Restless', color: '#6ED89C' },
  { title: 'Sad', color: '#113576' },
  { title: 'Stressed', color: '#95387C' },
  { title: 'Tired', color: '#71CAC3' },
  { title: 'Worried', color: '#F19795' }
]

export default function EmotionSelection () {
  const [selectedEmotions, setSelectedEmotions] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const { selectedTriggers } = location.state || {}

  const toggleEmotion = (color) => {
    setErrorMessage('')
    setSelectedEmotions(prev =>
      prev.includes(color)
        ? prev.filter(t => t !== color)
        : [...prev, color]
    )
  }

  console.log('Selected Triggers:', selectedTriggers)

  const handleDone = () => {
    if (selectedEmotions.length === 0) {
      setErrorMessage('Please select at least one emotion before continuing.')
      return
    }

    navigate('/meditation_result', {
      state: {
        selectedTriggers,
        selectedEmotions
      }
    })
  }

  return (
    <div className='emotion-selection-page'>
      <h1 className='title'>Choose emotion(s) for today</h1>
      <div className='emotion-options'>
        {emotionOptions.map(({ title, color }) => {
          const isSelected = selectedEmotions.includes(color)
          return (
            <div className='emotion-option'>
              <p className='emotion-name'>{title}</p>
              <div className={`emotion-color-wrapper ${isSelected ? 'selected' : ''}`}
              onClick={() => toggleEmotion(color)}>
                <div className='emotion-color' style={{ backgroundColor: color }} />
              </div>
            </div>
          )
        })}
      </div>
        <div className='done-button' onClick={handleDone}>
          <p>Done</p>
        </div>
      {errorMessage && <p className='error-message'>{errorMessage}</p>}
    </div>
  )
}
