import React from 'react'

function RecentArticle() {
  return (
    <article className="article-recent">
      <div className="article-recent-main">
        <h2 className="article-title">Keeping cooking simple</h2>
        <p className="article-body">
          Food is a very important part of everyone's life. If you want to
          be healthy, you have to eat healthy. One of the easiest ways to do
          that is to keep your cooking nice and simple.
        </p>
        <a href="#" className="article-read-more">continue reading</a>
      </div>
      <div className="article-recent-secondary">
        <img src="./img/food.jpg" alt="" className="article-image" />
        <p className="article-info">July 19, 2019 | 3 comments</p>
      </div>
    </article>
  )
}

export default RecentArticle