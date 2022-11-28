import React from 'react'
import Header from '../Header/Header'
import './Layout_style.css'

const Layout = ({ children }) => {
  return (
    <div className='container'>
        <Header/>
        {children}
    </div>
  )
}

export default Layout