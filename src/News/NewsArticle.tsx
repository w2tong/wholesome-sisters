import styled from 'styled-components'
import CategoryTag from '../CategoryTag'
import { Header, Date, Text, ContentBackgroundColor } from '../styles'

interface ArticleProps {
    title: string;
    category: string;
    date: string;
    text: string;
    imgFile: string | null;
    imgAlt: string | null;
    className?: string;
}

const padding = '25px'

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

function NewsArticle (props: ArticleProps) {
  return (
    <Container className={props.className}>
      <HeaderContainer>
        <StyledHeader>{props.title}</StyledHeader>
        <StyledCategoryTag category={props.category}/>
        <Date>{props.date}</Date>
      </HeaderContainer>
      {props.imgFile && props.imgAlt && <Image src={require(`../img/${props.imgFile}`)} alt={props.imgAlt} />}
      <StyledText>{props.text}</StyledText>
    </Container>
  )
}

export default NewsArticle
