import styled from 'styled-components'

interface HorizontalRuleProps {
  text: string;
  fontSize: number;
  lineHeight: number;
}

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

const HR = styled.hr<HorizontalRuleProps>`
    margin-top: ${props => (props.fontSize + props.lineHeight) / 2}px;
    width: 100%;
    border: 0;
    height: ${props => props.lineHeight}px;
    background: #666;
  `

const Label = styled.div<HorizontalRuleProps>`
    font-size: ${props => props.fontSize}px;
    align-self: center;
    flex-grow: 2;
    white-space: nowrap;
  `

function HorizontalRule (props: HorizontalRuleProps) {
  return (
    <Div>
      <HR {...props}/>
      <Label {...props}>
        {props.text}
      </Label>
      <HR {...props}/>
    </Div>
  )
}

export default HorizontalRule
