import NewsArticle from './NewsArticle'
import articlesJSON from './articles.json'

function NewsFeed () {
  const articles = articlesJSON.map(art => {
    return (
      <NewsArticle title={art.title} date={art.date} text={art.text} imgFile={art.imgFile} imgAlt={art.imgAlt} key={art.title}/>
    )
  })

  return (
    <div className="newsWindow overflow-auto">
      {articles}
    </div>
  )
}

export default NewsFeed
