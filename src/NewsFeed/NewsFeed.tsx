import styled from 'styled-components'
import { useState } from 'react'
import NewsArticle from './NewsArticle'
import SearchBar from '../SearchBar'
import articlesJSON from '../json/articles.json'
import { Title, Body } from '../styles'

const FlexboxContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
`

const Hidden = styled.div`
  width: 200px;
  display: hidden;
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
    <Body>
      <FlexboxContainer>
        <Hidden/>
        <Title>News</Title>
        <SearchBarContainer>
          <SearchBar handleChange={setInput} value={input} placeholder="Filter articles.."/>
        </SearchBarContainer>
      </FlexboxContainer>
      {articles}
    </Body>
  )
}

export default NewsFeed
