import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Home.css'
import Instructions from './Instructions'

export default function Home () {
  const navigate = useNavigate()

  return (
    <div className='home-page'>
      <div className='home-background' />
      <div className='overlay'>
        <Instructions onClose={() => navigate('/start')} />
      </div>
    </div>
  )
}