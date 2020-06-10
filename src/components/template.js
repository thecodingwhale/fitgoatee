import React from 'react'
import Navbar from '../components/navbar'

const Template = ({ children }) => {
  return (
    <div className="relative">
      <Navbar />
      {children}
    </div>
  )
}

export default Template
