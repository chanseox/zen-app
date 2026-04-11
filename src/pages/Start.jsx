import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Home.css'
import PressToStart from '../components/PressToStart'

export default function Start () {
  const navigate = useNavigate()

  return (
    <div className='home-page'>
      <div className='home-background' />
      <div className='start-section'>
        <PressToStart />
        <button
          className='back-to-instructions'
          onClick={() => navigate('/')}
        >
          ← Back to instructions
        </button>
      </div>
      <div className='title-container'>
        <h1 className='title-message'>Let's Meditate</h1>
      </div>
    </div>
  )
}