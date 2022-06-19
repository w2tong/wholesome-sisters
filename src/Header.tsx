import styled from 'styled-components'
import media from './media'
import image from './img/mexicanandybug.png'

const Container = styled.div`
  height: 80px;
  font-size: 48px;
  background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${media.XSmall}px) {
    font-size: 36px;
  }
`

function Header () {
  return (
    <Container>
      Wholesome Sisters
    </Container>
  )
}

export default Header
