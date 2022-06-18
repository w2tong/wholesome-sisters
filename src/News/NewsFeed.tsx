import styled from 'styled-components'
import { useState } from 'react'
import NewsArticle from './NewsCard'
import SearchBar from '../SearchBar'
import articlesJSON from '../json/articles.json'
import { Title } from '../styles'
import media from '../media'

const FlexboxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${media.Medium}px) {
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
  }
`

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${media.Medium}px) {
    display: block;
    width: 100%;
  }
`

const Hidden = styled.div`
  width: 250px;
  display: hidden;
`
const Container = styled.div`
  padding: 0 2.5vw;
`

const NewsArticleContainer = styled.div`
  margin: 25px 0;
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
      <NewsArticleContainer key={article.title}>
        <NewsArticle {...article} />
      </NewsArticleContainer>
    )
  })

  return (
    <Container>
      <FlexboxContainer>
        <Hidden/>
        <Title>News</Title>
        <SearchBarContainer>
          <SearchBar handleChange={setInput} value={input} placeholder="Filter articles.."/>
        </SearchBarContainer>
      </FlexboxContainer>
      {articles}
    </Container>
  )
}

export default NewsFeed
