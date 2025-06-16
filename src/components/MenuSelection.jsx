import React, { useState } from 'react'

import ReactCurvedText from 'react-curved-text'
import { Link } from 'react-router-dom'
import '../styles/MenuSelection.css'

export default function MenuSelection () {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <>
      <div className='menu-component'>
        <div className={`menu-background ${isOpen ? 'visible' : ''}`} >
        <div className='menu-wrapper'>
          <div className='menu-button' onClick={toggleDropdown}>
            <ReactCurvedText
              width={100}
              height={100}
              cx={50}
              cy={50}
              rx={33.3}
              ry={33.3}
              startOffset={0}
              reversed
              text='MENU MENU MENU MENU MENU MENU MENU '
              textProps={{
                style: { fontSize: 7 },
                textLength: 360,
                lengthAdjust: 'spacing'
              }}
              textPathProps={null}
              tspanProps={null}
              ellipseProps={null}
              svgProps={{ className: 'rotating-curved-text' }}
            />
          </div>
          <div className={`menu-dropdown ${isOpen ? 'visible' : 'hidden'}`}>
            <Link className='link' to='/' onClick={() => setIsOpen(false)}>MEDITATION</Link>
            <Link className='link' to='/emotion' onClick={() => setIsOpen(false)}>EMOTION</Link>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}
