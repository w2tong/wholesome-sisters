import { useParams } from 'react-router-dom'
import NewsArticle from './NewsArticle'
import articlesJSON from '../json/articles.json'
import styled from 'styled-components'
import media from '../media'

const Container = styled.div`
  margin: 0 auto;
  max-width: ${media.Large}px;
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
