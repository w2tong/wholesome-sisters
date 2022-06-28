import styled from 'styled-components'
import CategoryTag from '../CategoryTag'
import ImageModal from './ImageModal'
import { Header, Date, Text, ContentBackgroundColor, Href } from '../styles'
import media from '../media'

interface ArticleProps {
    title: string;
    category: string;
    date: string;
    text: string;
    links: Array<{text: string, href: string}>,
    imgFile: string;
    imgAlt: string;
    imgThumb: boolean;
    className?: string;
}

const padding = '20px'

const Container = styled.div`
  background-color: ${ContentBackgroundColor};
  max-width: ${media.Large}px;
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

const ContentContainer = styled.div`
  padding: ${padding};
`

const StyledText = styled(Text)`
  
`

const StyledImageModal = styled(ImageModal)`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`

function NewsArticle (props: ArticleProps) {
  const image = require(`../img/${props.imgFile}`)
  const links = props.links.map(link => <Href href={link.href} key={link.href}>{link.text}</Href>)

  return (
    <Container className={props.className}>
      <HeaderContainer>
        <StyledHeader>{props.title}</StyledHeader>
        <StyledCategoryTag category={props.category}/>
        <Date>{props.date}</Date>
      </HeaderContainer>
      <Image src={image} alt={props.imgAlt}/>
      <ContentContainer>
        <StyledText>{props.text}</StyledText>
        <br/>
        {links}
        <br/>
        {props.imgThumb && <StyledImageModal src={image}/>}
      </ContentContainer>
    </Container>
  )
}

export default NewsArticle
