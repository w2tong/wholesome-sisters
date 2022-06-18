import styled from 'styled-components'

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
const HighlightColor = 'rgba(255, 255, 255, 0.3)'

const Link = styled.a`

`

export { Title, Header, Date, Text, BackgroundColor, ContentBackgroundColor, HighlightColor, Link }
