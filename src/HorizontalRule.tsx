import styled from 'styled-components'

interface HorizontalRuleProps {
  text: string;
  fontSize: number;
  lineHeight: number;
}

function HorizontalRule (props: HorizontalRuleProps) {
  const Div = styled.div`
    display: flex;
    flex-direction: row;
    flex-flow: row;
    width: 100%;
    > * {
      &:first-child {
        margin-right: 10px;
      }
      &:last-child {
        margin-left: 10px;
      }
    }
  `

  const HR = styled.hr`
    margin-top: ${(props.fontSize + props.lineHeight) / 2}px;
    width: 100%;
    border: 0;
    height: ${props.lineHeight}px;
    background: #666;
  `

  const Label = styled.div`
    font-size: ${props.fontSize}px;
    align-self: center;
    flex-grow: 2;
    white-space: nowrap;
  `

  return (
    <Div>
      <HR/>
      <Label>
        {props.text}
      </Label>
      <HR/>
    </Div>
  )
}

export default HorizontalRule
