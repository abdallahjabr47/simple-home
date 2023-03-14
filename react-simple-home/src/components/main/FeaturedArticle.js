import React from 'react'
import './style.css'

function FeaturedArticle() {
  return (
    <article className="article-featured">
      <h2 className="article-title">Finding simplicity in life</h2>
      <img src="./img/life.jpg" alt="" className="article-image" />
      <p className="article-info">July 23, 2019 | 3 comments</p>
      <p className="article-body">
        <strong>Life can get complicated really quickly</strong>, but it
        doesn't have to be! There are many ways to simplify your life,
        <a>a few of which we've explored in the past</a>. This week we're
        taking a bit of a approach though, in how you can find simplicity in
        the life you already living.
      </p>
      <a href="#" className="article-read-more">continue reading</a>
    </article>
  )
}

export default FeaturedArticle