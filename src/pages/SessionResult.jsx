import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../styles/SessionResult.css'
import ResultBubble from '../components/ResultBubble'

export default function SessionResult () {
  const location = useLocation()
  const { selectedTriggers = [], selectedEmotions = [] } = location.state || {}
  const [name, setName] = useState('')
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (name) {
      // Create a new bubble entry with name, triggers, and emotions
      const newBubble = {
        name,
        emotions: selectedEmotions,
        triggers: selectedTriggers,
      }
      // Get existing bubbles from localStorage
      const stored = localStorage.getItem('bubbles')
      const parsed = stored ? JSON.parse(stored) : []

      // Add new bubble
      const updatedBubbles = [newBubble, ...parsed]

      // Save to localStorage
      localStorage.setItem('bubbles', JSON.stringify(updatedBubbles))

      // Navigate without needing to pass state
      navigate('/emotion')
    }
  }

  console.log(name);

  console.log('Selected Triggers:', selectedTriggers)
  console.log('Selected Emotions:', selectedEmotions)

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
            <span>Submit</span>
                <path d="M29.049,5.009L28.19,4.151c-0.943-0.945-2.488-0.945-3.434,0L10.172,18.737l-5.175-5.173c-0.943-0.944-2.489-0.944-3.432,0.001l-0.858,0.857c-0.943,0.944-0.943,2.489,0,3.433l7.744,7.752c0.944,0.943,2.489,0.943,3.433,0L29.049,8.442C29.991,7.498,29.991,5.953,29.049,5.009z"/>
          </button>
        </div>
      </div>
    </div>
  )
}