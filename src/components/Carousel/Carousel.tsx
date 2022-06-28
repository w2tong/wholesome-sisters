import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import carouselItemsJSON from '../../json/carousel-items.json'
import CarouselItem from './CarouselItem'

const carouselItems = carouselItemsJSON.map(item => <CarouselItem src={require(`../../img/${item.img}`)} alt={item.caption} caption={item.caption} key={item.toString()}/>)

function GalleryCarousel () {
  return (
    <Carousel autoPlay={true} interval={5000} transitionTime={500} showThumbs={false} infiniteLoop={true} emulateTouch={true} showStatus={false}>
      {carouselItems}
    </Carousel>
  )
}

export default GalleryCarousel
