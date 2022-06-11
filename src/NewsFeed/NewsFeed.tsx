import styled from 'styled-components'
import { useState } from 'react'
import NewsArticle from './NewsArticle'
import SearchBar from '../SearchBar'
import articlesJSON from './articles.json'

const StyledNewsFeed = styled.div`
padding: 10px 25px;
height: 75vh;
`
const StyledSearchBar = styled.div`
  margin-top:20px;
  
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
    <StyledNewsFeed className="newsWindow overflow-auto row g-0">
        <h2 className="col-lg-7">News</h2>
      <StyledSearchBar className="col-lg-5" >
        <SearchBar handleChange={setInput} value={input} placeholder="Filter articles.."/>
      </StyledSearchBar>
        {articles}
    </StyledNewsFeed>
  )
}

export default NewsFeed
