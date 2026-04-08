import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Camera from '../components/Camera'
import meditationMusic from '../assets/zen_music.mp3'
import '../styles/MeditationSession.css'
import { useEffect, useRef } from 'react'

const steps = [
  {
    content: (
      <div className='lets-begin-container'>
        <div className='lets-begin-wrapper'>
          <h1 className='lb-message'>Let's Begin</h1>
        </div>
      </div>
    ),
    duration: 1500,
    transition: 0.3,
    delay: 0.6,
  },
  {
    content: (
      <div className='camera-component'>
        <Camera />
      </div>
    ),
    duration: 10000,
    transition: 0.3,
    delay: 0.8,
  },
  {
    content: (
      <div className='text-container'>
        <h1 className='text-title'>Breathe in...</h1>
        <p className='text-subtitle'>and hold</p>
      </div>
    ),
    duration: 7000,
    transition: 0.3,
    delay: 0.8,
  },
  {
    content: (
      <div className='text-container'>
        <h1 className='text-title'>Breathe out...</h1>
      </div>
    ),
    duration: 7000,
    transition: 0.3,
    delay: 0.8,
  },
  {
    content: (
      <div className='camera-component'>
        <Camera />
      </div>
    ),
    duration: 4000,
    transition: 0.3,
    delay: 0.8,
  },
  {
    content: (
      <div className='text-container'>
        <h1 className='text-title'>Great work today!</h1>
        <p className='text-subtitle'>Let's record your meditation session.</p>
      </div>
    ),
    duration: 4000,
    transition: 0.3,
    delay: 0.8,
  },
]

export default function MeditationSession () {
  const [stepIndex, setStepIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const currentStep = steps[stepIndex]
  const navigate = useNavigate()
  const audioRef = useRef(null)
  const timeoutRef = useRef(null)

  // Start music on mount
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(err => {
        console.log('Audio playback failed:', err)
      })
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
    }
  }, [])

  // Step progression
  useEffect(() => {
    if (paused) return

    const currentStep = steps[stepIndex]
    if (stepIndex < steps.length - 1) {
      timeoutRef.current = setTimeout(() => {
        setStepIndex(prev => prev + 1)
      }, currentStep.duration)
    } else {
      timeoutRef.current = setTimeout(() => {
        navigate('/trigger_selection')
      }, currentStep.duration)
    }

    return () => clearTimeout(timeoutRef.current)
  }, [stepIndex, navigate, paused])

  const handleBack = () => {
    clearTimeout(timeoutRef.current)
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
    navigate('/')
  }

  return (
    <>
      <audio ref={audioRef} src={meditationMusic} loop />

      {/* Back button — only show on first step so it doesn't interrupt the session */}
      {stepIndex === 0 && (
        <button className='back-button' onClick={handleBack}>
          ← Back
        </button>
      )}

      <AnimatePresence>
        <motion.div
          className='background'
          key={5}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          key={stepIndex}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{
            delay: currentStep.delay || 0,
            duration: currentStep.transition,
          }}
          className='meditation-step'
        >
          {currentStep.content}
        </motion.div>
      </AnimatePresence>
    </>
  )
}
