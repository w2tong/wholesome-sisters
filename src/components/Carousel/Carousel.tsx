import styled from 'styled-components'
import { ContentBackgroundColor } from '../../styles'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import carouselItemsJSON from '../../json/carousel-items.json'
import CarouselItem from './CarouselItem'

const StyledCarousel = styled(Carousel)`
  background-color: ${ContentBackgroundColor};
`

function GalleryCarousel () {
  const carouselItems = carouselItemsJSON.map(item => <CarouselItem src={require(`../../img/${item.img}`)} caption={item.caption} key={item.toString()}/>)

  return (
    <StyledCarousel autoPlay={true} interval={5000} transitionTime={500} showThumbs={false} infiniteLoop={true} emulateTouch={true} showStatus={false}>
      {carouselItems}
    </StyledCarousel>
  )
}

export default GalleryCarousel
