import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 40px;
  padding: 10px;
`

const Header = styled.span`
  font-size: 24px;
  color: #FFFFFF;
`

const Date = styled.div`
  font-size: 12px;
  color: #FFFFFF;
`

const Text = styled.div`
  font-size: 16px;
  color: #CCCCCC;
`
const BackgroundColor = 'rgb(16, 16, 16)'
const ContentBackgroundColor = 'rgba(255, 255, 255, 0.05)'
const BackgroundHighlightColor = 'rgba(255, 255, 255, 0.15)'
const TextHighlightColor = 'red'

const TextLink = styled(Link)`
  color: #FFFFFF;
  text-decoration: none;
  &:visited {
    color: inherit;
  }
  &:hover {
    color: ${TextHighlightColor};
  }
  
`

export { Title, Header, Date, Text, BackgroundColor, ContentBackgroundColor, BackgroundHighlightColor, TextHighlightColor, TextLink }
