import styled from 'styled-components'

interface ArticleProps {
    title: string;
    imgFile: string | null;
    imgAlt: string | null;
    date: string;
    text: string;
}

const Article = styled.div`
  border-radius: 25px;
  margin-bottom: 40px;
  padding: 25px;
  background-color: rgba(255, 255, 255, 0.1);
`

const Title = styled.div`
  font-size: 35px;
`

const Date = styled.div`

`

const Image = styled.img`
  max-width: 100%;
  border-radius: 5px;
`

const Text = styled.div`
  margin-top: 30px;
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
