import NewsArticle from "./NewsArticle";
import articlesJSON from "./articles.json"

function NewsFeed() {
    const articles = articlesJSON.map(art => <NewsArticle title={art.title} date={art.date} text={art.text} img={art.img} imgAlt={art.imgAlt}/>);

    return (
    <div className="newsWindow">
        {articles}
    </div>
    );
}
  
export default NewsFeed;