import { useParams } from 'react-router-dom'
import NewsArticle from './NewsArticle'
import articlesJSON from '../json/articles.json'

function News () {
  const params = useParams()
  const json = articlesJSON.filter(article => article.id === params.id)
  return (
    <div>
      <NewsArticle {...json[0]}/>
    </div>
  )
}

export default News
