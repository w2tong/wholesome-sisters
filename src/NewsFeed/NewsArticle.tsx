import styled from 'styled-components'

interface ArticleProps {
    title: string;
    imgFile: string | null;
    imgAlt: string | null;
    date: string;
    text: string;
}

const padding = '25px'

const Article = styled.div`
  border-radius: 5px;
  margin-bottom: 40px;
  background-color: rgba(255, 255, 255, 0.1);
`

const Title = styled.div`
  font-size: 35px;
  padding: ${padding} ${padding} 0;
`

const Date = styled.div`
  padding-left: ${padding}
`

const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  padding: 10px 0px;
`

const Text = styled.div`
  padding: ${padding};
`

function NewsArticle (props: ArticleProps) {
  return (
    <Article>
      <Title>{props.title}</Title>
      <Date>{props.date}</Date>
      {props.imgFile && props.imgAlt && <Image src={require(`../img/${props.imgFile}`)} alt={props.imgAlt} />}
      <Text>{props.text}</Text>
    </Article>
  )
}

export default NewsArticle
