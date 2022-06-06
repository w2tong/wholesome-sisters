import NewsArticle from "./NewsArticle";

function NewsFeed() {
    return (
    <div className="newsWindow">
        <NewsArticle title='article 1' date='monday' text='haha1'/>
        <NewsArticle title='article 1' date='tuesday' text='haha2'/>
        <NewsArticle title='article 1' date='wednesday' text='haha3'/>
    </div>
    );
}
  
export default NewsFeed;