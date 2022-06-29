import { useState, useEffect } from 'react'
import styled from 'styled-components'

interface ImageModalProps {
  src: string;
  alt: string;
  className?: string;
}

const Thumbnail = styled.img`
  width: 100%;
  max-width: 500px;
  max-height: 500px;
  height: auto;
  cursor: pointer;
  &:hover {
    filter: brightness(1.6);
  }
`

const Modal = styled.div<{isOpen: boolean}>`
  display: ${props => props.isOpen ? 'flex' : 'none'};
  position: fixed; /* Stay in place */
  z-index: 2; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(0,0,0,0.8);
`

const CloseButton = styled.p`
  position: absolute;
  top: 0;
  right: 15px;
  cursor: pointer;
  font-size: 64px;
  font-weight: bold;
  margin: 0;
`

const ModalImage = styled.img`
  margin: auto;
  max-width: 80%;
  max-height: 80%;
`

function ImageModal (props: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const close = (e: {key: string}) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])

  return (
    <div className={props.className}>
      <Thumbnail src={props.src} alt={props.alt} onClick={() => setIsOpen(true)}/>
      <Modal isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <CloseButton onClick={() => setIsOpen(false)}>&times;</CloseButton>
        <ModalImage src={props.src} alt={props.alt} onClick={e => e.stopPropagation()}/>
      </Modal>
    </div>
  )
}

export default ImageModal
