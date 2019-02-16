import React, { useState, useEffect } from 'react'
import '../assets/scss/main.scss'

import Footer from './Footer'

const Template = props => {
  const [loading, useLoading] = useState('is-loading')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      useLoading({ loading: '' })
    }, 100)
    return () => {
      clearTimeout(timeoutId)
    }
  })

  const { children } = props

  return (
    <div className={`body ${loading}`}>
      <div id="wrapper">
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default Template
