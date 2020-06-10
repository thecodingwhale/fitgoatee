import React from 'react'
import Navbar from '../components/navbar'

const Template = ({ children }) => {
  return (
    <div>
      <Navbar />

      {children}
    </div>
  )
}

export default Template
