import styled from 'styled-components'
import NewsCard from './NewsCard'
import articlesJSON from '../json/articles.json'
import { Title } from '../styles'

const Container = styled.div`
  padding: 0 10px;
`

function NewsFeed () {
  const articles = articlesJSON.slice(0, 3).map(article => <NewsCard {...article} key={article.title}/>)

  return (
    <Container>
      <Title>Latest News</Title>
      {articles}
    </Container>
  )
}

export default NewsFeed
