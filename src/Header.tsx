import styled from 'styled-components'
import image from './img/mexicanandybug.png'

const StyledHeader = styled.div`
  height: 15vh;
  text-align: center;
  font-size: 72pt;
  background-image: url(${image});
  background-size: 100% auto;
  margin: 0;
  padding: 0;
`

function Header () {
  return (
    <StyledHeader>
      Wholesome Sisters
    </StyledHeader>
  )
}

export default Header
