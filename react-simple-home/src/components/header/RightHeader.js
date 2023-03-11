import React from 'react'

function RightHeader() {
  return (
    <nav>
        <ul className="nav-list">
        <li className="nav-list-item">
            <a className="nav-link current-page" href="index.html">Home</a>
        </li>
        <li className="nav-list-item">
            <a className="nav-link" href="about-me.html">About Me</a>
        </li>
        <li className="nav-list-item">
            <a className="nav-link" href="recent-posts.html">Recent Posts</a>
        </li>
        </ul>
    </nav>
  )
}

export default RightHeader