import styled from 'styled-components'
import media from '../../media'

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

interface CarouselItemProps {
  src: string;
  caption: string;
}

function CarouselItem (props: CarouselItemProps) {
  return (
    <Container>
        <Image src={props.src}/>
        <Caption>{props.caption}</Caption>
    </Container>
  )
}

export default CarouselItem
