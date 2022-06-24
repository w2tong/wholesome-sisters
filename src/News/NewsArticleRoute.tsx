import { useParams } from 'react-router-dom'
import NewsArticle from './NewsArticle'
import articlesJSON from '../json/articles.json'
import styled from 'styled-components'

const Container = styled.div`
  padding: 10px;
`

function News () {
  const params = useParams()
  const json = articlesJSON.filter(article => article.id === params.id)
  return (
    <Container>
      <NewsArticle {...json[0]}/>
    </Container>
  )
}

export default News
