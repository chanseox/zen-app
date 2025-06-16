import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FamilyIcon, NewsIcon, HealthIcon, WorkIcon, FriendsIcon, ParticipationIcon, SelfIcon, RelationshipsIcon, ActivitiesIcon, IndependenceIcon } from '../components/trigger_icons'
import '../styles/TriggerSelection.css'

const triggerOptions = [
  { title: 'Family', svg: <FamilyIcon size={100} /> },
  { title: 'News', svg: <NewsIcon size={100} /> },
  { title: 'Health', svg: <HealthIcon size={100} /> },
  { title: 'Work', svg: <WorkIcon size={100} /> },
  { title: 'Friends', svg: <FriendsIcon size={100} /> },
  { title: 'Participation', svg: <ParticipationIcon size={100} /> },
  { title: 'Self', svg: <SelfIcon size={100} /> },
  { title: 'Relationships', svg: <RelationshipsIcon size={100} /> },
  { title: 'Activities', svg: <ActivitiesIcon size={100} /> },
  { title: 'Independence', svg: <IndependenceIcon size={100} /> }
]

export default function TriggerSelection () {
  const [selectedTriggers, setSelectedTriggers] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  const toggleTrigger = (title) => {
    setErrorMessage('')
    setSelectedTriggers(prev =>
      prev.includes(title)
        ? prev.filter(t => t !== title)
        : [...prev, title]
    )
  }

  const handleDone = () => {
    if (selectedTriggers.length === 0) {
      setErrorMessage('Please select at least one trigger before continuing.')
      return
    }

    navigate('/emotion_selection', {
      state: { selectedTriggers }
    })
  }

  return (
    <div className='trigger-selection-page'>
      <h1 className='title'>Choose Trigger(s) for today</h1>
      <div className='trigger-options'>
        {triggerOptions.map(({ title, svg }) => {
          const isSelected = selectedTriggers.includes(title)
          return (
            <div key={title} className='trigger-option'>
              <p className='trigger-name'>{title}</p>
              <div className={`trigger-icon-wrapper ${isSelected ? 'selected' : ''}`}
              onClick={() => toggleTrigger(title)}>
                <div className='trigger-icon'>
                  {svg}
                </div>
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