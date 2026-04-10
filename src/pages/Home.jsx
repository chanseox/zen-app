import React, { useState } from 'react'
import '../styles/Home.css'
import PressToStart from '../components/PressToStart'
import Instructions from './Instructions'

export default function Home () {
  const [showInstructions, setShowInstructions] = useState(true)

  const handleCloseInstructions = () => {
    setShowInstructions(false)
  }

  return (
    <div className='home-page'>
      <div className='home-background' />

      {showInstructions && (
        <div className='overlay'>
          <div className='title-container'>
            <h1 className='title-message'>Zen</h1>
          </div>
          <Instructions onClose={handleCloseInstructions} />
        </div>
      )}

      {!showInstructions && (
        <div className='main-screen'>
          <button className='back-to-instructions' onClick={() => setShowInstructions(true)}>
            ← Back
          </button>
          <h1 className='title-message'>Zen</h1>
          <PressToStart />
        </div>
      )}
    </div>
  )
}