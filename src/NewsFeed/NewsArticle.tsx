import Image from '../Image'

interface Article {
    title: string;
    imgFile: string | null;
    imgAlt: string | null;
    date: string;
    text: string;
}

function NewsArticle (props: Article) {
  return (
    <div>
      <div>{props.title}</div>
      {props.imgFile && props.imgAlt && <Image file={props.imgFile} alt={props.imgAlt}/>}
      <div>{props.date}</div>
      <div>{props.text}</div>
    </div>
  )
}

export default NewsArticle
