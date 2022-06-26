import styled from 'styled-components'
import CategoryTag from '../CategoryTag'
import ImageModal from './ImageModal'
import { Header, Date, Text, ContentBackgroundColor } from '../styles'

interface ArticleProps {
    title: string;
    category: string;
    date: string;
    text: string;
    imgFile: string;
    imgAlt: string;
    imgThumb: boolean;
    className?: string;
}

const padding = '20px'

const Container = styled.div`
  background-color: ${ContentBackgroundColor};
`

const HeaderContainer = styled.div`
  padding-top: 10px;
  padding-left: ${padding};
`

const StyledHeader = styled(Header)`
  vertical-align: middle;
`

const StyledCategoryTag = styled(CategoryTag)`
  vertical-align: middle;
  margin-left: 10px;
`

const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  padding: 10px 0px;
`

const StyledText = styled(Text)`
  padding: ${padding};
`

const StyledImageModal = styled(ImageModal)`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`

function NewsArticle (props: ArticleProps) {
  const image = require(`../img/${props.imgFile}`)

  return (
    <Container className={props.className}>
      <HeaderContainer>
        <StyledHeader>{props.title}</StyledHeader>
        <StyledCategoryTag category={props.category}/>
        <Date>{props.date}</Date>
      </HeaderContainer>
      <Image src={image} alt={props.imgAlt}/>
      <StyledText>{props.text}</StyledText>
      {props.imgThumb && <StyledImageModal src={image}/>}
    </Container>
  )
}

export default NewsArticle
