import { useState } from 'react'
import NewsArticle from './NewsArticle'
import SearchBar from '../SearchBar'
import articlesJSON from './articles.json'

function NewsFeed () {
  const [input, setInput] = useState('')
  const articles = articlesJSON.filter((article) => {
    const searchInput = input.trim().toLowerCase()
    const title = article.title.toLowerCase()
    return title.includes(searchInput) || article.tags.some(tag => tag.includes(searchInput))
  }
  ).map(article => {
    return (
      <NewsArticle title={article.title} date={article.date} text={article.text} imgFile={article.imgFile} imgAlt={article.imgAlt} key={article.title}/>
    )
  })

  return (
    <div className="newsWindow overflow-auto">
      <SearchBar handleChange={setInput} value={input}/>
      {articles}
    </div>
  )
}

export default NewsFeed
