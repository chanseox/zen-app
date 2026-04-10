import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../styles/SessionResult.css'
import ResultBubble from '../components/ResultBubble'

export default function SessionResult () {
  const location = useLocation()
  const { selectedTriggers = [], selectedEmotions = [] } = location.state || {}
  const navigate = useNavigate()

  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  })

  const [form, setForm] = useState({
    name: '',
    date: today,
    journal: '',
    plantName: '',
    plantStatus: ''
  })

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    if (!form.name) return

    const newBubble = {
      name: form.name,
      date: form.date,
      journal: form.journal,
      plantName: form.plantName,
      plantStatus: form.plantStatus,
      emotions: selectedEmotions,
      triggers: selectedTriggers,
    }

    const stored = localStorage.getItem('bubbles')
    const parsed = stored ? JSON.parse(stored) : []
    const updatedBubbles = [newBubble, ...parsed]
    localStorage.setItem('bubbles', JSON.stringify(updatedBubbles))
    navigate('/emotion')
  }

  return (
    <div className='session-result-page'>
      <div className='radial-gradient-bg' />
      <div className='glass-blur-overlay' />

      <div className='result-layout'>
        <div className='result-bubble-side'>
          <ResultBubble size={320} emotions={selectedEmotions} triggers={selectedTriggers} />
        </div>

        <div className='result-form-side'>
          <p className='result-form-title'>Record your session</p>

          <div className='result-form'>
            <div className='result-field'>
              <label className='result-label'>Your name</label>
              <input
                className='result-input'
                type='text'
                placeholder='e.g. Chloe'
                value={form.name}
                onChange={e => handleChange('name', e.target.value)}
                autoComplete='off'
              />
            </div>

            <div className='result-field'>
              <label className='result-label'>Date</label>
              <input
                className='result-input'
                type='text'
                value={form.date}
                onChange={e => handleChange('date', e.target.value)}
              />
            </div>

            <div className='result-field'>
              <label className='result-label'>Plant name</label>
              <input
                className='result-input'
                type='text'
                placeholder='e.g. Fern, Monstera...'
                value={form.plantName}
                onChange={e => handleChange('plantName', e.target.value)}
                autoComplete='off'
              />
            </div>

            <div className='result-field'>
              <label className='result-label'>How is your plant doing?</label>
              <input
                className='result-input'
                type='text'
                placeholder='e.g. Thriving, needs water...'
                value={form.plantStatus}
                onChange={e => handleChange('plantStatus', e.target.value)}
                autoComplete='off'
              />
            </div>

            <div className='result-field'>
              <label className='result-label'>Journal entry</label>
              <textarea
                className='result-textarea'
                placeholder='Write freely about your day, your feelings, anything...'
                value={form.journal}
                onChange={e => handleChange('journal', e.target.value)}
                rows={4}
              />
            </div>

            <button
              className='result-submit-btn'
              onClick={handleSubmit}
              disabled={!form.name}
            >
              Save session
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
