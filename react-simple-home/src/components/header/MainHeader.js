import React from 'react'
import LeftHeader from './LeftHeader'
import RightHeader from './RightHeader'
import "./header.css"

function MainHeader() {
  return (
    <div className="header">
        <div className="container container-flex">
            <LeftHeader />
            <RightHeader />
        </div>
    </div>
  )
}

export default MainHeader