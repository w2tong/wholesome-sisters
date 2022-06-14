import styled from 'styled-components'
import { BackgroundColor } from '../styles'

interface ArticleProps {
    title: string;
    imgFile: string | null;
    imgAlt: string | null;
    date: string;
    text: string;
}

const Article = styled.div`
  display: flex;
  border-radius: 25px;
  margin-bottom: 40px;
  padding: 25px;
  background-color: ${BackgroundColor};
`

const Content = styled.div`
  margin-left: 25px;
`

const Title = styled.div`
  font-size: 24px;
`

const Date = styled.div`

`

const Image = styled.img`
  max-width: 12%;
  border-radius: 5px;
  object-fit: cover;
`

const Text = styled.div`
  margin-top: 16px;
  font-size: 16px;
`

function NewsCard (props: ArticleProps) {
  return (
    <Article>
      {props.imgFile && props.imgAlt && <Image src={require(`../img/${props.imgFile}`)} alt={props.imgAlt} />}
      <Content>
        <Title>{props.title}</Title>
        <Date>{props.date}</Date>
        <Text>{props.text}</Text>
      </Content>
    </Article>
  )
}

export default NewsCard
