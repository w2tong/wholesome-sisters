import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useState } from 'react'
import NewsCard from './NewsCard'
import SearchBar from '../SearchBar'
import articlesJSON from '../json/articles.json'
import { FlexSpaceBetween, Title } from '../styles'

const StyledNewsFeed = styled.div`
  padding: 10px 25px;
`

const TitleLeftPadding = styled(Title)`
  padding-left: 25px;
`

function NewsFeed () {
  const [input, setInput] = useState('')
  const articles = articlesJSON.slice(0, 3).filter((article) => {
    const searchInput = input.trim().toLowerCase()
    const title = article.title.toLowerCase()
    return title.includes(searchInput) || article.tags.some(tag => tag.includes(searchInput))
  }
  ).map(article => {
    return (
      <NewsCard {...article} key={article.title}/>
    )
  })

  return (
    <StyledNewsFeed>
      <div>
        <FlexSpaceBetween>
          <Link to="/news"><TitleLeftPadding>News</TitleLeftPadding></Link>
          <SearchBar handleChange={setInput} value={input} placeholder="Filter articles.."/>
        </FlexSpaceBetween>
      </div>
      {articles}
    </StyledNewsFeed>
  )
}

export default NewsFeed
