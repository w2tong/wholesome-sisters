import Image from '../Image'
import styled from 'styled-components'

interface Article {
    title: string;
    imgFile: string | null;
    imgAlt: string | null;
    date: string;
    text: string;
}

const Title = styled.div`

`

const Date = styled.div`

`

const StyledImage = styled(Image)`

`

const Text = styled.div`

`

function NewsArticle (props: Article) {
  return (
    <div>
      <Title>{props.title}</Title>
      <Date>{props.date}</Date>
      {props.imgFile && props.imgAlt && <StyledImage file={props.imgFile} alt={props.imgAlt}/>}
      <Text>{props.text}</Text>
    </div>
  )
}

export default NewsArticle
