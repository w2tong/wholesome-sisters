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
}

const padding = '25px'

const Article = styled.div`
  border-radius: 5px;
  background-color: ${ContentBackgroundColor};
`

const HeaderCategoryContainer = styled.div`
  display: flex;
  align-items: center;
  padding: ${padding} ${padding} 0;
`

const StyledDate = styled(Date)`
  padding-left: ${padding}
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
    <Article>
      <HeaderCategoryContainer>
        <Header>{props.title}</Header>
        <CategoryTag category={props.category}/>
      </HeaderCategoryContainer>
      <StyledDate>{props.date}</StyledDate>
      {props.imgFile && props.imgAlt && <Image src={require(`../img/${props.imgFile}`)} alt={props.imgAlt} />}
      <StyledText>{props.text}</StyledText>
    </Article>
  )
}

export default NewsArticle
