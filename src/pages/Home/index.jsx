import React from 'react'
import Banner from '../../components/Banner'
import Gallery from '../../components/Gallery'

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ COMPONENT                                                               │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <Gallery />
    </React.Fragment>
  )
}

export default Home
