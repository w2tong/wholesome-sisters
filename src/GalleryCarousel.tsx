import styled from 'styled-components'
import { ContentBackgroundColor } from './styles'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import CouncilOfBloodKill from './img/council-of-blood-kill.jpg'
import oneSixSix from './img/166_1600x900.png'
import shadowlandsQueue from './img/shadowlands-queue.jpg'
import media from './media'
// const BlurredImage = styled.div`
//     background-image: url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg');
//     background-size: cover;
//     background-repeat: no-repeat;
//     width: 100%;
//     height: 250px;
//     box-shadow: 0 0 8px 8px ${BackgroundColor} inset;
// `

const StyledCarousel = styled(Carousel)`
  background-color: ${ContentBackgroundColor};
`

const Container = styled.div`
  position: relative;
`

const Image = styled.img`
  max-width: ${media.XXLarge}px;
  height auto;
  object-fit: cover;
`

const Caption = styled.p`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, -50%);
  text-shadow: 0 0 5px black, 0 0 5px black, 0 0 5px black, 0 0 5px black;
`

function GalleryCarousel () {
  return (
    <StyledCarousel autoPlay={true} interval={5000} transitionTime={500} showThumbs={false} infiniteLoop={true} emulateTouch={true} showStatus={false}>
      <Container>
        <Image src={shadowlandsQueue}/>
        <Caption>Day 1 of World of Warcraft: Shadowlands</Caption>
      </Container>
      <Container>
        <Image src={oneSixSix}/>
        <Caption>166</Caption>
      </Container>
      <Container>
        <Image src={CouncilOfBloodKill}/>
        <Caption>Wholesome Sisters first kill of The Council of Blood</Caption>
      </Container>
    </StyledCarousel>
  )
}

export default GalleryCarousel
