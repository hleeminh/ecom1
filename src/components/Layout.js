import React from 'react'
import Header from './Header'
import Footer from './Footer'
import RouteMain from '../routes/RouteMain'

const Layout = () => {
  return (
    <div>
      <Header />
      <div className='container'>
        <div className='main'>
          <RouteMain />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout