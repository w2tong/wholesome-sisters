import styled from 'styled-components'
import image from './img/mexicanandybug.png'

const StyledHeader = styled.div`
  height: 6vh;
  font-size: 72px;
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
