import { useState } from 'react'
import NewsArticle from './NewsArticle'
import SearchBar from '../SearchBar'
import articlesJSON from './articles.json'

function NewsFeed () {
  const [input, setInput] = useState('')
  const articles = articlesJSON.filter(article => article.title.includes(input)).map(article => {
    return (
      <NewsArticle title={article.title} date={article.date} text={article.text} imgFile={article.imgFile} imgAlt={article.imgAlt} key={article.title}/>
    )
  })

  return (
    <div className="newsWindow overflow-auto">
      <SearchBar handleChange={setInput} value={input}/>
      {input}
      {articles}
    </div>
  )
}

export default NewsFeed
