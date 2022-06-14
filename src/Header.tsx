import styled from 'styled-components'
import image from './img/mexicanandybug.png'

interface HeaderProps {
  height: number
}

function Header (props: HeaderProps) {
  const StyledHeader = styled.div`
  height: ${props.height}vh;
  font-size: 72px;
  background-image: url(${image});
  background-size: 100% auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

  return (
    <StyledHeader>
      Wholesome Sisters
      {props.height}
    </StyledHeader>
  )
}

export default Header
