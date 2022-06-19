import NewsCard from './NewsCard'
import articlesJSON from '../json/articles.json'
import { Title } from '../styles'

function NewsFeed ({ className } : {className?: string}) {
  const articles = articlesJSON.slice(0, 3).map(article => <NewsCard {...article} key={article.title}/>)

  return (
    <div className={className}>
      <Title>Latest News</Title>
      {articles}
    </div>
  )
}

export default NewsFeed
