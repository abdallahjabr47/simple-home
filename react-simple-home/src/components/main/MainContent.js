import React from 'react'
import Article from './Article'
import Aside from './Aside'

function MainContent() {
  return (
    <div className="container container-flex">
      <Article />
      <Aside />
    </div>
  )
}

export default MainContent