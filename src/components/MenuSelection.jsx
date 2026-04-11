import React, { useState } from 'react'
import ReactCurvedText from 'react-curved-text'
import { Link, useLocation } from 'react-router-dom'
import '../styles/MenuSelection.css'

const NAV_ITEMS = [
  {
    label: 'Meditation',
    to: '/',
    icon: (
      <svg viewBox='0 0 20 20' fill='none' stroke='currentColor' strokeWidth='1.4'>
        <circle cx='10' cy='10' r='7' />
        <circle cx='10' cy='10' r='3' />
      </svg>
    )
  },
  {
    label: 'Session results',
    to: '/emotion',
    icon: (
      <svg viewBox='0 0 20 20' fill='none' stroke='currentColor' strokeWidth='1.4'>
        <path d='M4 6h12M4 10h8M4 14h10' />
      </svg>
    )
  },
  {
    label: 'Data viz',
    to: '/dataviz',
    icon: (
      <svg viewBox='0 0 20 20' fill='none' stroke='currentColor' strokeWidth='1.4'>
        <rect x='3' y='10' width='3' height='7' rx='1' />
        <rect x='8.5' y='6' width='3' height='11' rx='1' />
        <rect x='14' y='3' width='3' height='14' rx='1' />
      </svg>
    )
  }
]

export default function MenuSelection () {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return (
    <div className='menu-component'>
      <div className={`menu-overlay ${isOpen ? 'visible' : ''}`} onClick={close} />

      <button className='menu-trigger' onClick={open} aria-label='Open menu'>
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
      </button>

      <div className={`menu-sidebar ${isOpen ? 'open' : ''}`}>
        <div className='menu-sidebar-header'>
          <span className='menu-brand'>Zen</span>
          <button className='menu-close' onClick={close} aria-label='Close menu'>
            <span />
            <span />
          </button>
        </div>

        <nav className='menu-nav'>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              className={`menu-nav-link ${location.pathname === item.to ? 'active' : ''}`}
              to={item.to}
              onClick={close}
            >
              <span className='menu-nav-icon'>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className='menu-sidebar-footer'>zen · interspecies meditation</div>
      </div>
    </div>
  )
}
