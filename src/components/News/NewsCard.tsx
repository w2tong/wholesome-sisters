import styled from 'styled-components'
import { Link } from 'react-router-dom'
import CategoryTag from '../CategoryTag'
import { Header, Date, Text, ContentBackgroundColor, TextLink } from '../../styles'
import media from '../../media'

interface NewsCardProps {
    id: string;
    title: string;
    category: string;
    date: string;
    summary: string;
    imgFile: string;
    imgAlt: string;
    objectPosition: string;
    className? : string;
}

const borderRadius = 5

const Article = styled.div`
  display: flex;
  border-radius: ${borderRadius}px;
  background-color: ${ContentBackgroundColor};
  min-height: 200px;
  @media (max-width: ${media.Medium}px) {
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
  }
`

const StyledHeader = styled(Header)`
  vertical-align: middle;
`

const StyledCategoryTag = styled(CategoryTag)`
  vertical-align: middle;
  margin-left: 10px;
`

const Content = styled.div`
  padding: 20px;
  min-height: 150px;
`

const Image = styled.img<{ objectPosition: string }>`
  width: 250px;
  height: 200px;
  object-fit: cover;
  object-position: ${props => props.objectPosition};
  border-radius: ${borderRadius}px 0px 0px ${borderRadius}px;
  @media (max-width: ${media.Medium}px) {
    border-radius: ${borderRadius}px ${borderRadius}px 0px 0px;
    width: 100%;
    height: 150px;
  }
  &:hover {
    filter: brightness(1.6);
  }
`

const StyledText = styled(Text)`
  margin-top: 16px;
`

function NewsCard (props: NewsCardProps) {
  return (
    <Article className={props.className}>
      {props.imgFile && props.imgAlt && <Link to={`/news/${props.id}`}><Image src={require(`../../img/${props.imgFile}`)} alt={props.imgAlt} objectPosition={props.objectPosition}/></Link>}
      <Content>
        <StyledHeader><TextLink to={`/news/${props.id}`}>{props.title}</TextLink></StyledHeader>
        <StyledCategoryTag category={props.category}/>
        <Date>{props.date}</Date>
        <StyledText>{props.summary}</StyledText>
      </Content>
    </Article>
  )
}

export default NewsCard
