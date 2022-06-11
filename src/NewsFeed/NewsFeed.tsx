import styled from 'styled-components'
import { useState } from 'react'
import NewsArticle from './NewsArticle'
import SearchBar from '../SearchBar'
import articlesJSON from './articles.json'
import { FlexSpaceBetween, Title } from '../styles'

const StyledNewsFeed = styled.div`
  padding: 10px 25px;
  height: 85vh;
`

const TitleLeftPadding = styled(Title)`
  padding-left: 25px;
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
      <FlexSpaceBetween>
        <TitleLeftPadding>News</TitleLeftPadding>
        <SearchBar handleChange={setInput} value={input} placeholder="Filter articles.."/>
      </FlexSpaceBetween>
        {articles}
    </StyledNewsFeed>
  )
}

export default NewsFeed
