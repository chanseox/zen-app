import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Camera from '../components/Camera'
import AnimatedComponent from '../components/AnimatedComponent'
import meditationMusic from '../assets/zen_music.mp3' // adjust path if needed
import '../styles/MeditationSession.css'

const steps = [
  {
    content: <div className='lets-begin-container'>
      <div className='lets-begin-wrapper'>
        <h1 className='lb-message'>Let's Begin</h1>
      </div>
    </div>,
    duration: 1500, // visible for 2s
    transition: 0.3, // animates in/out in 0.6s
    delay: 0.6
  },
  {
    content: <div className='camera-component'>
      <Camera />
    </div>,
    duration: 10000,
    transition: 0.3,
    delay: 0.8
  },
  {
    content: <div className='text-container'>
      <h1 className='text-title'>Breathe in...</h1>
      <p className='text-subtitle'>and hold</p>
    </div>,
    duration: 7000,
    transition: 0.3,
    delay: 0.8
  },
  {
    content: <div className='text-container'>
      <h1 className='text-title'>Breathe out...</h1>
    </div>,
    duration: 7000,
    transition: 0.3,
    delay: 0.8
  },
  {
    content: <div className='camera-component'>
      <Camera />
    </div>,
    duration: 4000,
    transition: 0.3,
    delay: 0.8
  },
  {
    content: <div className='text-container'>
      <h1 className='text-title'>Great work today!</h1>
      <p className='text-subtitle'>Let's record your meditation session.</p>
    </div>,
    duration: 4000,
    transition: 0.3,
    delay: 0.8
  }
]

/*
Let's Begin: .5 secs
Camera: 10 secs
Breathe in: 5 secs
Breath out: 5 secs
Camera: 4 secs
Great Work Today: .8 secs
 */

export default function MeditationSession () {
  const [stepIndex, setStepIndex] = useState(0)
  const currentStep = steps[stepIndex]
  const navigate = useNavigate()
  const audioRef = useRef(null)

  useEffect(() => {
    // Start music on first render
    if (audioRef.current) {
      audioRef.current.play().catch(err => {
        console.log('Audio playback failed:', err)
      })
    }

    return () => {
      // Stop music when component unmounts (user navigates away)
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
    }
  }, [])

  useEffect(() => {
    const currentStep = steps[stepIndex]
    if (stepIndex < steps.length - 1) {
      const timeout = setTimeout(() => {
        setStepIndex(prev => prev + 1)
      }, currentStep.duration) // Adjusting for delay
      return () => clearTimeout(timeout)
    } else {
      // Once the sequence finishes, navigate to the next page
      setTimeout(() => {
        navigate('/trigger_selection') // Replace '/next-page' with your target path
      }, currentStep.duration)
    }
  }, [stepIndex, navigate])

  return (
    <>
      <audio ref={audioRef} src={meditationMusic} loop />
      <AnimatePresence>
        <motion.div
          className='background'
          key={5} // Apply key to make background animate on step change
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
            delay: currentStep.delay || 0, // optional fallback
            duration: currentStep.transition
          }}
          className='meditation-step'
        >
          {currentStep.content}
        </motion.div>
      </AnimatePresence>
      {/* <div className="svg-animation-container">
        <AnimatedComponent />
      </div> */}
    </>
  )
}

{/* <>
      <AnimatePresence>
        <motion.div
          className='background'
          key={5} // Apply key to make background animate on step change
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
            delay: currentStep.delay || 0, // optional fallback
            duration: currentStep.transition
          }}
          className='meditation-step'
        >
          {currentStep.content}
        </motion.div>
      </AnimatePresence>
    </> */}