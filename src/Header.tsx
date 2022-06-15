import styled from 'styled-components'
import image from './img/mexicanandybug.png'

const StyledHeader = styled.div`
  height: 80px;
  font-size: 48px;
  background-image: url(${image});
  background-size: 100% auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

function Header () {
  return (
    <StyledHeader>
      Wholesome Sisters
    </StyledHeader>
  )
}

export default Header
