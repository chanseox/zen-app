import React from 'react'
import ReactCurvedText from 'react-curved-text'
import { Link } from 'react-router-dom'
import '../styles/PressToStart.css'

const PressToStart = () => {
  return (
    <div className='pts-component'>
      <div className='pts-wrapper'>
        <Link to='/meditation_session'>
          <ReactCurvedText
            width={250}
            height={250}
            cx={125}
            cy={125}
            rx={82.5}
            ry={82.5}
            startOffset={0}
            reversed
            text='PRESS TO START PRESS TO START PRESS TO START PRESS TO START PRESS TO START PRESS TO START '
            textProps={{
              style: { fontSize: 10, fill: 'white' },
              textLength: 670,
              lengthAdjust: 'spacing'
            }}
            textPathProps={null}
            tspanProps={null}
            ellipseProps={null}
            svgProps={{ className: 'rotating-curved-text' }}
          />
          <div className='center-text'>Zen</div>
        </Link>
      </div>
    </div>
  )
}

export default PressToStart
