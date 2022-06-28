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
const ContentBackgroundColor = 'rgb(32, 32, 32)'
const Content2BackgroundColor = 'rgb(48, 48, 48)'
const BackgroundHighlightColor = 'rgb(64, 64, 64)'
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

const Icon = styled.img`
  width: 32px;
  height: 32px;
  padding: 5px;
  border-radius: 10px;
  &:hover {
    background-color: ${BackgroundHighlightColor};
  }
`

export { Title, Header, Date, Text, BackgroundColor, ContentBackgroundColor, Content2BackgroundColor, BackgroundHighlightColor, TextHighlightColor, TextLink, Icon }
