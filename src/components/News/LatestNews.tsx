import styled from 'styled-components'
import NewsCard from './NewsCard'
import articlesJSON from './articles'
import { Title, TextLink } from '../../styles'

const StyledNewsCard = styled(NewsCard)`
  margin-bottom: 10px;
`

const articles = articlesJSON.slice(0, 3).map(article => <StyledNewsCard {...article} key={article.title}/>)

function NewsFeed ({ className } : {className?: string}) {
  return (
    <div className={className}>
      <Title>Latest News</Title>
      {articles}
      <TextLink to="/news">More News</TextLink>
    </div>
  )
}

export default NewsFeed
