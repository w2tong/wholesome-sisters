interface Article {
    title: string;
    img: string;
    imgAlt: string;
    date: string;
    text: string;
}

function NewsArticle(props: Article) {
    return (
        <div>
            <div>{props.title}</div>
            <img src={require(`../img/${props.img}`)} alt={props.imgAlt} width="200px" height="200px"/>
            <div>{props.date}</div>
            <div>{props.text}</div>
        </div>
    );
}
  
export default NewsArticle;