import styled from 'styled-components'
import { BackgroundColor } from '../styles'

interface ArticleProps {
    title: string;
    imgFile: string | null;
    imgAlt: string | null;
    date: string;
    text: string;
}

const borderRadius = 10

const Article = styled.div`
  display: flex;
  border-radius: ${borderRadius}px;
  margin-bottom: 40px;
  background-color: ${BackgroundColor};
`

const Content = styled.div`
  padding: 25px;
`

const Title = styled.div`
  font-size: 24px;
`

const Date = styled.div`
`

const Image = styled.img`
  max-width: 300px;
  min-height: 200px;
  object-fit: cover;
  border-radius: ${borderRadius}px 0px 0px ${borderRadius}px;
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
