import { ReactElement } from 'react'
import styled from 'styled-components'
import CategoryTag from '../CategoryTag'
import { Header, Date, ContentBackgroundColor } from '../../styles'

interface ArticleProps {
    title: string;
    category: string;
    date: string;
    content: ReactElement;
    imgFile: string;
    imgAlt: string;
    objectPosition: string;
    className?: string;
}

const padding = '20px'

const Container = styled.div`
  display: flex;
  flex-direction: column;
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

const Image = styled.img<{objectPosition: string}>`
  width: 100%;
  height: 250px;
  object-fit: cover;
  object-position: ${props => props.objectPosition};
  padding: 10px 0px;
`

const ContentContainer = styled.div`
  padding: ${padding};
`

function NewsArticle (props: ArticleProps) {
  const image = require(`../../img/${props.imgFile}`)

  return (
    <Container className={props.className}>
      <HeaderContainer>
        <StyledHeader>{props.title}</StyledHeader>
        <StyledCategoryTag category={props.category}/>
        <Date>{props.date}</Date>
      </HeaderContainer>
      <Image src={image} alt={props.imgAlt} objectPosition={props.objectPosition}/>
      <ContentContainer>{props.content}</ContentContainer>
    </Container>
  )
}

export default NewsArticle
