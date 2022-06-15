import styled from 'styled-components'

const StyledCarousel = styled.div`
  display: flex;
  justify-content: center;
  border: white solid 1px;
`

function GalleryCarousel () {
  return (
    <StyledCarousel>
      <h1>Gallery Carousel here</h1>
    </StyledCarousel>
  )
}

export default GalleryCarousel
