interface ImageInterface {
  file: string,
  alt: string
}

function Image (props: ImageInterface) {
  return (
    <img src={require(`./img/${props.file}`)} alt={props.alt} width="250px" height="250px"/>
  )
}

export default Image
