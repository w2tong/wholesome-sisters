import styled from 'styled-components'
import { useState } from 'react'
import NewsArticle from './NewsArticle'
import SearchBar from '../SearchBar'
import articlesJSON from '../json/articles.json'
import { Title, Body } from '../styles'

const FlexboxContainer = styled.div`
    display: flex;
    justify-content: flex-start;
  `

const RightSearchBar = styled(SearchBar)`
    margin-left: auto
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
        <Title>News</Title>
        <RightSearchBar handleChange={setInput} value={input} placeholder="Filter articles.."/>
      </FlexboxContainer>
      {articles}
    </Body>
  )
}

export default NewsFeed
