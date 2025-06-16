import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Emotion from './pages/EmotionPage'
import MeditationSession from './pages/MeditationSession'
import MenuSelection from './components/MenuSelection'
import TriggerSelection from './pages/TriggerSelection'
import EmotionSelection from './pages/EmotionSelection'
import SessionResult from './pages/SessionResult'
import Camera from './components/Camera'

function App () {
  return (
    <>
      <Router>
        <MenuSelection />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/emotion' element={<Emotion />} />
          <Route path='/meditation_session' element={<MeditationSession />} />
          <Route path='/trigger_selection' element={<TriggerSelection />} />
          <Route path='/emotion_selection' element={<EmotionSelection />} />
          <Route path='/meditation_result' element={<SessionResult />} />
          <Route path="/camera" element={<Camera />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
