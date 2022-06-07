import NewsArticle from "./NewsArticle";
import articlesJSON from "./articles.json"

function NewsFeed() {
    const articles = articlesJSON.map(art => {
        return (
            <NewsArticle title={art.title} date={art.date} text={art.text} img={art.img} imgAlt={art.imgAlt} key={art.title}/>
        );
    });

    return (
    <div className="newsWindow">
        {articles}
    </div>
    );
}
  
export default NewsFeed;