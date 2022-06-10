import styled from 'styled-components'
import { useState } from 'react'
import NewsArticle from './NewsArticle'
import SearchBar from '../SearchBar'
import articlesJSON from './articles.json'

const NewsFeedStyled = styled.div`
  padding: 25px;
`

function NewsFeed () {
  const [input, setInput] = useState('')
  const articles = articlesJSON.filter((article) => {
    const searchInput = input.trim().toLowerCase()
    const title = article.title.toLowerCase()
    return title.includes(searchInput) || article.tags.some(tag => tag.includes(searchInput))
  }
  ).map(article => {
    return (
      <NewsArticle {...article} key={article.title}/>
    )
  })

  return (
    <NewsFeedStyled className="newsWindow overflow-auto">
      <h2>News</h2>
      <SearchBar handleChange={setInput} value={input}/>
      {articles}
    </NewsFeedStyled>
  )
}

export default NewsFeed
