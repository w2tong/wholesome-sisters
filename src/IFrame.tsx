import { useState } from 'react'
import styled, { keyframes } from 'styled-components'

interface IFrameProps {
  url: string,
  width: number,
  height: number
}

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const Spinner = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  animation: ${spinAnimation} 2s linear infinite; 
`

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

function IFrame (props: IFrameProps) {
  const [loading, toggleSpinner] = useState(true)
  const min = Math.min(props.width, props.height) / 2

  return (
    <div>
      {loading ? <SpinnerContainer style={{ width: `${props.width}px`, height: `${props.height}px` }}><Spinner style={{ width: `${min}px`, height: `${min}px` }}/></SpinnerContainer> : null}
      <iframe src={props.url} width={`${props.width}px`} height={`${props.height}px`} onLoad={() => toggleSpinner(false)} frameBorder="0"/>
    </div>
  )
}

export default IFrame
