import styled from 'styled-components'
import CategoryTag from '../CategoryTag'
import { Header, Date, Text, ContentBackgroundColor, TextLink } from '../styles'
import media from '../media'

interface NewsCardProps {
    title: string;
    category: string;
    date: string;
    summary: string;
    imgFile: string | null;
    imgAlt: string | null;
}

const borderRadius = 5

const Article = styled.div`
  display: flex;
  border-radius: ${borderRadius}px;
  margin-bottom: 15px;
  background-color: ${ContentBackgroundColor};
  min-height: 200px;
  @media (max-width: ${media.Medium}px) {
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
  }
`

const HeaderCategoryContainer = styled.div`
  display: flex;
  align-items: center;
`

const Content = styled.div`
  padding: 20px;
  min-height: 150px;
`

const Image = styled.img`
  width: 250px;
  min-height: 100px;
  object-fit: cover;
  border-radius: ${borderRadius}px 0px 0px ${borderRadius}px;
  @media (max-width: ${media.Medium}px) {
    border-radius: ${borderRadius}px ${borderRadius}px 0px 0px;
    width: 100%;
    min-height: 150px;
    max-height: 150px;
  }
`

const StyledText = styled(Text)`
  margin-top: 16px;
`

function NewsCard (props: NewsCardProps) {
  return (
    <Article>
      {props.imgFile && props.imgAlt && <Image src={require(`../img/${props.imgFile}`)} alt={props.imgAlt} />}
      <Content>
        <HeaderCategoryContainer>
          <Header><TextLink to="news">{props.title}</TextLink></Header>
          <CategoryTag category={props.category}/>
        </HeaderCategoryContainer>
        <Date>{props.date}</Date>
        <StyledText>{props.summary}</StyledText>
      </Content>
    </Article>
  )
}

export default NewsCard
