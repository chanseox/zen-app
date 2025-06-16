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
          <Instructions onClose={handleCloseInstructions} />
        </div>
      )}

      {!showInstructions && (
        <>
          <div className='start-button'>
            <PressToStart />
          </div>
          <div className='title-container'>
            <h1 className='title-message'>Let's Meditate</h1>
          </div>
        </>
      )}
    </div>
  )
}
