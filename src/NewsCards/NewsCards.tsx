import NewsCard from './NewsCard'
import articlesJSON from '../json/articles.json'
import { Title, Body } from '../styles'

function NewsFeed () {
  const articles = articlesJSON.slice(0, 3).map(article => <NewsCard {...article} key={article.title}/>)

  return (
    <Body>
      <Title>News</Title>
      {articles}
    </Body>
  )
}

export default NewsFeed
