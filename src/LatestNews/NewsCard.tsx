import styled from 'styled-components'
import { BackgroundColor } from '../styles'
import media from '../media'

interface NewsCardProps {
    title: string;
    imgFile: string | null;
    imgAlt: string | null;
    date: string;
    summary: string;
}

const borderRadius = 5

const Article = styled.div`
  display: flex;
  border-radius: ${borderRadius}px;
  margin-bottom: 15px;
  background-color: ${BackgroundColor};
  min-height: 200px;
  @media (max-width: ${media.Tablet}px) {
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
  }
`

const Content = styled.div`
  padding: 20px;
  min-height: 150px;
`

const Title = styled.div`
  font-size: 24px;
`

const Date = styled.div`
`

const Image = styled.img`
  width: 300px;
  min-height: 225px;
  object-fit: cover;
  border-radius: ${borderRadius}px 0px 0px ${borderRadius}px;
  @media (max-width: ${media.Tablet}px) {
    border-radius: ${borderRadius}px ${borderRadius}px 0px 0px;
    width: 100%;
    min-height: 150px;
    max-height: 150px;
  }
`

const Text = styled.div`
  margin-top: 16px;
  font-size: 16px;
`

function NewsCard (props: NewsCardProps) {
  return (
    <Article>
      {props.imgFile && props.imgAlt && <Image src={require(`../img/${props.imgFile}`)} alt={props.imgAlt} />}
      <Content>
        <Title>{props.title}</Title>
        <Date>{props.date}</Date>
        <Text>{props.summary}</Text>
      </Content>
    </Article>
  )
}

export default NewsCard
