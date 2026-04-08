import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../styles/SessionResult.css'
import ResultBubble from '../components/ResultBubble'

export default function SessionResult () {
  const location = useLocation()
  const { selectedTriggers = [], selectedEmotions = [] } = location.state || {}
  const [name, setName] = useState('')
  const navigate = useNavigate()

  const handleSubmit = () => {
    if (name) {
      const newBubble = {
        name,
        emotions: selectedEmotions,
        triggers: selectedTriggers,
      }
      const stored = localStorage.getItem('bubbles')
      const parsed = stored ? JSON.parse(stored) : []
      const updatedBubbles = [newBubble, ...parsed]
      localStorage.setItem('bubbles', JSON.stringify(updatedBubbles))
      navigate('/emotion')
    }
  }

  return (
    <div className='session-result-page'>
      <div className='result-container'>
        <div className='result-svg-container'>
          <div className='result-svg'>
            <ResultBubble size={410} emotions={selectedEmotions} triggers={selectedTriggers} />
          </div>
        </div>
        <div className='name-input'>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            className="minimal-input"
            autoComplete="off"
          />
          <label htmlFor="name" className="input-label">Enter your name</label>
        </div>
      </div>
      <div className="radial-gradient-bg" />
      <div className="glass-blur-overlay" />
      <div className="result-submit-button">
        <div className="wrapper">
          <button className="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}
