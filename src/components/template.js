import React from 'react'
import Navbar from '../components/navbar'
// This ensures that the icon CSS is loaded immediately before attempting to render icons
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'

// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false

const Template = ({ children }) => {
  return (
    <div className="relative antialiased">
      <Navbar />
      {children}
    </div>
  )
}

export default Template
